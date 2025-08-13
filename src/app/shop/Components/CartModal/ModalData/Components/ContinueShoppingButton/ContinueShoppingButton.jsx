"use client"
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ContinueShoppingButton = ({setIsCartModalOpen}) => {
  return (
    <Link
      onClick={() => setIsCartModalOpen(false)}
      href="/shop"
      className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg shadow-sm border border-blue-500 text-blue-700 bg-white hover:bg-blue-50 hover:border-blue-600 hover:text-blue-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:-translate-y-0.5" // Outline style for secondary action
    >
      <FaArrowRight className="text-xl" />
      Continue Shopping
    </Link>
  );
};

export default ContinueShoppingButton;
