// Creator : Vite itslef
// Date created:6 july 2024
// Decsription: vite configuration

// Modifior Developer: Maria
// Date Modified:6 july 2024
// Modifications: Added another key name 'server' this will open the localhost direct withouut cicking on link in terminal.

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
});
