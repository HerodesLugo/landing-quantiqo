import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import { GARBO_DATA } from "@/shared/components/portfolio/garbo/data";
import TypographySpecComponent from "@/shared/components/portfolio/garbo/typography-spec-component/TypographySpecComponent";
import GarboBannerSequence from "./GarboBannerSequence";
import GarboBentoGrid from "./GarboBentoGrid";
import GarboImageGrid from "./GarboImageGrid";
import GarboVisionLayout from "./GarboVisionLayout";
import ProjectVideo from "@/shared/components/portfolio/common/ProjectVideo";
import { VIDEO_ASSETS } from "@/shared/constant/videoAssets";
import ScrollReveal from "@/shared/components/portfolio/common/scroll-reveal/ScrollReveal";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const Garbo = () => {
  return (
    <>
      <HeroPortfolio
        width={5760}
        height={3240}
        src={IMAGE_ASSETS.garbo.hero}
      />
      <ScrollReveal variant="fadeUp">
        <PortfolioOverview {...GARBO_DATA} />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <ProjectVideo
          src={VIDEO_ASSETS.garbo.launch}
          containerClassName="max-sm:h-[13.75rem]  xl:h-[69rem] bg-[#141622] max-ms:mb-5 xl:mb-11"
          videoClassName="w-full h-full object-cover"
        />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp">
        <GarboVisionLayout />
      </ScrollReveal>

      <ScrollReveal variant="staggerChildren">
        <GarboBentoGrid />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" className="hidden 2xl:block">
        <TypographySpecComponent />
      </ScrollReveal>

      <ScrollReveal variant="fadeIn">
        <HeroPortfolio
          width={5760}
          height={3240}
          src={IMAGE_ASSETS.garbo.bannerTwo}
        />
      </ScrollReveal>
      <ScrollReveal variant="staggerChildren">
        <GarboImageGrid />
      </ScrollReveal>

      <ScrollReveal variant="fadeIn">
        <ProjectVideo
          src={VIDEO_ASSETS.garbo.hero}
          containerClassName="h-[28rem] md:h-[48rem] xl:h-[69rem] bg-[#141622] my-5 md:my-11"
          videoClassName="w-full h-full object-cover"
        />
      </ScrollReveal>

      <ScrollReveal variant="staggerChildren">
        <GarboBannerSequence />
      </ScrollReveal>
    </>
  );
};

export default Garbo;
