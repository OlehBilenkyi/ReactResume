import Contacts from "./Contacts/Contacts";
import Languages from "./Languages/Languages";
import Summary from "./SoftSkills/SoftSkills";
import TechSkills from "./TechSkills/TechSkills";
import styles from "./Sidebar.module.scss";

type SidebarProps = {
  avatar: string;
};

const MySidebar: React.FC<SidebarProps> = ({ avatar }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles["sidebar__photo"]}>
        <img
          src={avatar}
          alt="Avatar"
          className={styles["sidebar__photo-img"]}
          width="300"
          loading="lazy"
        />
      </div>
      <div className={styles["sidebar__section"]}>
        <Summary />
        <TechSkills />
        <Languages />
        <Contacts />
      </div>
    </div>
  );
};

export default MySidebar;
