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
import FontView from "@/shared/components/portfolio/common/FontView";
import ProjectVideo from "@/shared/components/portfolio/common/ProjectVideo";
import { VIDEO_ASSETS } from "@/shared/constant/videoAssets";
import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import ImageGalleryStrip from "@/shared/components/portfolio/portalfi/image-gallery-strip/ImageGalleryStrip";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import ProductShowcase from "@/shared/components/portfolio/portalfi/product-showcase/ProductShowcase";
import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import TypographyPreviewPanel from "@/shared/components/portfolio/common/typography-section/TypographyPreviewPanel";
import FontWeightsPanel from "@/shared/components/portfolio/common/typography-section/FontWeightsPanel";
import ProjectGridGallery from "@/shared/components/portfolio/portalfi/project-grid-gallery/ProjectGridGallery";
import ThreePhonesBanner from "@/shared/components/portfolio/portalfi/three-phones-banner/ThreePhonesBanner";
import FinalBanner from "@/shared/components/portfolio/portalfi/final-banner/FinalBanner";
import ScrollReveal from "@/shared/components/portfolio/common/scroll-reveal/ScrollReveal";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const Portalfi = () => {
  return (
    <div className="font-satoshi">
      <HeroPortfolio src={IMAGE_ASSETS.portalfi.hero} />
      <ScrollReveal variant="fadeUp">
        <PortfolioOverview {...PORTAL_FI_DATA} />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <HeroPortfolio src={IMAGE_ASSETS.portalfi.banner} />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp">
        <VisionSection {...PORTAL_FI_VISION_DATA} />
      </ScrollReveal>
      <ScrollReveal variant="staggerChildren" className="hidden xl:block">
        <ProjectBentoGrid {...PORTAL_FI_BENTO_DATA} />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <ProjectVideo
          src={VIDEO_ASSETS.portalfi.main}
          containerClassName="h-[13.75rem] md:h-[48rem] xl:h-[69rem] bg-[#141622] max-md:mb-5"
          videoClassName="w-full h-full"
        />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" className="hidden 2xl:block">
        <FontView fontName="Satoshi" fontClass="font-['Satoshi']" />
        <div className="flex gap-5 my-10 h-[41.375rem]">
          <TypographyPreviewPanel />
          <FontWeightsPanel FONT_VARIANTS={FONT_VARIANTS_PORTALFI} />
        </div>
      </ScrollReveal>
      <ScrollReveal variant="staggerChildren">
        <ImageGalleryStrip />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <FeaturedCardsImage />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <EarnBanner />
      </ScrollReveal>
      <ScrollReveal variant="scaleIn">
        <ProductShowcase />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <DualPhonesBanner />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <ThreePhonesBanner />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <FinalBanner />
      </ScrollReveal>
      <ScrollReveal variant="staggerChildren">
        <ProjectGridGallery />
      </ScrollReveal>
    </div>
  );
};

export default Portalfi;
