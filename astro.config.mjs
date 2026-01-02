// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://dowithsudo.com',

  // Internationalization (i18n) settings
  i18n: {
    locales: ["id", "en"],
    defaultLocale: "id",
    routing: {
      prefixDefaultLocale: true
    }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});