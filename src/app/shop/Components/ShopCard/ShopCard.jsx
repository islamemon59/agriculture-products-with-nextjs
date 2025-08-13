"use client";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ShopCard = ({ product }) => {
  const {
    _id,
    name,
    image,
    final_price,
    price,
    discount,
    rating,
    brand,
  } = product;

  // Add a defensive check for the rating
  const safeRating = rating ?? 0;

  const renderStars = () => {
    const stars = [];
    const full = Math.floor(safeRating);
    const half = safeRating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    for (let i = 0; i < full; i++)
      stars.push(<FaStar key={`f-${i}`} className="text-yellow-500 text-sm" />);
    if (half)
      stars.push(
        <FaStarHalfAlt key="half" className="text-yellow-500 text-sm" />
      );
    for (let i = 0; i < empty; i++)
      stars.push(
        <FaRegStar key={`e-${i}`} className="text-yellow-500 text-sm" />
      );

    return stars;
  };

  return (
    <Link href={`/shop/${_id}`}>
      <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer p-5 flex flex-col gap-4 h-full">
        {/* Product Image */}
        <div className="w-full aspect-square relative overflow-hidden rounded-lg border border-gray-100">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {discount > 0 && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              -{discount}%
            </span>
          )}
        </div>

        {/* Product Information */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 line-clamp-2 leading-tight mb-1 group-hover:text-green-600 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{brand}</p>

          {/* Rating */}
          {rating !== undefined && (
            <div className="flex items-center gap-1 mb-2">
              {renderStars()}
              <span className="text-xs text-gray-500 ml-1">
                ({safeRating.toFixed(1)})
              </span>
            </div>
          )}

          {/* Price Information */}
          <div className="flex items-baseline gap-2 mt-auto">
            <span className="text-2xl font-extrabold text-green-700">
              {final_price}
            </span>
            {discount > 0 && (
              <span className="text-base line-through text-gray-400">
                {price}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShopCard;
