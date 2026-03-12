import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import {
  ACCELERA_DATA,
  ACCELERA_VISION_DATA,
} from "@/shared/components/portfolio/accelera/data";
import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import FontView from "@/shared/components/portfolio/common/FontView";
import AcceleraBentoGrid from "@/shared/components/portfolio/accelera/bento-grid/AcceleraBentoGrid";
import TypographyShowcase from "@/shared/components/portfolio/accelera/typography-showcase/TypographyShowcase";
import TwoImageGrid from "@/shared/components/portfolio/accelera/two-image-grid/TwoImageGrid";
import OverflowBanner from "@/shared/components/portfolio/accelera/overflow-banner/OverflowBanner";
import ProductShowcase from "@/shared/components/portfolio/accelera/product-showcase/ProductShowcase";
import CenteredBanner from "@/shared/components/portfolio/accelera/centered-banner/CenteredBanner";
import FinalBanner from "@/shared/components/portfolio/accelera/final-banner/FinalBanner";

const Accelera = () => {
  return (
    <>
      <HeroPortfolio src="/images/portfolios/accelera/accelera-hero.webp" />
      <PortfolioOverview {...ACCELERA_DATA} />
      <HeroPortfolio src="/images/portfolios/accelera/banner-accelera.webp" />
      <VisionSection {...ACCELERA_VISION_DATA} />
      <AcceleraBentoGrid />
      <HeroPortfolio src="/images/portfolios/accelera/banner-2-accelera.webp" />
      <FontView fontName="Instrument Sans" fontClass="font-['Instrument Sans']" gradientClass="from-green-500 to-green-200" />
      <TypographyShowcase />
      <TwoImageGrid />
      <div className="my-5">
        <HeroPortfolio src="/images/portfolios/accelera/accelera-banner-5.webp" />
      </div>
      <OverflowBanner />
      <ProductShowcase />
      <CenteredBanner />
      <FinalBanner />
    </>
  );
};

export default Accelera;
