import Image from "next/image";
import React from "react";
import { FaRegCheckCircle, FaThLarge } from "react-icons/fa";
const WhyUsSection = () => {
  return (
    <section className="py-16 max-w-7xl mx-auto px-4 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Why Us</h2>
        <p className="text-lg max-w-3xl mx-auto mb-12">
          We specialize in delivering durable and innovative fencing solutions
          built to last. With a focus on quality and trust, we help secure
          spaces across industries and communities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative group p-8 rounded-lg hover:text-white shadow-lg bg-gradient-to-br from-blue-50 to-blue-100  transition-all duration-300 hover:-translate-y-2 hover:from-[#0f2c4e] hover:to-[#071523]">
            <div className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-dashed border-gray-400 dark:border-gray-500 mx-auto mb-4">
              <FaRegCheckCircle
                size={32}
                className="text-blue-600 dark:text-blue-400"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Unmatched Durability with Corrosion-Free Technology
            </h3>
            <p className="dark:text-blue-200">
              Our JF-270 barbed wire features a robust 270 GSM zinc coating,
              ensuring superior resistance against rust and corrosion. Paired
              with stainless steel binding wire, our fencing solutions are
              designed to withstand harsh environmental conditions, offering
              longevity and reliability.
            </p>
          </div>

          <div className="relative group p-8 rounded-lg hover:text-white shadow-lg bg-gradient-to-br from-blue-50 to-blue-100  transition-all duration-300 hover:-translate-y-2 hover:from-[#0f2c4e] hover:to-[#071523]">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4">
              <Image
                src="https://i.ibb.co/ymsctprx/Frame-3.png"
                width={70}
                height={70}
                alt="icon"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Customer-Centric Approach
            </h3>
            <p className="dark:text-blue-200">
              At JF Products, customer satisfaction is paramount. We pride
              ourselves on delivering timely services, maintaining transparent
              communication, and ensuring a seamless purchasing experience. Our
              commitment to excellence is reflected in the positive feedback
              from our valued clients.
            </p>
          </div>

          <div className="relative group p-8 rounded-lg hover:text-white shadow-lg bg-gradient-to-br from-blue-50 to-blue-100  transition-all duration-300 hover:-translate-y-2 hover:from-[#0f2c4e] hover:to-[#071523]">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4">
              <Image
                src="https://i.ibb.co/39mWHLvD/Frame-4.png"
                width={70}
                height={70}
                alt="icon"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4">
              Innovative and Diverse Product Range
            </h3>
            <p className="dark:text-blue-200">
              We offer a wide array of fencing solutions, including Polyhex
              Mesh, Australian Trellis, and GI Poultry Mesh, catering to various
              needs from agricultural to residential applications. Our products
              combine functionality with aesthetic appeal, ensuring both
              security and style.
            </p>
          </div>
        </div>

        <button className="mt-12 px-8 py-3 bg-lime-500 text-white font-semibold rounded-full shadow-lg hover:bg-lime-600 transition-colors duration-300">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default WhyUsSection;
