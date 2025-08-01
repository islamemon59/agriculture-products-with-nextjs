'use client';

import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const ShopCard = ({ product }) => {
  const {
    name,
    slug,
    description,
    image,
    final_price,
    price,
    discount,
    rating,
    brand,
  } = product;

  const renderStars = () => {
    const stars = [];
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);

    for (let i = 0; i < full; i++) stars.push(<FaStar key={`f-${i}`} className="text-yellow-400" />);
    if (half) stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    for (let i = 0; i < empty; i++) stars.push(<FaRegStar key={`e-${i}`} className="text-yellow-400" />);

    return stars;
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-4 flex flex-col gap-3">
      <div className="w-full aspect-square relative overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover hover:scale-105 transition-transform"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold line-clamp-2">{name}</h3>
        <p className="text-sm text-gray-500">{brand}</p>
        <div className="flex gap-1">{renderStars()}</div>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-xl font-bold text-green-600">₹{final_price}</span>
          <span className="text-sm line-through text-gray-400">₹{price}</span>
          <span className="text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded">
            -{discount}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
