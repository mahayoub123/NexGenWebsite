import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";

const Open: React.FC = () => {
  const open = useSelector((state: RootState) => state.open);

  return (
    <section className="bg-[#0d0d0d] text-white py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-roboto text-3xl md:text-4xl font-bold text-white">
          Related Blogs
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {open.map((item) => (
          <div
            key={item.id}
            className="bg-[#141414] p-6 rounded-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full">
              <div className="mb-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="font-roboto text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm font-roboto mb-4">
                  {item.desc}
                </p>
              </div>

              <button className="font-mono text-sm text-gray-900 bg-white px-4 py-2 rounded-2xl hover:bg-gray-200 transition">
                Read Full Blog
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Open;
