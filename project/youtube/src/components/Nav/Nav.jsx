import React from "react";
import YoutubeLogo from "./images/YouTube-Logo.wine.png";
import "./Nav.css";

const Nav = props => {
  return (
    <div className="menu">
      <nav className="main-nav">
          <img src="https://iili.io/HcdyolI.png" alt="HcdyolI.png" className="logoimg" border="0" />
      
        <i className="fa fa-bell paddingclass"></i>
        <i className="fa fa-video-camera paddingclass"></i>
  
      
          
        {props.children}
        <a href="/">
          <img src={YoutubeLogo} alt="Youtube Logo" className="youtube-logo" />
        </a>
        <i className="fa fa-bars"></i>
      </nav>
    </div>
  );
};

export default Nav;

