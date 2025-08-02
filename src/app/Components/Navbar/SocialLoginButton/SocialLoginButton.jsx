"use client"
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialLoginButton = () => {

    
  const handleGoogleLogin = () => {
    console.log("Google login button clicked!");
  };

    return (
        <div className="flex items-center justify-center">
          <button
            onClick={handleGoogleLogin}
            className="bg-white border border-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center space-x-2 hover:bg-gray-50 transition duration-200"
          >
            <FaGoogle className="text-red-500" />
            <span>Register with Google</span>
          </button>
        </div>
    );
};

export default SocialLoginButton;