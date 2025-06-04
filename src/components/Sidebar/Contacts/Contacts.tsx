import styles from "./Contacts.module.scss";

const Contacts = () => (
  <div className={styles.skillsContainer}>
    
    <p className={styles.skillsListItem}>
      <span className={styles.skillsTitle}>GitHub:</span>
      <a
        className={styles.contactsLinks}
        href="https://github.com/OlehBilenkyi"
        target="_blank"
        rel="noopener noreferrer"
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
        rel="noopener noreferrer"
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
        rel="noopener noreferrer"
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
