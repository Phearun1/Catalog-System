// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './Router'; // This should now import from './Router.jsx'
import './index.css'; // Import Tailwind CSS

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
