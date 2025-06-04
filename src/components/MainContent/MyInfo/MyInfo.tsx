// MyInfo.tsx
import React from "react";
import styles from "./MyInfo.module.scss";

type MyInfoProps = {
  profession: string;
  name: string;
  description: string;
};

const MyInfo: React.FC<MyInfoProps> = ({ profession, name, description }) => {
  return (
    <div className={styles.infoContainer}>
      <h2 className={styles.profession}>{profession}</h2>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default MyInfo;
