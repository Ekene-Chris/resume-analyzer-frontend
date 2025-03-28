// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs";

// Copy staticwebapp.config.json to build output
const copyStaticWebAppConfig = () => {
  return {
    name: "copy-staticwebapp-config",
    generateBundle() {
      if (fs.existsSync("./staticwebapp.config.json")) {
        this.emitFile({
          type: "asset",
          fileName: "staticwebapp.config.json",
          source: fs.readFileSync("./staticwebapp.config.json"),
        });
      }
    },
  };
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copyStaticWebAppConfig()],
});
