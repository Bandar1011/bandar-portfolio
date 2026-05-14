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
    start: "03/2026",
    end: null,
    role: "Founder & Engineer",
    company: "Resume AI",
    location: "Remote",
    summary:
      "Co-founded and shipped an AI résumé SaaS. It has 1,000+ users, 330+ trial starts, and over $1,000 in revenue. Built the full stack including auth, database, and AI workflows, and grew my personal TikTok to 7,000 followers and 700K monthly views promoting the product.",
    href: "https://resumeai.guru",
  },
  {
    start: "09/2025",
    end: "12/2025",
    role: "Software Engineering Intern",
    company: "OurFreedom.ai",
    location: "New York City (Remote)",
    summary:
      "Worked with the technical co-founder across the stack. Integrated payment systems and subscriptions, built the For You feed on a Reddit API pipeline, shipped commenting and interaction features, and optimized backend services.",
  },
];
