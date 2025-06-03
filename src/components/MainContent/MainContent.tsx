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
    {/* Apply other style classes as needed */}
    <div className={styles.mainContent__section}>
      <h2 className={styles.mainContent__sectionTitle}>About Me</h2>
      <p className={styles.mainContent__paragraph}>{description}</p>
    </div>
    <div className={styles.mainContent__body}>
      <div className={styles.section}>
        <Experience />
      </div>
      <div className={styles.section}>
        <Projects />
      </div>
      <div className={styles.section}>
        <MyEducation />
      </div>
    </div>
  </div>
);

export default MainContent;
