"use client";
import { useEffect, useState } from "react";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";
import NavLinks from "./NavLinks/NavLinks";
import LoginBtn from "./LoginBtn/LoginBtn";
import MobileNavLinks from "./ModileNavLinks/MobileNavLinks";
import ToggleMenu from "./ToggleMenu/ToggleMenu";
import CartModal from "@/app/shop/Components/CartModal/CartModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  console.log(isCartModalOpen);
  const [cartData, setCartData] = useState([]);

  const { data: session, status } = useSession();
  const user = session?.user;

  useEffect(() => {
    const fetchCartItem = async () => {
      try {
        const res = await fetch("/api/cart");
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Something went wrong");

        setCartData(data);
      } catch (err) {
        console.error("Fetch Error:", err.message);
        toast.error("Failed to load cart.");
      }
    };

    fetchCartItem();
  }, []);


  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <ToggleMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>

          {/* left navlinks */}
          <NavLinks />
          {/* Right Side */}
          <div className="flex items-center space-x-5">
            {/* User */}
            {!user ? (
              <LoginBtn />
            ) : (
              <div className="relative" tabIndex={0}>
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
                  <div className="absolute right-[50%] -top-3 translate-[50%] mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-md p-4 z-50">
                    <div className="text-sm font-semibold text-black dark:text-white mb-1">
                      {user.name}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-300 mb-3">
                      {user.email}
                    </div>
                    <button
                      onClick={() => {
                        signOut();
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
            <div className="md:flex items-center space-x-5">
              <button className="text-black dark:text-white text-2xl hover:text-gray-700 dark:hover:text-gray-300">
                <IoSearchOutline />
              </button>
              <button
                onClick={() => setIsCartModalOpen(!isCartModalOpen)}
                className="text-black relative dark:text-white text-2xl hover:text-gray-700 dark:hover:text-gray-300"
              >
                <IoCartOutline />
                <div className="absolute -top-1 -right-1 bg-black rounded-full h-4 w-4 flex justify-center items-center">
                  <p className="text-[10px] text-white">
                    {cartData.length}
                  </p>
                </div>
              </button>
              <CartModal
                isOpen={isCartModalOpen}
                setIsCartModalOpen={setIsCartModalOpen}
                userEmail={user?.email}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="absolute bg-white z-50 px-4 pt-2 pb-4 space-y-1 w-full">
            <MobileNavLinks />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
