import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    // Membuat description opsional agar tidak error jika lupa diisi
    description: z.string().optional(), 
    // Reference tetap wajib agar sistem ganti bahasa tidak rusak
    reference: z.string(), 
    // Pastikan format di Markdown adalah YYYY-MM-DD
    date: z.coerce.date(), 
  }),
});

export const collections = { blog };