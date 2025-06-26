import React from "react";

const experiences = [
  {
    date: "Feb 2023 - Present",
    title: "Junior JavaScript Developer at Tech Innovations Inc.",
    description:
      "Developed 5+ React applications with modern hooks. Reduced page load time by 30% through optimization. Implemented CI/CD pipeline for automated deployments.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2LvBcW54ksfDvX6-kP1NXTTmYbk3hjFQn7S6lUdqutpb4mNZOzThD_tsbBYmy4y5JjmTtJNw0aRB7a5ATLuULUz_5ZWfQ3ZhE20aN-03K0oabPP6V-FdJn4iFK6OKKFBcHmungXVI2KI8LW8V_WpcoJtsYPmkfia1CDCRNdDFbc9-xhR5Yrdl8WAq8Eat1lPonxB_nou1r0uWUNWC6CIHBxwjeScWJQigL2Sj8V3d8VKcPrdtbfZhMIYAXmJ53jBMObsqBmHUXz0",
  },
  {
    date: "Jun 2021 - Jan 2023",
    title: "Frontend Intern at Digital Solutions LLC",
    description:
      "Built responsive interfaces using Material UI. Collaborated on 3 commercial projects. Participated in Agile development process.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhfHVzq6YTUOclhn7nIHkUhNEE1KYV6sPwsqhLH2NmIss8nBpy4lU1WuFWmjvTKJbWEPWwph3gj9TzJfXCGztMfyoNzwbiICrgbHVZJkVJ4b3H8ZPcsIZOfN2oOLu3MjCt-mVUaKMwpJyQZBTRyTQmCRybVhjgh9A9e7NiAs_XsTFcGAO_sTXSnc9aNG_s8L-hqk9PyOuj8J00J07dTCJAxRh12iXhZAQ8fLeZrkHAyWx55Y0R6qCXXpxc76VOVSsN5jHJyiu-tbw",
  },
];

const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="px-4 pb-8">
      <h2 className="text-white text-[22px] font-bold tracking-tight pb-4">
        Work Experience
      </h2>
      <div className="flex flex-col gap-6">
        {experiences.map(({ date, title, description, image }, idx) => (
          <article
            key={idx}
            className="flex flex-col md:flex-row gap-4 bg-[#1a2d25] p-4 rounded-xl shadow-md"
          >
            <div className="flex-[2_2_0px] space-y-2">
              <p className="text-[#8eccb9] text-sm">{date}</p>
              <h3 className="text-white text-base font-semibold">{title}</h3>
              <p className="text-[#8eccb9] text-sm">{description}</p>
            </div>
            <div
              className="aspect-video w-full md:w-64 bg-center bg-cover bg-no-repeat rounded-lg"
              style={{ backgroundImage: `url('${image}')` }}
              role="img"
              aria-label="Company work preview"
            />
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
