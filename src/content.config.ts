import { defineCollection, z, type ImageFunction } from "astro:content";
import { file, glob } from "astro/loaders";

const teamMemberSchema = (image: ImageFunction) => {
  return z.object({
    name: z.string(),
    team: z.string(),
    profile_url: image(),
  });
};

type TeamMember = z.infer<ReturnType<typeof teamMemberSchema>>;

// Custom parser generates id field from the title
const teamMemberParser = (text: string) => {
  const team_members = JSON.parse(text) as TeamMember[];
  return team_members.map((team_member) => ({
    ...team_member,
    id: team_member.name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, ""),
  }));
};

const team_members = defineCollection({
  loader: file("data/team_members/team_members.json", {
    parser: teamMemberParser,
  }),
  schema: ({ image }) => teamMemberSchema(image),
});

const jobs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "data/jobs" }),
  schema: z.object({
    title: z.string(),
    subteam: z.enum([
      "Chemistry",
      "Instrumentation",
      "Computation",
      "Business",
      "General",
    ]),
    description: z.string(),
    requirements: z.array(z.string()),
    preferred_qualifications: z.array(z.string()).optional(),
    time_commitment: z.string(),
    application_deadline: z.date().optional(),
    specific_questions: z
      .array(
        z.object({
          question: z.string(),
          type: z.enum(["text", "textarea", "select", "multiselect"]),
          options: z.array(z.string()).optional(),
          required: z.boolean().default(true),
        }),
      )
      .default([]),
  }),
});

export const collections = { team_members, jobs };
