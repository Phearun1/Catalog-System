// src/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/NotFound';
import UserProfile from './pages/UserProfile';
import Dashboard from './pages/Dashboard';
import Overview from './pages/Overview';
import Settings from './pages/Settings';

function AppRouter() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="overview" element={<Overview />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      );
}

export default AppRouter;
