import React from 'react';
import './Footer.css'; // We'll create this CSS file next

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <span className="divider">|</span>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
        <p>&copy; {new Date().getFullYear()} FRA Atlas. All rights reserved.</p>
       
      </div>
    </footer>
  );
};

export default Footer;