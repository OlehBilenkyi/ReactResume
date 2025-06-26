import React from "react";

const projects = [
  {
    title: "E-commerce Platform Redesign",
    description:
      "Revamped the user interface and navigation of a leading e-commerce site, resulting in a 25% increase in sales.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYvz0-T82dcNajvw-_6YbzgtiD104cr3uFvmhMsyLEJGQHQ3B-QbdxwldZt3-Du5ZRhR7O5V9plDvrMaIZkjrk5YPMI0FFcdY4HMMDy7QksZqZE9uUrpuBvisFt-FnroBLXZPQ6TRj8KaRh4-6c0FCdjzI_-UynKVfXz1h-QrtVrX4rRQKHBZhwxWf45ZOFvKXBnAAl4tTPzXMNH3zpUzL7IAp5lo-GE4K8FlIh779ON6NQvfEGmu-jF5q_3cqeYyHQABnG_0eY2Y",
    link: "https://github.com/your-project-link",
  },
  {
    title: "Mobile Banking App Concept",
    description:
      "Conceptualized and designed a mobile banking application with a focus on ease of use and security.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAf5UZwe_Oy7hD7QY13bijGoah_-EwstW85eM0l_nQW-jqm97RoNeAUmDiAQakNO-lKg0z8ZbK7fAZlh73ked5FyVBaXiWxR8qpizukeKIaQRt78ysIfbwmvxNsAcDwzOOv60SLhh029PmM3OseYVGrgAWw3tyzOKpVx6BArVbNClHSkbhx0Q-lr6K_zbGpe9D332D-Li2LWMI52QqoVAxT_2CEOSI0I2nuQ1_ZORfkr64GHVqmeJPaEfJvMWeDXKINi3YIl-I68zY",
    link: "https://github.com/your-project-link",
  },
  {
    title: "Healthcare Portal UX",
    description:
      "Improved the user experience of a healthcare portal, making it more intuitive and accessible for patients.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDs8c3kzZByMerKDCSLCNja3F78inGLuZ7Dv4a9V_YxVTfPMQ-n5b4kNlxoM_6A9APAXSQ3TQ592zlMiXSVtZ6N5Ann4Dwmri1hE-DU50kIwB9DEF7j6pJPRjrKzkGKX9wwefT7UXwfohxYl4ktrVO4tFNa3mOuNbDBaidevEr9ypz5ubzZbd4foAG5XktIp8JKyl48UwOmDfJ9VxA2k3BWC2dbikYxKnaR3XbvwpwR9vfSJ8Na0Bl8Ogir9Yr88YWFwMvg9FnfzoA",
    link: "https://github.com/your-project-link",
  },
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="px-4 pb-8">
      <h2 className="text-white text-[22px] font-bold tracking-tight pb-4">
        Portfolio
      </h2>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-[280px] max-w-xs bg-[#18352c] rounded-xl shadow-md overflow-hidden flex-shrink-0"
          >
            <div
              className="aspect-video bg-cover bg-center"
              style={{ backgroundImage: `url('${project.image}')` }}
              aria-label={`Image for ${project.title}`}
              role="img"
            />
            <div className="p-4 flex flex-col gap-2 h-[220px]">
              <h3 className="text-white text-base font-semibold leading-snug">
                {project.title}
              </h3>
              <p className="text-[#8eccb9] text-sm leading-normal">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto h-10 px-4 bg-[#214a3d] hover:bg-[#2c5a4c] transition-colors text-white text-sm font-bold rounded-lg flex items-center justify-center"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
