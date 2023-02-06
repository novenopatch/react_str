import React from 'react';
import Navigation from './Navigation';

const scaleNames ={
    c:"Celcus",
    f:"Fahrenheit"
}
function convertToFahrenheit(celsius){
    if (isNaN(celsius)) {
        return 'La température doit être un nombre';
    }
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
function convertToCelsius(fahrenheit){
    //if (typeof fahrenheit !== 'number') return 'La température doit être un nombre';
    if (isNaN(fahrenheit)) {
        return 'La température doit être un nombre';
    }
    return (fahrenheit - 32) * 5 / 9;
}
function  tryConvert(temperature,convert){
    const value = parseFloat(temperature)
    if(Number.isNaN(value)){
        return "";
    }
   return (Math.round(convert(value)*100) / 100).toString()

}
function Colum2({left,right}){
    return <div  className='row'>
        <div className='col-md-6'>{left}</div>
        <div className='col-md-6'>{right}</div>
    </div>
}
class TemperatureInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
       // this.setState({temperature:event.target.value})
       this.props.onTemperatureChange(event.target.value)
    }
    render(){
        const name = "input"+ this.props.scale;
        const scaleName = scaleNames[this.props.scale];
        const {temperature} = this.props;
        return(
            <div className='form-group'>
            <label htmlFor={name} >Enter temperature in{scaleName}</label>

            <input
            className='form-control my-3'
              id={name}
              value={temperature}
              type="text"
              placeholder="Add temperature"
              onChange={this.handleChange}
            />
            </div>
        );
       
    }
}
function BoilingVerdict({celsius}){
    if(celsius>=100){
        return <div className='alert alert-success'>L'eau bout</div>
    }
    return <div className='alert alert-info'>L'eau ne bout pas</div>
}
class DegreeConverter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            scale: 'c',
            temperature:20,
          }
          this.handleCelcusChange = this.handleCelcusChange.bind(this)
          this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)

    }
    
   
    handleFahrenheitChange(temperature){
        this.setState({
            scale:'f',
            temperature:temperature,
            
        })
     }
     handleCelcusChange(temperature){
        this.setState({
            scale:'c',
            temperature:temperature,
            
        })
     }
     
    render() {
        const {temperature,scale} = this.state
        const celsius = scale==='c'? temperature:  tryConvert(temperature,convertToCelsius) ;
        const fahrenheit = scale==='f'? temperature: tryConvert(temperature,convertToFahrenheit) ;
        return (
            <div>
                <Navigation/>
                <div className='container'>
                    <h1>Bienvenue dans Converter</h1>
                    <Colum2
                    left={<TemperatureInput scale="c" temperature={celsius} onTemperatureChange={this.handleCelcusChange}/>}
                    right={<TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>}
                    />
                    <div>
                        <BoilingVerdict celsius={parseFloat(celsius)}/>
                    </div>
                </div>
            </div>
       
        );
      }
}
export default DegreeConverter;