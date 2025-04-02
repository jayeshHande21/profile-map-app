import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ position, address }) => {
  const [error, setError] = useState(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    if (!position || !Array.isArray(position) || position.length !== 2) {
      setError("Invalid coordinates provided.");
      return;
    }
    setError(null);
    setMapLoaded(true);
  }, [position]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="map-container">
      {mapLoaded ? (
        <MapContainer
          center={position}
          zoom={13}
          style={{ width: "100%", height: "400px" }} // Ensure map has height
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>{address || "No address provided"}</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <div>Loading map...</div>
      )}
    </div>
  );
};

export default Map;
