import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import profilesData from '../data/profiles.json'; 
import './ProfileDetails.css';

const ProfileDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    console.log('Profile ID from URL:', id); 
    // Find the profile by ID
    const selectedProfile = profilesData.find(p => p.id === id);
    console.log('Selected Profile:', selectedProfile);
    setProfile(selectedProfile);
  }, [id]);

  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} />
      <p>{profile.description}</p>
      <p><strong>Address:</strong> {profile.address}</p>
      <p><strong>Contact:</strong> {profile.contact}</p>
      <p><strong>Interests:</strong> {profile.interests.join(', ')}</p>
      <button onClick={() => window.history.back()}>Back to List</button>
    </div>
  );
};

export default ProfileDetails;
