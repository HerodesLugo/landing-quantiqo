import { PortfolioOverviewProps } from "@/shared/components/portfolio/common/portfolio-overview/types";
import { PROJECT_URLS } from "@/shared/constant/projectUrls";
import { VisionSectionProps } from "@/shared/components/portfolio/common/vision-section/types";
import { FontVariant } from "@/shared/types/FonVariant";

export const FENIX_DATA: PortfolioOverviewProps = {
  title: "FENIX FINANCES",
  description:
    "Fenix Finance is a marketplace where protocols compete for liquidity, users earn by voting and providing funds, and traders enjoy efficient exchange. All of this is made possible by the native yield (automatic interest) offered by the Blast network.",
  infoCard: {
    industry: "PERPS TRADING AND CRYPTO",
    stats: [
      { value: "+$1.7B", label: "TRADE VOLUME" },
      { value: "$20M", label: "OPEN INTEREST" },
      { value: "+5K", label: "USERS" },
    ],
    websiteUrl: "https://FENIX.io",
    websiteLabel: "FENIX FINANCES",
    logoSrc: "/images/portfolios/fenix/logo-overview.webp",
  },
  buttonLabel: "FENIX FINANCES",
  buttonUrl: PROJECT_URLS.fenix,
};

export const FENIX_VISION_DATA: VisionSectionProps = {
  heading: "vision enhance.",
  decoratorSrc: "",
  decoratorMobileSrc: "",
  items: [
    {
      title: "Challenge",
      body: `Fenix Finance faced the challenge of making veFNX voting and reward cycles accessible to users. The complexity of the ve(3,3) tokenomics model—where users lock tokens to vote and earn—needed to be communicated clearly without overwhelming the experience.`,
    },
    {
      title: "Journey",
      body: `Our journey centered on guiding users through contributing liquidity on the Blast network. We designed a fluid flow—from connecting a wallet to providing funds and voting for rewards—that makes the complexity of the protocol feel intuitive and rewarding.`,
    },
  ],
};

export const FONT_VARIANTS_FENIX: FontVariant[] = [
  {
    top: "top-[65.50px]",
    gap: "gap-32",
    nameColor: "text-neutral-400",
    weight: "font-light",
    label: "Light",
    charWidth: "w-80",
    typeFont: "Poppins",
  },

  {
    top: "top-[285.50px]",
    gap: "gap-14",
    nameColor: "text-zinc-800",
    weight: "font-normal",
    label: "Regular",
    charWidth: "w-96",
    typeFont: "Poppins",
  },
  {
    top: "top-[506.50px]",
    gap: "gap-12",
    nameColor: "text-zinc-800",
    weight: "font-medium",
    label: "Medium",
    charWidth: "w-96",
    typeFont: "Poppins",
  },
];
