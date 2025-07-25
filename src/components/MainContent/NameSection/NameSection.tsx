import React, { useState, useEffect } from "react";
import styles from "./NameSection.module.scss";

interface NameSectionProps {
  name: string;
  title?: string;
  socialLinks?: {
    icon: React.ReactNode;
    url: string;
  }[];
}

const NameSection: React.FC<NameSectionProps> = ({
  name,
  title,
  socialLinks,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`${styles.nameSection} ${isScrolled ? styles.scrolled : ""}`}
    >
      <div className={styles.contentWrapper}>
        <div className={styles.textContainer}>
          <h1 className={styles.name}>
            {name.split("").map((letter, index) => (
              <span
                key={index}
                className={styles.letter}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  display: "inline-block",
                  minWidth: letter === " " ? "0.6em" : undefined,
                  opacity: letter === " " ? 0 : 1,
                }}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </h1>

          {title && (
            <h2 className={styles.title}>
              <span className={styles.titleText}>{title}</span>
            </h2>
          )}
        </div>

        {socialLinks && (
          <div className={styles.socialLinks}>
            {socialLinks.map((link, index) => (
              <a
                href={link.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                style={{
                  animationDelay: `${index * 0.3}s`,
                }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NameSection;
