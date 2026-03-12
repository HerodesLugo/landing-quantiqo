import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import { FENIX_DATA } from "@/shared/components/portfolio/fenix/data";
import FontView from "@/shared/components/portfolio/common/FontView";
import SectionLabel from "@/shared/components/portfolio/common/SectionLabel";
import FenixVisionLayout from "./FenixVisionLayout";
import FenixImageGrid from "./FenixImageGrid";
import FenixTypographySection from "./FenixTypographySection";
import FenixBentoGrid from "./FenixBentoGrid";

const Fenix = () => {
  return (
    <>
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/fenix/hero.webp"
      />
      <PortfolioOverview {...FENIX_DATA} />
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/fenix/banner-1.webp"
      />

      <FenixVisionLayout />

      <FenixImageGrid />

      <FontView
        fontName="Poppins"
        fontClass="font-['Poppins']"
        gradientClass=""
      />

      <FenixTypographySection />

      <FenixBentoGrid />

      <SectionLabel title="website" subtitle="UI / UX and Final Launch" />

      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/fenix/banner-2.webp"
      />
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/fenix/banner-3.webp"
      />
      <div className="mb-11"></div>
    </>
  );
};

export default Fenix;
