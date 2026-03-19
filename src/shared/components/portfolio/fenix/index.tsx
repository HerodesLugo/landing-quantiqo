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
import { VIDEO_ASSETS } from "@/shared/constant/videoAssets";
import ScrollReveal from "@/shared/components/portfolio/common/scroll-reveal/ScrollReveal";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const Fenix = () => {
  return (
    <>
      <HeroPortfolio
        width={5760}
        height={3240}
        src={IMAGE_ASSETS.fenix.hero}
      />
      <ScrollReveal variant="fadeUp">
        <PortfolioOverview {...FENIX_DATA} />
      </ScrollReveal>
      
      <ScrollReveal variant="fadeIn">
        <ProjectVideo
          src={VIDEO_ASSETS.fenix.video1}
          containerClassName="max-md:h-[13.75rem] xl:h-[69rem] bg-[#141622]"
          videoClassName="w-full h-full object-cover"
        />
      </ScrollReveal>

      <ScrollReveal variant="fadeUp">
        <FenixVisionLayout />
      </ScrollReveal>
      <ScrollReveal variant="staggerChildren">
        <FenixImageGrid />
      </ScrollReveal>

      <ScrollReveal variant="fadeUp" className="hidden 2xl:block">
        <FontView
          fontName="Poppins"
          fontClass="font-['Poppins']"
          gradientClass=""
        />

        <FenixTypographySection />
      </ScrollReveal>

      <ScrollReveal variant="staggerChildren">
        <FenixBentoGrid />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp">
        <SectionLabel title="website" subtitle="UI / UX and Final Launch" />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <ProjectVideo
          src={VIDEO_ASSETS.fenix.video2}
          containerClassName="max-md:h-[13.75rem] xl:h-[69rem] bg-[#141622] md:mt-11 max-md:my-5"
          videoClassName="w-full h-full object-cover"
        />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <HeroPortfolio
          width={5760}
          height={3240}
          src={IMAGE_ASSETS.fenix.bannerThree}
        />
      </ScrollReveal>
      <div className="mb-11"></div>
    </>
  );
};

export default Fenix;
