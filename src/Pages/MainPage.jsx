import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandingNavbar from '../Components/LandingNavbar';
import StyledSeperator from '../Components/StyledSeperator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCircleInfo, faGears, faIdBadge} from '@fortawesome/free-solid-svg-icons';
import Roadmap from '../Components/Roadmap';
import Footer from "../Components/Footer";
import footerImage from "../assets/footer.jpg";
import roadmap from "../assets/Secure Access.png";

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
                <h1>Where Digital Mapping Meets Ground Reality !</h1>
                <div className="highlight">
                    <p>TRACK</p>
                    <p>MAP</p>
                    <p>DECIDE</p>
                </div>

            </div>
        </div>

        <StyledSeperator logoText="FRA ATLAS" mainText="WEB GIS PORTAL"/>
        <img src={roadmap} alt="roadmap"/>
        {/* <Roadmap /> */}
        
        <div className="app-footer">
            {/* Main Footer Content Grid */}
            <div className="footer-content-grid">
                
                {/* Column 1: Quick Links */}
                <div className="footer-col">
                    <h4 className="footer-heading"><u>Quick Links</u></h4>
                    <ul className="footer-list">
                        <li><a href="#home" className="footer-link">Home</a></li>
                        <li><a href="#about" className="footer-link">About Us</a></li>
                        <li><a href="#features" className="footer-link">Features</a></li>
                        <li><a href="/login" className="footer-link footer-login">Officer Login</a></li>
                    </ul>
                </div>

                {/* Column 2: Legal & Policy */}
                <div className="footer-col">
                    <h4 className="footer-heading"><u>Legal & Policy</u></h4>
                    <ul className="footer-list">
                        <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
                        <li><a href="/terms" className="footer-link">Terms & Disclaimer</a></li>
                        <li><a href="/accessibility" className="footer-link">Accessibility Statement</a></li>
                        <li><a href="/hyperlinking" className="footer-link">Hyperlinking Policy</a></li>
                    </ul>
                </div>

                {/* Column 3: Contact Details */}
                <div className="footer-col footer-contact-col">
                    <h4 className="footer-heading"><u>Contact Us</u></h4>
                    <p className="contact-detail"></p>
                    <p className="contact-detail">Email: <a href="mailto:contact@fraatlas.gov.in" className="footer-link">contact@fraatlas.gov.in</a></p>
                    <p className="contact-detail">Phone: +91 11 XXXX XXXX</p>
                </div>

                <div className="footer-col external-link-group">
                        <h4 className="footer-heading"><u>External Link</u></h4>
                        <a href="https://tribal.nic.in/" target="_blank" rel="noopener noreferrer" className="footer-link block">MoTA Official Site</a>
                    </div>
            </div>

            {/* Bottom Section (Copyright and Technical Info) */}
            <div className="footer-bottom-bar">
                <p className="footer-copyright">
                    © {new Date().getFullYear()} Ministry of Tribal Affairs, Government of India. All Rights Reserved.
                </p>
                <div className="footer-meta">
                    <span>Last Updated: 03 Oct 2025</span>
{/*                     <span className="meta-separator">Visitors: 123,456</span> */}
                </div>
            </div>
            
        </div>

        <div className="footerImage">
            <img src={footerImage} alt='Footer Image'/>
        </div>

        {/* <Footer/> */}
    </>
  );
};

export default MainPage;