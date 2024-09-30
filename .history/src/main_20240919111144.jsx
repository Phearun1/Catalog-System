// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import Route from 'src/Router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
