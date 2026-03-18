import { PortfolioOverviewProps } from "@/shared/components/portfolio/common/portfolio-overview/types";
import { PROJECT_URLS } from "@/shared/constant/projectUrls";
import { VisionSectionProps } from "@/shared/components/portfolio/common/vision-section/types";
import { FontVariant } from "@/shared/types/FonVariant";

export const LODE_DATA: PortfolioOverviewProps = {
  title: "LODE",
  description:
    "For LODE, we produced a cinematic launch video focused on storytelling and atmosphere. The piece combines motion, rhythm, and visual narrative to introduce the project with clarity and impact—designed to capture attention, communicate its vision, and set the tone for its market presence.",
  infoCard: {
    industry: "CRYPTO AND WEB3",
    stats: [
      { value: "High Reach", label: "MULTI PLATFORM LAUNCH EXPOSURE" },
      { value: "Strong Engagement", label: "DESIGNED FOR ATTENTION AND RETENTION" },
    ],
    websiteUrl: "https://LODE.io",
    websiteLabel: "LODE",
    logoSrc: "/images/portfolios/lode/logo-overview.webp",
  },
  tagGroups: [
    {
      title: "OBJETIVES",
      tags: [
        "Launch Video",
        "Visual Storytelling",
        "Narrative Clarity",
        "Market Introduction",
        "Emotional Impact",
        "Platform Adaptability",
      ],
    },
    {
      title: "DELIVERABLES",
      columns: 3,
      tags: [
        "Video Concept",
        "Script & Narrative",
        "Storyboard",
        "Art Direction",
        "Motion Design",
        "3D Assets",
        "Visual Effects",
        "Sound Design",
        "Editing",
        "Format Adaptations",
        "Final Launch Video",
      ],
    },
  ],
  buttonLabel: "LODE",
  buttonUrl: PROJECT_URLS.lode,
};

export const LODE_VISION_DATA: VisionSectionProps = {
  heading: "vision enhance.",
  decoratorSrc: "",
  decoratorMobileSrc: "",
  items: [
    {
      title: "Challenge",
      body: `LODE needed a high-impact launch video that could introduce their project to the market with clarity and emotional resonance. The challenge was to translate a complex vision into a compelling cinematic narrative that captures attention across platforms.`,
    },
    {
      title: "Journey",
      body: `Our journey was about telling LODE’s story through motion. We developed a full video concept—from script and storyboard to art direction, 3D assets, and sound design—crafting a piece that communicates the project’s vision and sets the tone for its market presence.`,
    },
  ],
};

export const FONT_VARIANTS_LODE: FontVariant[] = [
  {
    top: "top-[65.50px]",
    gap: "gap-32",
    nameColor: "text-neutral-400",
    weight: "font-light",
    label: "Light",
    charWidth: "w-80",
    typeFont: "Instrument Sans",
  },

  {
    top: "top-[285.50px]",
    gap: "gap-14",
    nameColor: "text-zinc-800",
    weight: "font-normal",
    label: "Regular",
    charWidth: "w-96",
    typeFont: "Instrument Sans",
  },
  {
    top: "top-[506.50px]",
    gap: "gap-12",
    nameColor: "text-zinc-800",
    weight: "font-medium",
    label: "Medium",
    charWidth: "w-96",
    typeFont: "Instrument Sans",
  },
];
