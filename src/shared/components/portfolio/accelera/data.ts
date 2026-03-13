import { PortfolioOverviewProps } from "@/shared/components/portfolio/common/portfolio-overview/types";
import { PROJECT_URLS } from "@/shared/constant/projectUrls";
import { VisionSectionProps } from "@/shared/components/portfolio/common/vision-section/types";
import { FontVariant } from "@/shared/types/FonVariant";

export const ACCELERA_DATA: PortfolioOverviewProps = {
  title: "ACCELERA.",
  description:
    "Accelera is a stablecoin ecosystem that blends cutting-edge tech, financial stability, and crypto native culture. Its aesthetic fuses dark elegance, interstellar inspiration, and on-chain visuals, connecting with a new generation of DeFi users.\n\nAccelera hired us to revamp their branding, pitch and brand assets, website, product, site and visual identity. Along with motion and 3d resources for marketing and other uses.",
  infoCard: {
    industry: "CRYPTO AND WEB3",
    stats: [
      { value: "$310B", label: "MARKET SHARE" },
      { value: "$8T", label: "MARKET WORTH" },
      { value: "37%", label: "GROWTH EXPECTATIONS" },
    ],
    websiteUrl: "https://accelera.io",
    websiteLabel: "Accelera",
    logoSrc: "/images/portfolios/accelera/accelera-logo-overview.webp",
  },
  buttonLabel: "ACCELERA",
  buttonUrl: PROJECT_URLS.accelera,
};

export const ACCELERA_VISION_DATA: VisionSectionProps = {
  heading: "vision enhance.",
  decoratorSrc: "/images/portfolios/accelera/acelera-decorator.webp",
  decoratorMobileSrc: "/images/portfolios/accelera/decorator-mobile.webp",
  items: [
    {
      title: "Challenge",
      body: `Accelera hired us to revamp their branding, pitch and brand assets, website, product,  site and visual identity. Along with motion and 3d resources for marketing and other uses.`,
    },
    {
      title: "Journey",
      body: `Our path began with a single mission: to humanize decentralized finance. We’ve audited the friction points of existing defi apps to build a fluid, intuitive architecture, a cohesive brand and a dynamic and atractive product.`,
    },
  ],
};

export const FONT_VARIANTS_ACCELERA: FontVariant[] = [
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
