import { PortfolioOverviewProps } from "@/shared/components/portfolio/common/portfolio-overview/types";
import { PROJECT_URLS } from "@/shared/constant/projectUrls";
import { VisionSectionProps } from "@/shared/components/portfolio/common/vision-section/types";
import { FontVariant } from "@/shared/types/FonVariant";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

export const LINUS_DATA: PortfolioOverviewProps = {
  title: "LINUS",
  description:
    "Linus is a Web3-native brand rooted in culture, community, and creativity. At its core is Pengmilio, a bold and playful character leading one of the most vibrant movements in the Linea ecosystem. Linus has become a space where people connect through innovation, humor, and shared values.\n\nNow, the brand is scaling—reaching broader audiences, deepening its cultural impact, and building a self sustaining ecosystem where culture moves crypto forward.",
  infoCard: {
    industry: "WEB3 CULTURE & COMMUNITY",
    stats: [
      { value: "Community", label: "HIGHLY ENGAGED LINEA NATIVE AUDIENCE" },
      { value: "Culture", label: "STRONG SOCIAL PRESENCE" },
      { value: "Momentum", label: "FAST GROWING MOVEMENT IN LINEA" },
    ],
    websiteUrl: "https://LINUS.io",
    websiteLabel: "LINUS",
    logoSrc: IMAGE_ASSETS.linus.logoOverview,
  },
  buttonLabel: "LINUS",
  buttonUrl: PROJECT_URLS.linus,
  tagGroups: [
    {
      title: "OBJETIVES",
      tags: [
        "Branding and Positioning",
        "Community Growth",
        "Product MVP",
        "Product Launch",
        "Marketing Assets",
        "Brand Awareness",
        "Character Design",
        "Top-Tier Product",
      ],
    },
    {
      title: "DELIVERABLES",
      columns: 3,
      tags: [
        "Concept",
        "Branding",
        "Character Design",
        "Brand Assets",
        "Script & Narrative",
        "Storyboard",
        "Art Direction",
        "Illustration",
        "Pitch and VC Assets",
        "Website",
        "Product",
        "Development",
        "Coming Soon Video",
        "Motion Assets",
        "3D Assets",
        "Marketing Assets",
      ],
    },
  ],
};

export const LINUS_VISION_DATA: VisionSectionProps = {
  heading: "vision enhance.",
  decoratorSrc: "",
  decoratorMobileSrc: "",
  items: [
    {
      title: "Challenge",
      body: `The challenge was to build a distinctive, culture-first brand around Pengmilio—a bold character that could anchor a Web3 community in the Linea ecosystem. Linus needed a complete creative identity: from character design to brand assets, website, product, and marketing materials.`,
    },
    {
      title: "Journey",
      body: `Our path began with a single mission: to create a culture-driven Web3 brand that moves people. We built Pengmilio as the face of a growing movement, crafting a cohesive visual identity, community assets, and a product experience that turns culture into momentum.`,
    },
  ],
};

export const FONT_VARIANTS_LINUS: FontVariant[] = [
  {
    top: "top-[65.50px]",
    gap: "gap-32",
    nameColor: "text-neutral-400",
    weight: "font-light",
    label: "Light",
    charWidth: "w-80",
    typeFont: "DM Sans",
  },

  {
    top: "top-[285.50px]",
    gap: "gap-14",
    nameColor: "text-zinc-800",
    weight: "font-normal",
    label: "Regular",
    charWidth: "w-96",
    typeFont: "DM Sans",
  },
  {
    top: "top-[506.50px]",
    gap: "gap-12",
    nameColor: "text-zinc-800",
    weight: "font-medium",
    label: "Medium",
    charWidth: "w-96",
    typeFont: "DM Sans",
  },
];
