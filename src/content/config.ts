import { defineCollection, z } from 'astro:content';

export const collections = {
  blog: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      coverImage: z.string().optional(),
      category: z.enum(['pintura', 'arteterapia', 'tecnicas']),
      author: z.string().default('Klara Bosso — Tia Kaka'),
    }),
  }),
};
