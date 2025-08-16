import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import PaymentButton from "../../PaymentButton/PaymentButton";
import ModalCloseButton from "./Components/ModalCloseButton/ModalCloseButton";
import ProductDeleteButton from "./Components/ProductDeleteButton/ProductDeleteButton";
import ContinueShoppingButton from "./Components/ContinueShoppingButton/ContinueShoppingButton";
import OrderPriceSummary from "./Components/OrderPriceSummary/OrderPriceSummary";

const ModalData = ({ setIsCartModalOpen, cartData, setCartData }) => {
  return (
    <div className="fixed inset-0 z-50 flex w-full items-center justify-center bg-gray-900/60 px-4 sm:px-6">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm sm:max-w-xl md:max-w-4xl relative transform transition-all duration-300 scale-100 opacity-100 font-sans p-4 sm:p-6 md:p-8">
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 sm:pb-6 border-b border-gray-200 mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 flex items-center gap-2 sm:gap-3">
            <FaShoppingCart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-green-600" />
            Your Shopping Cart
          </h2>
          <ModalCloseButton setIsCartModalOpen={setIsCartModalOpen} />
        </div>

        {/* Modal Content */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Cart Items List */}
          <div className="flex-1 space-y-4 md:space-y-6 max-h-[55vh] md:max-h-[60vh] overflow-y-auto pr-1 sm:pr-2">
            {cartData.length === 0 ? (
              <div className="text-center py-6 sm:py-10 text-gray-500 text-base sm:text-lg">
                Your cart is empty.
              </div>
            ) : (
              cartData.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-3 sm:p-4 rounded-lg bg-gray-50 shadow-sm"
                >
                  {/* Product Image */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-lg overflow-hidden border border-gray-200">
                    <Image
                      src={item.product_image}
                      alt={item.product_name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  {/* Product Details and Delete Button Container */}
                  <div className="flex-grow flex flex-col items-center sm:items-start text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                      {item.product_name}
                    </h3>
                    <p className="text-sm sm:text-md text-gray-600">
                      Price:{" "}
                      <span className="font-bold">₹{item.product_price}</span>
                    </p>
                    <p className="text-sm sm:text-md text-gray-600">
                      Quantity:{" "}
                      <span className="font-bold">{item.product_quantity}</span>
                    </p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <ProductDeleteButton
                      item={item}
                      cartData={cartData}
                      setCartData={setCartData}
                    />
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Cart Summary */}
          <div className="md:w-1/3 space-y-4 md:space-y-6">
            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 border-b pb-2 sm:pb-3 border-blue-200">
                Order Summary
              </h3>
              <OrderPriceSummary cartData={cartData} />
            </div>

            {/* Action Buttons */}
            <PaymentButton cartData={cartData} />
            <ContinueShoppingButton setIsCartModalOpen={setIsCartModalOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalData;
