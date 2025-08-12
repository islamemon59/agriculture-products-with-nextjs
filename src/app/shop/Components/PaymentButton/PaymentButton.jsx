"use client";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";

const PaymentButton = ({ cartData }) => {
  console.log(cartData);
  const { data: session } = useSession();
  const user = session?.user;

  const { totalPrice, totalQuantity } = cartData.reduce(
    (acc, item) => {
      acc.totalPrice += item.product_price;
      acc.totalQuantity += item.product_quantity;
      return acc;
    },
    { totalPrice: 0, totalQuantity: 0 }
  );

  console.log(totalPrice, totalQuantity);

  const handleBuyNow = async () => {
    const paymentData = {
      email: user.email,
      price: totalPrice,
      quantity: totalQuantity,
      transactionId: "",
      date: new Date(),
      status: "pending",
    };

    try {
      const res = await fetch("http://localhost:3000/api/sslcommerz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentData),
      });

      const data = await res.json();
      console.log(data);

      if (data?.gatewayUrl
) {
        window.location.href = data.gatewayUrl
; // redirect to payment page
      } else {
        toast.error("Failed to initiate payment");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button
        onClick={handleBuyNow}
        disabled={cartData.length === 0}
        className={`w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
        ${
          cartData.length === 0
            ? "bg-gray-200 text-gray-500 cursor-not-allowed border border-gray-300" // Lighter disabled state
            : "bg-gradient-to-r from-green-500 to-green-700 text-white hover:from-green-600 hover:to-green-800 focus:ring-green-500 transform hover:-translate-y-0.5" // Vibrant green for action, subtle lift
        }`}
      >
        <FaShoppingCart className="text-xl" /> {/* Shopping cart icon */}
        Proceed to Checkout
      </button>
    </div>
  );
};

export default PaymentButton;
