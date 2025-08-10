"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

// This component displays a responsive banner with a Swiper carousel.
// The images are now set to a fixed 16:9 aspect ratio, ensuring they
// are all the same size and height across all slides.
// The Next.js Image component with `fill` and `object-cover` is used
// to make the images fill their containers without distortion.

const Banner = () => {
  const slideData = [
    {
      title: "JF Privezy Grass Wall",
      subtitle: "The Perfect Blend Of Greenery",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/shop/grass-wall",
    },
    {
      title: "Modern Outdoor Seating",
      subtitle: "Comfort Meets Contemporary Design",
      image:
        "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/shop/outdoor-seating",
    },
    {
      title: "Elegant Garden Lights",
      subtitle: "Illuminate Your Nights Beautifully",
      image:
        "https://images.unsplash.com/photo-1684154739620-ef7b1e078d4d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/shop/garden-lights",
    },
  ];

  return (
    <div className="relative w-full mx-auto mb-8">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: ".swiper-button",
          prevEl: ".swiper-button",
        }}
        loop
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index} className="">
            <div className="flex flex-col md:flex-row items-center md:px-14 bg-[#F2F4F6] dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm h-[80vh] md:max-h-[70vh]">
              <div className="w-full md:w-1/2 p-8 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {slide.subtitle}
                </p>
                <Link href="/shop" className="inline-block my-button">
                  Shop Now
                </Link>
              </div>
              {/* Image container with a fixed aspect ratio */}
              <div className="relative w-full md:w-1/2 p-4 aspect-[16/11]">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="swiper-button absolute top-1/2 left-0 md:left-2 transform -translate-y-1/2 z-10 cursor-pointer bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
        <IoArrowBack size={24} />
      </div>
      <div className="swiper-button absolute top-1/2 right-0 md:right-2 transform -translate-y-1/2 z-10 cursor-pointer bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
        <IoArrowForward size={24} />
      </div>
    </div>
  );
};

export default Banner;
