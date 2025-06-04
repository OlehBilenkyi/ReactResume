import React from "react";
import styles from "./MyProjects.module.scss";

interface ProjectItemProps {
  title: string;
  time: string;
  description: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  time,
  description,
}) => (
  <div className={styles.ProjectItem}>
    <h3 className={styles.ProjectTitle}>{title}</h3>
    <p className={styles.ProjectTime}>
      {time} <span className={styles.ProjectSeparator}>|</span> Remote
    </p>
    <ul className={styles.ProjectList}>
      {description.map((item, index) => (
        <li key={index} className={styles.ProjectListItem}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const MyProjects: React.FC = () => (
  <>
    <h2 className={styles.MyProjectsTitle}>Projects</h2>
    <div className={styles.MyProjectsContainer}>
      <ProjectItem
        title="Front-End Developer (Personal Projects & Freelance)"
        time="Jan 2024 – Present"
        description={[
          "Developed 4 React applications with Firebase, APIs, and responsive design",
          "Key projects: Meal Planner Pro, RealEstateHub with modern UI/UX",
          "Implemented CI/CD pipelines for automated deployment",
        ]}
      />

      <ProjectItem
        title="Web Developer (Project Owner) | FoodCase Catering"
        time="Feb 2023 – Dec 2023"
        description={[
          "Full-cycle development of a smart catering system",
          "Created admin dashboard with analytics and reporting",
          "Implemented secure authentication and role-based access",
        ]}
      />
    </div>
  </>
);

export default MyProjects;
