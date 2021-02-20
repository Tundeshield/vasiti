import React from 'react';
import "./Topbar.css";
import Logo from "./Vasiti-Logo.png";

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbar__logo">
				<img src={Logo} alt="" />
			</div>
			<div className="topbar__menu">
				<li>About Us</li>
				<li>Stories</li>
				<li>Contact</li>
				<li>Login</li>
				<button>Sign Up</button>
			</div>
        </div>
    )
}

export default Topbar
