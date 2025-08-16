"use client"
import React, { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

const MobileMenuButton = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 focus:outline-none transition-colors duration-200"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </div>
  );
};

export default MobileMenuButton;
