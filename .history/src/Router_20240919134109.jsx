// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import UserProfile from './pages/UserProfile';
import Login from '../Auth/Login';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/user_profile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
