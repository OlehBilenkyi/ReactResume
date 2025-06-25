// ContactSection.tsx
import React, { useState } from "react";
import { FaSearch, FaPlus, FaMinus, FaLocationArrow } from "react-icons/fa";

const ContactSection = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="section bg-primaryBg text-white py-12">
      <h2 className="section-title text-2xl font-bold mb-8">Get In Touch</h2>
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 px-5">
        {/* Map */}
        <div
          className="relative h-80 bg-cover bg-center rounded-xl"
          style={{ backgroundImage: "url(https://...)" }}
        >
          {/* markers */}
          <div className="absolute inset-0">
            <div className="relative h-full">
              <div className="absolute top-1/3 left-1/4 flex items-center space-x-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span className="text-secondaryText">Kyiv</span>
              </div>
              <div className="absolute bottom-1/4 right-1/4 flex items-center space-x-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span className="text-secondaryText">Warsaw</span>
              </div>
            </div>
          </div>
        </div>
        {/* Form */}
        <form className="space-y-4">
          {[
            {
              id: "name",
              label: "Your Name",
              type: "text",
              placeholder: "John Doe",
            },
            {
              id: "email",
              label: "Email Address",
              type: "email",
              placeholder: "john@example.com",
            },
          ].map((fld) => (
            <div key={fld.id}>
              <label htmlFor={fld.id} className="block mb-1">
                {fld.label}
              </label>
              <input
                id={fld.id}
                type={fld.type}
                placeholder={fld.placeholder}
                className="w-full rounded-lg bg-[#1c302b] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          ))}
          <div>
            <label htmlFor="message" className="block mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Your message here..."
              className="w-full rounded-lg bg-[#1c302b] py-2 px-4 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <button
            type="submit"
            className="mt-2 bg-accent text-primaryBg font-bold py-2 px-6 rounded-full hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* search & tools */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center mt-12 px-5 space-y-4 lg:space-y-0">
        {/* search */}
        <div className="flex items-center bg-[#1c302b] rounded-full py-2 px-4 w-full lg:w-1/2">
          <FaSearch className="text-secondaryText mr-2" />
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search for a location"
            className="w-full bg-transparent focus:outline-none placeholder-secondaryText"
          />
        </div>
        {/* zoom + locate */}
        <div className="flex items-center space-x-4">
          <button className="bg-[#1c302b] p-2 rounded-full shadow">
            <FaPlus className="text-white" />
          </button>
          <button className="bg-[#1c302b] p-2 rounded-full shadow">
            <FaMinus className="text-white" />
          </button>
          <button className="flex items-center bg-[#1c302b] px-4 py-2 rounded-full shadow space-x-2">
            <FaLocationArrow className="text-white" />
            <span className="text-white">My Location</span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
