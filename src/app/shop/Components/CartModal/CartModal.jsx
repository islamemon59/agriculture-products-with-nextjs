// components/CartModal.jsx
"use client";

import Image from "next/image";
import { FaTimes, FaTrash, FaShoppingCart, FaEnvelope } from "react-icons/fa";

const CartModal = ({ isOpen, setIsCartModalOpen, cartItem, userEmail }) => {
  if (!isOpen || !cartItem) return null;

  const { name, image, final_price, quantity } = cartItem;

  const handleBuyNow = () => {
    // *** IMPORTANT: Implement your actual "Buy Now" logic here ***
    // This could navigate to a checkout page, trigger an immediate purchase flow,
    // or dispatch an action to a global state management (e.g., Redux, Zustand)
    console.log(
      `Buying ${quantity} x ${name} for ${final_price} for user: ${userEmail}`
    );
    setIsCartModalOpen(false); // Close modal after action
    // You might want to show a toast message like "Redirecting to checkout..."
  };

  const handleDeleteItem = () => {
    // *** IMPORTANT: Implement your actual "Delete Item" logic here ***
    // This should remove the specific item from the cart state in your parent component
    // or your global store.
    console.log(`Deleting ${name} from cart for user: ${userEmail}`);
    setIsCartModalOpen(false); // Close modal after action
    // You'd typically update a global cart state here and re-render the cart UI
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md relative transform transition-all duration-300 scale-100 opacity-100">
        {/* Close Button */}
        <button
          onClick={setIsCartModalOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200"
          aria-label="Close modal"
        >
          <FaTimes className="text-2xl" />
        </button>

        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
          <FaShoppingCart className="text-green-600" /> Item Added to Cart!
        </h2>

        {/* Product Details */}
        <div className="flex items-center gap-4 border-b pb-4 mb-4">
          <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
            <p className="text-lg text-gray-700">
              Price: <span className="font-bold">{final_price}</span>
            </p>
            <p className="text-lg text-gray-700">
              Quantity: <span className="font-bold">{quantity}</span>
            </p>
          </div>
        </div>

        {/* User Email */}
        <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-md mb-6">
          <FaEnvelope className="text-blue-500 text-xl" />
          <p className="text-lg text-gray-700">
            Your Email:{" "}
            <span className="font-semibold">
              {userEmail || "user@example.com"}
            </span>
            {/* Added a fallback email if userEmail is not provided */}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleBuyNow}
            className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white text-lg font-semibold py-3 rounded-md hover:bg-green-700 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Buy Now
          </button>
          <button
            onClick={handleDeleteItem}
            className="flex-1 flex items-center justify-center gap-2 bg-red-500 text-white text-lg font-semibold py-3 rounded-md hover:bg-red-600 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            <FaTrash className="text-xl" /> Remove Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
