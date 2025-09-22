import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingNavbar.css';
import logo from "../../public/logo.png";
import motaLogo from '../assets/mota.webp'; 
import digitalIndiaLogo from '../assets/digitalIndia.png';
import myGovLogo from '../assets/myGov.png';

function LandingNavbar() {

    const navigate = useNavigate();
    
    const handleLogin = () => {
        navigate('/login');
    };

  return (
    <header className="app-header">
      <div className="header-left">
        <img src={logo} alt="FRA Atlas Logo" className="app-logo" />
        <div className="header-title-main">
          <h1>FRA Atlas</h1>
          <p>Forest Rights Act - Digital Repository & Decision Support System</p>
        </div>
      </div>

      <div className="header-right">
        <div className="ministry-logos">
            <img src={motaLogo} alt="Ministry of Tribal Affairs Logo"/>
            <img src={digitalIndiaLogo} alt="Digital India Logo"/>
            <img src={myGovLogo} alt="MyGov Logo"/>

        </div>
      </div>
    </header>
  );
}

export default LandingNavbar;