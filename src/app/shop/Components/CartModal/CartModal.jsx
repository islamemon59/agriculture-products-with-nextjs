"use client";
import ModalData from "./ModalData/ModalData";
import { useEffect, useState } from "react";

const CartModal = ({ isOpen, setIsCartModalOpen, cartItem }) => {
  if (!isOpen || !cartItem) return null;
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const fetchCartItem = async () => {
      try {
        const res = await fetch("/api/cart");
        const data = await res.json();
        setCartData(data);
        if (!res.ok) throw new Error(data.error || "Something went wrong");
      } catch (err) {
        console.error("Fetch Error:", err.message);
      }
    };

    fetchCartItem();
  }, []);

  const handleBuyNow = () => {
    setIsCartModalOpen(false);
  };

  const handleDeleteItem = () => {
    setIsCartModalOpen(false);
  };

  return (
    <ModalData
      cartData={cartData}
      setIsCartModalOpen={setIsCartModalOpen}
      handleBuyNow={handleBuyNow}
      handleDeleteItem={handleDeleteItem}
    />
  );
};

export default CartModal;
