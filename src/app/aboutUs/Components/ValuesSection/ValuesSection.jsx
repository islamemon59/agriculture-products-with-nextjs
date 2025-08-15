import React from "react";
import ValueItem from "../ValueItem/ValueItem";

const ValuesSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-4xl font-bold text-center text-stone-800 mb-12">
        Our Core Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ValueItem
          icon="🌱"
          title="Sustainability"
          description="We use eco-friendly farming methods to ensure our land and our future remain healthy."
        />
        <ValueItem
          icon="👨‍🌾"
          title="Craftsmanship"
          description="Our work is a labor of love, combining traditional knowledge with modern innovation."
        />
        <ValueItem
          icon="🤝"
          title="Community"
          description="We're a part of our community and dedicated to supporting local farmers and artisans."
        />
      </div>
    </section>
  );
};

export default ValuesSection;
