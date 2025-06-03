import styles from "../ContactsLanguagesSummaryTechSkills.module.scss";

const Contacts = () => (
  <div className={styles.skillsContainer}>
    <h3 className={styles.skillsTitle}>Portfolio & Contacts</h3>
    <p className={styles.skillsListItem}>
      <span className={styles.skillsTitle}>GitHub:</span>
      <a
        className={styles.contactsLinks}
        href="https://github.com/OlehBilenkyi"
        target="_blank"
      >
        OlehBilenkyi
      </a>
    </p>
    <p className={styles.skillsListItem}>
      <span className={styles.skillsTitle}>LinkedIn:</span>
      <a
        className={styles.contactsLinks}
        href="https://www.linkedin.com/in/oleh-bilenkyi-95a55b177/"
        target="_blank"
      >
        Oleh Bilenkyi
      </a>
    </p>
    <p className={styles.skillsListItem}>
      <span className={styles.skillsTitle}>Facebook:</span>
      <a
        className={styles.contactsLinks}
        href="https://www.facebook.com/profile.php?id=100005711576476"
        target="_blank"
      >
        Oleh Bilenkyi
      </a>
    </p>
    <p className={styles.skillsListItem}>
      <span className={styles.skillsTitle}>Email:</span>
      <a className={styles.contactsLinks} href="mailto:13eLuy@gmail.com">
        I3eLuy@gmail.com
      </a>
    </p>
    <p className={styles.skillsListItem}>
      <span className={styles.skillsTitle}>Telegram:</span>
      <a className={styles.contactsLinks} href="https://t.me/OJIeja">
        @OJIeja
      </a>
    </p>
    <p className={styles.skillsListItem}>
      <span className={styles.skillsTitle}>Phone:</span>
      <a className={styles.contactsLinks} href="tel:+380985745049">
        +380985745049
      </a>
    </p>
  </div>
);

export default Contacts;
