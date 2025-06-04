import React from "react";
import styles from "./Avatar.module.scss";

const Avatar: React.FC = () => {
  return (
    <div className={styles.photoWrapper}>
      <a
        href="/avatar.jpg"
        className={styles.photoLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/avatar.jpg"
          alt="User avatar"
          className={styles.photoImage}
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default Avatar;
