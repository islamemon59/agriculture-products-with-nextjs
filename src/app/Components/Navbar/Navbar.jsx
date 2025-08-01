"use client";

import { useState } from "react";
import Link from "next/link";
import {
  IoSearchOutline,
  IoPersonOutline,
  IoCartOutline,
  IoMenu,
  IoClose,
} from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.to}
                className="font-medium text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition duration-150 ease-in-out"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-5">
            <Link
              href="/login"
              className="text-black dark:text-white text-sm font-medium rounded-md transition hover:text-gray-700 dark:hover:text-gray-300 duration-150 ease-in-out"
            >
              Login
            </Link>

            <button className="text-black dark:text-white text-2xl hover:text-gray-700 dark:hover:text-gray-300">
              <IoPersonOutline />
            </button>

            <div className="hidden md:flex items-center space-x-5">
              <button className="text-black dark:text-white text-2xl hover:text-gray-700 dark:hover:text-gray-300">
                <IoSearchOutline />
              </button>
              <button className="text-black dark:text-white text-2xl hover:text-gray-700 dark:hover:text-gray-300">
                <IoCartOutline />
              </button>
            </div>

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

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
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
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center px-5 mb-3">
              <button className="text-black dark:text-white text-2xl">
                <IoPersonOutline />
              </button>
              <span className="ml-3 text-base font-medium text-black dark:text-white">
                Account
              </span>
            </div>
            <div className="mt-3 px-5">
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full text-center bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-800 dark:hover:bg-gray-200"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
