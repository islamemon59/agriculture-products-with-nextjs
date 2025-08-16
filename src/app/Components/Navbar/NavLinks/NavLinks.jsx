"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react"; // ✅ import next-auth
import React, { useEffect, useState } from "react";

const NavLinks = ({ link }) => {
  const pathname = usePathname();
  const [currentPathname, setCurrentPathname] = useState("");
  const { data: session } = useSession(); // ✅ get session

  useEffect(() => {
    if (pathname) {
      setCurrentPathname(pathname);
    }
  }, [pathname]);

  if (!currentPathname) return null; // Avoid rendering until mounted

  // 🚫 Hide shop link if not logged in
  if (link.href === "/shop" && !session) {
    return null;
  }

  return (
    <Link
      href={link.href}
      className={`
        font-medium p-2 px-4 rounded-full
        relative overflow-hidden group
        transition-all duration-300 ease-in-out
        ${
          currentPathname === link.href
            ? "text-white"
            : "text-gray-600 dark:text-gray-300 hover:text-white dark:hover:text-white"
        }
        ${
          currentPathname !== link.href &&
          "hover:bg-green-500 dark:hover:bg-gray-800"
        }
      `}
    >
      <span
        className={`
          absolute inset-0 bg-green-500
          transform transition-transform duration-300 ease-in-out
          -z-10
          ${
            currentPathname === link.href
              ? "translate-x-0"
              : "translate-x-[110%] group-hover:translate-x-0"
          }
        `}
      />
      {link.name}
    </Link>
  );
};

export default NavLinks;
