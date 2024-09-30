// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Login from './pages/Auth/login';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact_us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
