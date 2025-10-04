// import { useEffect } from 'react';
// import { useMap } from 'react-leaflet';
// import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
// import 'leaflet-geosearch/dist/geosearch.css';

// const MapSearchHandler = ({ mapRef }) => {
//   const map = useMap();

//   useEffect(() => {
//     const provider = new OpenStreetMapProvider();

//     const searchControl = new GeoSearchControl({
//       provider: provider,
//       style: "bar", // "bar" or "button"
//       showMarker: true,
//       autoClose:false,
//       searchLabel: 'Search village/claim...',
//       showPopup: true,
//       marker: {
//         draggable: false,
//       },
      
//     });

//     map.addControl(searchControl);

//     // Move the input element to the sidebar
//     setTimeout(() => {
//       if (mapRef.current) {
//         const inputEl = map.getContainer().querySelector('.leaflet-control-geosearch');
//         if (inputEl) {
//           mapRef.current.appendChild(inputEl);
//         }
//       }
//     }, 50); // slight delay ensures the element exists

//     return () => {
//       map.removeControl(searchControl);
//     };
//   }, [map, mapRef]);

//   return null;
// };

// export default MapSearchHandler;


import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet-geosearch/dist/geosearch.css';

const MapSearchHandler = ({ mapRef }) => {
  const map = useMap();

useEffect(() => {
  const provider = new OpenStreetMapProvider();

  const searchControl = new GeoSearchControl({
    provider,
    style: "bar",
    showMarker: true,
    autoClose: false,
    searchLabel: "Search village/claim...",
    showPopup: true,
    marker: { draggable: false },
  });

  map.addControl(searchControl);

  setTimeout(() => {
    // ✅ Move search bar to the correct sidebar container
    const sidebarTarget = document.querySelector('.geosearch-sidebar-container');

    const searchEl = document.querySelector('.leaflet-control-geosearch');

    if (sidebarTarget && searchEl && !sidebarTarget.contains(searchEl)) {
      sidebarTarget.appendChild(searchEl);
      searchEl.style.width = '100%';
      searchEl.style.margin = '0';
    }

    // ✅ Remove the extra empty button div if it exists
    const buttonEl = document.querySelector(
      '.leaflet-bar.leaflet-control-geosearch'
    );
    if (buttonEl && !buttonEl.querySelector('form')) {
      buttonEl.remove();
    }
  }, 200);

  return () => {
    map.removeControl(searchControl);
  };
}, [map]);


  return null;
};

export default MapSearchHandler;
