import React, { useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Sidebar from '../Components/Sidebar';
import MapSearchHandler from '../Components/MapSearchHandler';
import './AtlasView.css';

const AtlasView = () => {
  const searchInputRef = useRef(null);

  return (
    <div className="atlas-container">
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
    </div>
  );
};

export default AtlasView;
