"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";

const UserLoginProfile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { data: session, status } = useSession();
    const user = session?.user;
  return (
    <div>
      <div className="relative user-dropdown">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center focus:outline-none user-avatar"
        >
          <Image
            src={
              user?.image || "https://img.icons8.com/plasticine/100/user.png"
            }
            alt="User Avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover border-2 border-green-500 hover:border-green-600 transition-colors duration-200"
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-3 w-64 bg-white dark:bg-gray-800 shadow-xl rounded-xl p-5 z-50 transform origin-top-right animate-scale-in">
            <div className="text-md font-bold text-gray-800 dark:text-gray-100 mb-1">
              {user.name}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-4 truncate">
              {user.email}
            </div>
            <button
              onClick={() => {
                signOut();
              }}
              className="w-full text-left text-sm font-semibold text-red-600 hover:text-red-700 transition-colors duration-200 block py-2 px-3 rounded-md hover:bg-red-50 dark:hover:bg-red-900"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserLoginProfile;
