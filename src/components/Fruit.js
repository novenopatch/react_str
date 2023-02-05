import React from 'react';
const Fruit = ({fruit,onClick}) => {

    return( 
    <li key={fruit.id} className="my-3">
        {fruit.nom} <button className='btn btn-secondary btn-sm' onClick={onClick}>Delete</button>
    </li>)
};
export default Fruit;