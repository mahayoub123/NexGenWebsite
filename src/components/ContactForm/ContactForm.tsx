import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0b0b0b] text-white px-4">
      <div className="w-full max-w-md bg-[#121212]/80 backdrop-blur-md rounded-2xl shadow-lg p-8 relative">
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Enter your First Name"
            className="w-full bg-[#1c1c1c] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <input
            type="text"
            placeholder="Enter your Last Name"
            className="w-full bg-[#1c1c1c] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <input
            type="text"
            placeholder="Enter your Phone Number"
            className="w-full bg-[#1c1c1c] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          />
          <textarea
            name=" text"
            id=""
            placeholder="Enter Your Message"
            className="w-full bg-[#1c1c1c] border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#b4ff00] transition"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#CE7D63] text-black font-semibold rounded-full py-3 hover:bg-[#a4ef00] transition"
          >
            Send Your Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
