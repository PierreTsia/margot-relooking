import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().optional(),
    intro: z.string().optional(),
    mission: z.object({
      title: z.string(),
      description: z.string(),
      objectives: z.array(z.string())
    }).optional(),
    values: z.array(z.object({
      title: z.string(),
      description: z.string()
    })).optional(),
    approach: z.object({
      title: z.string(),
      description: z.string(),
      steps: z.array(z.object({
        step: z.string(),
        title: z.string(),
        description: z.string()
      }))
    }).optional(),
    cta: z.object({
      title: z.string(),
      description: z.string()
    }).optional()
  })
});

export const collections = {
  blog,
  pages,
};
