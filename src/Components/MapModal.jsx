// MapModal.js (New File)

import React from 'react';
import MapDrawingContent from './MapDrawingContent'; 
import './MapModal.css'; // New CSS file for specific map modal styling



const MapModal = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    const handleSave = () => {
        alert("Boundaries Recorded!");
        onClose(); 
    };

    return (
        <div className="map-modal-overlay" onClick={onClose}>
            <div className="map-modal-content" onClick={(e) => e.stopPropagation()}>
                
                {/* Header: Simplified or removed as per request, just Close button */}
                <div className="map-modal-header">
                    <h2>Draw Boundaries</h2>
                    <button className="map-close-button" onClick={onClose}>
                        &times;
                    </button>
                </div>

                {/* Map and Data Content */}
                <div className="map-modal-body">
                    <MapDrawingContent height="50vh" /> {/* Map takes 50% of the viewport height */}
                </div>

                {/* Footer with action buttons */}
                <div className="map-modal-footer">
                    <button className="btn btn-cancel" onClick={onClose}>Cancel Drawing</button>
                    <button className="btn btn-save-boundary" onClick={handleSave}>Save Boundaries</button>
                </div>
            </div>
        </div>
    );
};

export default MapModal;