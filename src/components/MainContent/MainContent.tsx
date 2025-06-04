// MainContent.tsx
import MyInfo from "./MyInfo/MyInfo";
import Projects from "./MyProjects/MyProjects";
import Experience from "./WorkExperience/WorkExperience";
import styles from "./MainContent.module.scss";
import MyEducation from "./Education/Education";

type MainContentProps = {
  profession: string;
  name: string;
  description: string;
};

const MainContent: React.FC<MainContentProps> = ({
  profession,
  name,
  description,
}) => (
  <div className={styles.mainContent}>
    <MyInfo 
      profession={profession} 
      name={name} 
      description={description} 
    />
    
    <div className={styles.contentSections}>
      <section className={styles.section}>
        <Experience />
      </section>
      <section className={styles.section}>
        <Projects />
      </section>
      <section className={styles.section}>
        <MyEducation />
      </section>
    </div>
  </div>
);

export default MainContent;