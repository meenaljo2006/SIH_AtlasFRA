// Sidebar.js

import './Sidebar.css';
import React, { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

// ⭐ MODIFICATION: Component now accepts a 'data' prop (must be passed from AtlasView.js)
const Sidebar = ({ onSearchSubmit }) => { 
  
  // Create state for Asset Layers visibility
  const [isAssetLayerOpen, setIsAssetLayerOpen] = useState(true);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            // Search term ko AtlasView ko wapas bhej dein
            onSearchSubmit(input.trim()); 
        }
    };

  // Function to toggle the asset layer section
  const toggleAssetLayer = () => {
    setIsAssetLayerOpen(!isAssetLayerOpen);
  };

    // --- NEW/MODIFIED: Information Panel Rendering Logic ---
    const renderInformationPanelContent = () => {
        // // State 1: No data provided (Initial/Search Cleared) -> Show "Click on map to view..."
        // if (!data || !data.villageName) { // Check if data is null or essential field is missing
        //     return (
        //         <div className="info-content no-data-message">
        //             Click on any village or claim on the map to view detailed information here.
        //         </div>
        //     );
        // }

        // // State 2: Basic data (Village Name only, e.g., Kanbargaon Village)
        // // Check if full stats are missing (Population is a good indicator)
        // if (!data.population) {
        //     return (
        //         <div className="info-content village-only">
        //             {data.villageName}
        //         </div>
        //     );
        // }
        
        // State 3: Full detailed data (Show all stats and the "Generate Report" button)
        return (
          <>
            <div className="info-content full-data">
                {/* Display Village Name (Can be placed here if needed, or assumed from context) */}
                <h4 style={{margin: '0 15px 15px', fontSize: '18px', fontWeight: '600'}}><u>Nellore Village</u></h4>
                
                {/* Stats Area */}
                <div className="stats-area">
                    {/* Data should be provided as numbers, we use .toLocaleString() for commas */}
                    <p>Claim ID: <span className="stat-value">FRA-Telangana-0009</span></p>
                    <p>Claimant Name: <span className="stat-value">Munna Gond</span></p>
                    <p>Claim Status: <span className="stat-value approved">Approved</span></p>
                    <p>Area: <span className="stat-value pending">12.15 hectares</span></p>
                </div>
                
                {/* Button Area */}
                <button className="report-button">
                    Generate Development Report
                </button>

                
            </div>

            <div className="info-content no-data-message">
              Click on any village or claim on the map to view detailed information here.
            </div>
          </>
        );
    };
    // --- END: Information Panel Rendering Logic ---
  
  // Placeholder for the dropdown icon based on state
  const DropdownIcon = isAssetLayerOpen ? '▲' : '▼';

  return (
    <aside className="sidebar">
      
      <div className="sidebar-content-wrapper"> 
        
        {/* Search Section */}
        <div className="sidebar-section search-section">
          <h3>Search Villages or Claims</h3>
          <form onSubmit={handleSubmit} className="custom-search-form">
                    <input
                        type="text"
                        placeholder="Search village/claim..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="glass"
                    />
                    <button type="submit" className="search-button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </form>
        </div>
        
        {/* --- Map Layers Section --- */}
        <div className="sidebar-section layer-section">
          <h3>Map Layers</h3>
          
          {/* Layer Item 1: Village Boundaries */}
          <div className="layer-item">
            <span>Village Boundaries</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
          </div>

          {/* Layer Item 2: FRA Claims */}
          <div className="layer-item">
            <span>FRA Claims</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
          </div>
        </div>

        {/* --- Asset Layers Section --- */}
        <div className="sidebar-section asset-section">
          
          {/* 👈 1. Remove onClick from section-header */}
          <div className="section-header"> 
            <h3>Asset Layers</h3>
            {/* 👈 2. Add the toggle logic to the checkbox's onChange handler */}
            <label className="switch main-toggle"> 
              <input 
                type="checkbox" 
                checked={isAssetLayerOpen} 
                onChange={toggleAssetLayer} // ⭐ Function is now here
              />
              <span className="slider round"></span>
            </label>
            {/* Display the icon (optional, based on your design) */}
            
          </div>

          {/* Conditional Rendering: Only render the asset list if isAssetLayerOpen is true */}
          {isAssetLayerOpen && (
            <div className="asset-list">
              {/* Asset Item 1: Water Bodies */}
              <div className="layer-item">
                <span>💧 Water Bodies</span>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
              
              {/* Asset Item 2: Forest Cover */}
              <div className="layer-item">
                <span>🌲 Forest Cover</span>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
              
              {/* Asset Item 3: Farmland (Disabled example) */}
              <div className="layer-item ">
                <span>🌾 Farmland</span>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          )}
        </div>
        
        {/* --- Information Panel Section --- */}
        {/* ⭐ MODIFIED SECTION: Using the render function */}
        <div className="sidebar-section info-panel" style={{borderBottom: 'none'}}> 
          <h3>Information Panel</h3>
            {renderInformationPanelContent()}
        </div>
      
      </div> {/* END .sidebar-content-wrapper */}
      
      {/* --- Help Center (Fixed at Bottom) --- */}
      <div className="help-center-footer">
        <button className="help-button">
           Help Center ❓
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;