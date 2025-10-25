import React, { useState } from "react";
import logo from "../../assets/images/Logo.png";
import menuIcon from "../../assets/images/menu.svg";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0e0e0e] text-white px-6 py-3 flex items-center justify-between relative">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-[194px] h-[45px]" />
      </div>

      <div className="hidden md:flex items-center gap-6">
        <a href="/" className="font-mono px-3 py-1 rounded-full bg-[#1c1c1c]">
          Home
        </a>
        <a href="/ser" className="font-mono hover:text-gray-300">
          Services
        </a>
        <a href="/pro" className="font-mono hover:text-gray-300">
          Projects
        </a>
        <a href="/about" className="font-mono hover:text-gray-300">
          About
        </a>
        <a href="/careers" className="font-mono hover:text-gray-300">
          Careers
        </a>
        <a href="/blog" className="font-mono hover:text-gray-300">
          Blog
        </a>
        <a href="/open" className="font-mono hover:text-gray-300">
          Blog Open
        </a>
        <a href="/contact" className="font-mono hover:text-gray-300">
          Contact Us
        </a>
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <img src={menuIcon} alt="menu" className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#1c1c1c] flex flex-col items-center gap-4 py-4 md:hidden z-50">
          <a href="/" className="font-mono px-3 py-1 rounded-full bg-[#1c1c1c]">
            Home
          </a>
          <a href="/ser" className="font-mono hover:text-gray-300">
            Services
          </a>
          <a href="/pro" className="font-mono hover:text-gray-300">
            Projects
          </a>
          <a href="/about" className="font-mono hover:text-gray-300">
            About
          </a>
          <a href="/careers" className="font-mono hover:text-gray-300">
            Careers
          </a>
          <a href="/blog" className="font-mono hover:text-gray-300">
            Blog
          </a>
          <a href="/open" className="font-mono hover:text-gray-300">
            Blog Open
          </a>
          <a href="/contact" className="font-mono hover:text-gray-300">
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
