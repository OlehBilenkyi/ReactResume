import React from "react";
import styles from "./Avatar.module.scss";

const Avatar = ({ src, alt = "Avatar" }) => {
  return (
    <div className={styles.avatarContainer}>
      <img src={src} alt={alt} className={styles.avatar} loading="lazy" />
    </div>
  );
};

export default Avatar;
