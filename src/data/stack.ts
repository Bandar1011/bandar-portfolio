export interface StackGroup {
  label: string;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript"],
  },
  {
    label: "Frameworks",
    items: ["React", "Next.js"],
  },
  {
    label: "Data",
    items: ["Prisma", "Supabase", "MongoDB"],
  },
  {
    label: "APIs",
    items: ["REST", "Gemini API"],
  },
  {
    label: "Tooling",
    items: ["Git", "GitHub", "Vercel"],
  },
];
