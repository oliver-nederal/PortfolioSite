import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import Sitemap from "vite-plugin-sitemap";
import { resolve } from "path";

const routes = ["404", "about", "contact", "projects", "skills"];
const dynamicRoutes = routes.map((name) => `/${name}`);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Sitemap({ dynamicRoutes, hostname: "https://oliver.nederal.com" }),
  ],
  base: "/",

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        404: resolve(__dirname, "public/404.html"),
      },
    },
  },
});
