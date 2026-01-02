// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://dowithsudo.com',

  i18n: {
    locales: ["id", "en"],
    defaultLocale: "id",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false 
    }
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'id',
        locales: { id: 'id', en: 'en' },
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],

  vite: {
    // Plugin Tailwind v4 sudah di sini, aman!
    plugins: [tailwindcss()]
  }
});