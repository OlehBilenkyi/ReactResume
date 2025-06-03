import styles from "../ContactsLanguagesSummaryTechSkills.module.scss";

const TechSkills = () => (
  <div className={styles.skillsContainer}>
    <h3 className={styles.skillsTitle}>Tech Stack</h3>
    <h4 className={styles.skillsList}>
      <p className={styles.skillsListItem}>
        <strong>Languages & Libraries:</strong> HTML5, CSS3, JavaScript (ES6+),
        React (Hooks, Router), Bootstrap, SASS, TypeScript (basic), Redux
      </p>
      <p className={styles.skillsListItem}>
        <strong>Tools:</strong> Git, GitHub, Webpack, Vite, Figma, Trello,
        Chrome DevTools
      </p>
      <p className={styles.skillsListItem}>
        <strong>APIs & Backend:</strong> REST API, PHP (basic), MySQL (basic)
      </p>
      <p className={styles.skillsListItem}>
        <strong>UI Frameworks:</strong> Material UI (MUI), Bootstrap
      </p>
      <p className={styles.skillsListItem}>
        <strong>Soft Skills:</strong> Teamwork, communication, adaptability,
        self-motivation, time management
      </p>
    </h4>
  </div>
);

export default TechSkills;
