import React from "react";
import heroImg from "../../assets/images/heropro.png";

const HeroPro: React.FC = () => {
  return (
    <section className="bg-[#0d0d0d] text-white w-full">
      <div className="container mx-auto px-6 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="space-y-6">
          <h1 className=" font-roboto text-3xl md:text-4xl font-bold leading-snug">
            Empowering Your Digital Vision
          </h1>
          <p className=" font-roboto text-gray-300 leading-relaxed text-sm md:text-base">
            At NexGen, we are committed to empowering your digital vision with
            innovative solutions tailored to your unique needs. Our team of
            skilled professionals, coupled with cutting-edge technologies,
            ensures that we deliver exceptional results that elevate your online
            presence.
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

export default HeroPro;
