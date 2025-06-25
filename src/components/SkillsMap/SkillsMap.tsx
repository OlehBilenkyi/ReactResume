import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import * as d3 from 'd3';

export const SkillsMap = () => {
  const skills = useSkills(); // Ваши данные из config/skills.ts

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