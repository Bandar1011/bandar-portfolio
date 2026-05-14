export interface Social {
  label: string;
  handle: string;
  href: string;
  external?: boolean;
}

export const socials: Social[] = [
  {
    label: "TikTok",
    handle: "@bandar_h0",
    href: "https://tiktok.com/@bandar_h0",
    external: true,
  },
  {
    label: "X",
    handle: "@bandar_h01",
    href: "https://x.com/bandar_h01",
    external: true,
  },
  {
    label: "LinkedIn",
    handle: "Bandar Alharthi",
    href: "https://www.linkedin.com/in/bandar-alharthi-657b293bb/",
    external: true,
  },
  {
    label: "GitHub",
    handle: "@Bandar1011",
    href: "https://github.com/Bandar1011",
    external: true,
  },
  {
    label: "Email",
    handle: "support@namiai.cloud",
    href: "mailto:support@namiai.cloud",
  },
];
