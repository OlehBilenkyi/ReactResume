import React, { useEffect, useState } from "react";
import {
  MyProjects,
  ProjName,
  MyProjectsList,
  ProjectItem,
  ProjectItemTitle,
  ProjectItemTech,
  ProjectDetails,
} from "./MyProjects.styled";
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

/**
 * Тип описания проекта
 */
export interface IProject {
  title: string;
  details: string[];
  tech: string;
}

/**
 * Поток с проектами (RxJS BehaviorSubject для реактивного обновления)
 */
const projects$ = new BehaviorSubject<IProject[]>([
  {
    title: "Meal Planner Pro",
    details: ["Calorie tracker with customizable meals and diet types."],
    tech: "React, Hooks, Firebase, Bootstrap, Chart.js",
  },
  {
    title: "RealEstateHub",
    details: ["Property listing platform with filters and mock backend."],
    tech: "React, SCSS, REST API",
  },
  {
    title: "StudyMate",
    details: ["Digital learning tracker with task/module management."],
    tech: "React, MUI, localStorage",
  },
  {
    title: "CryptoCompare",
    details: ["Live crypto rates with interactive charts."],
    tech: "React, REST API, CSS Modules",
  },
  {
    title: "Taxi — Smart Car Rental System",
    details: ["Secure platform with AI recommendations and Stripe payments."],
    tech: "PHP, JavaScript, MySQL, Docker",
  },
]);

/**
 * React компонент для отображения списка проектов
 * @returns JSX.Element
 */
const Projects: React.FC = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const subscription = projects$.subscribe(setProjects);
    return () => subscription.unsubscribe();
  }, []);

  return (
    <MyProjects role="region" aria-labelledby="projects-heading">
      <ProjName id="projects-heading">Sample Projects</ProjName>
      <MyProjectsList>
        {projects.map(({ title, details, tech }, idx) => (
          <ProjectItem key={idx} tabIndex={0}>
            <ProjectItemTitle title={`Project: ${title}`}>
              {title}
            </ProjectItemTitle>
            <ProjectDetails>
              {details.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
              <li>
                <ProjectItemTech>Tech: {tech}</ProjectItemTech>
              </li>
            </ProjectDetails>
          </ProjectItem>
        ))}
      </MyProjectsList>
    </MyProjects>
  );
};

export default Projects;
