
import React from "react";
import Navbar from "../components/NavBar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-lg">This is the home page. You can sign in here.</p>
      </div>
    </div>
  );
}

export default Home;
