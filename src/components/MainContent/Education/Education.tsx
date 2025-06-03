import React from "react";
import styles from "./Education.module.scss";

const MyEducation: React.FC = () => {
  return (
    <>
      <div className={styles.educationContainer}>
        <h4 className={styles.educationTitle}>
          Self-Taught Frontend Development
        </h4>
        <p className={styles.educationDip}>
          Resources: YouTube (GO-IT, Net Ninja), JavaScript.info, freeCodeCamp,
          ChatGPT.
        </p>
        <p className={styles.workExperienceTime}>2022 - Present</p>
        <ul>
          <li>Focused on HTML, CSS, JavaScript (ES6+), React fundamentals</li>
          <li>Completed projects in both frontend development</li>
        </ul>
      </div>

      <div className={styles.educationContainer}>
        <h4 className={styles.educationTitle}>Education</h4>
        <h5 className={styles.nameEducation}>
          <a
            href="https://nuos.edu.ua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Admiral Makarov National University of Shipbuilding, Mykolaiv,
            Ukraine
          </a>
        </h5>
        <p className={styles.educationDip}>
          Master’s Degree (with Honors), Electrical Engineering
        </p>
        <p className={styles.workExperienceTime}>September 2010 – June 2018</p>
      </div>
    </>
  );
};

export default MyEducation;
