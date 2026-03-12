import { PortfolioOverviewProps } from "@/shared/components/portfolio/common/portfolio-overview/types";
import { PROJECT_URLS } from "@/shared/constant/projectUrls";
import { VisionSectionProps } from "@/shared/components/portfolio/common/vision-section/types";
import { FontVariant } from "@/shared/types/FonVariant";

export const AURION_DATA: PortfolioOverviewProps = {
  title: "AURION.",
  description:
    "Aurion is a next-generation decentralized exchange on the MegaETH blockchain, designed for high-speed execution and ultra-secure trading. More than a DEX, Aurion is a robust financial protocol built natively for the MegaETH layer.",
  infoCard: {
    industry: "CRYPTO AND WEB3",
    stats: [],
    websiteUrl: "https://AURION.io",
    websiteLabel: "AURION",
    logoSrc: "/images/portfolios/aurion/logo-overview.webp",
  },
  buttonLabel: "AURION",
  buttonUrl: PROJECT_URLS.aurion,
};

export const AURION_VISION_DATA: VisionSectionProps = {
  heading: "vision enhance.",
  decoratorSrc: "/images/portfolios/AURION/acelera-decorator.webp",
  items: [
    {
      title: "Challenge",
      body: `Aurion was created to redefine the decentralized trading experience on MegaETH. The challenge was clear: build a DEX that delivers extreme speed, institutional-grade security, and a future-ready architecture for on-chain finance.`,
    },
    {
      title: "Journey",
      body: `Our journey begins with a single mission: to unlock the full potential of MegaETH. Aurion was designed to be more than a DEX—it’s a financial infrastructure layer built for the speed and scale of real-time blockchain execution. Every design decision, from its architecture to its security model, was made to set a new standard for on-chain trading.`,
    },
  ],
};

export const FONT_VARIANTS_AURION: FontVariant[] = [
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
