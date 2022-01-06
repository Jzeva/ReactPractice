import React from 'react';

class TemperatureInput extends React.Component {
    constructor(props){
        super(props);
        // this.handleTheHeat = this.handleTheHeat.bind(this);
    }
    

    handleTheHeatChild=(e)=>{
        this.props.handleTheHeat(e.target.value);
        // console.log(this.props.onTemperatureChange);
    }
    render(){
        return (
            <div>
                <label htmlFor="tempInput">Temperature Input</label>
                <input name='tempInput' type='text'  onChange={this.handleTheHeatChild}/>
            </div>
        )
        
    }
}

export default TemperatureInput;