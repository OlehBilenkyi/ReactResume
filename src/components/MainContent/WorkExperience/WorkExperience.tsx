import styles from "./WorkExperience.module.scss";

const Experience = () => (
  <div className={styles.experienceContainer}>
    <h2 className={styles.experienceTitle}>Work Experience</h2>
    <div className={styles.experienceItem}>
      <div className={styles.timeline}>
        <span className={styles.timelineDot} />
        <span className={styles.timelineLine} />
      </div>
      <div className={styles.experienceContent}>
        <p className={styles.dates}>February 2023 - Present</p>
        <h3 className={styles.company}>Remote</h3>
        <h4 className={styles.jobTitle}>
          Junior JavaScript Developer (Internship)
        </h4>
        <ul className={styles.detailsList}>
          <li className={styles.listItem}>
            Developed and maintained web applications including landing pages,
            small e-commerce platforms, and mobile apps
          </li>
          <li className={styles.listItem}>
            Integrated payment systems (Stripe API) and worked with various APIs
            (Google OAuth, Telegram)
          </li>
          <li className={styles.listItem}>
            Optimized performance of web services and managed server
            configurations
          </li>
          <li className={styles.listItem}>
            Created responsive web components and interactive user interfaces
            using modern JavaScript
          </li>
          <li className={styles.listItem}>
            Implemented security measures including CSRF protection and Google
            reCAPTCHA
          </li>
          <li className={styles.listItem}>
            Managed tasks using Trello and followed technical specifications
            (ToR)
          </li>
          <li className={styles.listItem}>
            Used Git for version control and Composer for PHP dependency
            management
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Experience;
