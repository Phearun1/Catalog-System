// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-2xl font-bold">Phearun Dashboard</div>
        <div>
          <Link to="/" className="text-black px-4 py-2 hover:bg-gray-700 rounded">Home</Link>
          <Link to="/about" className="text-black px-4 py-2 hover:bg-gray-700 rounded">About</Link>
          <Link to ="/user_profile" className="text-black px-4 py-2 hover:bg-gray-700 rounded">User Profile</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
