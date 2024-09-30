import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // This should import your Tailwind CSS styles
import App from './App';



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