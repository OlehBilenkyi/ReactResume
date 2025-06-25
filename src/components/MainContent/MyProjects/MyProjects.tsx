import React from "react";

interface ProjectItemProps {
  title: string;
  time: string;
  description: string[];
  imageUrl?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  time,
  description,
  imageUrl,
}) => (
  <div className="bg-[#1c302b] rounded-xl overflow-hidden shadow-lg flex flex-col">
    {imageUrl && (
      <div
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
    )}
    <div className="p-5 flex-1 flex flex-col">
      <h3 className="text-white text-lg font-semibold">{title}</h3>
      <p className="text-secondaryText text-sm mb-3">{time} | Remote</p>
      <ul className="flex-1 space-y-1 mb-4">
        {description.map((item, i) => (
          <li key={i} className="text-secondaryText text-sm">
            • {item}
          </li>
        ))}
      </ul>
      <button className="self-start bg-accent text-primaryBg px-4 py-2 rounded-full font-bold hover:opacity-90 transition">
        View Details
      </button>
    </div>
  </div>
);

const MyProjects: React.FC = () => (
  <section className="section bg-primaryBg text-white py-12">
    <h2 className="section-title text-2xl font-bold mb-6">Projects</h2>
    <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
      {/* Вставьте ваши ProjectItem */}
    </div>
  </section>
);
export default MyProjects;
