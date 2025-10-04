// // shapeLoader.js

// export const toFeatureCollection = (shapes) => ({
//   type: "FeatureCollection",
//   features: shapes.map((shape) => {
//     return {
//       type: "Feature",
//       properties: {
//         claimant: shape.claimant || "Unknown",
//         village: shape.village,
//         claimType: shape.claimType,
//         district:shape.district,
//         state:shape.state
//       },
//       geometry: {
//         type: shape.type,
//         coordinates: [shape.coordinates] // Assuming your coordinates array needs an extra wrapper for GeoJSON Polygon format
//       }
//     };
//     
//   })
// });


// shapeLoader.js

export const toFeatureCollection = (shapes) => ({
  type: "FeatureCollection",
  features: shapes.map((shape) => {
    return {
      type: "Feature",
      properties: {
        claimId: shape.claimId || null,
        claimant: shape.claimant || "Unknown",
        fatherSpouseName: shape.fatherSpouseName,
        state: shape.state || null,
        district: shape.district || null,
        village: shape.village || null,
        gramPanchayat: shape.gramPanchayat || null,
        claimType: shape.claimType || null,
        claimStatus: shape.claimStatus || null,
        SubmissionDate: shape.SubmissionDate || null,
      },
      geometry: {
        type: shape.type,
        coordinates: [shape.coordinates] // Assuming GeoJSON Polygon format
      }
    };
  })
});
