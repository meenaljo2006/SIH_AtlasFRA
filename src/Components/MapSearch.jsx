// MapSearch.jsx

import React, { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

// This component is responsible for changing the map's view (zoom/center)
const MapSearch = ({ searchTerm }) => {
    const map = useMap(); // Access the map instance
    const provider = new OpenStreetMapProvider();

    useEffect(() => {
        // Only run search if there's a valid search term
        if (!searchTerm) return;

        // 1. Geocode the search term (address -> coordinates)
        provider.search({ query: searchTerm })
            .then(results => {
                if (results && results.length > 0) {
                    const { x, y } = results[0]; // x=longitude, y=latitude
                    
                    // 2. Map ko naye coordinates par set karo aur zoom karo
                    // y (latitude) aur x (longitude) use kiya jaata hai
                    map.setView([y, x], 9); // 14 is a good zoom level for a place
                    
                    // Optional: You can add a marker here if needed
                    // L.marker([y, x]).addTo(map); 

                    console.log(`Zoomed map to: ${searchTerm}`);
                } else {
                    console.log(`No results found for: ${searchTerm}`);
                }
            })
            .catch(error => {
                console.error("Geocoding failed:", error);
            });

    }, [searchTerm, map]); // Rerun effect only when searchTerm changes

    return null; // This component doesn't render anything in the DOM
};

export default MapSearch;