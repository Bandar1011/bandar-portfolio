export interface Fact {
  label: string;
  value: string;
}

export const about = {
  lead: "Self-taught software engineer in Jeddah. Building JusTalk, Sandy, and Resume AI.",
  paragraphs: [
    "I'm passionate about building products that have a genuine real world effect on the quality of people's lives. I care about the truth more than surface level things, ideas, or opinions.",
    "Currently building JusTalk, Sandy, and Resume AI. Resume AI has 6,000+ users. Before that I interned at OurFreedom.ai working on payments, the For You feed, and interaction systems.",
  ],
  facts: [
    { label: "Based", value: "Jeddah" },
    { label: "Education", value: "Self-taught" },
    { label: "Languages", value: "Arabic · English (native)" },
    { label: "Working on", value: "JusTalk · Sandy · Resume AI" },
  ] as Fact[],
};
