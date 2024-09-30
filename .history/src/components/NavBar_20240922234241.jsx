// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white drop-shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-black text-2xl font-bold">
          Catalog System
        </Link>

        {/* Centered Navigation Links */}
        <div className="flex-grow flex justify-center items-center space-x-4">
          <Link
            to="/"
            className="text-black text-xl font-bold font-sans px-4 py-2 hover:bg-gray-200 rounded"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-black text-xl font-bold font-sans px-4 py-2 hover:bg-gray-200 rounded"
          >
            About
          </Link>
          <Link
            to="/user_profile"
            className="text-black text-xl font-bold font-sans px-4 py-2 hover:bg-gray-200 rounded"
          >
            User Profile
          </Link>
        </div>

        {/* Right-aligned Login Button */}
        <div className="items-center">
          <Link
            to="/login"
            className="text-black bg-gray-100 text-xl border-opacity-20 border-2 border-gray-700 rounded-xl font-bold font-sans px-4 py-2 hover:bg-gray-200"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
