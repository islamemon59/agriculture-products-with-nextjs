// components/MarqueeBanner.jsx

import React from "react";
import Marquee from "react-fast-marquee";
import { BsBank2 } from "react-icons/bs";

const MarqueeProducts = () => {
  return (
    <div className="w-full bg-sky-200 py-3 border-y-2 border-blue-600 transform -rotate-2 overflow-hidden my-16">
      <Marquee speed={80} gradient={false} pauseOnHover={true}>
        <div className="flex items-center gap-12 px-12">
          <p className="text-xl font-semibold text-slate-800">
            Quality Product
          </p>
          <BsBank2 className="text-4xl text-slate-800" />
        </div>
        <div className="flex items-center gap-12 px-12">
          <p className="text-xl font-semibold text-slate-800">
            Shipping Across India
          </p>
          <BsBank2 className="text-4xl text-slate-800" />
        </div>
        <div className="flex items-center gap-12 px-12">
          <p className="text-xl font-semibold text-slate-800">
            Quality Product
          </p>
          <BsBank2 className="text-4xl text-slate-800" />
        </div>
        <div className="flex items-center gap-12 px-12">
          <p className="text-xl font-semibold text-slate-800">
            Shipping Across India
          </p>
          <BsBank2 className="text-4xl text-slate-800" />
        </div>
                <div className="flex items-center gap-12 px-12">
          <p className="text-xl font-semibold text-slate-800">
            Quality Product
          </p>
          <BsBank2 className="text-4xl text-slate-800" />
        </div>
                <div className="flex items-center gap-12 px-12">
          <p className="text-xl font-semibold text-slate-800">
            Shipping Across India
          </p>
          <BsBank2 className="text-4xl text-slate-800" />
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeProducts;
