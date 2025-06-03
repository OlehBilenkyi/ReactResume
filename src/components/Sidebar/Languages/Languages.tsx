import styles from "../ContactsLanguagesSummaryTechSkills.module.scss";

const Languages = () => (
  <div className={styles.skillsContainer}>
    <h3 className={styles.skillsTitle}>Languages</h3>
    <h4 className={styles.skillsList}>
      <p className={styles.skillsListItem}>Ukrainian - Native</p>
      <p className={styles.skillsListItem}>Polish: A2 (Basic)</p>
      <p className={styles.skillsListItem}>English - A2</p>
      <p className={styles.skillsListItem}>Russian - C2</p>
    </h4>
  </div>
);

export default Languages;
