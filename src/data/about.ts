export interface Fact {
  label: string;
  value: string;
}

export const about = {
  lead: "Engineer from Saudi Arabia. Currently shipping Resume AI.",
  paragraphs: [
    "I build products with a focus on the parts most people skip — defaults, empty states, edge cases — because that's where the real product is.",
    "Currently shipping Resume AI, an AI résumé builder that writes the way recruiters actually read. Before that, I worked on internal tools and infrastructure across a handful of companies.",
  ],
  facts: [
    { label: "Based", value: "Saudi Arabia" },
    { label: "Languages", value: "Arabic · English" },
    { label: "Working on", value: "Resume AI" },
    { label: "Available for", value: "Select collaborations" },
    { label: "Best at", value: "Shipping things people use" },
  ] as Fact[],
};
