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
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  console.log(session, status);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/blogs", label: "Blogs" },
    { to: "/contact", label: "Contact" },
  ];

  const user = session?.user;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Menu */}
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

          {/* Right Section */}
          <div className="flex items-center space-x-5">
            {/* Conditional Login/Avatar */}
            {!user ? (
              <Link
                href="/login"
                className="text-black dark:text-white text-sm font-medium rounded-md transition hover:text-gray-700 dark:hover:text-gray-300 duration-150 ease-in-out"
              >
                Login
              </Link>
            ) : (
              <div className="relative group">
                <img
                  src={user?.image || "https://img.icons8.com/?size=50&id=23265&format=png"}
                  alt="avatar"
                  width={36}
                  height={36}
                  className="rounded-full cursor-pointer"
                />
                <div className="absolute hidden group-hover:block right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-md rounded-md p-3 z-50">
                  <div className="text-sm text-black dark:text-white font-semibold">{user.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-300 mb-2">{user.email}</div>
                  <button
                    onClick={() => signOut()}
                    className="w-full text-left text-sm text-red-600 hover:underline"
                  >
                    Logout
                  </button>
                </div>
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

            {/* Mobile Menu Button */}
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
            {user ? (
              <div className="px-5">
                <div className="text-sm font-medium text-black dark:text-white">{user.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-300 mb-3">{user.email}</div>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    signOut();
                  }}
                  className="w-full text-left text-sm text-red-600 hover:underline"
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
