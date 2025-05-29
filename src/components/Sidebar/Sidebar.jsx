import React from "react";
import Contacts from "./Contacts/Contacts";
import Languages from "./Languages/Languages";
import Summary from "./Summary/Summary";
import TechSkills from "./TechSkills/TechSkills";
import PropTypes from "prop-types";
import styles from "./Sidebar.module.scss";

const MySidebar = React.forwardRef(({ avatar }, ref) => {
  return (
    <aside ref={ref} className={styles.sidebarWrapper}>
      <img src={avatar} alt="Avatar" className={styles.avatar} loading="lazy" />
      <div className={styles.sidebarContent}>
        <Summary />
        <TechSkills />
        <Languages />
        <Contacts />
      </div>
    </aside>
  );
});

MySidebar.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default MySidebar;
