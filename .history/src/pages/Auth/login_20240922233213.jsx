// src/AuthCard.jsx
import React, { useState } from "react";
import Navbar from "../../components/NavBar";

const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center px-4">
        <div className="w-full max-w-lg bg-white p-10 rounded-2xl shadow-lg transform transition-all duration-500 ease-in-out hover:shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {isLogin ? "Welcome Back!" : "Create an Account"}
          </h2>
          <form>
            {!isLogin && (
              <div className="mb-6">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 placeholder-gray-400 transition-colors duration-300"
                  placeholder="Enter your username"
                  required
                />
              </div>
            )}

            {!isLogin && (
              <div className="mb-6">
                <label
                  htmlFor="phone_number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone_number"
                  className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 placeholder-gray-400 transition-colors duration-300"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            )}

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 placeholder-gray-400 transition-colors duration-300"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700 placeholder-gray-400 transition-colors duration-300"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>

            <p className="mt-6 text-center text-sm text-gray-600">
              {isLogin ? "Need an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-blue-600 hover:text-blue-800 font-semibold transition duration-300"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
