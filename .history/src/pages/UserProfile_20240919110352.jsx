// src/pages/UserProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  let { userId } = useParams();
  return (
    <div>
      <h1>User Profile for User ID: {userId}</h1>
    </div>
  );
}

export default UserProfile;
