import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['Cyber Essentials', 'AS9100D', 'Operations', 'Technology']),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
