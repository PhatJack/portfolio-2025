import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/projects" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    members: z.number(),
    description: z.string(),
    tags: z.array(z.string()),
    altText: z.string().optional(),
    image: z.string().optional(),
    slug: z.string(),
  }),
});
export const collections = { projects };
