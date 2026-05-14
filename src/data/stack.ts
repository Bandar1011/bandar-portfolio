export interface StackGroup {
  label: string;
  items: string[];
}

export const stack: StackGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "Python", "Go"],
  },
  {
    label: "Runtime",
    items: ["Node", "Bun", "Postgres"],
  },
  {
    label: "Infrastructure",
    items: ["Cloudflare", "AWS", "Vercel"],
  },
  {
    label: "Tools",
    items: ["Linear", "Figma", "Cursor", "Claude"],
  },
];
