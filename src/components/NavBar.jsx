import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white drop-shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-black text-2xl font-bold">
          Catalog System
        </NavLink>

        {/* Centered Navigation Links */}
        <div className="flex-grow flex justify-center items-center space-x-4">
          <NavLink
            exact
            to="/"
            className="text-black text-xl font-bold font-sans px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-200"
            activeClassName="bg-gray-300" // Active background color when clicked
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-black text-xl font-bold font-sans px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-200"
            activeClassName="bg-gray-300"
          >
            About
          </NavLink>
          <NavLink
            to="/contact_us"
            className="text-black text-xl font-bold font-sans px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-gray-200"
            activeClassName="bg-gray-300"
          >
            Contact Us
          </NavLink>
        </div>

        {/* Right-aligned Login Button */}
        <div className="items-center">
          <NavLink
            to="/login"
            className="text-black bg-gray-100 text-xl border-opacity-20 border-2 border-gray-700 rounded-xl font-bold font-sans px-4 py-2 transition duration-300 ease-in-out hover:bg-gray-200"
            activeClassName="bg-gray-300"
          >
            
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
