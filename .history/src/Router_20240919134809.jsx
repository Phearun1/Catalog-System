// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import UserProfile from './pages/UserProfile';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/user_profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
