import React from "react";

const ProductDeleteButton = ({ handleDeleteItem, item }) => {
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
