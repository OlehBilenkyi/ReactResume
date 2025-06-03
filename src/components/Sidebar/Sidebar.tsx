import Contacts from "./Contacts/Contacts";
import Languages from "./Languages/Languages";
import Summary from "./SoftSkills/SoftSkills";
import TechSkills from "./TechSkills/TechSkills";
import Avatar from "./Avatar/Avatar";
import styles from "./Sidebar.module.scss";

const sectionTitles = {
  summary: "Professional Summary",
  skills: "Technical Skills",
  languages: "Languages",
  contacts: "Contact Info",
};

const MySidebar: React.FC = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__photo}>
        <Avatar />
      </div>

      <div className={styles.sidebar__section}>
        <h3 className="sectionTitle">{sectionTitles.summary}</h3>
        <Summary />

        <h3 className="sectionTitle">{sectionTitles.skills}</h3>
        <TechSkills />

        <h3 className="sectionTitle">{sectionTitles.languages}</h3>
        <Languages />

        <h3 className="sectionTitle">{sectionTitles.contacts}</h3>
        <Contacts />
      </div>
    </aside>
  );
};

export default MySidebar;
