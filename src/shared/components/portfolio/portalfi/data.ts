import { ProjectBentoGridProps } from "@/shared/components/portfolio/portalfi/bento-grid/ProjectBentoGrid";
import { PortfolioOverviewProps } from "@/shared/components/portfolio/common/portfolio-overview/types";
import { PROJECT_URLS } from "@/shared/constant/projectUrls";
import { VisionSectionProps } from "@/shared/components/portfolio/common/vision-section/types";
import { FontVariant } from "@/shared/types/FonVariant";

export const PORTAL_FI_DATA: PortfolioOverviewProps = {
  title: "portalfi",
  description:
    "PortalFi is a new gateway to finance, blending the simplicity of modern banking apps with the powerful returns of decentralized finance. Designed for users who want more from their money, it enables effortless sending, investing, and digital asset management—securely and seamlessly.\n\nWith a modern card-issuing product, Portal-Fi hired us to revamp their branding, pitch and brand assets, website, product, site and visual identity. Along with motion and 3d resources for marketing and other uses.",
  infoCard: {
    industry: "Fintech",
    stats: [
      { value: "$310B", label: "Market Share" },
      { value: "$8T", label: "Market Worth" },
      { value: "37%", label: "Growth Expectations" },
    ],
    websiteUrl: "https://portal-fi.com",
    websiteLabel: "Portal-Fi.com",
    logoSrc: "/images/portfolios/portalfi/icon-overview.webp",
  },
  buttonLabel: "PORTAL-FI",
  buttonUrl: PROJECT_URLS.portalfi,
};

export const PORTAL_FI_VISION_DATA: VisionSectionProps = {
  heading: "vision enhance.",
  decoratorSrc: "/images/portfolios/portalfi/decorator.webp",
  items: [
    {
      title: "Challenge",
      body: `The modern financial landscape is fragmented. Users are caught between the security of traditional banking and the high-yield potential of digital assets, often forced to navigate complex interfaces and security risks. Developing a unified gateway that simplifies these sophisticated financial instruments—without compromising on compliance or user experience—was the core hurdle. We set out to eliminate the "technical tax" that prevents everyday users from accessing the next generation of wealth management.`,
    },
    {
      title: "Journey",
      body: `Our path began with a single mission: to humanize decentralized finance. We've audited the friction points of existing fintech apps to build a fluid, intuitive architecture. From the initial conceptualization of our "one-tap" asset integration to the rigorous testing of our security protocols, every step has been driven by user-centric design. Today, PortalFi stands as a refined bridge, evolving from a visionary concept into a robust ecosystem that makes managing digital and traditional assets as simple as checking a bank balance.`,
    },
  ],
};

export const PORTAL_FI_BENTO_DATA: ProjectBentoGridProps = {
  squareImg: "/images/portfolios/portalfi/portalfi-square.webp",
  phonesImg: "/images/portfolios/portalfi/portalfi-phones.webp",
  cardsImg: "/images/portfolios/portalfi/cards-pillow.webp",
  smallSquareImg: "/images/portfolios/portalfi/portalfi-32x32.webp",
  devicesImg: "/images/portfolios/portalfi/portalfi-devices.webp",
};

export const FONT_VARIANTS_PORTALFI: FontVariant[] = [
  {
    top: "top-[65.50px]",
    gap: "gap-32",
    nameColor: "text-neutral-400",
    weight: "font-light",
    label: "Light",
    charWidth: "w-80",
    typeFont: "Satoshi",
  },
  {
    top: "top-[285.50px]",
    gap: "gap-14",
    nameColor: "text-zinc-800",
    weight: "font-normal",
    label: "Regular",
    charWidth: "w-96",
    typeFont: "Satoshi",
  },
  {
    top: "top-[506.50px]",
    gap: "gap-12",
    nameColor: "text-zinc-800",
    weight: "font-medium",
    label: "Medium",
    charWidth: "w-96",
    typeFont: "Satoshi",
  },
];
