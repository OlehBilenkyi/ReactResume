import React from "react";
import styles from "./MyProjects.module.scss";

interface ProjectItemProps {
  title: string;
  time: string;
  description: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  time,
  description,
}) => (
  <div className={styles.ProjectItem}>
    <h4 className={styles.ProjectTitle}>{title}</h4>
    <p className={styles.ProjectTime}>
      {time} <span className={styles.ProjectSeparator}>|</span> Remote
    </p>
    <ul className={styles.ProjectList}>
      <li className={styles.ProjectListItem}>{description}</li>
    </ul>
  </div>
);

const MyProjects: React.FC = () => (
  <>
    <div className={styles.MyProjectsContainer}>
      <h2 className={styles.MyProjectsTitle}>Projects</h2>
      <ProjectItem
        title="Front-End Developer (Personal Projects & Freelance)"
        time="Jan 2024 – Present"
        description="Developed 4 React applications with Firebase, APIs, and responsive design. Key projects: Meal Planner Pro, RealEstateHub."
      />
    </div>
    <div className={styles.MyProjectsContainer}>
      <ProjectItem
        title="Web Developer (Project Owner) | FoodCase Catering"
        time="Feb 2023 – Dec 2023"
        description="Full-cycle development of a smart catering system: UI/UX, admin dashboard, secure authentication."
      />
    </div>
  </>
);

export default MyProjects;
