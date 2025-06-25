import React, { useState, useEffect } from "react";

const techSkills: Record<string, string[]> = {
  Languages: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript (basic)"],
  Frameworks: ["React (Hooks, Router)", "Redux", "SASS", "Bootstrap", "MUI"],
  Tools: ["Git", "GitHub", "Webpack", "Vite", "Figma", "Trello", "DevTools"],
  Backend: ["REST API", "PHP (basic)", "MySQL (basic)"],
  Soft: ["Teamwork", "Adaptability", "Self-motivation", "Time management"],
};

const TechSkills: React.FC = () => {
  const cats = Object.keys(techSkills);
  const [active, setActive] = useState(cats[0]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
    const t = setTimeout(() => setFade(false), 300);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        {cats.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-3 py-1 rounded-full font-medium ${
              active === cat
                ? "bg-accent text-primaryBg"
                : "bg-[#1c302b] text-secondaryText"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div
        className={`grid grid-cols-2 gap-2 transition-opacity ${
          fade ? "opacity-30" : "opacity-100"
        }`}
      >
        {techSkills[active].map((item) => (
          <div
            key={item}
            className="px-4 py-2 bg-[#1c302b] rounded-lg text-secondaryText text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TechSkills;
