import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

export interface IProject {
  id: number;
  title: string;
  img: string;
  description: string;
  source: string;
}

export const PROJECTS: IProject[] = [
  {
    id: 1,
    title: "Garbo",
    img: IMAGE_ASSETS.garbo.hero,
    description: `Garbo is a software platform for real-time mobile device virtualization on ARM-over-ARM, enabling large-scale security research, cyber intelligence, and advanced testing with full control over virtual terminals.`,
    source: "portfolio/garbo",
  },
  {
    id: 5,
    title: "Carbon",
    img: IMAGE_ASSETS.carbon.hero,
    description: `Carbon is an on-chain trading platform focused on strategic BTC accumulation. Its design blends speed, clarity, and stability, positioning $CARBON as a cycle-resistant asset.`,
    source: "portfolio/carbon",
  },
  {
    id: 2,
    title: "Nest",
    img: IMAGE_ASSETS.nest.hero,
    description: `Nest is a DeFi platform on Hyperliquid that combines yield strategies, automated governance, and veTokenomics, enabling communities to stake, vote, and grow together on-chain.`,
    source: "portfolio/nest",
  },
  {
    id: 3,
    title: "Accelera",
    img: IMAGE_ASSETS.accelera.hero,
    description: `Accelera is a stablecoin ecosystem that blends cutting-edge tech, financial stability, and crypto native culture. Its aesthetic fuses dark elegance, interstellar inspiration, and on-chain visuals, connecting with a new generation of DeFi users.`,
    source: "portfolio/accelera",
  },
 

  {
    id: 6,
    title: "Portalfi",
    img: IMAGE_ASSETS.portalfi.hero,
    description: `PortalFi is a finance gateway that combines the simplicity of modern banking with the power of decentralized finance, enabling secure and seamless asset management, investing, and transfers.`,
    source: "portfolio/portalfi",
  },
  {
    id: 7,
    title: "Rise Labs",
    img: IMAGE_ASSETS.rise.hero,
    description: `Rise Labs is a creative hub building innovative DeFi and Web3 products designed to empower users, manage digital assets, and shape the future of decentralized finance.`,
    source: "portfolio/rise-labs",
  },
  {
    id: 8,
    title: "Aurion",
    img: IMAGE_ASSETS.aurion.hero,
    description: `Aurion is a next-generation decentralized exchange on the MegaETH blockchain, designed for high-speed execution and ultra-secure trading. More than a DEX, Aurion is a robust financial protocol built natively for the MegaETH layer.`,
    source: "portfolio/aurion",
  },
  {
    id: 9,
    title: "Linus",
    img: IMAGE_ASSETS.linus.hero,
    description: `Linus is a Web3-native brand rooted in culture and community. Led by the character Pengmilio, it fosters a vibrant movement in the Linea ecosystem where people connect through innovation and shared values.`,
    source: "portfolio/linus",
  },
  {
    id: 10,
    title: "Lode",
    img: IMAGE_ASSETS.lode.hero,
    description: `A cinematic launch video for LODE focused on storytelling and atmosphere, combining motion and visual narrative to introduce the project with clarity and impact.`,
    source: "portfolio/lode",
  },
  {
    id: 11,
    title: "Fenix",
    img: IMAGE_ASSETS.fenix.hero,
    description: `Fenix Finance is a marketplace where protocols compete for liquidity, users earn by voting and providing funds, and traders enjoy efficient exchange. All of this is made possible by the native yield (automatic interest) offered by the Blast network.`,
    source: "portfolio/fenix",
  },
  {
    id: 12,
    title: "Intentx",
    img: IMAGE_ASSETS.intentx.hero,
    description: `IntentX is a decentralized (DeFi) platform specializing in over-the-counter (OTC) derivatives that enables leveraged perpetual futures trading, delivering an experience comparable to centralized exchanges (CEX) but entirely on-chain, non-custodial, and permissionless.`,
    source: "portfolio/intentx",
  },
  {
    id: 13,
    title: "Sozialens",
    img: IMAGE_ASSETS.sozialens.hero,
    description: `Sozialens connects businesses with thematic social media accounts to boost visibility. We developed their full visual identity, branding, and motion resources to enable secure and efficient marketing.`,
    source: "portfolio/sozialens",
  },
];
