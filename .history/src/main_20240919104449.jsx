// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

import React from 'react';
import './index.css'; // This should import your Tailwind CSS styles
import Homepage from './homepage';



const router = createBrowserRouter(
  {
    path: '/',
    element: <Homepage />,
  },
  
)
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);