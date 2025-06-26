import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const skills = [
  { name: "React", level: 90 },
  { name: "Vue.js", level: 80 },
  { name: "JavaScript", level: 95 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "Next.js", level: 80 },
];

export const SkillsMap: React.FC = () => {
  return (
    <TransformWrapper>
      <TransformComponent>
        <svg width="800" height="600">
          {skills.map((skill, i) => (
            <circle
              key={i}
              cx={i * 100}
              cy={Math.random() * 400}
              r={skill.level / 10}
              fill="#5ffac9"
              onMouseEnter={() => console.log(skill.name)}
            />
          ))}
        </svg>
      </TransformComponent>
    </TransformWrapper>
  );
};
