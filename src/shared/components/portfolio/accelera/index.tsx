import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import ProjectVideo from "@/shared/components/portfolio/common/ProjectVideo";
import { VIDEO_ASSETS } from "@/shared/constant/videoAssets";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";
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
import ScrollReveal from "@/shared/components/portfolio/common/scroll-reveal/ScrollReveal";


const Accelera = () => {
  return (
    <>
      <HeroPortfolio src={IMAGE_ASSETS.accelera.hero} />
      <ScrollReveal variant="fadeUp">
        <PortfolioOverview {...ACCELERA_DATA} />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <ProjectVideo
          src={VIDEO_ASSETS.accelera.launch}
          containerClassName="h-[28rem] md:h-[48rem] xl:h-[69rem] bg-[#0E160C]"
          videoClassName="w-full h-full object-cover"
        />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp">
        <VisionSection {...ACCELERA_VISION_DATA} />
      </ScrollReveal>
      <ScrollReveal variant="staggerChildren">
        <AcceleraBentoGrid />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn" className="max-md:my-5">
        <HeroPortfolio src={IMAGE_ASSETS.accelera.bannerTwo} />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" className="hidden 2xl:block">
        <FontView
          fontName="Instrument Sans"
          fontClass="font-['Instrument Sans']"
          gradientClass="from-green-500 to-green-200"
        />
        <TypographyShowcase />
      </ScrollReveal>

      <ScrollReveal variant="staggerChildren">
        <TwoImageGrid />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn" className="md:my-5">
        <HeroPortfolio src={IMAGE_ASSETS.accelera.bannerFive} />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <OverflowBanner />
      </ScrollReveal>
      <ScrollReveal variant="scaleIn">
        <ProductShowcase />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <CenteredBanner />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <FinalBanner />
      </ScrollReveal>
    </>
  );
};

export default Accelera;
