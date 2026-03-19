import { notFound } from "next/navigation";
import type { Metadata } from "next";

const PORTFOLIO_META: Record<string, { title: string; description: string }> = {
  portalfi: {
    title: "Portalfi",
    description:
      "High-performance DeFi platform designed and developed by Quantiqo Labs, featuring real-time dashboards and wallet integrations.",
  },
  accelera: {
    title: "Accelera",
    description:
      "Digital growth product built for Accelera, optimizing conversions and user experience at scale.",
  },
  sozialens: {
    title: "Sozialens",
    description:
      "Social analytics tool designed by Quantiqo Labs for Sozialens, featuring real-time data visualizations.",
  },
  nest: {
    title: "Nest",
    description:
      "Modern real estate platform developed by Quantiqo Labs, featuring advanced search and immersive property experiences.",
  },
  "rise-labs": {
    title: "Rise Labs",
    description:
      "Digital identity and web product for Rise Labs, a startup studio focused on the acceleration of technology projects.",
  },
  carbon: {
    title: "Carbon",
    description:
      "Sustainability and carbon footprint platform designed by Quantiqo Labs, featuring emissions tracking and reporting.",
  },
  garbo: {
    title: "Garbo",
    description:
      "Digital waste management solution developed by Quantiqo Labs to optimize logistics and environmental operations.",
  },
  aurion: {
    title: "Aurion",
    description:
      "Next-generation fintech application designed by Quantiqo Labs, featuring seamless and secure banking experiences.",
  },
  linus: {
    title: "Linus",
    description:
      "Developer tools suite built by Quantiqo Labs, improving productivity and technical workflows.",
  },
  lode: {
    title: "Lode",
    description:
      "Investment and digital assets platform designed by Quantiqo Labs featuring portfolio dashboards and market analytics.",
  },
  fenix: {
    title: "Fenix",
    description:
      "Brand redesign and digital product for Fenix, executed by Quantiqo Labs with a revamped visual identity and web experience.",
  },
  intentx: {
    title: "IntentX",
    description:
      "Intent-based trading platform designed by Quantiqo Labs for IntentX, featuring optimized UX for professional traders.",
  },
};

export async function generateStaticParams() {
  return Object.keys(PORTFOLIO_META).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = PORTFOLIO_META[slug.toLowerCase()];
  if (!meta) return { title: "Portfolio | Quantiqo Labs" };
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
    },
  };
}

import dynamic from "next/dynamic";
import Footer from "@/shared/components/landing-proposal/footer-section";

interface PortfolioPageProps {
  params: Promise<{ slug: string }>;
}

const PROJECT_COMPONENTS: Record<string, React.ElementType> = {
  portalfi: dynamic(() => import("@/shared/components/portfolio/portalfi")),
  accelera: dynamic(() => import("@/shared/components/portfolio/accelera")),
  sozialens: dynamic(() => import("@/shared/components/portfolio/sozialens")),
  nest: dynamic(() => import("@/shared/components/portfolio/nest")),
  "rise-labs": dynamic(() => import("@/shared/components/portfolio/rise")),
  carbon: dynamic(() => import("@/shared/components/portfolio/carbon")),
  garbo: dynamic(() => import("@/shared/components/portfolio/garbo")),
  aurion: dynamic(() => import("@/shared/components/portfolio/aurion")),
  linus: dynamic(() => import("@/shared/components/portfolio/linus")),
  lode: dynamic(() => import("@/shared/components/portfolio/lode")),
  fenix: dynamic(() => import("@/shared/components/portfolio/fenix")),
  intentx: dynamic(() => import("@/shared/components/portfolio/intentx")),
};

const PortfolioPage = async ({ params }: PortfolioPageProps) => {
  const { slug } = await params;

  const normalizedSlug = slug.toLowerCase();

  const ProjectComponent = PROJECT_COMPONENTS[normalizedSlug];

  if (!ProjectComponent) {
    notFound();
  }

  return (
    <main className="bg-[#EEF2F6] relative overflow-hidden">
      <div className="max-w-[120rem] mx-auto">
        <ProjectComponent />
        <div className="relative">
          <Footer isActive={true} className="relative" />
        </div>
      </div>
    </main>
  );
};

export default PortfolioPage;
