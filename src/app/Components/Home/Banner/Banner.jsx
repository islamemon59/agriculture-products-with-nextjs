'use client';

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

const Banner = () => {
  const slideData = [
    {
      title: 'JF Privezy Grass Wall',
      subtitle: 'The Perfect Blend Of Greenery',
      image: 'https://i.ibb.co/b8h4vRC/image-8.png',
      link: '/shop/grass-wall',
    },
    {
      title: 'Modern Outdoor Seating',
      subtitle: 'Comfort Meets Contemporary Design',
      image: 'https://i.ibb.co/ynzDkzyX/image-9.png',
      link: '/shop/outdoor-seating',
    },
    {
      title: 'Elegant Garden Lights',
      subtitle: 'Illuminate Your Nights Beautifully',
      image: 'https://i.ibb.co/XkGhgDTG/14d4c05439f1c7858500fdaedda54932.jpg',
      link: '/shop/garden-lights',
    },
  ];

  return (
    <div className="relative w-full mx-auto mb-8">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
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
            <div className="flex flex-col md:flex-row items-center bg-[#F2F4F6] dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm md:max-h-[75vh]">
              <div className="w-full md:w-1/2 p-4">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-md aspect-square md:aspect-auto"
                />
              </div>

              <div className="w-full md:w-1/2 p-8 text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.link}
                  className="inline-block bg-lime-500 text-white font-bold py-3 px-8 rounded-full hover:bg-lime-600 transition-all duration-300 shadow-md"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="swiper-button-prev-custom absolute top-1/2 left-0 md:left-2 transform -translate-y-1/2 z-10 cursor-pointer bg-[#B0DD1D] hover:bg-lime-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
        <IoArrowBack size={24} />
      </div>
      <div className="swiper-button-next-custom absolute top-1/2 right-0 md:right-2 transform -translate-y-1/2 z-10 cursor-pointer bg-lime-400 hover:bg-lime-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
        <IoArrowForward size={24} />
      </div>
    </div>
  );
};

export default Banner;
