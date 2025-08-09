import React from "react";
import { FaRegFrown } from "react-icons/fa";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="text-center space-y-8 max-w-lg">
        <FaRegFrown className="mx-auto h-24 w-24 text-red-500 animate-pulse" />
        <h1 className="text-8xl md:text-9xl font-extrabold tracking-tight text-gray-200">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-50">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 mt-6 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Go Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
