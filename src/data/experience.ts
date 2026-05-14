export interface Experience {
  start: string;
  end: string | null;
  role: string;
  company: string;
  location?: string;
  summary?: string;
  href?: string;
}

export const experience: Experience[] = [
  {
    start: "2026",
    end: null,
    role: "Founder & Engineer",
    company: "Resume AI",
    location: "Remote",
    summary:
      "Building an AI résumé builder focused on signal over filler — landing, onboarding, generation, evals.",
    href: "https://resumeai.guru",
  },
  {
    start: "2024",
    end: "2026",
    role: "Software Engineer",
    company: "Previous company",
    location: "Remote",
    summary:
      "Placeholder — replace with the role, team, and one or two specific things you shipped.",
  },
  {
    start: "2022",
    end: "2024",
    role: "Software Engineer",
    company: "Earlier company",
    location: "Remote",
    summary:
      "Placeholder — first professional role. Replace with the company, focus area, and notable work.",
  },
];
