import { PortfolioOverviewProps } from "@/shared/components/portfolio/common/portfolio-overview/types";
import { PROJECT_URLS } from "@/shared/constant/projectUrls";
import { VisionSectionProps } from "@/shared/components/portfolio/common/vision-section/types";
import { FontVariant } from "@/shared/types/FonVariant";

export const RISE_LABS_DATA: PortfolioOverviewProps = {
  title: "RISE LABS",
  description:
    "Rise Labs is a creative and strategic hub focused on building innovative products in the DeFi and Web3 ecosystem. It develops brands, platforms, and tools designed to empower users, manage digital assets, and shape the future of decentralized finance.",
  infoCard: {
    industry: "CRYPTO AND WEB3",
    stats: [
      { value: "+$5M", label: "REVENUE IN CATALOG" },
    ],
    websiteUrl: "https://RISE_LABS.io",
    websiteLabel: "RISE LABS",
    logoSrc: "/images/portfolios/rise-labs/logo-overview.webp",
    logoClassName: "size-[12rem]"
  },
  buttonLabel: "RISE LABS",
  buttonUrl: PROJECT_URLS["rise-labs"],
};

export const RISE_LABS_VISION_DATA: VisionSectionProps = {
  heading: "vision enhance.",
  decoratorSrc: "",
  items: [
    {
      title: "Challenge",
      body: `Rise Labs hired us to revamp their branding, pitch and brand assets and landing page.`,
    },
    {
      title: "Journey",
      body: `Our path began with a single mission: to humanize the brand and make it feel as solid as possible. We’ve audited the friction points of existing fintech apps to build a fluid, intuitive architecture, a cohesive brand, and a dynamic and attractive product.`,
    },
  ],
};

export const FONT_VARIANTS_RISE_LABS: FontVariant[] = [
  {
    top: "top-[65.50px]",
    gap: "gap-32",
    nameColor: "text-neutral-400",
    weight: "font-light",
    label: "Light",
    charWidth: "w-80",
    typeFont: "Host Grotesk",
  },
  {
    top: "top-[285.50px]",
    gap: "gap-14",
    nameColor: "text-zinc-800",
    weight: "font-normal",
    label: "Regular",
    charWidth: "w-96",
    typeFont: "Host Grotesk",
  },
  {
    top: "top-[506.50px]",
    gap: "gap-12",
    nameColor: "text-zinc-800",
    weight: "font-medium",
    label: "Medium",
    charWidth: "w-96",
    typeFont: "Host Grotesk",
  },
];
