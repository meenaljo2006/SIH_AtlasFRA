import React, { useRef, useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Sidebar from '../Components/Sidebar';
import MapSearchHandler from '../Components/MapSearchHandler';
import UploadModal from '../Components/UploadModal'; 
import './AtlasView.css';
import { toFeatureCollection } from "../shapeLoader"; 
import mockData from "../mockData.json"; 

// ⭐ Custom Pin Icon
const pinIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [20,20],
    iconAnchor: [12, 25],
});

const AtlasView = () => {
    const searchInputRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [geoJsonData, setGeoJsonData] = useState(null); 

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        setGeoJsonData(toFeatureCollection(mockData.shapes)); 
    }, []);

    // ⭐ Popup content for each feature
    const renderPopupContent = (properties) => (
        <div>
            {properties.claimId && <>Claim ID: <b>{properties.claimId}</b><br/></>}
            {properties.claimant && <>Claimant Name: <b>{properties.claimant}</b><br/></>}
            {properties.fatherSpouseName && <>Father/Spouse Name: <b>{properties.fatherSpouseName}</b><br/></>}
            {properties.state && <>State: <b>{properties.state}</b><br/></>}
            {properties.district && <>District: <b>{properties.district}</b><br/></>}
            {properties.village && <>Village: <b>{properties.village}</b><br/></>}
            {properties.gramPanchayat && <>Gram Panchayat: <b>{properties.gramPanchayat}</b><br/></>}
            {properties.claimType && <>Claim Type: <b>{properties.claimType}</b><br/></>}
            {properties.claimStatus && <>Claim Status: <b>{properties.claimStatus}</b><br/></>}
            {properties.SubmissionDate && <>Submission Date: <b>{properties.SubmissionDate}</b><br/></>}
            
            
            
        </div>
    );

    const onEachFeature = (feature, layer) => {
        if (feature.properties) {
            const p = feature.properties;
            layer.bindPopup(`
                ${p.claimId ? `Claim ID: <b>${p.claimId}</b><br/>` : ''}
                ${p.claimant ? `Claimant Name: <b>${p.claimant}</b><br/>` : ''}
                ${p.fatherSpouseName ? `Father/Spouse Name: <b>${p.fatherSpouseName}</b><br/>` : ''}
                ${p.state ? `State: <b>${p.state}</b><br/>` : ''}
                ${p.district ? `District: <b>${p.district}</b><br/>` : ''}
                ${p.village ? `Village: <b>${p.village}</b><br/>` : ''}
                ${p.gramPanchayat ? `Gram Panchayat: <b>${p.gramPanchayat}</b><br/>` : ''}
                ${p.claimType ? `Claim Type: <b>${p.claimType}</b><br/>` : ''}
                ${p.claimStatus ? `Claim Status: <b>${p.claimStatus}</b><br/>` : ''}
                ${p.SubmissionDate ? `Submission Date: <b>${p.SubmissionDate}</b><br/>` : ''}
            `);
        }
    };

    // ⭐ Default GeoJSON layer style
    const layerStyle = () => ({
        color: '#595455ba', 
        weight: 2,
        fillColor: '#4a3c3d59',
        fillOpacity: 0.3
    });

    return (
        <div className="atlas-container">
            <Sidebar searchInputRef={searchInputRef} />
            <div className="map-area">
                <MapContainer 
                    center={[20.5937, 78.9629]} 
                    zoom={5} 
                    scrollWheelZoom 
                    className="leaflet-map"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {/* ⭐ GeoJSON Layer */}
                    {geoJsonData && (
                        <GeoJSON 
                            data={geoJsonData} 
                            style={layerStyle} 
        
                            onEachFeature={(feature, layer) => {
                                if (feature.properties) {
                                    layer.bindPopup(renderPopupContent(feature.properties));
                                }
                            }}
                        />
                    )}

                    {/* ⭐ Markers at GeoJSON Feature Centroids */}
                    {geoJsonData && geoJsonData.features.map((feature, idx) => {
                        const bounds = L.geoJSON(feature).getBounds();
                        const center = bounds.getCenter();
                        return (
                            <Marker 
                                key={idx} 
                                position={center} 
                                icon={pinIcon}
                            >
                                <Popup>
                                    {renderPopupContent(feature.properties)}
                                </Popup>
                            </Marker>
                        );
                    })}

                    {geoJsonData && (
                         <GeoJSON 
                            data={geoJsonData} 
                             style={layerStyle} // Apply default style
                             onEachFeature={onEachFeature} 
                        />
                     )}

                    <MapSearchHandler mapRef={searchInputRef} />
                </MapContainer>
            </div>
            
            <UploadModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default AtlasView;
