import styles from "./Languages.module.scss";

const Languages = () => (
  <div className={styles.skillsContainer}>
    <h3 className={styles.skillsTitle}>Languages</h3>
    <div className={styles.skillsList}>
      <p className={styles.skillsListItem}>Ukrainian - Native</p>
      <p className={styles.skillsListItem}>Polish: A2 (Basic)</p>
      <p className={styles.skillsListItem}>English - A2</p>
      <p className={styles.skillsListItem}>Russian - C2</p>
    </div>
  </div>
);

export default Languages;
