"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdSort } from "react-icons/md";

const App = () => {
  const [search, setSearch] = useState("");
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  // State for controlling the visibility of the sort dropdown menu
useEffect(() => {
  const params = new URLSearchParams(window.location.search); // keep existing params
  if (search) {
    params.set("search", search);
  } else {
    params.delete("search");
  }
  router.push(`${pathName}?${params.toString()}`);
}, [search]);


  // Function to toggle the sort dropdown
  const toggleSortDropdown = () => {
    setIsSortDropdownOpen(!isSortDropdownOpen);
  };

  // 🔹 Handle Sort
  const handleSort = (sortOrder) => {
    const params = new URLSearchParams(window.location.search); // keep current params
    if (search) params.set("search", search); // keep search text
    params.set("sort", sortOrder); // set sort
    router.push(`${pathName}?${params.toString()}`);
    setIsSortDropdownOpen(false);
  };

  // The 'min-h-screen' class is added here to center the component in the preview.
  // You can remove this class if you are integrating the component into a larger layout.
  return (
    <div className="font-sans antialiased bg-gray-50 flex items-center justify-center p-4 sm:p-6">
      {/* Search & Sort Bar Container */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-4 sm:p-6">
        {/*
          The main flex container for the search input and sort button.
          It stacks vertically on small screens and horizontally on larger screens.
        */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Search Input Container */}
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-gray-100 border-none rounded-full py-3 pl-12 pr-4 text-gray-700 placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white
                         transition-all duration-300"
              // Add your logic here for handling search input changes
              onChange={(e) => setSearch(e.target.value)}
            />
            {/* Search Icon */}
            <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none" />
          </div>

          {/* Sort Button and Dropdown Container */}
          <div className="relative">
            {/* Sort Button */}
            <button
              onClick={toggleSortDropdown}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-medium
                         rounded-full hover:bg-gray-200 transition-colors duration-200
                         active:scale-95 transform shadow-sm"
            >
              {/* Sort Icon */}
              <MdSort className="text-2xl text-gray-600" />
              <span>Sort</span>
            </button>

            {/* Sort Dropdown Menu */}
            {isSortDropdownOpen && (
              <div
                className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-2
                           origin-top-right animate-fade-in z-10"
              >
                <div
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-150 cursor-pointer"
                  onClick={() => handleSort("newest")}
                >
                  Newest
                </div>
                <div
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-150 cursor-pointer"
                  onClick={() => handleSort("oldest")}
                >
                  Oldest
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
