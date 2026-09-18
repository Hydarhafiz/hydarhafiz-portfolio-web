import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const capability = z.object({
  name: z.string(),
  evidence: z.string()
});

const disclosure = z.object({
  review_state: z.literal("approved"),
  allowed_claims: z.array(z.string()),
  excluded_claims: z.array(z.string()),
  maturity_boundary: z.string()
});

const navigation = z.object({
  route: z.string().regex(/^\/[a-z0-9]+(?:-[a-z0-9]+)*$/),
  order: z.number().int().positive(),
  surface: z.enum(["flagship", "major-case-study", "supporting"]),
  label: z.string(),
  link_state: z.enum(["active", "planned"])
});

const caseStudies = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/case-studies"
  }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    kind: z.enum(["case-study", "supporting-contribution"]),
    hierarchy: z.enum(["primary-professional", "primary-applied-ai", "primary-personal", "supporting"]),
    navigation: navigation.optional(),
    status: z.string(),
    period: z.string(),
    context: z.string(),
    summary: z.string(),
    role: z.string(),
    capabilities: z.array(capability),
    disclosure,
    sources: z.array(z.string()).min(1)
  })
});

export const collections = { caseStudies };
