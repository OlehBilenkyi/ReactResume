import React from "react";

const Portfolio = () => {
  return (
    <>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Portfolio
      </h2>
      <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-[#18352c] shadow-[0_0_4px_rgba(0,0,0,0.1)] min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYvz0-T82dcNajvw-_6YbzgtiD104cr3uFvmhMsyLEJGQHQ3B-QbdxwldZt3-Du5ZRhR7O5V9plDvrMaIZkjrk5YPMI0FFcdY4HMMDy7QksZqZE9uUrpuBvisFt-FnroBLXZPQ6TRj8KaRh4-6c0FCdjzI_-UynKVfXz1h-QrtVrX4rRQKHBZhwxWf45ZOFvKXBnAAl4tTPzXMNH3zpUzL7IAp5lo-GE4K8FlIh779ON6NQvfEGmu-jF5q_3cqeYyHQABnG_0eY2Y')",
              }}
            ></div>
            <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
              <div>
                <p className="text-white text-base font-medium leading-normal">
                  E-commerce Platform Redesign
                </p>
                <p className="text-[#8eccb9] text-sm font-normal leading-normal">
                  Revamped the user interface and navigation of a leading
                  e-commerce site, resulting in a 25% increase in sales.
                </p>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#214a3d] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">View Project</span>
              </button>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-[#18352c] shadow-[0_0_4px_rgba(0,0,0,0.1)] min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAf5UZwe_Oy7hD7QY13bijGoah_-EwstW85eM0l_nQW-jqm97RoNeAUmDiAQakNO-lKg0z8ZbK7fAZlh73ked5FyVBaXiWxR8qpizukeKIaQRt78ysIfbwmvxNsAcDwzOOv60SLhh029PmM3OseYVGrgAWw3tyzOKpVx6BArVbNClHSkbhx0Q-lr6K_zbGpe9D332D-Li2LWMI52QqoVAxT_2CEOSI0I2nuQ1_ZORfkr64GHVqmeJPaEfJvMWeDXKINi3YIl-I68zY')",
              }}
            ></div>
            <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
              <div>
                <p className="text-white text-base font-medium leading-normal">
                  Mobile Banking App Concept
                </p>
                <p className="text-[#8eccb9] text-sm font-normal leading-normal">
                  Conceptualized and designed a mobile banking application with
                  a focus on ease of use and security.
                </p>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#214a3d] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">View Project</span>
              </button>
            </div>
          </div>
          <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-[#18352c] shadow-[0_0_4px_rgba(0,0,0,0.1)] min-w-60">
            <div
              className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex flex-col"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDs8c3kzZByMerKDCSLCNja3F78inGLuZ7Dv4a9V_YxVTfPMQ-n5b4kNlxoM_6A9APAXSQ3TQ592zlMiXSVtZ6N5Ann4Dwmri1hE-DU50kIwB9DEF7j6pJPRjrKzkGKX9wwefT7UXwfohxYl4ktrVO4tFNa3mOuNbDBaidevEr9ypz5ubzZbd4foAG5XktIp8JKyl48UwOmDfJ9VxA2k3BWC2dbikYxKnaR3XbvwpwR9vfSJ8Na0Bl8Ogir9Yr88YWFwMvg9FnfzoA')",
              }}
            ></div>
            <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
              <div>
                <p className="text-white text-base font-medium leading-normal">
                  Healthcare Portal UX
                </p>
                <p className="text-[#8eccb9] text-sm font-normal leading-normal">
                  Improved the user experience of a healthcare portal, making it
                  more intuitive and accessible for patients.
                </p>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#214a3d] text-white text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">View Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
