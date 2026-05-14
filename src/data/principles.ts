export interface Principle {
  title: string;
  body: string;
}

export const principles: Principle[] = [
  {
    title: "Ship in months, not years.",
    body: "Working software beats elegant whiteboard plans. The first version teaches you what the second should be.",
  },
  {
    title: "Defaults matter most.",
    body: "Most users never change a setting. The right defaults — for typography, for security, for empty states — quietly carry the product.",
  },
  {
    title: "Engineering is taste.",
    body: "Choosing what not to build is the harder skill. Restraint compounds; bloat metastasizes.",
  },
  {
    title: "Tools should respect attention.",
    body: "A good tool fades into the background. If you notice the software, it's already losing.",
  },
];
