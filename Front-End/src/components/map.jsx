import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import customMark from "../img/geo-alt-fill.svg";
import axios from "axios";
import { getCurrentLocation } from "../utils/geolocation";
import L from 'leaflet';

const MapModal = ({onSelectLocation, show, handleClose, setAddressInfo }) => {

  
  const handleMapClick = async (event) => {
    // event.preventDefault()
    const { lat, lng } = event.latlng;

    console.log("Koordinat yang dipilih:", lat, lng);

    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
      );

      const { address } = response.data;
      console.log("Informasi Alamat:", address);
      setAddressInfo({
        road: address.road || "",
        village: address.village || "",
        subdistrict: address.suburb || address.subdistrict || "",
        city: address.city || "",
        state: address.state || "",
        country: address.country || "",
        postcode: address.postcode || "",
      });

      onSelectLocation(lat, lng);
      handleClose();
    } catch (error) {
      console.error("Error occurred during geocoding:", error);
    }
  };


  

  const [searchQuery, setSearchQuery] = useState("");
  const [searchedLatitude, setSearchedLatitude] = useState(null);
  const [searchedLongitude, setSearchedLongitude] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [mapRef, setMapRef] = useState(null);

    if (searchQuery === "") {
    // const handleGetLocation = () => {
    getCurrentLocation(
      (lat, lng) => {
        setLatitude(lat);
        setLongitude(lng);
      },
      (error) => {
        console.error("Error getting current location:", error.message);
      }
    );
    // };
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json&limit=1`
      );
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setSearchedLatitude(parseFloat(lat));
        setSearchedLongitude(parseFloat(lon));
      } else {
        console.log("No results found for the search query");
      }
    } catch (error) {
      console.error("Error occurred during geocoding:", error);
    }
  };

  function MyClickHandler() {
    useMapEvents({
      click: handleMapClick,
    });
    return null;
  }

  const customIcon = icon({
    iconUrl: customMark,
    iconSize: [60, 40],
  });

  const markers = [
    {
      position: searchedLatitude && searchedLongitude ? [searchedLatitude, searchedLongitude] : [latitude, longitude], // Center position
      icon: customIcon,
    },
    // Add other markers if needed
  ];

  const calculateBounds = () => {
    const bounds = L.latLngBounds(markers.map(marker => marker.position));
    return bounds.isValid() ? bounds : null;
  };

  useEffect(() => {
    if (mapRef) {
      const bounds = calculateBounds();
      if (bounds) {
        mapRef.fitBounds(bounds);
      }
    }
  }, [mapRef, searchedLatitude, searchedLongitude]);



  return (
    <div
      className={`modal ${show ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: `${show ? "block" : "none"}` }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document" style={{ maxWidth: "90%", maxHeight: "90%" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Select Location on Map</h5>
          
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
          <p className="lead text-dark">Click anywhere to choose your location</p>
          
        
            <div className="form-floating col-12 d-flex mb-4">
              <input
                id="loc"
                type="text"
                className="form-control"
                placeholder="Search location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <label htmlFor="loc">Search location</label>
              <button
                className="btn btn-outline-success col-3 ms-2"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>

            {show && (
              <MapContainer
              ref={(ref) => setMapRef(ref)} // Set the map reference
              center={[latitude, longitude]}
              zoom={13}
              style={{ height: "450px", width: "100%" }}
            >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {markers.map((marker, index) => (
                <Marker
                key={index}
                position={marker.position}
                  icon={customIcon}
                />
                ))}
                <MyClickHandler />
              </MapContainer>
            )}
          </div>
          <div className="modal-footer d-flex justify-content-end col-12">


            <button
              type="button"
              className="btn btn-secondary col-4 mx-auto"
              data-dismiss="modal"
              onClick={handleClose}
            >
              Close
            </button>



            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapModal;