import React from "react";

const WorkExperience = () => {
  return (
    <>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Work Experience
      </h2>
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-lg">
          <div className="flex flex-col gap-1 flex-[2_2_0px]">
            <p className="text-[#8eccb9] text-sm font-normal leading-normal">
              Feb 2023 - Present
            </p>
            <p className="text-white text-base font-bold leading-tight">
              Junior JavaScript Developer at Tech Innovations Inc.
            </p>
            <p className="text-[#8eccb9] text-sm font-normal leading-normal">
              Developed 5+ React applications with modern hooks. Reduced page
              load time by 30% through optimization. Implemented CI/CD pipeline
              for automated deployments.
            </p>
          </div>
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD2LvBcW54ksfDvX6-kP1NXTTmYbk3hjFQn7S6lUdqutpb4mNZOzThD_tsbBYmy4y5JjmTtJNw0aRB7a5ATLuULUz_5ZWfQ3ZhE20aN-03K0oabPP6V-FdJn4iFK6OKKFBcHmungXVI2KI8LW8V_WpcoJtsYPmkfia1CDCRNdDFbc9-xhR5Yrdl8WAq8Eat1lPonxB_nou1r0uWUNWC6CIHBxwjeScWJQigL2Sj8V3d8VKcPrdtbfZhMIYAXmJ53jBMObsqBmHUXz0')",
            }}
          ></div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-stretch justify-between gap-4 rounded-lg">
          <div className="flex flex-col gap-1 flex-[2_2_0px]">
            <p className="text-[#8eccb9] text-sm font-normal leading-normal">
              Jun 2021 - Jan 2023
            </p>
            <p className="text-white text-base font-bold leading-tight">
              Frontend Intern at Digital Solutions LLC
            </p>
            <p className="text-[#8eccb9] text-sm font-normal leading-normal">
              Built responsive interfaces using Material UI. Collaborated on 3
              commercial projects. Participated in Agile development process.
            </p>
          </div>
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhfHVzq6YTUOclhn7nIHkUhNEE1KYV6sPwsqhLH2NmIss8nBpy4lU1WuFWmjvTKJbWEPWwph3gj9TzJfXCGztMfyoNzwbiICrgbHVZJkVJ4b3H8ZPcsIZOfN2oOLu3MjCt-mVUaKMwpJyQZBTRyTQmCRybVhjgh9A9e7NiAs_XsTFcGAO_sTXSnc9aNG_s8L-hqk9PyOuj8J00J07dTCJAxRh12iXhZAQ8fLeZrkHAyWx55Y0R6qCXXpxc76VOVSsN5jHJyiu-tbw')",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default WorkExperience;
