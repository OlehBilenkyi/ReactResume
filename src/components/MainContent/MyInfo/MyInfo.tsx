import React from "react";
import styles from "./MyInfo.module.scss";

type MyInfoProps = {
  description: string;
};

const MyInfo: React.FC<MyInfoProps> = ({ description }) => {
  return (
    <section className={styles.myInfo}>
      <h2 className={styles.aboutTitle}>About Me</h2>
      <p className={styles.description}>{description}</p>
    </section>
  );
};

export default MyInfo;
