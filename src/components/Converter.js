import React , { useState } from 'react';
import Navigation from "./Navigation";
import TemperatureInput from './TemperatureInput';
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
function BoilingVerdict({celsius}){
    if(celsius>=100){
        return <div className='alert alert-success'>L'eau bout</div>
    }
    return <div className='alert alert-info'>L'eau ne bout pas</div>
}
function Colum2({left,right}){
    return <div  className='row'>
        <div className='col-md-6'>{left}</div>
        <div className='col-md-6'>{right}</div>
    </div>
}




const Converter =() =>{
    const [scale, setScale] = useState('c');
    const [temperature, setTemperature] = useState('20');
    const handleFahrenheitChange=(event)=>{
        setScale('f')
        setTemperature(event.target.value)
        
     }
     const  handleCelcusChange=(event)=>{
        setScale('c')
        setTemperature(event.target.value)
     }
    const celsius = scale==='c'? temperature:  tryConvert(temperature,convertToCelsius) ;
    const fahrenheit = scale==='f'? temperature: tryConvert(temperature,convertToFahrenheit) ;
    return(<div>
            <Navigation/>
                <div className='container'>
                    <h1>Bienvenue dans Converter</h1>
                    <Colum2
                    left={<TemperatureInput scale="c" scaleName={scaleNames["f"]} temperature={celsius} handleChange={handleCelcusChange}/>}
                    right={<TemperatureInput scale="f" scaleName={scaleNames["f"]} temperature={fahrenheit} handleChange={handleFahrenheitChange}/>}
                    />
                    <div>
                        <BoilingVerdict celsius={parseFloat(celsius)}/>
                    </div>
                </div>
    </div>)
}

export default Converter;