// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Ganti dengan domain asli kamu
  site: 'https://dowithsudo.com',

  // Pengaturan Internasionalisasi (i18n)
  i18n: {
    locales: ["id", "en"],
    defaultLocale: "id",
    routing: {
      // Memastikan /id/ muncul di URL untuk bahasa Indonesia
      prefixDefaultLocale: true,
      // Membantu mencegah redirect liar pada file statis
      redirectToDefaultLocale: false 
    }
  },

  // Integrasi Astro
  integrations: [
    sitemap({
      // Konfigurasi sitemap agar mendukung hreflang (SEO Multi-bahasa)
      i18n: {
        defaultLocale: 'id',
        locales: {
          id: 'id',
          en: 'en',
        },
      },
      // Menentukan urutan prioritas atau mengabaikan halaman tertentu jika perlu
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});