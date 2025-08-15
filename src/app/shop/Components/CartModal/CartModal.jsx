"use client";
import { useEffect, useState } from "react";
import ModalData from "./ModalData/ModalData";

const CartModal = ({ isOpen, setIsCartModalOpen }) => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (isOpen) {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart`, {
        cache: "no-store",
      })
        .then((res) => res.json())
        .then((data) => setCartData(data));
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalData
      cartData={cartData}
      setCartData={setCartData}
      setIsCartModalOpen={setIsCartModalOpen}
    />
  );
};

export default CartModal;
