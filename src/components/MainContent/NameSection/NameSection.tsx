import React from "react";
import styles from "./NameSection.module.scss";

interface NameSectionProps {
  name: string;
  title?: string;
}

const NameSection: React.FC<NameSectionProps> = ({ name, title }) => {
  return (
    <div className={styles.nameSection}>
      <h1 className={styles.name}>{name}</h1>
      {title && <p className={styles.title}>{title}</p>}
    </div>
  );
};

export default NameSection;