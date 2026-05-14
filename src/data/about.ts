export interface Fact {
  label: string;
  value: string;
}

export const about = {
  lead: "Software engineer in Tokyo. Building Resume AI.",
  paragraphs: [
    "I'm passionate about building products that have a genuine real world effect on the quality of people's lives. I care about the truth more than surface level things, ideas, or opinions.",
    "Currently shipping Resume AI. It has 1,000+ users, 330+ trial starts, and over $1,000 in revenue. Before that I interned at OurFreedom.ai working on payments, the For You feed, and interaction systems.",
  ],
  facts: [
    { label: "Based", value: "Tokyo" },
    {
      label: "Studying",
      value:
        "BS Computer Science, Temple University Japan (Class of 2028). On full scholarship from the Saudi government (Custodian of the Two Holy Mosques Foreign Scholarship Program).",
    },
    { label: "Languages", value: "Arabic · English (native)" },
    { label: "Working on", value: "Resume AI" },
  ] as Fact[],
};
