import Link from "next/link";
import React from "react";

const NavLinks = () => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/blogs", label: "Blogs" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div>
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
    </div>
  );
};

export default NavLinks;
