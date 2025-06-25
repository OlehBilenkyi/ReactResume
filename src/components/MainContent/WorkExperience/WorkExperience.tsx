import React from "react";

const Experience = () => (
  <section className="section bg-primaryBg text-white py-12">
    <h2 className="section-title text-2xl font-bold mb-6">Work Experience</h2>
    <div className="container mx-auto space-y-8 px-5">
      {/* Пример одной записи */}
      <div className="flex items-start space-x-4">
        <div className="flex flex-col items-center">
          <div className="w-4 h-4 bg-accent rounded-full"></div>
          <div className="w-px bg-[#396056] flex-1"></div>
        </div>
        <div>
          <p className="text-secondaryText text-sm mb-1">
            February 2023 – Present
          </p>
          <h3 className="text-white text-lg font-semibold">
            Junior JavaScript Developer (Internship)
          </h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-secondaryText text-sm">
            <li>Developed and maintained web applications…</li>
            {/* и т.д. */}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
export default Experience;
