import React from "react";
import { motion } from "framer-motion";
import ThemeSwitcher from "./ThemeSwitcher";
import styles from "./Header.module.scss";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <div className="size-4">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className={styles.logoText}>TechVision</h2>
      </div>
      <div className={styles.navigation}>
        <div className="flex items-center gap-9">
          {["Projects", "Experience", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.toLowerCase());
              }}
              className={styles.navLink}
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
        </div>
        <ThemeSwitcher />
        <div className={styles.profileImage}></div>
      </div>
    </header>
  );
};

export default Header;
