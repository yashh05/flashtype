import React from 'react';
import logo from "C:/Users/lenovo/Desktop/projects/flashtype/src/assets/logo.png";

import "./nav.css";
const Nav=()=>{
    return(<div className='nav-container'>
        <div className="nav-left">
            <img className='flash-logo' src={logo} alt="logo"></img>
            <p className='flash-logo-text'>FlashType</p>
        </div>
    </div>)
    }

export default Nav;