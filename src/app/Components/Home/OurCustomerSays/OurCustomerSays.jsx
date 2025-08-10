"use client";
import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product",
    author: "Samuel Varughese",
    image: "https://i.ibb.co/8grhMbVV/image-43.png",
  },
  {
    quote:
      "Outstanding service! The team was highly professional and delivered exactly what was promised. My business has seen significant improvements since implementing their solutions.",
    author: "Jane Smith",
    image: "https://i.ibb.co/8grhMbVV/image-43.png",
  },
  {
    quote:
      "From start to finish, the experience was seamless. Great communication and an excellent end product. I couldn't be happier with the outcome.",
    author: "John Doe",
    image: "https://i.ibb.co/8grhMbVV/image-43.png",
  },
];

const OurCustomerSays = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const currentTestimonial = testimonials[currentTestimonialIndex];

  const goToPrevious = () => {
    setCurrentTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToDot = (index) => setCurrentTestimonialIndex(index);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Why Customers Love <span className="text-green-500">Us?</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left: Testimonial Content */}
          <div className="flex-1 rounded-2xl p-11 shadow-lg flex flex-col justify-between">
            <img
              src="https://i.ibb.co/7J5kpw39/download-1.png"
              alt="logo"
              className="mb-6 w-16 h-auto"
            />
            <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow">
              {currentTestimonial.quote}
            </p>
            <div className="flex justify-between items-center border-t border-gray-200 pt-6">
              <p className="text-gray-900 font-semibold text-lg">
                - {currentTestimonial.author}
              </p>
              <div className="flex space-x-4">
                {/* Prev */}
                <button
                  onClick={goToPrevious}
                  className="p-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                  aria-label="Previous Testimonial"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </button>
                {/* Next */}
                <button
                  onClick={goToNext}
                  className="p-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100"
                  aria-label="Next Testimonial"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Customer Image */}
          <div className="flex-shrink-0 w-full max-w-xs lg:w-80 rounded-2xl overflow-hidden shadow-lg relative p-4 bg-[#F2F4F6] flex flex-col justify-between">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.author}
              className="w-full h-[350px] object-cover rounded-xl"
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToDot(index)}
                  className={`h-2 w-2 rounded-full ${
                    index === currentTestimonialIndex
                      ? "bg-orange-400"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCustomerSays;
