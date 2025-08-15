import React from "react";

const HeroSection = ({ brandName }) => {
  return (
    <section className="text-center mb-16 bg-white p-12 md:p-20 rounded-3xl shadow-lg">
      <h1 className="text-5xl md:text-6xl font-extrabold text-stone-800 leading-tight mb-4">
        The Story Behind Our Farm
      </h1>
      <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto">
        At {brandName}, our journey is rooted in a deep-seated respect for the
        land and a passion for bringing fresh, wholesome products from our soil
        to your table.
      </p>
    </section>
  );
};

export default HeroSection;
