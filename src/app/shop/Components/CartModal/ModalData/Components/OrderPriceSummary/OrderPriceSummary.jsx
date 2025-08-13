"use client"
import React, { useMemo } from "react";

const OrderPriceSummary = ({cartData}) => {

      // Memoize the total price calculation to avoid re-calculating on every render
  const subtotal = useMemo(() => {
    return cartData?.reduce((acc, item) => {
      // Ensure price and quantity are numbers before calculating
      const price = parseFloat(item.product_price);
      if (!isNaN(price)) {
        return acc + price;
      }
      return acc;
    }, 0);
  }, [cartData]);

  // Define a fixed shipping fee for demonstration purposes
  const shippingFee = 40.0;

  // Calculate the total price including shipping
  const totalPrice = subtotal + shippingFee;

  return (
    <div>
      <div className="flex justify-between items-center text-lg text-gray-700 mb-2">
        <span>Subtotal ({cartData.length} items)</span>
        <span className="font-bold">₹{subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between items-center text-lg text-gray-700 mb-4">
        <span>Shipping</span>
        <span className="font-bold text-green-600">
          ₹{shippingFee.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between items-center text-2xl font-bold text-gray-900 pt-4 border-t border-blue-200">
        <span>Total</span>
        <span>₹{totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderPriceSummary;
