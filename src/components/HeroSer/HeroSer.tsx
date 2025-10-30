import React from "react";
import heroImg from "../../assets/images/heroser.png";

const HeroSer: React.FC = () => {
  return (
    <section className="bg-[#0d0d0d] text-white w-full">
      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h1 className=" font-roboto text-3xl md:text-4xl font-bold leading-snug">
            Our Comprehensive Digital Solutions
          </h1>
          <p className=" font-roboto text-gray-300 leading-relaxed text-sm md:text-base">
            At NexGen, we offer a comprehensive suite of digital solutions
            designed to propel your business to new heights in the digital
            realm. With a team of skilled professionals, cutting-edge
            technologies, and a passion for innovation
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

export default HeroSer;
