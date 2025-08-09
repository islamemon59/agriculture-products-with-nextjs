"use client";

import React from "react";
import { useEffect } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="text-center space-y-8 max-w-lg">
        <FaExclamationTriangle className="mx-auto h-24 w-24 text-yellow-400 animate-pulse" />

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-red-500">
          Something went wrong!
        </h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          An unexpected error has occurred. Please try again or return to the
          homepage.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <button
            onClick={() => reset()}
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-red-600 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50 w-full sm:w-auto"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-emerald-500 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-50 w-full sm:w-auto"
          >
            Go Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
