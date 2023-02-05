import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
    return (
        <div className='nav navigation'>
            <ul>
                <NavLink to="/" className={(nav)=>( nav.isActive ? "nav-active":"")}>
                    <li>Home</li>
                </NavLink>
                <NavLink to="/examples" className={(nav)=>( nav.isActive ? "nav-active":"")}>
                    <li>Examples</li>
                </NavLink>
                <NavLink to="/about" className={(nav)=>( nav.isActive ? "nav-active":"")}>
                    <li>About</li>
                </NavLink>
                
            </ul>
        </div>
    );
};

export default Navigation;