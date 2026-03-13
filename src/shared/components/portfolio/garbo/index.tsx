import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import { GARBO_DATA } from "@/shared/components/portfolio/garbo/data";
import TypographySpecComponent from "@/shared/components/portfolio/garbo/typography-spec-component/TypographySpecComponent";
import GarboBannerSequence from "./GarboBannerSequence";
import GarboBentoGrid from "./GarboBentoGrid";
import GarboImageGrid from "./GarboImageGrid";
import GarboVisionLayout from "./GarboVisionLayout";
import ProjectVideo from "@/shared/components/portfolio/common/ProjectVideo";
import { VIDEO_ASSETS } from "@/shared/constants/videoAssets";

const Garbo = () => {
  return (
    <>
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/garbo/hero.webp"
      />
      <PortfolioOverview {...GARBO_DATA} />
      {/* <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/garbo/banner-1.webp"
      /> */}
      <ProjectVideo
        src={VIDEO_ASSETS.garbo.launch}
        containerClassName="h-[28rem] md:h-[48rem] xl:h-[69rem] bg-[#141622] mb-11"
        videoClassName="w-full h-full object-cover"
      />
      <GarboVisionLayout />

      <div className="hidden md:block">
        <GarboBentoGrid />
        <TypographySpecComponent />
        <HeroPortfolio
          width={5760}
          height={3240}
          src="/images/portfolios/garbo/banner-2.webp"
        />
        <GarboImageGrid />
      </div>

      <ProjectVideo
        src={VIDEO_ASSETS.garbo.hero}
        containerClassName="h-[28rem] md:h-[48rem] xl:h-[69rem] bg-[#141622] my-11"
        videoClassName="w-full h-full object-cover"
      />

      <div className="hidden md:block">
        <GarboBannerSequence />
      </div>
    </>
  );
};

export default Garbo;
