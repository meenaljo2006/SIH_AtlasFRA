import React from 'react';
import './StyledSeperator.css';

// We can pass text and a logo as props to make it flexible
const StyledSeparator = ({ logoText, mainText }) => {
  return (
    <div className="fancy-separator-wrapper">
      <div className="line left"></div>
      <div className="pill-button">
        <div className="logo-container">
          {/* Using text as a logo as per the image */}
          {logoText} 
        </div>
        <div className="divider"></div>
        <span className="portal-text">{mainText}</span>
      </div>
      <div className="line right"></div>
    </div>
  );
};

export default StyledSeparator;