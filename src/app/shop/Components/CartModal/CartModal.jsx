"use client";
import toast from "react-hot-toast";
import ModalData from "./ModalData/ModalData";
import { useEffect, useState } from "react";

const CartModal = ({ isOpen, setIsCartModalOpen }) => {
  const [cartData, setCartData] = useState([]);

  // Fetch cart data only when modal is open
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
  }, [isOpen]); // 👈 will refetch every time modal opens

  const handleBuyNow = () => {
    setIsCartModalOpen(false);
  };

  const handleDeleteItem = async (id) => {
    try {
      const res = await fetch(`/api/shop/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete item");
      }

      const data = await res.json();

      if (data.message) {
        toast.success("Item removed from cart");
        // 👇 Update UI instantly
        setCartData((prev) => prev.filter((item) => item._id !== id));
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Something went wrong while deleting.");
    }
  };

  if (!isOpen) return null;

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
