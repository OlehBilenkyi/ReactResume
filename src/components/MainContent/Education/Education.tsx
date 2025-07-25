import React from "react";
import styles from "./Education.module.scss";

const MyEducation: React.FC = () => {
  return (
    <div className={styles.education}>
      <div className={styles["education-header"]}>
        <h2 className={styles["education-header__title"]}>
          ОБРАЗОВАНИЕ И ПРАКТИКА
        </h2>
      </div>

      {/* <div className={styles.education__container}>
        <h3 className={styles.education__title}>
          Self-Taught Frontend Development
        </h3>
        <p className={styles.education__institution}>
          Resources: YouTube (GO-IT, Net Ninja), JavaScript.info, freeCodeCamp,
          ChatGPT.
        </p>

        <ul className={styles.education__list}>
          <li className={styles.education__listItem}>
            Focused on HTML, CSS, JavaScript (ES6+), React fundamentals
          </li>
          <li className={styles.education__listItem}>
            Completed projects in both frontend development
          </li>
        </ul>
        <p className={styles.education__period}>2022 - Present</p>
      </div> */}

      <div className={styles.education__container}>
        <h3 className={styles.education__title}>Formal Education</h3>
        <h4 className={styles.education__institution}>
          <a
            href="https://nuos.edu.ua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Admiral Makarov National University of Shipbuilding, Mykolaiv,
            Ukraine
          </a>
        </h4>
        <p className={styles.education__resources}>
          Master's Degree (with Honors), Electrical Engineering
        </p>
        <p className={styles.education__period}>September 2010 – June 2018</p>
      </div>
    </div>
  );
};

export default MyEducation;
