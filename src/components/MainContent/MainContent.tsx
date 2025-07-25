// MainContent.tsx
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
    <div className={styles.contentSections}>
      <section className={styles.section}>
        <MyInfo description={description} />
      </section>

      <section className={styles.section}>
        <Experience />
      </section>

      <section className={styles.section}>
        <Projects />
      </section>

      <section className={styles.section}>
        <Education />
      </section>
    </div>
  </main>
);

export default MainContent;
