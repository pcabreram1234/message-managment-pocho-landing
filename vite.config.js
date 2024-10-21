import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
    {
      name: "copy-template-html",
      apply: "build",
      closeBundle: async () => {
        // Ruta de origen del archivo template.html
        const sourcePath = path.resolve(
          __dirname,
          "templates",
          "mail-template.html"
        );
        // Ruta de destino (dentro de la carpeta dist)
        const destPath = path.resolve(__dirname, "dist/templates", "mail-template.html");
        try {
          // Copia el archivo template.html a la carpeta dist
          fs.copyFile(sourcePath, destPath, (err) => {
            if (err) {
              console.log(
                "Ha ocurrido el siguiente error al tratar de copiar el archivo mail-template.html " +
                  err
              );
            }
          });
        } catch (error) {
          console.error("Error al copiar template.html:", error);
        }
      },
    },
  ],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.[tj]sx?$/, // Incluye tanto .js, .jsx, .ts, como .tsx
  },
  server: {
    host: "localhost",
    port: 8089,
    open: true,
  },
});
