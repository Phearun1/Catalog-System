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