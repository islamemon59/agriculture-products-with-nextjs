"use client"
import React, { useState } from 'react';

const MobileMenu = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
                  {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 absolute w-full top-16 z-40">
          <div className="px-4 pt-2 pb-4 space-y-1 w-full transition-transform duration-300 transform animate-slide-down">
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
      )}
        </div>
    );
};

export default MobileMenu;