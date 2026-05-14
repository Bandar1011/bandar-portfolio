export interface Project {
  slug: string;
  title: string;
  kind: string;
  year: number;
  summary: string;
  href: string;
  external?: boolean;
}

export const projects: Project[] = [
  {
    slug: "resumeai",
    title: "Resume AI",
    kind: "SaaS",
    year: 2026,
    summary:
      "AI résumé SaaS. 1,000+ users, 330+ trial starts, and over $1,000 in revenue. Full stack from scratch, including auth, database, and AI workflows.",
    href: "https://resumeai.guru",
    external: true,
  },
];
