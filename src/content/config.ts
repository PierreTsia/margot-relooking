import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string(),
    draft: z.boolean().default(false),
    author: z.string().default('Margot'),
    tags: z.array(z.string()).default([]),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    intro: z.string(),
    mission: z.object({
      title: z.string(),
      description: z.string(),
      objectives: z.array(z.string())
    }),
    values: z.array(z.object({
      title: z.string(),
      description: z.string()
    })),
    approach: z.object({
      title: z.string(),
      description: z.string(),
      steps: z.array(z.object({
        step: z.string(),
        title: z.string(),
        description: z.string()
      }))
    }),
    cta: z.object({
      title: z.string(),
      description: z.string()
    }),
  })
});

export const collections = {
  blog,
  pages,
};
