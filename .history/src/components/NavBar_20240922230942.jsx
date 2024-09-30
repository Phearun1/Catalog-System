// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white drop-shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-2xl font-bold">Catalog System</div>

        <div className="flex-grow flex justify-center items-center space-x-4 ">
          <Link to="/" className="text-black text-xl font-bold font-sans px-4 py-2 hover:bg-gray-200 rounded">Home</Link>
          <Link to="/about" className="text-black text-xl font-bold  font-sans px-4 py-2 hover:bg-gray-200 rounded">About</Link>
          <Link to ="/user_profile" className="text-black text-xl font-bold font-sans px-4 py-2 hover:bg-gray-200 rounded">User Profile</Link>
        </div>

        <div className="mx-auto items-center ">
          <Link to="/login" className="text-blue-800 text-xl  border-solid- font-bold font-sans px-4 py-2 hover:bg-gray-200 rounded">Login</Link>
          
        </div>
      </div>
    </nav>
  ); 
}

export default Navbar;
