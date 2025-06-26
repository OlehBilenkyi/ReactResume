import React from "react";
import { useThemeStore } from "../context/ThemeContext";

const ThemeSwitcher: React.FC = () => {
  const { darkMode, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-muted hover:bg-accent transition-colors"
      aria-label="Toggle theme"
    >
      {darkMode ? "🌙" : "☀️"}
    </button>
  );
};

export default ThemeSwitcher;
