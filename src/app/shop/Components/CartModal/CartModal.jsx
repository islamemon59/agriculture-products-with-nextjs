"use client";
import toast from "react-hot-toast";
import ModalData from "./ModalData/ModalData";
import { useEffect, useState } from "react";

const CartModal = ({ isOpen, setIsCartModalOpen }) => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen]);


  if (!isOpen) return null;

  return (
    <ModalData
      cartData={cartData}
      setIsCartModalOpen={setIsCartModalOpen}
    />
  );
};

export default CartModal;
