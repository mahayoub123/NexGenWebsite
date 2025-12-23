import React from "react";
import icon1 from "../../assets/images/Icon1.svg";
import icon2 from "../../assets/images/Icon2.svg";
import icon3 from "../../assets/images/Icon3.svg";
import icon4 from "../../assets/images/Icon4.svg";
import logo from "../../assets/images/Logo.png";
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d0d0d] text-gray-300">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <div className="bg-[#CE7D63] p-6 md:p-10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h2 className=" font-roboto text-xl md:text-2xl font-semibold text-white">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className=" font-roboto mt-2 text-gray-400 text-sm md:text-base">
              Take the first step towards digital success with NexGen by your
              side. Our team of experts is eager to craft tailored solutions
              that drive growth for your business.
            </p>
          </div>
          <button className="font-roboto bg-[#0F0F0F] text-white px-6 py-2 rounded-full font-medium hover:bg-lime-300 transition">
            Get in touch
          </button>
        </div>
      </div>

      <div className="border-t border-gray-700 py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center gap-8">
          <div className="text-center">
            <img
              className="text-lime-400 text-2xl font-bold"
              src={logo}
              alt="logo"
            />
          </div>

          <ul className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <li className="font-roboto hover:text-lime-400 transition cursor-pointer">
              <a href="/">Home</a>
            </li>
            <li className="font-roboto hover:text-lime-400 transition cursor-pointer">
              <a href="/ser">Service</a>
            </li>
            <li className="font-roboto hover:text-lime-400 transition cursor-pointer">
              <a href="/pro">Projects</a>
            </li>
            <li className="font-roboto hover:text-lime-400 transition cursor-pointer">
              <a href="/blog">Blogs</a>
            </li>
          </ul>

          <div className="flex flex-col md:flex-row items-center gap-6 text-gray-400 text-sm">
            <p className="font-roboto"> hello@skillbridge.com</p>
            <p className="font-roboto"> +91 91813 23 2309</p>
            <p className="font-roboto">Somewhere in the World</p>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#151515] hover:bg-lime-400 hover:text-black transition"
            >
              <img src={icon1} alt="icon" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#151515] hover:bg-lime-400 hover:text-black transition"
            >
              <img src={icon2} alt="icon" />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#151515] hover:bg-lime-400 hover:text-black transition"
            >
              <img src={icon3} alt="icon" />
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#151515] hover:bg-lime-400 hover:text-black transition"
            >
              <img src={icon4} alt="icon" />
            </a>
          </div>

          <div className=" font-lexend flex flex-col md:flex-row justify-between items-center w-full text-xs text-gray-500 border-t border-gray-800 pt-6 gap-4">
            <p>
              © Debeloped by Front End Developer: Mahmoud Ayoub. All Rights
              Reserved
            </p>
            <div className="flex gap-4">
              <a href="#" className="font-lexend hover:text-lime-400">
                Privacy Policy
              </a>
              <a href="#" className="font-lexend hover:text-lime-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
