// components/MarqueeBanner.jsx

import React from "react";
import Marquee from "react-fast-marquee";
import { BsBank2 } from "react-icons/bs";

const MarqueeProducts = () => {
  return (
    <div className="w-full bg-green-500 py-3 border-y-2 border-green-700 transform -rotate-2 overflow-hidden my-16">
      <Marquee speed={80} gradient={false} pauseOnHover={true}>
        <div className="flex items-center gap-12 px-12">
          <p className="text-xl font-semibold text-white">
            Quality Product
          </p>
          <BsBank2 className="text-4xl text-white" />
        </div>
        <div className="flex items-center gap-12 px-12">
          <p className="text-xl font-semibold text-white">
            Shipping Across India
          </p>
          <BsBank2 className="text-4xl text-white" />
        </div>
        <div className="flex items-center gap-12 px-12">
          <p className="text-xl font-semibold text-white">
            Quality Product
          </p>
          <BsBank2 className="text-4xl text-white" />
        </div>
        <div className="flex items-center gap-12 px-12">
          <p className="text-xl font-semibold text-white">
            Shipping Across India
          </p>
          <BsBank2 className="text-4xl text-white" />
        </div>
                <div className="flex items-center gap-12 px-12">
          <p className="text-xl font-semibold text-white">
            Quality Product
          </p>
          <BsBank2 className="text-4xl text-white" />
        </div>
                <div className="flex items-center gap-12 px-12">
          <p className="text-xl font-semibold text-white">
            Shipping Across India
          </p>
          <BsBank2 className="text-4xl text-white" />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeProducts;
