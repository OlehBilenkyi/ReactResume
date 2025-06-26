import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeState = {
  darkMode: boolean;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      darkMode: true,
      toggleTheme: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    { name: "theme" }
  )
);
