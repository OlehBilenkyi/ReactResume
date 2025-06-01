import React from "react";
import { motion } from "framer-motion";
import styles from "./Sidebar.module.scss";
import Contacts from "./Contacts/Contacts";
import Languages from "./Languages/Languages";
import Summary from "./Summary/Summary";
import TechSkills from "./TechSkills/TechSkills";

const Sidebar: React.FC = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      ref={ref}
      className={styles.sidebarWrapper}
    >
      <div className={styles.sidebarContent}>
        <Summary />
        <TechSkills />
        <Languages />
        <Contacts />
      </div>
    </motion.aside>
  );
});

export default Sidebar;
