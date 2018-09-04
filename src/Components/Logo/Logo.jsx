import React from 'react';
import {NavLink} from 'react-router-dom'
import Logotype from './Logo.png'
import './Logo.css';

const Logo = () => {
    return (
        <NavLink to='/' className='logo'>
            <img src={Logotype} alt="Logo"/>
        </NavLink>
    );
};

export default Logo;