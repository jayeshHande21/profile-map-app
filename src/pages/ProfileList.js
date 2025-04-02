import React, { useState, useEffect } from "react";
import ProfileCard from "../components/ProfileCard";
import profilesData from "../data/profiles.json";
import Map from "../components/Map";
import ClipLoader from "react-spinners/ClipLoader"; // For loading spinner

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    setTimeout(() => {  // Simulating an API fetch with a delay
      setProfiles(profilesData);
      setFilteredProfiles(profilesData);
      setLoading(false);  // After data is fetched, stop loading
    }, 2000);  // Simulate delay of 2 seconds
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredProfiles(
      profiles.filter(
        (profile) =>
          profile.name.toLowerCase().includes(query) ||
          profile.address.toLowerCase().includes(query)
      )
    );
  };

  const handleShowMap = (address) => {
    const mockCoords = {
      "1600 Amphitheatre Parkway, Mountain View, CA": [37.4221, -122.0841],
      "1 Apple Park Way, Cupertino, CA": [37.3349, -122.0090],
    };
    setSelectedLocation({ address, coords: mockCoords[address] || [37.7749, -122.4194] });
  };

  return (
    <div className="profile-list">
      <h2>Profiles</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or address..."
        value={searchQuery}
        onChange={handleSearch}
      />

      {/* Loading State */}
      {loading ? (
        <div className="loading-indicator">
          <ClipLoader size={50} color={"#123abc"} loading={loading} />
        </div>
      ) : (
        <div className="profiles-container">
          {filteredProfiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} onShowMap={handleShowMap} />
          ))}
        </div>
      )}

      {/* Map Component */}
      {selectedLocation && <Map position={selectedLocation.coords} address={selectedLocation.address} />}
    </div>
  );
};

export default ProfileList;
