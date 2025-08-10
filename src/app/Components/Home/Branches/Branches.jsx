// components/ContactSection.jsx

"use client"; // This is a client component because it uses useState

import React, { useState } from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5"; // Location pin icon

// Data for the branches section
const branches = [
  { name: "COIMBATORE", imageUrl: "https://i.ibb.co/7NpFbt4v/Frame-9.png" },
  { name: "CHENNAI", imageUrl: "https://i.ibb.co/HDBn4XHg/Frame-10.png" },
  { name: "HYDERABAD", imageUrl: "https://i.ibb.co/YF096QgQ/Vector-1.png" },
  { name: "GOA", imageUrl: "https://i.ibb.co/mfPTyHN/Frame-11.png" },
  { name: "KOCHI", imageUrl: "https://i.ibb.co/ycGtrPw5/Frame-12.png" },
  { name: "MUMBAI", imageUrl: "https://i.ibb.co/PvJLn7GJ/Frame-13.png" },
];

const Branches = () => {
  // State to track the currently selected branch
  const [activeBranch, setActiveBranch] = useState("COIMBATORE");

  return (
    <section className="bg-white p-4 sm:p-8 rounded-2xl shadow-xl max-w-7xl mx-auto my-12 font-sans">
      {/* OUR BRANCHES Chip */}
      <div className="text-center mb-8">
        <span className="bg-green-500 text-white font-bold text-xs px-4 py-2 rounded-full">
          OUR BRANCHES
        </span>
      </div>

      {/* Branches Icons */}
      <div className="flex flex-wrap justify-center sm:justify-around items-start gap-4 sm:gap-0 mb-12">
        {branches.map((branch) => (
          <div
            key={branch.name}
            className={`text-center cursor-pointer p-2 rounded-lg transition-all duration-300 ${
              activeBranch === branch.name
                ? "border-2 border-green-500" // Active state
                : "border-2 border-transparent" // Inactive state
            }`}
            onClick={() => setActiveBranch(branch.name)}
          >
            <Image
              src={branch.imageUrl}
              alt={branch.name}
              width={60}
              height={60}
              className="mx-auto"
            />
            <p className="mt-2 text-sm font-semibold text-gray-700">
              {branch.name}
            </p>
          </div>
        ))}
      </div>

      {/* Main Grid: Contact Form & Map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Contact Form */}
        <div className="bg-[#0D2644] text-white p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-[#1A314E] border-none rounded-lg p-4 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#1A314E] border-none rounded-lg p-4 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
            />
            <input
              type="tel"
              placeholder="Phone *"
              className="w-full bg-[#1A314E] border-none rounded-lg p-4 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
            />
            <textarea
              placeholder="Write message"
              rows="4"
              className="w-full bg-[#1A314E] border-none rounded-lg p-4 placeholder-gray-400 focus:ring-2 focus:ring-green-500 focus:outline-none transition"
            ></textarea>
            <button
              type="submit"
              className="w-full my-button"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side: Map & Address */}
        <div>
          <div className="rounded-2xl overflow-hidden">
            <Image
              src="https://i.ibb.co/QjF1vKMQ/image-10.png"
              alt="JRR Towers Map Location"
              width={600}
              height={450}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex items-start mt-6 gap-4">
            <IoLocationSharp className="text-lime-500 text-4xl mt-1 shrink-0" />
            <p className="text-gray-700 font-medium text-lg">
              JRR Towers (2nd Floor), Pattalamma Temple Rd, Basavangudi,
              Bangalore, 560004
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
