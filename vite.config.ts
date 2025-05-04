import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      // 'localhost',
      // 'my-website.com',
      // '*.my-domain.com'    // allows all subdomains
      // "all",
    ],
  },
});
