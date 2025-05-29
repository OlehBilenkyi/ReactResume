import styles from "./Avatar.module.scss";

const Avatar = ({ avatar }) => {
  return (
    <div className={styles.avatarWrapper}>
      <img src={avatar} alt="Avatar" className={styles.avatarImage} />
    </div>
  );
};

export default Avatar;
