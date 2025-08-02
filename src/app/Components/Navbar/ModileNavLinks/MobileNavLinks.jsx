import Link from "next/link";
import React from "react";

const MobileNavLinks = () => {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/blogs", label: "Blogs" },
    { to: "/contact", label: "Contact" },
  ];
  return (
    <div className="flex items-center justify-center">
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
  );
};

export default MobileNavLinks;
