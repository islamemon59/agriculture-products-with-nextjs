"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import { FaTimes, FaTrash, FaShoppingCart, FaCheckCircle } from "react-icons/fa";

const ModalData = ({
  setIsCartModalOpen,
  handleDeleteItem,
  handleBuyNow,
  cartData,
}) => {
  // Memoize the total price calculation to avoid re-calculating on every render
  const subtotal = useMemo(() => {
    return cartData.reduce((acc, item) => {
      // Ensure price and quantity are numbers before calculating
      const price = parseFloat(item.product_price);
      const quantity = parseInt(item.product_quantity);
      if (!isNaN(price) && !isNaN(quantity)) {
        return acc + price * quantity;
      }
      return acc;
    }, 0);
  }, [cartData]);

  // Define a fixed shipping fee for demonstration purposes
  const shippingFee = 40.00;

  // Calculate the total price including shipping
  const totalPrice = subtotal + shippingFee;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/60 bg-opacity-75 px-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-4xl relative transform transition-all duration-300 scale-100 opacity-100 font-sans">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-6 border-b border-gray-200 mb-6">
          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
            <FaShoppingCart className="h-8 w-8 text-blue-600" />
            Your Shopping Cart
          </h2>
          <button
            onClick={() => setIsCartModalOpen(false)}
            className="text-gray-500 hover:text-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-full"
            aria-label="Close modal"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Cart Items List */}
          <div className="flex-1 space-y-6 max-h-[60vh] overflow-y-auto pr-2">
            {cartData.length === 0 ? (
              <div className="text-center py-10 text-gray-500 text-lg">
                Your cart is empty.
              </div>
            ) : (
              cartData.map((item) => (
                <div key={item._id} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 shadow-sm">
                  {/* Product Image */}
                  <div className="relative w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={item.product_image}
                      alt={item.product_name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  {/* Product Details */}
                  <div className="flex-grow flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {item.product_name}
                      </h3>
                      <p className="text-md text-gray-600">
                        Price: <span className="font-bold">₹{item.product_price}</span>
                      </p>
                      <p className="text-md text-gray-600">
                        Quantity: <span className="font-bold">{item.product_quantity}</span>
                      </p>
                    </div>
                    {/* Remove Button */}
                    <button
                      onClick={() => handleDeleteItem(item._id)}
                      className="text-red-500 hover:text-red-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-300 rounded-full p-2"
                      aria-label={`Remove ${item.product_name} from cart`}
                    >
                      <FaTrash className="text-xl" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Summary */}
          <div className="md:w-1/3 space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-3 border-blue-200">Order Summary</h3>
              <div className="flex justify-between items-center text-lg text-gray-700 mb-2">
                <span>Subtotal ({cartData.length} items)</span>
                <span className="font-bold">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-lg text-gray-700 mb-4">
                <span>Shipping</span>
                <span className="font-bold text-green-600">₹{shippingFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-2xl font-bold text-gray-900 pt-4 border-t border-blue-200">
                <span>Total</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <button
              onClick={handleBuyNow}
              disabled={cartData.length === 0}
              className={`w-full flex items-center justify-center gap-2 text-lg font-semibold py-4 rounded-lg transition-all duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                ${cartData.length === 0 ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`}
            >
              <FaCheckCircle className="text-xl" />
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalData;
