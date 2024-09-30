// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/NavBar'; // Use this if the file is named NavBar.jsx
import { SignInButton } from '@clerk/clerk-react';


function Home() {
  return <div><SignInButton>
    <Button>Signin</Button>
  </SignInButton>
}

export default Home;
