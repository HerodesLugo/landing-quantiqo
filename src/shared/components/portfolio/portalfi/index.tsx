import ProjectBentoGrid from "@/shared/components/portfolio/portalfi/bento-grid/ProjectBentoGrid";
import {
  FONT_VARIANTS_PORTALFI,
  PORTAL_FI_BENTO_DATA,
  PORTAL_FI_DATA,
  PORTAL_FI_VISION_DATA,
} from "@/shared/components/portfolio/portalfi/data";
import DualPhonesBanner from "@/shared/components/portfolio/portalfi/dual-phones-banner/DualPhonesBanner";
import EarnBanner from "@/shared/components/portfolio/portalfi/earn-banner/EarnBanner";
import FeaturedCardsImage from "@/shared/components/portfolio/portalfi/featured-cards-image/FeaturedCardsImage";
import FinalBanner from "@/shared/components/portfolio/portalfi/final-banner/FinalBanner";
import FontView from "@/shared/components/portfolio/common/FontView";
import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import ImageGalleryStrip from "@/shared/components/portfolio/portalfi/image-gallery-strip/ImageGalleryStrip";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import ProductShowcase from "@/shared/components/portfolio/portalfi/product-showcase/ProductShowcase";
import ProjectGridGallery from "@/shared/components/portfolio/portalfi/project-grid-gallery/ProjectGridGallery";
import ThreePhonesBanner from "@/shared/components/portfolio/portalfi/three-phones-banner/ThreePhonesBanner";
import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import TypographyPreviewPanel from "@/shared/components/portfolio/common/typography-section/TypographyPreviewPanel";
import FontWeightsPanel from "@/shared/components/portfolio/common/typography-section/FontWeightsPanel";

const Portalfi = () => {
  return (
    <div className="font-satoshi">
      <HeroPortfolio src="/images/portfolios/portalfi/hero.webp" />
      <PortfolioOverview {...PORTAL_FI_DATA} />
      <HeroPortfolio src="/images/portfolios/portalfi/banner.webp" />
      <VisionSection {...PORTAL_FI_VISION_DATA} />
      <ProjectBentoGrid {...PORTAL_FI_BENTO_DATA} />
      <HeroPortfolio
        src="/images/portfolios/portalfi/portalfi-sent.webp"
        height={4419}
        width={7680}
      />
      <FontView fontName="Satoshi" fontClass="font-['Satoshi']" />
      <div className="flex gap-5 my-10 h-[41.375rem]">
        <TypographyPreviewPanel />
        <FontWeightsPanel FONT_VARIANTS={FONT_VARIANTS_PORTALFI} />
      </div>
      <ImageGalleryStrip />
      <FeaturedCardsImage />
      <EarnBanner />
      <ProductShowcase />
      <DualPhonesBanner />
      <ThreePhonesBanner />
      <FinalBanner />
      <ProjectGridGallery />
    </div>
  );
};

export default Portalfi;
