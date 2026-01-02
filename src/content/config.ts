import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.string().default("General"), 
    reference: z.string(), 
    date: z.coerce.date(), 
    // Pakai 'cover' agar sinkron dengan frontmatter MD
    cover: image().optional(),
    coverAlt: z.string().optional(),
    tags: z.array(z.string()).optional(), // Tambahkan ini sekalian buat tags
  }),
});

export const collections = { blog };