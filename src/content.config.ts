import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const projects = defineCollection({
  loader: file("src/content/projects.json"),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    problem: z.string().optional(),
    approach: z.string().optional(),
    stack: z.array(z.string()),
    outcome: z.string().optional(),
    metrics: z
      .array(
        z.object({
          label: z.string(),
          value: z.string(),
        }),
      )
      .optional(),
    links: z
      .object({
        repo: z.string().url().optional(),
        demo: z.string().url().optional(),
        paper: z.string().url().optional(),
      })
      .optional(),
  }),
});

const experience = defineCollection({
  loader: file("src/content/experience.json"),
  schema: z.object({
    role: z.string(),
    company: z.string(),
    start: z.string(),
    end: z.string().optional(),
    highlights: z.array(z.string()),
  }),
});

const skills = defineCollection({
  loader: file("src/content/skills.json"),
  schema: z.object({
    category: z.string(),
    items: z.array(z.string()),
  }),
});

const certifications = defineCollection({
  loader: file("src/content/certifications.json"),
  schema: z.object({
    name: z.string(),
    issuer: z.string(),
    date: z.string(),
  }),
});

export const collections = { projects, experience, skills, certifications };
