import { PortfolioOverviewProps } from "@/shared/components/portfolio/common/portfolio-overview/types";
import { PROJECT_URLS } from "@/shared/constant/projectUrls";
import { VisionSectionProps } from "@/shared/components/portfolio/common/vision-section/types";
import { FontVariant } from "@/shared/types/FonVariant";

export const GARBO_DATA: PortfolioOverviewProps = {
  title: "GARBO",
  description:
    "Garbo is a cutting-edge software platform that enables real-time virtualization of mobile devices on ARM-over-ARM architecture. This solution provides complete control for security research, cyber intelligence, and advanced testing tasks, allowing users to create and orchestrate thousands of virtual terminals. Garbo hired us to revamp their branding, pitch and brand assets, website, product,  site and visual identity. Along with motion and 3d resources for marketing and other uses.",
  infoCard: {
    industry: "CYBER-SECURITY",
    stats: [
      { value: "$310B", label: "MARKET SHARE" },
      { value: "$8T", label: "MARKET WORTH" },
      { value: "37%", label: "GROWTH EXPECTATIONS" },
    ],
    websiteUrl: "https://GARBO.io",
    websiteLabel: "GARBO",
    logoSrc: "/images/portfolios/garbo/logo-overview.webp",
  },
  buttonLabel: "GARBO",
  buttonUrl: PROJECT_URLS.garbo,
};

export const GARBO_VISION_DATA: VisionSectionProps = {
  heading: "vision enhance.",
  decoratorSrc: "",
  decoratorMobileSrc:"",
  items: [
    {
      title: "Challenge",
      body: `Garbo hired us to revamp their branding, pitch and brand assets, website, product,  site and visual identity. Along with motion and 3d resources for marketing and other uses.`,
    },
    {
      title: "Journey",
      body: `Our path began with a single mission: to make the product bright into the market. We’ve audited the friction points of existing defi apps to build a fluid, intuitive architecture, a cohesive brand and a dynamic and atractive product.`,
    },
  ],
};

export const FONT_VARIANTS_GARBO: FontVariant[] = [
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
