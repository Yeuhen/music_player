import React from 'react';
import {NavLink} from 'react-router-dom';
import './index.module.css';

const Logo = () => {
    return (
        <NavLink to='/' className = "logo" >
            <h1 className = "title" >MusicAV</h1>
        </NavLink>
    );
};

export default Logo;