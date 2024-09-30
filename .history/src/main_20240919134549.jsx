// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Router"; // This should now import from './Router.jsx'
import "./index.css"; // Import Tailwind CSS
import { ClerkProvider } from "@clerk/clerk-react";
// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
import AuthCard from "./pages";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthCard>
      <AppRouter />
    </AuthCard>
  </React.StrictMode>
);
