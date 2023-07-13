import axios from "axios";

export const getDistance = async (address) => {
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance; // Distance in kilometers
  };

  const apiKey =
    "//Ajjx0mv-QrHQeRB-uzhy4cTbT5phnkkX8pz1zlQtTbOT2Iq0oAY-X3dcq99aMs2v";
  const geocodeUrl = `//https://dev.virtualearth.net/REST/v1/Locations`;

  const geocodeParams = {
    query: address,
    key: apiKey,
  };
  try {
    const geocodeResponse = await axios.get(geocodeUrl, {
      params: geocodeParams,
    });

    const coordinates =
      geocodeResponse.data.resourceSets[0].resources[0].point.coordinates;
    const userLatitude = coordinates[0];
    const userLongitude = coordinates[1];

    // Geocode your company address
    const companyAddress =
      "//put your exact company address";
    const companyGeocodeParams = {
      query: companyAddress,
      key: apiKey,
    };

    const companyGeocodeResponse = await axios.get(geocodeUrl, {
      params: companyGeocodeParams,
    });

    const companyCoordinates =
      companyGeocodeResponse.data.resourceSets[0].resources[0].point
        .coordinates;
    const companyLatitude = companyCoordinates[0];
    const companyLongitude = companyCoordinates[1];

    // Calculate the distance between your company and the user's address
    const calculatedDistance = calculateDistance(
      userLatitude,
      userLongitude,
      companyLatitude,
      companyLongitude
    );

    return calculatedDistance.toFixed(2);
  } catch (error) {
    throw new Error(
      "Failed to calculate."
    );
  }
};