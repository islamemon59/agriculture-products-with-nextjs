"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NavLinks = ({ link }) => {
  const router = useRouter();
  const currentPathname = router.pathname;
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
                      : "translate-x-full group-hover:translate-x-0"
                  }
                `}
      />
      {link.name}
    </Link>
  );
};

export default NavLinks;
