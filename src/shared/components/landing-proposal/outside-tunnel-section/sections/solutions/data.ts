export type SolutionTitle =
  | "branding"
  | "strategy"
  | "product design"
  | "motion and 3d"
  | "development";

export interface SolutionItem {
  title: SolutionTitle;
  description: string;
  points: string[];
}

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    title: "branding",
    description:
      "At the core of our approach, we maintain that brand and UX are closely connected and work together. Our team specializes in creating and representing digital brand identities across channels, providing strategy assistance and guidelines to ensure consistency.",
    points: [
      "Brand Strategy",
      "Brand Guidelines",
      "Brand Architecture",
      "Brand Assets",
      "Verbal Identity",
      "Brand Experiences",
      "Visual Identity",
      "Rebrands",
    ],
  },
  {
    title: "strategy",
    description:
      "Every tech startup has its own needs, but it all starts with a solid brand strategy. With a holistic approach, including brand audit, competitor research, and messaging framework, we ensure that your brand strategy and communication are on point.",
    points: [
      "Brand Audit",
      "Brand Advisory",
      "Startup Brand Strategy",
      "Analysis and Research",
      "Brand Messaging",
      "Strategic Planning",
      "Business Enviroment Audit",
      "Partnership Advisory",
    ],
  },
  {
    title: "product design",
    description:
      "We believe everyone deserves an exceptional user experience, whether using a product at work or in their free time. We create memorable enterprise and consumer products as well as provide comprehensive design systems for effortless product iteration.",
    points: [
      "User Research & Testing",
      "Brand Design Systems",
      "CX, UX & Interaction Design",
      "UI / UX Consult and Audits",
      "UI Design",
      "Inmmersive UI",
      "Motion Design",
      "Prototypes",
    ],
  },
  {
    title: "motion and 3d",
    description:
      "Illustrations and motion graphics draw a strong visual identity and depict complex tech products in a simple way. Tailored to your business, they professionally communicate your values and boost awareness.",
    points: [
      "Motion Graphics",
      "Animation",
      "3D Modelation",
      "Launch Videos",
      "3D Animation",
      "Illustration",
      "0 to 1 Productions",
      "Campaigns",
    ],
  },
  {
    title: "development",
    description:
      "Our designers and developers collaborate to create websites and products that provide exceptional user experiences and functionality. We optimize search engine visibility, ensure accessibility, and maximize performance.",
    points: [
      "Technology Consulting",
      "Mobile App Development",
      "Architecture Planning",
      "Backend Development & API Integration",
      "DevOps",
      "Frontend Web Development",
      "Emerging Tech (AI, AR/VR, Wearables, Web3)",
    ],
  },
];

export const OTHER_SERVICES_LIST = [
  "NAMING",
  "CONSULTING",
  "FULL-SERV. DESIGN",
  "UI / UX AND PROT.",
  "0 TO 1 LAUNCHS",
  "01 TO 1 MVPS",
  "OUTSOURCING",
];
