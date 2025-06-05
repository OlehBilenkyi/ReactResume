import styles from "./SoftSkills.module.scss";

const SoftSkills = () => (
  <section
    className={styles.softSkillsContainer}
    aria-label="Soft skills description"
  >
    {/* <h2 className={styles.softSkillsTitle}>Soft Skills</h2> */}
    <div className={styles.softSkillsContent}>
      <p>
        Junior Front-End Developer with hands-on experience in React,
        JavaScript, and responsive design. Built 5+ applications with Firebase,
        REST APIs, and modern UI libraries. Passionate about clean code and
        user-friendly interfaces. Seeking a role to grow in a collaborative
        team.
      </p>
    </div>
  </section>
);

export default SoftSkills;
