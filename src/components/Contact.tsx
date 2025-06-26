import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Contact
      </h2>
      <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">
        I'm always open to discussing new projects and opportunities. Feel free
        to reach out!
      </p>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <input
            placeholder="Your Email"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#214a3d] focus:border-none h-14 placeholder:text-[#8eccb9] p-4 text-base font-normal leading-normal"
            value=""
          />
        </label>
      </div>
      <div className="flex px-4 py-3 justify-start">
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#5ffac9] text-[#10231d] text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Send</span>
        </button>
      </div>
    </section>
  );
};

export default Contact;
