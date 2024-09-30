import React from 'react';
import './index.css'; // This should import your Tailwind CSS styles
import Homepage from './homepage';



const router = createBrowserRouter(
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path:'/contact',
    element: <Contact />,

  },
)
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);