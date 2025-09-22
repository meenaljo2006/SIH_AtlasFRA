import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './LoginPage.css';
import { useAuth } from '../Context/AuthContext';


// Import your image assets
import forestBg from '../assets/forestBG.png'; 
import motaLogo from '../assets/mota.webp'; 
import digitalIndiaLogo from '../assets/digitalIndia.png';
import myGovLogo from '../assets/myGov.png';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', { username, password });
    login(username);
    navigate('/atlasView'); 
  };

  return (
    <div className="login-container">
      <div className="login-left-panel">
        <div className="clip-wrapper">
            <img src={forestBg} alt="Forest Background" className="background-image" />
        </div>

        <div className="left-panel-bottom-text">
            <h2>FRA ATLAS</h2>
            <p>Forest Rights Act Digital Repository & Decision Support System</p>
        </div>
      </div>
      
      <div className="login-right-panel">
        <div className="login-form-container">
            <div className="form-header">
                <img src={motaLogo} alt="Ministry of Tribal Affairs Logo" className="header-logo1"/>
                <img src={digitalIndiaLogo} alt="Digital India Logo" className='header-logo2'/>
                <img src={myGovLogo} alt="MyGov Logo" className='header-logo3'/>
            </div>

            <div className="header-divider"></div> 
            
            <h2>FRA ATLAS</h2>
            <h3>Government Records Management System</h3>

            <form onSubmit={handleLogin}>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username"
                        type="text" 
                        value={username}
                        placeholder='Enter your username'
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        id="password"
                        type="password" 
                        value={password}
                        placeholder='Enter your password'
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
                <button type="submit" className="login-button">LOGIN TO ATLAS</button> {/* Updated button text */}
            </form>

            <div className="login-footer">
                <a href="#">Help Desk</a>
                <span>·</span>
                <a href="#">Contact Support</a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;