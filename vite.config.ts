import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          mui: ["@mui/material"],
          muiIcons: ["@mui/icons-material"],
          toolpad: ["@toolpad/core"],
          reactSocialIcons: ["react-social-icons"],
        },
      },
    },
  },
});
