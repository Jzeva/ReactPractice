import React from 'react';
import styled from 'styled-components';
import Logo from '../../app/Header/NavigationBar/Logo';
import Form from '../../hoc/Form';
import Input from '../../hoc/Input';
import Button from '../../hoc/Button'
import {Link} from 'react-router-dom'
import emailIcon from '../../assests/img/email.png'
import passwordIcon from '../../assests/img/lock.png'
import validate from '../../hoc/Form/validate';
import InputErrorMsg from '../../hoc/InputErrorMsg'
import FormWrapper from '../../hoc/FormWrapper'
import ServerMsg  from '../../hoc/ServerMsg'

const Container = styled.div`
  background-color: white;
  text-align: center;
  display: flex;
  line-height: 10px;
`;

const MainBox = styled.div`
    padding: 1.5rem 3rem 0px;
    border:1;
    margin: auto;
    margin-top:100px;
    width:500px;
    height:400px;
    text-align: center;
    position: relative;
    border: 2px solid #e5e8ec;
    display: flex;
    flex-direction: column;
    align-items: center;
   }
 
`;

const LogoBox = styled.div`
  margin-left: 40px;
  text-align: center;
`;

const CreateTitle = styled.div`
  margin-top: 10px;
  font-size: 1.2rem;
  color: rgb(51, 63, 72);
  text-align: center;
  line-height: 1.75rem;
`;

const LinktoLogin = styled.div`
    display: flex;
    margin-top:20px;
`;

class JoinPage extends React.Component {
  constructor(props){
    super(props);
    this.state ={
       passwordVisable: false,
       data: {
        email: {
          value: '',
          blurred: false,
        },
        password: {
          value: '',
          blurred: false,
        },
      },
      isFormSubmit: false,
      error: null,
      isLoading: false,
    }
    this.handleDataChange = this.handleDataChange.bind(this);
    this.handleIsFormSubmitChange = this.handleIsFormSubmitChange.bind(this);
    this.handleBlurredChange = this.handleBlurredChange.bind(this);
  }

  handleDataChange(event) {
    const { name, value } = event.target;
    this.setData(name, {
      value,
    });
  }

  handleIsFormSubmitChange(newIsFormSubmit) {
    this.setState({
      isFormSubmit: newIsFormSubmit,
    });
  }

  handleBlurredChange(event) {
    const { name } = event.target;
    this.setData(name, {
      blurred: true,
    });
  }

  setData(name, newData) {
    this.setState((prevState) => ({
      data: {
        ...prevState.data,
        [name]: {
          ...prevState.data[name],
          ...newData,
        },
      },
    }));
  }

  getErrorMessage(error, name) {
    const { data, isFormSubmit } = this.state;
    const showInputError = data[name].blurred;
    return (showInputError || isFormSubmit) && error[name];
  }

  getError() {
    const { data } = this.state;
    const error = {};
    Object.keys(data).forEach((name) => {
      const errorOfName = validate(name, data);
      if (!errorOfName) {
        return;
      }
      error[name] = errorOfName;
    });
    return error;
  }

 render(){
  const { data, error: authError, isLoading } = this.state;
  const error = this.getError(data);
   return(
     <Container >
     <MainBox>
      <LogoBox>
       <Logo/>
      </LogoBox>
      <CreateTitle>Create Account</CreateTitle>
      <FormWrapper
          onSubmit={(e) => {
            e.preventDefault();
            this.handleIsFormSubmitChange(true);
          }}
         >
      <Form  htmlFor="email">
              <Input
                size="400px"
                name="email"
                id="email"
                type="email"
                value={data.email.value}
                defaultText="Email address"
                iconleft ={emailIcon}
                onChange={this.handleDataChange}
                onBlur={this.handleBlurredChange}
                error={this.getErrorMessage(error, 'email')}
              />
      </Form>
      <InputErrorMsg class="ErrorMsg">{this.getErrorMessage(error, 'email')}</InputErrorMsg>
      <br/>
      <br/>
      <Form  htmlFor="password">
              <Input
                size="400px"
                name="password"
                id="password"
                type="string"
                value={data.password.value}
                defaultText="Password"
                iconleft ={passwordIcon}
                onChange={this.handleDataChange}
                onBlur={this.handleBlurredChange}
                hidden = "true"
              />
      </Form>
      </FormWrapper>
      <br/>
      <br/>
      <Button primary size="400px">Create Account</Button>
      {authError && <ServerMsg status="error">Login failed, Please try again.</ServerMsg>}
      {isLoading && <ServerMsg status="success">Login Success!</ServerMsg>}
      <LinktoLogin>
      <div>Already have an account?&nbsp;&nbsp;</div>
      <Link to="/login">
        Sign in
      </Link>
      </LinktoLogin>
    </MainBox>
    </Container>

   )
 }
}

export default JoinPage;
