
// src/AuthCard.jsx
import React, { useState } from 'react';
import Navbar from '../../components/NavBar';


const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {isLogin ? 'Login' : 'Sign Up'}
          </h2>
          <form>
            <div className="mb-4">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                placeholder="••••••••"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
            <p className="mt-4 text-center text-sm text-gray-600">
              {isLogin ? 'Need an account?' : 'Already have an account?'}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-primary font-medium"
              >
                {isLogin ? 'Sign Up' : 'Login'}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;