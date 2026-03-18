import { notFound } from "next/navigation";

import Accelera from "@/shared/components/portfolio/accelera";
import Carbon from "@/shared/components/portfolio/carbon";
import Nest from "@/shared/components/portfolio/nest";
import Portalfi from "@/shared/components/portfolio/portalfi";
import RiseLabs from "@/shared/components/portfolio/rise";
import Sozialens from "@/shared/components/portfolio/sozialens";
import Aurion from "@/shared/components/portfolio/aurion";
import Garbo from "@/shared/components/portfolio/garbo";
import Linus from "@/shared/components/portfolio/linus";
import Lode from "@/shared/components/portfolio/lode";
import Fenix from "@/shared/components/portfolio/fenix";
import Intentx from "@/shared/components/portfolio/intentx";
import Footer from "@/shared/components/landing-proposal/footer-section";

interface PortfolioPageProps {
  params: Promise<{ slug: string }>;
}

const PROJECT_COMPONENTS: Record<string, React.ElementType> = {
  portalfi: Portalfi,
  accelera: Accelera,
  sozialens: Sozialens,
  nest: Nest,
  "rise-labs": RiseLabs,
  carbon: Carbon,
  garbo: Garbo,
  aurion: Aurion,
  linus: Linus,
  lode: Lode,
  fenix: Fenix,
  intentx: Intentx,
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
