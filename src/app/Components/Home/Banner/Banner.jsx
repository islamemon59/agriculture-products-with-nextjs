"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const Banner = () => {
  const slideData = [
    {
      title: "JF Privezy Grass Wall",
      subtitle: "The Perfect Blend Of Greenery",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1170&auto=format&fit=crop",
      link: "/shop/grass-wall",
    },
    {
      title: "Modern Outdoor Seating",
      subtitle: "Comfort Meets Contemporary Design",
      image:
        "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1074&auto=format&fit=crop",
      link: "/shop/outdoor-seating",
    },
    {
      title: "Elegant Garden Lights",
      subtitle: "Illuminate Your Nights Beautifully",
      image:
        "https://images.unsplash.com/photo-1684154739620-ef7b1e078d4d?q=80&w=1170&auto=format&fit=crop",
      link: "/shop/garden-lights",
    },
  ];

  return (
    <div className="relative w-full mx-auto mb-8 overflow-hidden rounded-lg">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[75vh] flex items-center justify-center text-center p-6"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Black overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>

              {/* Text Content */}
              <div className="relative z-10 text-white p-4 max-w-2xl">
                <h2 className="text-3xl sm:text-3xl md:text-6xl lg:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-base sm:text-lg mb-6 drop-shadow-md">
                  {slide.subtitle}
                </p>
                <Link
                  href={"/shop"}
                  className="inline-block px-8 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="swiper-prev absolute top-1/2 left-4 md:left-8 transform-translate-y-1/2 z-20 cursor-pointer bg-green-500 hover:bg-green-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-110">
        <IoArrowBack size={20} />
      </div>
      <div className="swiper-next absolute top-1/2 right-4 md:right-8 transform-translate-y-1/2 z-20 cursor-pointer bg-green-500 hover:bg-green-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-110">
        <IoArrowForward size={20} />
      </div>
    </div>
  );
};

export default Banner;
