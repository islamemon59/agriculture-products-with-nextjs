import React from "react";
import Image from "next/image";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
const SingleProduct = ({
  product,
  handleAddToCart,
  renderStars,
  mainImage,
  setQuantity,
  quantity,
  setMainImage,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-r from-green-500 to-blue-500 shadow-md">
        <Image
          src={product?.image}
          alt={`Banner for ${product?.name}`}
          fill
          className="object-cover object-center opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white text-center drop-shadow-lg">
            {product?.name}
          </h1>
        </div>
      </div>
      <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Side: Product Details */}
          <div className="flex flex-col gap-8">
            {/* Main Product Image */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg border border-gray-200">
              <Image
                src={mainImage}
                alt={product?.name}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Thumbnail Images */}
            {product?.images && product?.images?.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product?.images.map((img, index) => (
                  <div
                    key={index}
                    className={`relative w-full aspect-square cursor-pointer rounded-lg overflow-hidden border-2 ${
                      mainImage === img ? "border-green-500" : "border-gray-200"
                    } hover:border-green-400 transition-all duration-200`}
                    onClick={() => setMainImage(img)}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Product Title and Basic Info */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {product?.name}
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                {product?.description}
              </p>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xl font-semibold text-gray-600">
                  Brand:
                </span>
                <span className="text-xl font-bold text-blue-700">
                  {product?.brand}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                {renderStars(product?.rating)}
                <span className="text-md text-gray-600">
                  ({product?.rating?.toFixed(1)} out of 5 stars)
                </span>
              </div>

              {/* Price Information */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-extrabold text-green-700">
                  {product?.final_price}
                </span>
                {product.discount > 0 && (
                  <>
                    <span className="text-xl line-through text-gray-400">
                      {product.price}
                    </span>
                    <span className="text-md bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold">
                      -{product.discount}% OFF
                    </span>
                  </>
                )}
              </div>

              {/* Stock and Category */}
              <div className="flex flex-col gap-2 mb-6 text-gray-700">
                <p className="text-lg">
                  <span className="font-semibold">Availability: </span>
                  {product.stock > 0 ? (
                    <span className="text-green-600 font-bold">
                      In Stock ({product.stock})
                    </span>
                  ) : (
                    <span className="text-red-600 font-bold">Out of Stock</span>
                  )}
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Category: </span>
                  <span className="text-purple-700 font-medium">
                    {product.category}
                  </span>
                </p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <label
                  htmlFor="quantity"
                  className="text-lg font-semibold text-gray-800"
                >
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  max={product.stock}
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(
                      Math.min(
                        product.stock,
                        Math.max(1, parseInt(e.target.value) || 1)
                      )
                    )
                  }
                  className="w-24 p-2 border border-gray-300 rounded-md text-center text-lg focus:ring-green-500 focus:border-green-500"
                />
              </div>

              {/* Buy Button */}
              {product.stock > 0 ? (
                <button
                  onClick={handleAddToCart}
                  className="w-full flex items-center justify-center gap-3 bg-green-600 text-white text-xl font-bold py-4 rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50"
                >
                  <FaCartPlus className="text-2xl" /> Add to Cart
                </button>
              ) : (
                <button
                  disabled
                  className="w-full flex items-center justify-center gap-3 bg-gray-400 text-white text-xl font-bold py-4 rounded-lg cursor-not-allowed"
                >
                  Out of Stock
                </button>
              )}
            </div>
          </div>

          {/* Right Side: Additional Relevant Details */}
          <div className="flex flex-col gap-8">
            {/* Shipping & Delivery Info */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MdOutlineLocalShipping className="text-green-600 text-3xl" />{" "}
                Shipping & Delivery
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>**Standard Delivery:** 3-5 business days</li>
                <li>
                  **Express Delivery:** 1-2 business days (Additional charges
                  apply)
                </li>
                <li>**Free Shipping:** On orders above ₹5000</li>
                <li>
                  **Cash on Delivery (COD):** Available for eligible areas.
                </li>
                <li>
                  **Returns:** 7-day easy returns (check policy for details)
                </li>
              </ul>
            </div>

            {/* Technical Specifications (if available) */}
            {product.technical_specs &&
              Object.keys(product.technical_specs).length > 0 && (
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Technical Specifications
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {Object.entries(product.technical_specs).map(
                      ([key, value]) => (
                        <li key={key}>
                          <span className="font-semibold">
                            {key
                              .replace(/_/g, " ")
                              .replace(/\b\w/g, (l) => l.toUpperCase())}
                            :
                          </span>{" "}
                          {value}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}

            {/* Key Benefits */}
            {product.benefits && product.benefits.length > 0 && (
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Key Benefits
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* What's in the Box */}
            {product.what_in_box && product.what_in_box.length > 0 && (
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  What's in the Box
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {product.what_in_box.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Related Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-300 transition-colors duration-200 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
