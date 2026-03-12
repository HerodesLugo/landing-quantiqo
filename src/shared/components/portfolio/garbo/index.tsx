import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import { GARBO_DATA } from "@/shared/components/portfolio/garbo/data";
import TypographySpecComponent from "@/shared/components/portfolio/garbo/typography-spec-component/TypographySpecComponent";
import GarboBannerSequence from "./GarboBannerSequence";
import GarboBentoGrid from "./GarboBentoGrid";
import GarboImageGrid from "./GarboImageGrid";
import GarboVisionLayout from "./GarboVisionLayout";

const Garbo = () => {
  return (
    <>
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/garbo/hero.webp"
      />
      <PortfolioOverview {...GARBO_DATA} />
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/garbo/banner-1.webp"
      />
      <GarboVisionLayout />
      <GarboBentoGrid />
      <TypographySpecComponent />
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/garbo/banner-2.webp"
      />
      <GarboImageGrid />
      <div className="my-11">
        <HeroPortfolio
          width={5760}
          height={3240}
          src="/images/portfolios/garbo/banner-3.webp"
        />
      </div>
      <GarboBannerSequence />
    </>
  );
};

export default Garbo;
