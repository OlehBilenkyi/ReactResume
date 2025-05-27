import PropTypes from "prop-types";
import styles from "./MyInfo.module.scss";

const MyInfo = ({ profession, name, description }) => (
  <div className={styles.infoContainer}>
    <h2 className={styles.profession}>{profession}</h2>
    <h1 className={styles.name}>{name}</h1>
    <p className={styles.textDescr}>{description}</p>
  </div>
);

MyInfo.propTypes = {
  profession: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default MyInfo;
