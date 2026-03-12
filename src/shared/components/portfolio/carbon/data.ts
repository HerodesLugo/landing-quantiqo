import { PortfolioOverviewProps } from "@/shared/components/portfolio/common/portfolio-overview/types";
import { PROJECT_URLS } from "@/shared/constant/projectUrls";
import { VisionSectionProps } from "@/shared/components/portfolio/common/vision-section/types";
import { FontVariant } from "@/shared/types/FonVariant";

export const CARBON_DATA: PortfolioOverviewProps = {
  title: "CARBON.",
  description:
    "Carbon is an on-chain trading platform focused on strategic BTC accumulation. Its design blends speed, clarity, and stability, positioning $CARBON as a cycle-resistant asset.",
  infoCard: {
    industry: "PERPS TRADING AND CRYPTO",
    stats: [
      { value: "+$1.7B", label: "TRADE VOLUME" },
      { value: "$20M", label: "OPEN INTEREST" },
      { value: "+5K", label: "USERS" },
    ],
    websiteUrl: "https://CARBON.io",
    websiteLabel: "CARBON",
    logoSrc: "/images/portfolios/CARBON/overview.webp",
  },
  buttonLabel: "CARBON",
  buttonUrl: PROJECT_URLS.carbon,
};

export const CARBON_VISION_DATA: VisionSectionProps = {
  heading: "vision enhance.",
  decoratorSrc: "/images/portfolios/CARBON/acelera-decorator.webp",
  items: [
    {
      title: "Challenge",
      body: `Carbon hired us to revamp their branding, pitch and brand assets and landing page.`,
    },
    {
      title: "Journey",
      body: `Our path began with a single mission: to humanize decentralized finance. We’ve audited the friction points of existing DeFi apps to build a fluid, intuitive architecture, a cohesive brand, and a dynamic and attractive product.`,
    },
  ],
};

export const FONT_VARIANTS_CARBON: FontVariant[] = [
  {
    top: "top-[65.50px]",
    gap: "gap-32",
    nameColor: "text-neutral-400",
    weight: "font-normal",
    label: "Regular",
    charWidth: "w-80",
    typeFont: "Plus Jakarta Sans",
  },

  {
    top: "top-[285.50px]",
    gap: "gap-14",
    nameColor: "text-zinc-800",
    weight: "font-medium",
    label: "Medium",
    charWidth: "w-96",
    typeFont: "Plus Jakarta Sans",
  },
  {
    top: "top-[506.50px]",
    gap: "gap-12",
    nameColor: "text-zinc-800",
    weight: "font-bold",
    label: "Bold",
    charWidth: "w-96",
    typeFont: "Plus Jakarta Sans",
  },
];
