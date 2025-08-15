import React from "react";

const StorySection = () => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl shadow-xl">
        <div>
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-6">
            Cultivating a Legacy of Goodness
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            For generations, our family has been tending to these fields. We
            started with a simple belief: that by working in harmony with
            nature, we could produce food that was not only delicious but also
            deeply nourishing. Our commitment to sustainable agriculture isn't a
            trend; it's a way of life passed down from our grandparents.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We believe in a future where healthy food is accessible to everyone.
            Every seed we plant, every harvest we gather, is a step towards that
            future. We're proud to share our journey with you and invite you to
            become a part of our story.
          </p>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1714287297882-2feb2d99d9bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Farmers harvesting crops"
            className="w-full h-auto rounded-2xl shadow-lg transform rotate-2 transition-transform duration-500 hover:rotate-0"
          />
          <div className="absolute top-0 -right-6 md:-right-12 w-32 h-32 bg-amber-200 rounded-full opacity-60 mix-blend-multiply blur-xl animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
