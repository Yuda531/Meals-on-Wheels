import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import customMark from "../img/geo-alt-fill.svg";
import axios from "axios";

const MapModal = ({ latitude, longitude, onSelectLocation, show, handleClose }) => {
  const handleMapClick = (event) => {
    const { lat, lng } = event.latlng;
    onSelectLocation(lat, lng);
    handleClose();
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [searchedLatitude, setSearchedLatitude] = useState(null);
  const [searchedLongitude, setSearchedLongitude] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json&limit=1`
      );
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setSearchedLatitude(parseFloat(lat));
        setSearchedLongitude(parseFloat(lon));
      } else {
        // Handle no results found
        console.log("No results found for the search query");
      }
    } catch (error) {
      // Handle error
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

  return (
    <div
      className={`modal ${show ? "show" : ""}`}
      tabIndex="-1"
      role="dialog"
      style={{ display: `${show ? "block" : "none"}` }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
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
            {/* SEARCH FORM  */}
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
                center={searchedLatitude && searchedLongitude ? [searchedLatitude, searchedLongitude] : [latitude, longitude]}
                zoom={13}
                style={{ height: "500px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                  position={
                    searchedLatitude && searchedLongitude
                      ? [searchedLatitude, searchedLongitude]
                      : [latitude, longitude]
                  }
                  icon={customIcon}
                />
              </MapContainer>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
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
