import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ReactResume/", // Add this line for GitHub Pages
  optimizeDeps: {
    include: ["rxjs/internal/BehaviorSubject"],
  },
});
