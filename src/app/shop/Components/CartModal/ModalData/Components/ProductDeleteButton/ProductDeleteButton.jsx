"use client";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";

const ProductDeleteButton = ({ item, cartData, setCartData }) => {
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

        // ✅ Remove the item from cartData immediately
        const updatedCart = cartData.filter((cartItem) => cartItem._id !== id);
        setCartData(updatedCart);
      }
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Something went wrong while deleting.");
    }
  };

  return (
    <button
      onClick={() => handleDeleteItem(item._id)}
      className="text-red-500 hover:text-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 rounded-full p-2"
      aria-label={`Remove ${item.product_name} from cart`}
    >
      <FaTrash className="text-xl" />
    </button>
  );
};

export default ProductDeleteButton;
