import { defineCollection, z, type ImageFunction } from "astro:content";
import { file } from "astro/loaders";

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
  loader: file("src/data/team_members.json", { parser: teamMemberParser }),
  schema: ({ image }) => teamMemberSchema(image),
});

export const collections = { team_members };
