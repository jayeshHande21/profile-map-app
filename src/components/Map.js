import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


const Map = ({ position, address }) => {
  const [error, setError] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
   
    try {
      if (!position) {
        throw new Error("Invalid coordinates");
      }
      setMapLoaded(true);
    } catch (error) {
      setError("Failed to load map. Please try again.");
    }
  }, [position]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="map-container">
      {mapLoaded ? (
        <MapContainer center={position} zoom={13} style={{ width: "100%", height: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>{address}</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div>Loading map...</div>
      )}
    </div>
  );
};

export default Map;
