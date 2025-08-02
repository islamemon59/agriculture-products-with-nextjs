"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    id: 1,
    name: "Antiqo Fence",
    price: "₹4,995.00",
    image: "https://i.ibb.co/VcRkPbxp/image-4.png",
  },
  {
    id: 2,
    name: "JF Australian Trellis",
    price: "₹499.00 – ₹1,589.00",
    image: "https://i.ibb.co/8L6M1Ckk/image-5.png",
  },
  {
    id: 3,
    name: "JF Polyhex Mesh",
    price: "₹1,260.00 – ₹10,750.00",
    image: "https://i.ibb.co/k2Yqr5vK/image-6.png",
  },
  {
    id: 4,
    name: "JF Privezy Grass Wall",
    price: "₹3,087.50 – ₹6,362.50",
    image: "https://i.ibb.co/Rk8LJV45/image-7.png",
  },
  {
    id: 5,
    name: "Greenhouse Plastic",
    price: "₹950.00 – ₹8,000.00",
    image:
      "https://i.ibb.co/xts57c74/VEVOR-Greenhouse-Film-24-x-50-ft-Polyethylene-6-Mil-Thickness-Plastic-Clear-UV-Resistant-Keep-Warmin.jpg",
  },
  {
    id: 6,
    name: "Shade Net",
    price: "₹300.00 – ₹2,500.00",
    image: "https://i.ibb.co/HDy5PMDX/71lce0dpw7-L-SS1000.jpg",
  },
];


const LandscapeProducts = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 relative">
      <h2 className="text-[38px] font-semibold text-gray-800 mb-8">
        Agricultural Products
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        navigation={{
          prevEl: ".swiper-button-prev-customs",
          nextEl: ".swiper-button-next-customs",
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-[#F2F4F6] p-4 rounded-lg shadow-md flex flex-col h-full hover:shadow-lg transition">
              <div className="relative w-full h-48 mb-4 rounded-md border border-gray-200 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  style={{ objectFit: "cover" }}
                  priority={false}
                />
              </div>
              <h3 className="text-lg font-semibold text-center text-[#1A1A1A] mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-center text-[#00000080] font-medium mb-4">
                {product.price}
              </p>
              <div className="mt-auto">
                <button className="bg-[#B0DD1D] hover:bg-lime-600 transition px-6 py-2 rounded-full text-sm font-medium text-[#1A1A1A]">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div
        className="swiper-button-prev-customs absolute top-[58%] left-3 -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer z-10 hover:bg-gray-100 transition"
        aria-label="Previous Slide"
      >
        <IoIosArrowBack size={22} className="text-gray-700" />
      </div>
      <div
        className="swiper-button-next-customs absolute top-[58%] right-3 -translate-y-1/2 bg-white p-2 rounded-full shadow-md cursor-pointer z-10 hover:bg-gray-100 transition"
        aria-label="Next Slide"
      >
        <IoIosArrowForward size={22} className="text-gray-700" />
      </div>
    </section>
  );
};

export default LandscapeProducts;
