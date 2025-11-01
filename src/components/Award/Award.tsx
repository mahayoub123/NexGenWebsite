import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Award: React.FC = () => {
  const aw = useSelector((state: RootState) => state.award);

  return (
    <section className="bg-[#0d0d0d] text-white py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-roboto text-3xl md:text-4xl font-bold text-white">
          Awards & Recognitions
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {aw.map((aw) => (
          <div
            key={aw.id}
            className="bg-[#141414] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="font-mono text-gray-800">
                  <img src={aw.img} alt="btn" />
                </div>
                <h3 className="font-roboto text-lg font-semibold">
                  {aw.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm font-roboto">{aw.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Award;
