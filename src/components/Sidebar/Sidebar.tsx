import Contacts from "./Contacts/Contacts";
import Languages from "./Languages/Languages";
import Summary from "./SoftSkills/SoftSkills";
import TechSkills from "./TechSkills/TechSkills";
import Avatar from "./Avatar/Avatar";
import styles from "./Sidebar.module.scss";

const MySidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__photo}>
        <Avatar />
      </div>

      <div className={styles.sidebar__section}>
        <h3 className={styles.sectionTitle}>Professional Summary</h3>
        <Summary />
      </div>

      <div className={styles.sidebar__section}>
        <h3 className={styles.sectionTitle}>Technical Skills</h3>
        <TechSkills />
      </div>

      <div className={styles.sidebar__section}>
        <h3 className={styles.sectionTitle}>Languages</h3>
        <Languages />
      </div>

      <div className={styles.sidebar__section}>
        <h3 className={styles.sectionTitle}>Contacts</h3>
        <Contacts />
      </div>
    </aside>
  );
};

export default MySidebar;
