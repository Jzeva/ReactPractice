import React from 'react';

import TemperatureInput from './temperatureInput/TemperatureInput';
import TemperatureShow from './temperatureShow/TemperatureShow';

class TemperatureContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temperature:'',
        }
        // this.handleTheHeat = this.handleTheHeat.bind(this);
    }
    
   handleTheHeat=(temperature)=>{
        this.setState({
            temperature:temperature
        })
    }

    render(){
        let temperature = this.state.temperature
        return(
        <div>
            <TemperatureInput temperature={temperature} handleTheHeat={this.handleTheHeat}/>
            <TemperatureShow temperaturea={temperature}/>
        </div>
            )
        }   
}

export default TemperatureContainer;