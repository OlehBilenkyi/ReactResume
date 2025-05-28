import styles from "./RedStripeLayout.module.scss";

const MyInfo = ({ name, profession, children }) => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.redStripe}>
        <div className={styles.headerContent}>
          <h1 className={styles.name}>{name}</h1>
          <h2 className={styles.profession}>{profession}</h2>
        </div>
      </div>
      <div className={styles.mainContent}>{children}</div>
    </div>
  );
};

export default MyInfo;
