// Sidebar.tsx
import React from "react";
import styles from "./Sidebar.module.scss";
import Contacts from "./Contacts/Contacts";
import Languages from "./Languages/Languages";
import Skills from "./SoftSkills/SoftSkills";
import TechSkills from "./TechSkills/TechSkills";
import Avatar from "./Avatar/Avatar";

const Sidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.avatarContainer}>
        <Avatar />
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Contacts</h3>
        <Contacts />
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Technical Skills</h3>
        <TechSkills />
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Skills</h3>
        <Skills />
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Languages</h3>
        <Languages />
      </div>
    </aside>
  );
};

export default Sidebar;
