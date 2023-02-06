import React from 'react';

const TemperatureInput  =({temperature,scale,scaleName,handleChange}) =>{
    const name = "input"+ scale;
    return(
        <div className='form-group'>
        <label htmlFor={name} >Enter temperature in{scaleName}</label>

        <input
        className='form-control my-3'
          id={name}
          value={temperature}
          type="text"
          placeholder="Add temperature"
          onChange={handleChange}
        />
        </div>
    )
}
export default TemperatureInput;