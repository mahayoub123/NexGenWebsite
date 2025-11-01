import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Join: React.FC = () => {
  const join = useSelector((state: RootState) => state.join);

  return (
    <section className="bg-[#0d0d0d] text-white py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-roboto text-3xl md:text-4xl font-bold text-white">
          Join Our Team at NexGen
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {join.map((join) => (
          <div
            key={join.id}
            className="bg-[#141414] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="font-mono text-gray-800">
                  <img src={join.img} alt="btn" />
                </div>
                <h3 className="font-roboto text-lg font-semibold">
                  {join.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm font-roboto">{join.desc}</p>
              <button className="bg-[#CE7D63] text-black font-roboto w-full h-[45px] mt-3">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Join;
