import React from "react";
import heroImg from "../../assets/images/heroImg.png";

const Hero: React.FC = () => {
  return (
    <section className="bg-[#0d0d0d] text-white w-full">
      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h1 className=" font-roboto text-3xl md:text-4xl font-bold leading-snug">
            Digital Solutions That Drive Success
          </h1>
          <p className=" font-roboto text-gray-300 leading-relaxed text-sm md:text-base">
            At NexGen, we believe in the transformative power of digital
            solutions. Our team of experts is dedicated to helping businesses
            like yours thrive in the fast-paced digital landscape.
          </p>
        </div>

        <div className="flex justify-center relative">
          <img
            src={heroImg}
            alt="Hero Careers"
            className="w-full max-w-lg rounded-xl object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
