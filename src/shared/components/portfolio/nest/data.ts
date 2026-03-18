import { PortfolioOverviewProps } from "@/shared/components/portfolio/common/portfolio-overview/types";
import { PROJECT_URLS } from "@/shared/constant/projectUrls";
import { VisionSectionProps } from "@/shared/components/portfolio/common/vision-section/types";
import { FontVariant } from "@/shared/types/FonVariant";

export const NEST_DATA: PortfolioOverviewProps = {
  title: "NEST",
  description:
    "Nest is a DeFi platform on Hyperliquid that merges yield strategies, automated voting, and a meme-powered identity. As the first veTokenomics ecosystem on the network, it features $HYPE staking, veHYPE creation, automated governance, and a built-in incentives engine. With a modular, fast-moving approach, HyperNest redefines how communities earn, vote, and grow together on-chain.",
  infoCard: {
    industry: "CRYPTO AND WEB3",
    stats: [
      { value: "+25K", label: "USERS" },
      { value: "$250M", label: "TVL" },
    ],
    websiteUrl: "https://NEST.io",
    websiteLabel: "NEST",
    logoSrc: "/images/portfolios/nest/logo-overview.webp",
    logoClassName: "size-[15rem]"
  },
  buttonLabel: "NEST",
  buttonUrl: PROJECT_URLS.nest,
};

export const NEST_VISION_DATA: VisionSectionProps = {
  heading: "vision enhance.",
  decoratorSrc: "",
  items: [
    {
      title: "Challenge",
      body: `Nest hired us to revamp their branding, pitch and brand assets, website, product,  site and visual identity. Along with motion and 3d resources for marketing and other uses.`,
    },
    {
      title: "Journey",
      body: `Our path began with a single mission: to humanize decentralized finance. We’ve audited the friction points of existing fintech apps to build a fluid, intuitive architecture. From the initial conceptualization of our "one-tap" asset integration to the rigorous testing of user experience.`,
    },
  ],
};

export const FONT_VARIANTS_NEST: FontVariant[] = [
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
  {
    top: "top-[65.50px]",
    gap: "gap-32",
    nameColor: "text-neutral-400",
    weight: "font-semibold",
    label: "Semibold",
    charWidth: "w-80",
    typeFont: "Instrument Sans",
  },
  
];
