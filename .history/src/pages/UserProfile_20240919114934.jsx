import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/NavBar'; // Use this if the file is named NavBar.jsx
function UserProfile() {
  const { userId } = useParams();
  
  return (
    <div>
      <h1>User Profile for ID: {userId}</h1>
    </div>
  );
}

export default UserProfile;
