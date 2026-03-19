import { PortfolioOverviewProps } from "@/shared/components/portfolio/common/portfolio-overview/types";
import { PROJECT_URLS } from "@/shared/constant/projectUrls";
import { VisionSectionProps } from "@/shared/components/portfolio/common/vision-section/types";
import { FontVariant } from "@/shared/types/FonVariant";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

export const INTENTX_DATA: PortfolioOverviewProps = {
  title: "INTENTX",
  description:
    "IntentX is a decentralized (DeFi) platform specializing in over-the-counter (OTC) derivatives that enables leveraged perpetual futures trading, delivering an experience comparable to centralized exchanges (CEX) but entirely on-chain, non-custodial, and permissionless.",
  infoCard: {
    industry: "PERPS TRADING AND CRYPTO",
    stats: [
      { value: "+$1.7B", label: "TRADE VOLUME" },
      { value: "$20M", label: "OPEN INTEREST" },
      { value: "+5K", label: "USERS" },
    ],
    websiteUrl: "https://INTENTX.io",
    websiteLabel: "INTENTX",
    logoSrc: IMAGE_ASSETS.intentx.logoOverview,
  },
  buttonLabel: "INTENTX",
  buttonUrl: PROJECT_URLS.intentx,
};

export const INTENTX_VISION_DATA: VisionSectionProps = {
  heading: "vision enhance.",
  decoratorSrc: "",
  decoratorMobileSrc: "",
  items: [
    {
      title: "Challenge",
      body: `IntentX faced the challenge of abstracting the complexity of on-chain derivatives trading, where dependence on solvers and the intricacy of the order-matching flow created friction for users unfamiliar with DeFi primitives.`,
    },
    {
      title: "Journey",
      body: `Our path focused on simplifying the user journey from wallet connection to executing trades. By leveraging Account Abstraction and streamlining the interface, we created a product that delivers a CEX-level experience entirely on-chain, non-custodial, and permissionless.`,
    },
  ],
};

export const FONT_VARIANTS_INTENTX: FontVariant[] = [
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
