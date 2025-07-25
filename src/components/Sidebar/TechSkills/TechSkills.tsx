import { useState, useEffect } from "react";
import styles from "./TechSkills.module.scss";

const techSkills: Record<string, string[]> = {
  Languages: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript (basic)"],
  Frameworks: ["React (Hooks, Router)", "Redux", "SASS", "Bootstrap", "MUI"],
  Tools: ["Git", "GitHub", "Webpack", "Vite", "Figma", "Trello", "DevTools"],
  Backend: ["REST API", "PHP (basic)", "MySQL (basic)"],
  Soft: ["Teamwork", "Adaptability", "Self-motivation", "Time management"],
};

const TechSkills: React.FC = () => {
  const categories = Object.keys(techSkills);
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [fade, setFade] = useState<boolean>(false);

  // Анимация затухания при смене таба
  useEffect(() => {
    setFade(true);
    const timer = setTimeout(() => setFade(false), 350);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <div className={styles.techSkillsContainer}>
      <div
        className={styles.tabs}
        role="tablist"
        aria-label="Tech skills categories"
      >
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            aria-controls={`panel-${category}`}
            id={`tab-${category}`}
            className={`${styles.tabButton} ${
              activeCategory === category ? styles.active : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div
        className={`${styles.skillsList} ${fade ? styles.fade : ""}`}
        role="tabpanel"
        id={`panel-${activeCategory}`}
        aria-labelledby={`tab-${activeCategory}`}
      >
        {techSkills[activeCategory].map((item) => (
          <div key={item} className={styles.skillItem}>
            {item}
          </div>
        ))}
      </div>

      <div className={styles.skillsField}>
        <p>
          Здесь можно добавить дополнительную информацию или описание для
          категории <b>{activeCategory}</b>.
        </p>
      </div>
    </div>
  );
};

export default TechSkills;
