import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingNavbar from '../Components/LandingNavbar';
import StyledSeperator from '../Components/StyledSeperator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleInfo, faGears, faIdBadge} from '@fortawesome/free-solid-svg-icons';
import laptopImage from '../assets/laptop.png';

import "./MainPage.css"

const MainPage = () => {
    
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <>
        <LandingNavbar/>
        <div className='hero'>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="#home"><FontAwesomeIcon icon={faHouse}/> Home</a></li>
                    <li><a href="#about"><FontAwesomeIcon icon={faCircleInfo}/> About</a></li>
                    <li><a href="#features"><FontAwesomeIcon icon={faGears}/> Features</a></li>
                    <li><a href="#contact"><FontAwesomeIcon icon={faIdBadge}/> Helpdesk</a></li>
                </ul>

                <button onClick={handleLogin} className='loginPill'>Officer Login</button>
            </nav>
        </div>
        <div className="middleSection">
            <div className="hero-text-column">
                <h1>FRA Atlas & WebGIS Portal</h1>
                <div className="highlight">
                    <p>TRACK</p>

                    <p>MAP</p>
                    <p>DECIDE</p>
                </div>

            </div>
        </div>

        <StyledSeperator logoText="FRA ATLAS" mainText="WEB GIS PORTAL"/>

    </>
  );
};

export default MainPage;