"use client"
import React from "react";
import { FaTimes } from "react-icons/fa";

const ModalCloseButton = ({setIsCartModalOpen}) => {
  return (
    <button
      onClick={() => setIsCartModalOpen(false)}
      className="text-gray-500 hover:text-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full"
      aria-label="Close modal"
    >
      <FaTimes className="text-2xl" />
    </button>
  );
};

export default ModalCloseButton;
