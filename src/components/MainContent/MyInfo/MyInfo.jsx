import PropTypes from "prop-types";
import styles from "./MyInfo.module.scss";

const MyInfo = ({ profession, name }) => (
  <div className={styles.infoContainer}>
    <h2 className={styles.profession}>{profession}</h2>
    <h1 className={styles.name}>{name}</h1>
    
  </div>
);

MyInfo.propTypes = {
  profession: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  
};

export default MyInfo;
