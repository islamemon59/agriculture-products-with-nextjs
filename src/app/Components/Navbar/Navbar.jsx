"use client";
import { useEffect, useState } from "react";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import CartModal from "@/app/shop/Components/CartModal/CartModal";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LoginBtn from "./LoginBtn/LoginBtn";

// Defining the navigation links
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cartData, setCartData] = useState([]);
  const { data: session, status } = useSession();
  const user = session?.user;
  const router = useRouter();
  const currentPathname = router.pathname;

  // Fetch cart data when the component mounts
  useEffect(() => {
    fetch("/api/cart")
      .then((res) => res.json())
      .then((data) => setCartData(data));
  }, []);

  if (status === "loading") return <Loading />;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-green-500 dark:hover:text-green-400 focus:outline-none transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>

          {/* Left navlinks for desktop */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
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
            ))}
          </div>

          {/* Right Side - Search, Cart, User */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <button className="text-gray-600 dark:text-gray-300 text-2xl hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200">
              <IoSearchOutline />
            </button>

            <button
              onClick={() => setIsCartModalOpen(!isCartModalOpen)}
              className="text-gray-600 relative dark:text-gray-300 text-2xl hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200"
            >
              <IoCartOutline />
              <div className="absolute -top-1 -right-1 bg-green-500 rounded-full h-4 w-4 flex justify-center items-center">
                <p className="text-[10px] text-white font-bold">
                  {cartData.length}
                </p>
              </div>
            </button>

            <CartModal
              isOpen={isCartModalOpen}
              setIsCartModalOpen={setIsCartModalOpen}
              userEmail={user?.email}
            />

            {/* User Profile / Login */}
            {!user ? (
              <LoginBtn/>
            ) : (
              <div className="relative user-dropdown">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center focus:outline-none user-avatar"
                >
                  <Image
                    src={
                      user?.image ||
                      "https://img.icons8.com/plasticine/100/user.png"
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
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
    </nav>
  );
};

export default Navbar;
