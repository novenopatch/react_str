import React from 'react';

import Navigation from '../components/Navigation';
import { NavLink } from 'react-router-dom';
const Examples = () => {
    const compos = [
        {nom:"counter",description:""},
        {nom:"list",description:""},
        {nom:"countries",description:""},
    ]

    return (
        <div>
            <Navigation/>
            <div className='container'>
                <ul>
                    {
                        compos.map(
                            (compo)=>(
                                <NavLink to={"/"+compo.nom} className={(nav)=>( nav.isActive ? "nav-active":"")} >
                                <li>{compo.nom}</li>
                                </NavLink>
                        ))
                    }
                </ul>
            </div>
           
        </div>
    );
};

export default Examples;