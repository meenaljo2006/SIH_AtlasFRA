// shapeLoader.js

export const toFeatureCollection = (shapes) => ({
  type: "FeatureCollection",
  features: shapes.map((shape) => {
    return {
      type: "Feature",
      properties: {
        claimant: shape.claimant || "Unknown",
        village: shape.village,
        claimType: shape.claimType,
        district:shape.district,
        state:shape.state
      },
      geometry: {
        type: shape.type,
        coordinates: [shape.coordinates] // Assuming your coordinates array needs an extra wrapper for GeoJSON Polygon format
      }
    };
    
  })
});