import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileCard = ({ profile, onShowMap }) => {
  const navigate = useNavigate();

  const handleClick = () => {

    navigate(`/profile/${profile.id}`);
  };

  const handleShowMapClick = (event) => {
    event.stopPropagation(); 
  
    onShowMap(profile.address);
  };

  return (
    <div className="profile-card" onClick={handleClick}>
      <img src={profile.photo} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <button onClick={handleShowMapClick}>Show on Map</button>
    </div>
  );
};

export default ProfileCard;
