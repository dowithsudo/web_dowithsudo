import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  // Tambahkan ({ image }) di bawah ini untuk mengaktifkan optimasi gambar
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(), 
    reference: z.string(), 
    date: z.coerce.date(), 
    // Field 'cover' sekarang mendukung optimasi otomatis (WebP/AVIF/Resize)
    // Dibuat .optional() supaya postingan tanpa gambar tidak error
    cover: image().optional(),
    coverAlt: z.string().optional(),
  }),
});

export const collections = { blog };