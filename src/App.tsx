import React from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import KeySkills from "./components/KeySkills";
import WorkExperience from "./components/WorkExperience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import styles from "./App.module.scss";

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.appContainer}
    >
      <Header />
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.contentContainer}
      >
        <div className={styles.layoutContentContainer}>
          <HeroSection />
          <AboutMe />
          <KeySkills />
          <WorkExperience />
          <Portfolio />
          <Contact />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default App;
