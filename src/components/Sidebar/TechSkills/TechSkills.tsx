import styles from "./TechSkills.module.scss";

const TechSkills = () => (
  <div className={styles.skillsContainer}>
    <div className={styles.skillsList}>
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
    </div>
  </div>
);

export default TechSkills;
