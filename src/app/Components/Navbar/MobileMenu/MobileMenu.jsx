"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react"; // ✅ for login check

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const pathname = usePathname();
  const { data: session } = useSession(); // ✅ check login
  const [currentPathname, setCurrentPathname] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (pathname) {
      setCurrentPathname(pathname);
    }
  }, [pathname]);

  // Handle animation state
  useEffect(() => {
    if (isMenuOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isMenuOpen]);

  if (!currentPathname) return null;

  // ✅ Nav links (conditionally include Shop only if logged in)
  const navLinks = [
    { name: "Home", href: "/" },
    ...(session ? [{ name: "Shop", href: "/shop" }] : []), // show only if logged in
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
    { name: "About Us", href: "/aboutUs" },
  ];

  return (
    <div
      className={`
        md:hidden bg-white dark:bg-gray-900 absolute w-full left-0 top-16 z-40 shadow-2xl rounded-2xl
        transition-all duration-300 ease-in-out
        ${isMenuOpen ? "block" : "hidden"}
        ${
          isAnimating ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }
      `}
    >
      <div className="px-4 pt-2 pb-4 space-y-1 w-full">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`
              block px-3 py-2 rounded-md text-base font-medium transition-all duration-200
              ${
                currentPathname === link.href
                  ? "bg-green-500 text-white font-bold"
                  : "text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-green-500 dark:hover:text-green-400"
              }
            `}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
