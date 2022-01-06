import React from 'react';

class TemperatureShow extends React.Component{
    constructor(){
        super();
    }

    render(){
        const temperature = this.props.temperaturea;
            if(isNaN(temperature)||temperature===''||temperature===null){
                return (<p>Please input a number</p>)
            }else if (temperature>30){
                return(<p>It is hot</p>);
            }else{
                return(<p>It is cold</p>)
            }
    }
}

export default TemperatureShow;