import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import profilesData from '../data/profiles.json'; // Mock data file
import './AdminPanel.css'; // Import the styles

const AdminPanel = ({ onUpdateProfiles }) => {
  const { register, handleSubmit, reset } = useForm();
  const [profiles, setProfiles] = useState(profilesData);

  // Function to add a profile
  const onSubmit = (data) => {
    const newProfile = {
      id: profiles.length + 1,
      ...data,
    };
    const updatedProfiles = [...profiles, newProfile];
    setProfiles(updatedProfiles);
    onUpdateProfiles(updatedProfiles); // Pass updated profiles to parent
    reset();
  };

  // Function to delete a profile
  const handleDelete = (id) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(updatedProfiles);
    onUpdateProfiles(updatedProfiles); // Pass updated profiles to parent
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>

      {/* Profile Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name', { required: true })} placeholder="Name" />
        <input {...register('address', { required: true })} placeholder="Address" />
        <input {...register('photo')} placeholder="Photo URL" />
        <textarea {...register('description')} placeholder="Description" />
        <button type="submit">Add Profile</button>
      </form>

      {/* Profile List */}
      <div className="profile-list">
        <ul>
          {profiles.map((profile) => (
            <li key={profile.id}>
              <span>{profile.name} - {profile.address}</span>
              <button onClick={() => handleDelete(profile.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
