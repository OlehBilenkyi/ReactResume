import React from "react"; // Добавьте этот импорт
import styles from "./MyInfo.module.scss";

const MyInfo = React.forwardRef(({ name, profession }, ref) => {
  return (
    <div ref={ref} className={styles.infoContainer}>
      <h1>{name}</h1>
      <h2>{profession}</h2>
    </div>
  );
});

export default MyInfo;
