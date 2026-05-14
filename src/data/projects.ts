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
    kind: "Product",
    year: 2026,
    summary:
      "An AI résumé builder that writes the way recruiters actually read — focused on signal, not filler.",
    href: "https://resumeai.guru",
    external: true,
  },
];
