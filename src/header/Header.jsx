import React from "react";
import logo from '../assets/logo.png';
import '../header/Header.css'
import search from '../assets/search.png';
import notification from '../assets/notification.png';

const Headerup = () => {
    return <div>
            <div className="header">
            <img src={logo} alt="logo" className="logo" />
            <div className="title">Help Desk</div>
            <div className="find">
            <img src={search} alt="search" className="poisk" />
            <input type="input" placeholder='Search' id="search" name="q" />
            <img src={notification} alt="notification" className="notification" />
            </div>
            </div>
            
            
        
    </div>
}

export default Headerup;