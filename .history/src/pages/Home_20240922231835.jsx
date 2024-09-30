// // src/pages/Home.jsx
// import React from "react";
// // import Navbar from "../components/NavBar"; // Use this if the file is named NavBar.jsx
// import { SignInButton } from "@clerk/clerk-react";

// function Home() {
//   return (
//     <div>
//       <SignInButton mode='modal'>
//         <button className="bg-black m-20 text-white text-center ml-11 justify-center">Signin</button>
//       </SignInButton>
//     </div>

//     <div></div>
//   );
// }

// export default Home;

import React from "react";
import Navbar from "../components/NavBar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto justify-center items">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="text-lg">This is the home page. You can sign in here.</p>
      </div>
    </div>
  );
}

export default Home;
