import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet's CSS
import Sidebar from '../Components/Sidebar'; // We'll create this component
import './AtlasView.css'; // We'll create this CSS file

const AtlasView = () => {
  // Use state to manage the visibility of the information panel
  const [infoPanelData, setInfoPanelData] = useState(null);

  // You can pass props or state down to the map and sidebar
  const handleMapClick = (e) => {
    // This function can be used to update the infoPanelData
    console.log(e.latlng);
  };

  return (
    <div className="atlas-container">
      <Sidebar />
      <div className="map-area">
        <MapContainer
          center={[20.5937, 78.9629]} // Center of India
          zoom={5}
          scrollWheelZoom={true}
          className="leaflet-map"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Add more layers and components here later */}
        </MapContainer>
      </div>
    </div>
  );
};

export default AtlasView;