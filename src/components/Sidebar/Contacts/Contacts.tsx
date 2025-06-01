


import React from "react";
import styles from "./Contacts.module.scss";
const Contacts: React.FC = () => (
  <div className={styles.contactContainer}>
    <h3 className={styles.contactsTitle}>Contacts</h3>

    <div className={styles.contactsItem}>
      <span className={styles.contactsTitle}>GitHub:</span>
      <a
        href="https://github.com/OlehBilenkyi"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactsLinks}
      >
        OlehBilenkyi
      </a>
    </div>

    <div className={styles.contactsItem}>
      <span className={styles.contactsTitle}>LinkedIn:</span>
      <a
        href="https://www.linkedin.com/in/oleh-bilenkyi-95a55b177/"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactsLinks}
      >
        Oleh Bilenkyi
      </a>
    </div>

    <div className={styles.contactsItem}>
      <span className={styles.contactsTitle}>Facebook:</span>
      <a
        href="https://www.facebook.com/profile.php?id=100005711576476"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactsLinks}
      >
        Oleh Bilenkyi
      </a>
    </div>

    <div className={styles.contactsItem}>
      <span className={styles.contactsTitle}>Email:</span>
      <a
        href="mailto:13eLuy@gmail.com"
        className={styles.contactsLinks}
      >
        13eLuy@gmail.com
      </a>
    </div>

    <div className={styles.contactsItem}>
      <span className={styles.contactsTitle}>Telegram:</span>
      <a
        href="https://t.me/OJIeja"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.contactsLinks}
      >
        @OJIeja
      </a>
    </div>

    <div className={styles.contactsItem}>
      <span className={styles.contactsTitle}>Phone:</span>
      <a
        href="tel:+380985745049"
        className={styles.contactsLinks}
      >
        +380985745049
      </a>
    </div>
  </div>
);

export default Contacts;