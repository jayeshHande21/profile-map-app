import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileList from './pages/ProfileList';
import ProfileDetails from './pages/ProfileDetails';
import AdminPanel from './pages/AdminPanel';
import Header from './components/Header';
import './App.css';

const initialProfiles = [
  {
    id: 1,
    name: "Rajesh Sharma",
    address: "12 MG Road, Mumbai, India",
    photo: "https://via.placeholder.com/150",
    description: "A tech enthusiast and avid reader."
  },
  {
    id: 2,
    name: "Priya Verma",
    address: "45 Park Street, Kolkata, India",
    photo: "https://via.placeholder.com/150",
    description: "A passionate traveler and food lover."
  },
  {
    id: 3,
    name: "Amit Khanna",
    address: "89 Lajpat Nagar, New Delhi, India",
    photo: "https://via.placeholder.com/150",
    description: "An entrepreneur and fitness freak."
  },
  {
    id: 4,
    name: "Neha Patil",
    address: "67 FC Road, Pune, India",
    photo: "https://via.placeholder.com/150",
    description: "Loves painting and classical music."
  },
  {
    id: 5,
    name: "Arjun Reddy",
    address: "23 Banjara Hills, Hyderabad, India",
    photo: "https://via.placeholder.com/150",
    description: "A sports enthusiast and adventure lover."
  },
  {
    id: 6,
    name: "Kavita Nair",
    address: "78 MG Road, Bangalore, India",
    photo: "https://via.placeholder.com/150",
    description: "An author and literature expert."
  },
  {
    id: 7,
    name: "Rohan Mehta",
    address: "34 Connaught Place, New Delhi, India",
    photo: "https://via.placeholder.com/150",
    description: "A digital marketing professional."
  }
];

const App = () => {
  const [profiles, setProfiles] = useState(initialProfiles);

  const onUpdateProfiles = (updatedProfiles) => {
    setProfiles(updatedProfiles);
  };

  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<ProfileList profiles={profiles} />} />
          <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />
          <Route path="/admin" element={<AdminPanel profiles={profiles} onUpdateProfiles={onUpdateProfiles} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
