import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import __esModule from "@babel/preset-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
      babel: {
        presets: [__esModule],
      },
    }),
  ],
  server: {
    host: "localhost",
    port: 8089,
    watch: "persistent",
    open: true,
  },
});
