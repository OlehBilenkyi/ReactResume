import React from "react";

const MyEducation: React.FC = () => (
  <section className="section bg-primaryBg text-white py-12">
    <h2 className="section-title text-2xl font-bold mb-6">Education</h2>
    <div className="bg-[#1c302b] rounded-xl p-6 max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold mb-2">
        <a
          href="https://nuos.edu.ua/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Admiral Makarov National University of Shipbuilding, Mykolaiv, Ukraine
        </a>
      </h3>
      <p className="text-secondaryText mb-1">
        Master's Degree (with Honors), Electrical Engineering
      </p>
      <p className="text-secondaryText">September 2010 – June 2018</p>
    </div>
  </section>
);
export default MyEducation;
