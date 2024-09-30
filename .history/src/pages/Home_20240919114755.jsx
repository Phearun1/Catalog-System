// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/NavBar'; // Use this if the file is named NavBar.jsx


function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-6 justi">
        <h1 className="text-4xl  font-bold mb-4">Welcome to MyApp</h1>
        <p className="text-lg">This is the home page. Use the navigation bar to explore other pages.</p>
      </main>
    </div>
  );
}

export default Home;
