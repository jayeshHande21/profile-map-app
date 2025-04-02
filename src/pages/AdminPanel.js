import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import profilesData from '../data/profiles.json'; 
import './AdminPanel.css'; 

const AdminPanel = ({ onUpdateProfiles }) => {
  const { register, handleSubmit, reset } = useForm();
  const [profiles, setProfiles] = useState(profilesData);

 
  const onSubmit = (data) => {
    const newProfile = {
      id: profiles.length + 1,
      ...data,
    };
    const updatedProfiles = [...profiles, newProfile];
    setProfiles(updatedProfiles);
    onUpdateProfiles(updatedProfiles); 
    reset();
  };


  const handleDelete = (id) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(updatedProfiles);
    onUpdateProfiles(updatedProfiles); 
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name', { required: true })} placeholder="Name" />
        <input {...register('address', { required: true })} placeholder="Address" />
        <input {...register('photo')} placeholder="Photo URL" />
        <textarea {...register('description')} placeholder="Description" />
        <button type="submit">Add Profile</button>
      </form>


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
