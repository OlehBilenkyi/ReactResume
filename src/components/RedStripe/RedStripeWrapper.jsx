import styles from "./RedStripeWrapper.module.scss";

const RedStripeWrapper = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.redStripe}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default RedStripeWrapper;
