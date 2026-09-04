export type CareerProfileId = "default" | "backend" | "cloud" | "ai";

export interface ResolvedCareerData {
  basics: {
    name: string;
    title: string;
    location: string;
    mobility: string;
    availability: string;
    email: string;
    links: Array<{ label: string; display: string; url: string }>;
  };
  summary: string;
  capabilities: Array<{ category: string; items: string[] }>;
  experience: Array<{ role: string; organization: string; dates: string; bullets: string[] }>;
  projects: Array<{ name: string; context: string; dates: string; url: string; bullets: string[] }>;
  education: { institution: string; qualification: string; dates: string; detail: string };
  certifications: Array<{ name: string; issued: string; url: string }>;
}

export function resolveCareerProfile(source: unknown, profileId?: CareerProfileId): ResolvedCareerData;
export function listCareerProfiles(): CareerProfileId[];
