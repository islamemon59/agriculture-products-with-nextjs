'use client';

import { GiStarKey } from 'react-icons/gi';
import { FaGoogle } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';

const TrustedCustomer = () => {
  return (
    <section className="relative text-white bg-[#002B55] sm:h-[332px] py-12 px-4 overflow-hidden rounded-lg shadow-xl mx-auto max-w-7xl mt-12 mb-12">
      <h2 className="text-4xl md:text-[42px] font-bold text-center mb-10 tracking-wide">
        Trusted by over 6K+ customers
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Premium Products */}
        <div className="flex flex-row gap-5 items-center">
          <div className="bg-white rounded-full p-4 mb-4 shadow-md dark:bg-gray-800 dark:text-lime-400">
            <GiStarKey className="text-blue-700 text-4xl dark:text-lime-400" />
          </div>
          <div className="text-start">
            <h3 className="text-[28px] font-medium mb-2">Premium</h3>
            <p className="text-[22px] text-gray-200 dark:text-gray-300">Products</p>
          </div>
        </div>

        {/* Google Review */}
        <div className="flex flex-row gap-5 items-center">
          <div className="bg-white rounded-full p-4 mb-4 shadow-md dark:bg-gray-800 dark:text-lime-400">
            <FaGoogle className="text-blue-700 text-4xl dark:text-lime-400" />
          </div>
          <div className="text-start">
            <h3 className="text-[28px] font-medium mb-2">4000+</h3>
            <p className="text-lg text-gray-200 dark:text-gray-300">Google Review</p>
          </div>
        </div>

        {/* Delivery Across India */}
        <div className="flex flex-row gap-5 items-center">
          <div className="bg-white rounded-full p-4 mb-4 shadow-md dark:bg-gray-800 dark:text-lime-400">
            <TbTruckDelivery className="text-blue-700 text-4xl dark:text-lime-400" />
          </div>
          <div className="text-start">
            <h3 className="text-2xl font-semibold mb-2">Delivery</h3>
            <p className="text-lg text-gray-200 dark:text-gray-300">Across India</p>
          </div>
        </div>
      </div>

      {/* Blurred Background Circle */}
      <div className="absolute -bottom-56 left-1/2 transform -translate-x-1/2 w-[500px] h-[400px] bg-white rounded-full opacity-10 blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default TrustedCustomer;
