// MapDrawingContent.js (New File)

import React, { useState } from "react";
import L from "leaflet";
import { MapContainer, TileLayer, FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import SearchField from "./MapSearchHandler"; // If SearchField is needed inside the modal map

// --- Icon Fix (Mandatory for react-leaflet-draw) ---
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});
// --- End Icon Fix ---

const MapDrawingContent = ({ initialCenter, initialZoom, height = "400px" }) => {
  const [center] = useState(initialCenter || { lat: 28.6139, lng: 77.2090 });
  const ZOOM_LEVEL = initialZoom || 12;
  const [drawnLayers, setDrawnLayers] = useState([]);

  const _created = (e) => {
    setDrawnLayers((prevLayers) => [...prevLayers, e.layer]);
  };

  const _deleted = (e) => {
    const deletedLayerIds = Object.keys(e.layers._layers);
    setDrawnLayers((prevLayers) =>
      prevLayers.filter((layer) => !deletedLayerIds.includes(String(layer._leaflet_id)))
    );
  };

  return (
    <div className="map-drawing-container">
      <MapContainer
        center={center}
        zoom={ZOOM_LEVEL}
        // ⭐ Set height using prop
        style={{ height: "465px", width: "100%" }} 
      >
        {SearchField && <SearchField />}
        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={_created}
            onDeleted={_deleted}
            draw={{
              rectangle: true,
              polygon: true,
              circle: false, // Removed some shapes for simplicity
              polyline: false,
              marker: false,
            }}
          />
        </FeatureGroup>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>

      {/* ⭐ Coordinates Display */}
      <div className="map-drawing-data">
        <h3>Drawn Shape Coordinates (GeoJSON)</h3>
        <pre>
          {drawnLayers.length > 0
            ? JSON.stringify(drawnLayers.map((layer) => layer.toGeoJSON()), null, 2)
            : "No shapes drawn yet."}
        </pre>
        {/* Add a button to Save GeoJSON/Close Modal in the parent MapModal */}
      </div>
    </div>
  );
};

export default MapDrawingContent;