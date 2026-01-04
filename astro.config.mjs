// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import partytown from '@astrojs/partytown';

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
    }), 
    // Konfigurasi Partytown agar GTM dataLayer jalan
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Menggabungkan CSS kecil langsung ke HTML untuk menghilangkan "Chaining Critical Requests"
      assetsInlineLimit: 20480,
      cssCodeSplit: false, 
    }
  }
});