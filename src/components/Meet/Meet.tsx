import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import twitterIcon from "../../assets/images/twitter.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";
import facebookIcon from "../../assets/images/facebook.svg";
const Meet: React.FC = () => {
  const meet = useSelector((state: RootState) => state.meet);

  return (
    <section className="bg-[#0d0d0d] text-white py-16 px-6 md:px-20">
      <div className="mb-12 text-center">
        <h2 className="font-roboto text-3xl md:text-4xl font-bold text-white">
          Meet the brilliant minds behind NexGen
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {meet.map((meet) => (
          <div
            key={meet.id}
            className="bg-[#141414] p-[50px] rounded-xl hover:scale-105 transition"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-roboto text-lg font-semibold">
                  {meet.title}
                </h3>
              </div>

              <p className="text-gray-400 text-sm font-roboto">{meet.desc}</p>
            </div>
            <div>
              <img src={meet.img} alt="img" className="w-full" />
            </div>
            <div className="flex gap-2 justify-center mt-5">
              <img src={twitterIcon} alt="icon" />
              <img src={linkedinIcon} alt="icon" />
              <img src={facebookIcon} alt="icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Meet;
