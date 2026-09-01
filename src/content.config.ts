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

const caseStudies = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/case-studies"
  }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    kind: z.enum(["case-study", "supporting-contribution"]),
    hierarchy: z.enum(["primary-professional", "primary-personal", "supporting"]),
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
