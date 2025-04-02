import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/admin">Admin Panel</Link> {/* Link to Admin Panel */}
    </nav>
  );
};

export default Header;
