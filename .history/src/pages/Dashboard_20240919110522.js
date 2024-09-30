// src/pages/Dashboard.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="overview">Overview</Link></li>
          <li><Link to="settings">Settings</Link></li>
        </ul>
      </nav>
      <Outlet /> {/* Nested routes will render here */}
    </div>
  );
}

export default Dashboard;
