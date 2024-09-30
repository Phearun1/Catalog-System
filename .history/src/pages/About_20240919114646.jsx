// src/pages/About.jsx
import React from 'react';
import Navbar from '../components/NavBar'; // Use this if the file is named NavBar.jsx


function About() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">This is the about page. Learn more about us here.</p>
      </main>
    </div>
  );
}

export default About;
