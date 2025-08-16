"use client";
import CartModal from "@/app/shop/Components/CartModal/CartModal";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import LoginBtn from "../LoginBtn/LoginBtn";
import UserLoginProfile from "../UserLoginProfile/UserLoginProfile";
import { useRouter } from "next/navigation";

const NavbarCart = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const router = useRouter();
  const [cartData, setCartData] = useState([]);
  const { data: session } = useSession();
  const user = session?.user;

  // Direct DB fetch every time modal opens or user adds to cart
  const fetchCart = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/cart?email=${user?.email}`
      );
      const data = await res.json();
      router.refresh();
      setCartData(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  useEffect(() => {
    if (cartData) {
      fetchCart();
    }
  }, [user, isCartModalOpen]);

  return (
    <div>
      <div className="flex items-center space-x-4 sm:space-x-6">
        <button
          onClick={() => {
            setIsCartModalOpen(!isCartModalOpen);
            fetchCart(); // refresh count immediately
          }}
          className="text-gray-600 relative dark:text-gray-300 text-2xl hover:text-green-500 dark:hover:text-green-400 transition-colors duration-200"
        >
          <IoCartOutline />
          <div className="absolute -top-1 -right-1 bg-green-500 rounded-full h-4 w-4 flex justify-center items-center">
            <p className="text-[10px] text-white font-bold">
              {cartData?.length}
            </p>
          </div>
        </button>

        <CartModal
          isOpen={isCartModalOpen}
          setIsCartModalOpen={setIsCartModalOpen}
        />

        {!user ? <LoginBtn /> : <UserLoginProfile />}
      </div>
    </div>
  );
};

export default NavbarCart;
