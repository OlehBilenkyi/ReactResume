import React from "react";
import styles from "./MainContent.module.scss";
import Experience from "./WorkExperience/WorkExperience";
import Projects from "./MyProjects/MyProjects";
import Education from "./Education/Education";
import MyInfo from "./MyInfo/MyInfo";

interface MainContentProps {
  description: string;
}

const MainContent: React.FC<MainContentProps> = ({ description }) => (
  <main className={styles.mainContent}>
    <MyInfo description={description} />
    <Experience />
    <Projects />
    <Education />
  </main>
);

export default MainContent;
