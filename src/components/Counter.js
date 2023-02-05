import React, { useState } from 'react';
import Navigation from "./Navigation";

const Counter = () => {
    const [compteur,setCompter] = useState(0);
    const handeClick =() =>{
      setCompter(compteur+1)
    }
    return (
      <div >
        <Navigation/>
        <div className='container text-center'>
        <h1 className='text-center'>Compteur :{compteur}</h1>
         <button className='btn btn-primary'
         onClick={handeClick}
         >Incremente</button>
        </div>
        
      </div>
    );
};

export default Counter;