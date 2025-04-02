import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileList from './pages/ProfileList';
import ProfileDetails from './pages/ProfileDetails';
import AdminPanel from './pages/AdminPanel';
import Header from './components/Header';
import './App.css';

// Mock data for profiles (this could come from an API or a separate file)
const initialProfiles = [
  { id: 1, name: 'John Doe', address: '123 Street', photo: 'https://via.placeholder.com/150', description: 'Some description' },
  { id: 2, name: 'Jane Smith', address: '456 Avenue', photo: 'https://via.placeholder.com/150', description: 'Another description' }
];

const App = () => {
  const [profiles, setProfiles] = useState(initialProfiles);

  // Function to update profiles (add/edit/delete)
  const onUpdateProfiles = (updatedProfiles) => {
    setProfiles(updatedProfiles);
  };

  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          {/* Home route - Profile List */}
          <Route path="/" element={<ProfileList profiles={profiles} />} />

          {/* Profile Details route with dynamic id */}
          <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />

          {/* Admin Panel route */}
          <Route path="/admin" element={<AdminPanel profiles={profiles} onUpdateProfiles={onUpdateProfiles} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
