"use client";

import { useState } from "react";
import Link from "next/link";
import {
  IoSearchOutline,
  IoCartOutline,
  IoMenu,
  IoClose,
} from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";
import Loader from "../Loader/Loader";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { data: session, status } = useSession();
  const user = session?.user;

  if (status === "loading") return <Loader />;

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/blogs", label: "Blogs" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.to}
                className="font-medium text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-5">
            {/* User */}
            {!user ? (
              <Link
                href="/login"
                className="text-black dark:text-white text-sm font-medium rounded-md hover:text-gray-700 dark:hover:text-gray-300"
              >
                Login
              </Link>
            ) : (
              <div
                className="relative"
                tabIndex={0}
                onBlur={() => setIsDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center focus:outline-none"
                >
                  <img
                    src={
                      user?.image ||
                      "https://img.icons8.com/?size=50&id=23265&format=png"
                    }
                    alt="Avatar"
                    className="w-9 h-9 rounded-full"
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white md:block hidden dark:bg-gray-800 shadow-lg rounded-md p-4 z-50">
                    <div className="text-sm font-semibold text-black dark:text-white mb-1">
                      {user.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-300 mb-3">
                      {user.email}
                    </div>
                    <button
                      onClick={() => {
                        signOut();
                        setIsDropdownOpen(false);
                      }}
                      className="w-full text-left text-sm text-red-600 hover:underline"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-5">
              <button className="text-black dark:text-white text-2xl hover:text-gray-700 dark:hover:text-gray-300">
                <IoSearchOutline />
              </button>
              <button className="text-black dark:text-white text-2xl hover:text-gray-700 dark:hover:text-gray-300">
                <IoCartOutline />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-black dark:text-white text-2xl"
              >
                {isMenuOpen ? <IoClose /> : <IoMenu />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile User Info */}
            {user ? (
              <div className="mt-4 px-3 space-y-2 border-t border-gray-200 dark:border-gray-700 pt-3">
                <div className="text-sm font-semibold text-black dark:text-white">
                  {user.name}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-300">
                  {user.email}
                </div>
                <button
                  onClick={() => {
                    signOut();
                    setIsMenuOpen(false);
                  }}
                  className="w-full text-left text-sm text-red-600 hover:underline mt-2"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="mt-3 px-5">
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-800 dark:hover:bg-gray-200"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
