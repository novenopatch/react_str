import React from 'react';
import Countries from "../components/Countries";
import Logo from "../components/Logo";
import Navigation from "./Navigation";
import '../styles/index.scss';
const ListCountry = () => {
    return (
        <div>
            <Navigation/>
         <Logo/>
         <Countries/>   
        </div>
    );
};

export default ListCountry;