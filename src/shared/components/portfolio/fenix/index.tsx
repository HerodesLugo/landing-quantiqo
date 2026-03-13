import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import { FENIX_DATA } from "@/shared/components/portfolio/fenix/data";
import FontView from "@/shared/components/portfolio/common/FontView";
import SectionLabel from "@/shared/components/portfolio/common/SectionLabel";
import FenixVisionLayout from "./FenixVisionLayout";
import FenixImageGrid from "./FenixImageGrid";
import FenixTypographySection from "./FenixTypographySection";
import FenixBentoGrid from "./FenixBentoGrid";
import ProjectVideo from "@/shared/components/portfolio/common/ProjectVideo";
import { VIDEO_ASSETS } from "@/shared/constants/videoAssets";

const Fenix = () => {
  return (
    <>
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/fenix/hero.webp"
      />
      <PortfolioOverview {...FENIX_DATA} />
      <ProjectVideo
        src={VIDEO_ASSETS.fenix.video1}
        containerClassName="h-[28rem] md:h-[48rem] xl:h-[69rem] bg-[#141622]"
        videoClassName="w-full h-full object-cover"
      />
      <FenixVisionLayout />

      <div className="hidden md:block">
        <FenixImageGrid />

        <FontView
          fontName="Poppins"
          fontClass="font-['Poppins']"
          gradientClass=""
        />

        <FenixTypographySection />

        <FenixBentoGrid />

        <SectionLabel title="website" subtitle="UI / UX and Final Launch" />
      </div>

      <ProjectVideo
        src={VIDEO_ASSETS.fenix.video2}
        containerClassName="h-[28rem] md:h-[48rem] xl:h-[69rem] bg-[#141622] mt-11"
        videoClassName="w-full h-full object-cover"
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
