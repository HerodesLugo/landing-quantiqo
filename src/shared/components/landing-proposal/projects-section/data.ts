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
    img: "/images/projects/garbo.webp",
    description: `Garbo is a software platform for real-time mobile device virtualization on ARM-over-ARM, enabling large-scale security research, cyber intelligence, and advanced testing with full control over virtual terminals.`,
    source: "https://www.behance.net/gallery/231170657/Nest",
  },
  {
    id: 5,
    title: "Carbon",
    img: "/images/projects/carbon.webp",
    description: `Carbon is an on-chain trading platform focused on strategic BTC accumulation. Its design blends speed, clarity, and stability, positioning $CARBON as a cycle-resistant asset.`,
    source: "https://www.behance.net/gallery/232410825/Carbon",
  },
  {
    id: 2,
    title: "Nest",
    img: "/images/projects/nest.webp",
    description: `Nest is a DeFi platform on Hyperliquid that combines yield strategies, automated governance, and veTokenomics, enabling communities to stake, vote, and grow together on-chain.`,
    source: "https://www.behance.net/gallery/231170657/Nest",
  },
  {
    id: 3,
    title: "Accelera",
    img: "/images/projects/accelera.webp",
    description: `Accelera is a stablecoin ecosystem that blends cutting-edge tech, financial stability, and crypto native culture. Its aesthetic fuses dark elegance, interstellar inspiration, and on-chain visuals, connecting with a new generation of DeFi users.`,
    source: "https://www.behance.net/gallery/232411775/Accelera",
  },
  // {
  //   id: 4,
  //   title: "Sozialens",
  //   img: "/images/projects/sozialens.webp",
  //   description: `GARBO is a state-of-the-art software platform that enables
  //                   real-time virtualization of mobile devices on ARM-over-ARM
  //                   architecture.`,
  //   source: "",
  // },

  {
    id: 6,
    title: "Portalfi",
    img: "/images/projects/portalfi.webp",
    description: `PortalFi is a finance gateway that combines the simplicity of modern banking with the power of decentralized finance, enabling secure and seamless asset management, investing, and transfers.`,
    source: "https://www.behance.net/gallery/231172345/PortalFi",
  },
];
