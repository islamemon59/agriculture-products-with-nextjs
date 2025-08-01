"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaUser, FaEnvelope, FaLock, FaGoogle } from "react-icons/fa";

const RegisterForm = () => {
  // State for password visibility (assuming the user will ask for this next)
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here (e.g., send data to an API)
    console.log("Register form submitted!");
  };

  const handleGoogleLogin = () => {
    // In a real application, you would trigger the Google OAuth flow here.
    // This might involve redirecting the user to a Google login page.
    console.log("Google login button clicked!");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Full Name Field */}
          <div className="mb-5">
            <label
              htmlFor="fullName"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Full Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FaUser className="text-gray-400" />
              </span>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                className="shadow appearance-none border rounded w-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FaEnvelope className="text-gray-400" />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                className="shadow appearance-none border rounded w-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <FaLock className="text-gray-400" />
              </span>
              <input
                // Added for future password toggle functionality
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="********"
                className="shadow appearance-none border rounded w-full py-2 px-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              Register
            </button>
          </div>
        </form>

        {/* Separator */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">Or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Social Login Button */}
        <div className="flex items-center justify-center">
          <button
            onClick={handleGoogleLogin}
            className="bg-white border border-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full flex items-center justify-center space-x-2 hover:bg-gray-50 transition duration-200"
          >
            <FaGoogle className="text-red-500" />
            <span>Register with Google</span>
          </button>
        </div>

        {/* Link to Login */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-bold text-blue-500 hover:text-blue-800"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
