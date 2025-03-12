import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()),
    repoUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

// Define a schema for blog posts
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    author: z.string(),
    featured: z.boolean().optional().default(false),
    image: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  projects: projectCollection,
  blog: blogCollection,
};
