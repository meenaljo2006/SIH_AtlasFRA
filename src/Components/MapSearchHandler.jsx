import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet-geosearch/dist/geosearch.css';

const MapSearchHandler = ({ mapRef }) => {
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
      provider: provider,
      style: "bar", // "bar" or "button"
      showMarker: true,
      autoClose:false,
      searchLabel: 'Search village/claim...',
      showPopup: true,
      marker: {
        draggable: false,
      },
      
    });

    map.addControl(searchControl);

    // Move the input element to the sidebar
    setTimeout(() => {
      if (mapRef.current) {
        const inputEl = map.getContainer().querySelector('.leaflet-control-geosearch');
        if (inputEl) {
          mapRef.current.appendChild(inputEl);
        }
      }
    }, 100); // slight delay ensures the element exists

    return () => {
      map.removeControl(searchControl);
    };
  }, [map, mapRef]);

  return null;
};

export default MapSearchHandler;
