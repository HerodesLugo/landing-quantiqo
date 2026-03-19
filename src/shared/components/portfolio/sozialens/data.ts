import { PortfolioOverviewProps } from "@/shared/components/portfolio/common/portfolio-overview/types";
import { PROJECT_URLS } from "@/shared/constant/projectUrls";
import { VisionSectionProps } from "@/shared/components/portfolio/common/vision-section/types";
import { FontVariant } from "@/shared/types/FonVariant";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

export const SOZIALENS_DATA: PortfolioOverviewProps = {
  title: "SOZIALENS",
  description:
    "Sozialens is a platform that connects businesses with thematic social media accounts to boost visibility without relying on traditional influencers. It offers an intuitive interface, customizable ad campaigns, and transparent metrics—all with a secure and efficient approach to reaching broad and targeted audiences.\n\nSozialens hired us to revamp their branding, pitch and brand assets, website, product, site and visual identity. Along with motion and 3d resources for marketing and other uses.",
  infoCard: {
    industry: "AI AND SMM",
    stats: [
      { value: "+250K", label: "INV. CAPTURED" },
      { value: "+1K", label: "CLIENTS" },
      { value: "", label: "" },
    ],
    websiteUrl: "",
    websiteLabel: "SOZIALENS",
    logoSrc: IMAGE_ASSETS.sozialens.logoOverview,
    logoClassName: "h-[230px] w-[130px] object-fill"
  },
  buttonLabel: "SOZIALENS",
  buttonUrl: PROJECT_URLS.sozialens,
};

export const SOZIALENS_VISION_DATA: VisionSectionProps = {
  heading: "vision enhance.",
  decoratorSrc: "",
  items: [
    {
      title: "Challenge",
      body: `Sozialens hired us to revamp their branding, pitch and brand assets, website, product,  site and visual identity. Along with motion and 3d resources for marketing and other uses.`,
    },
    {
      title: "Journey",
      body: `Our path began with a single mission: to humanize decentralized finance. We’ve audited the friction points of existing fintech apps to build a fluid, intuitive architecture. From the initial conceptualization of our "one-tap" asset integration to the rigorous testing of user experience.`,
    },
  ],
};

export const FONT_VARIANTS_SOZIALENS: FontVariant[] = [
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
