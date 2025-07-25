import React, { useEffect, useState } from "react";
import styles from "./Languages.module.scss";

/**
 * Язык и уровень владения
 * @typedef {Object} Language
 * @property {string} name Название языка
 * @property {string} level Уровень владения (Native, C2, A2, Basic)
 * @property {number} proficiency Процент владения языком (0-100)
 */

/** @type Language[] */
const languagesData = [
  { name: "Ukrainian", level: "Native", proficiency: 100 },
  { name: "Russian", level: "C2", proficiency: 90 },
  { name: "English", level: "A2", proficiency: 60 },
  { name: "Polish", level: "Basic", proficiency: 40 },
];

/**
 * Компонент списка языков с прогресс-барами
 * @component
 */
const Languages = () => {
  // Состояние для анимации прогресс-баров
  const [progress, setProgress] = useState(languagesData.map(() => 0));

  useEffect(() => {
    // При маунте анимируем прогресс до нужных значений
    const timer = setTimeout(() => {
      setProgress(languagesData.map((lang) => lang.proficiency));
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={styles.languagesContainer}
      aria-label="Languages and proficiency levels"
    >
      {/* <h2 className={styles.languagesTitle}>Languages</h2> */}
      <ol className={styles.languagesList}>
        {languagesData.map((lang, index) => (
          <li
            key={lang.name}
            className={styles.languageItem}
            tabIndex={0}
            aria-describedby={`desc-${index}`}
          >
            <div className={styles.languageHeader}>
              <span className={styles.languageName}>{lang.name}</span>
              <span className={styles.languageLevel}>{lang.level}</span>
            </div>
            <div
              className={styles.proficiencyBar}
              aria-label={`${lang.name} proficiency`}
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress[index]}
            >
              <div
                className={styles.proficiencyFill}
                style={{ width: `${progress[index]}%` }}
              />
            </div>
            <span id={`desc-${index}`} className={styles.srOnly}>
              Уровень владения {lang.level}, {progress[index]} процентов
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Languages;
