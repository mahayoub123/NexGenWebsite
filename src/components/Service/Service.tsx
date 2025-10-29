import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Service: React.FC = () => {
  const services = useSelector((state: RootState) => state.service);

  return (
    <section className="bg-[#0d0d0d] text-white py-16 px-6 md:px-20">
      {/* العنوان */}
      <div className="mb-12 text-center">
        <h2 className="font-roboto text-3xl md:text-4xl font-bold text-white">
          Our Services
        </h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          We provide a variety of creative and technical services to help you
          grow.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {services.map((item) => (
          <div
            key={item.id}
            className="bg-[#141414] p-6 md:p-10 rounded-2xl hover:scale-[1.03] transition-transform duration-300 ease-in-out shadow-lg flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={item.imag2}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
                <h3 className="font-roboto text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
              </div>

              <button className="flex items-center gap-2 text-black text-sm font-semibold px-3 py-2 rounded-lg sm:hidden hover:bg-gray-200 transition">
                <img src={item.img} alt="btn" className="w-4 h-4" />
                Book A Call
              </button>
            </div>

            <div className="flex flex-col justify-between ">
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-3">
                {item.desc}
              </p>
              <p className="text-white text-right text-sm md:text-base font-roboto">
                {item.desc2}
              </p>
            </div>

            <div className="mt-6 hidden sm:flex justify-end">
              <button className="flex items-center gap-2 bg-white text-black text-sm md:text-base font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                <img src={item.img} alt="btn" className="w-5 h-5" />
                Book A Call
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
