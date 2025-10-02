// AtlasView.js

import React, { useRef, useState } from 'react'; // <-- useState imported
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Sidebar from '../Components/Sidebar';
import MapSearchHandler from '../Components/MapSearchHandler';
import UploadModal from '../Components/UploadModal'; // <-- New Modal imported
import './AtlasView.css';

const AtlasView = () => {
    const searchInputRef = useRef(null);
    // ⭐ NEW STATE: to control modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false); 

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="atlas-container">
            {/* You need to pass openModal function to your Header/Navigation component 
                where the "Upload Document" button lives. 
                Assuming it's in a separate Header component: 
                <Header onUploadClick={openModal} /> 
            */}

            <Sidebar searchInputRef={searchInputRef} />
            <div className="map-area">
                <MapContainer center={[20.5937, 78.9629]} zoom={5} scrollWheelZoom className="leaflet-map">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <MapSearchHandler mapRef={searchInputRef} />
                </MapContainer>
            </div>
            
            {/* ⭐ NEW: Render the Modal component */}
            <UploadModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default AtlasView;