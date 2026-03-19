import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import FontView from "@/shared/components/portfolio/common/FontView";
import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";
import { LINUS_DATA } from "@/shared/components/portfolio/linus/data";
import LinusVisionLayout from "./LinusVisionLayout";
import LinusBentoGrid from "./LinusBentoGrid";
import LinusTypographySection from "./LinusTypographySection";
import LinusImageGrid from "./LinusImageGrid";
import LinusImageCollage from "./LinusImageCollage";
import LinusWebsiteSection from "./LinusWebsiteSection";
import LinusNftSection from "./LinusNftSection";
import ProjectVideo from "@/shared/components/portfolio/common/ProjectVideo";
import { VIDEO_ASSETS } from "@/shared/constant/videoAssets";
import ScrollReveal from "@/shared/components/portfolio/common/scroll-reveal/ScrollReveal";

const Linus = () => {
  return (
    <>
      <HeroPortfolio
        width={5760}
        height={3240}
        src={IMAGE_ASSETS.linus.hero}
      />
      <ScrollReveal variant="fadeUp">
        <PortfolioOverview {...LINUS_DATA} />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <ProjectVideo
          src={VIDEO_ASSETS.linus.video1}
          containerClassName="max-md:h-[269px]  xl:h-[69rem] bg-[#141622] my-5 mxd:my-11"
          videoClassName="w-full h-full object-cover"
        />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp">
        <LinusVisionLayout />
      </ScrollReveal>

      <ScrollReveal variant="staggerChildren">
        <LinusBentoGrid />
      </ScrollReveal>

      <ScrollReveal variant="fadeIn" className="mb-5 md:mb-0">
        <HeroPortfolio
          width={5760}
          height={3240}
          src={IMAGE_ASSETS.linus.bannerTwo}
        />
      </ScrollReveal>

      <ScrollReveal variant="fadeUp" className="hidden 2xl:block">
        <FontView
          fontName="DM Sans"
          fontClass="font-['DM Sans']"
          gradientClass=""
        />

        <LinusTypographySection />
      </ScrollReveal>

      <ScrollReveal variant="staggerChildren" className="mb-5 md:mb-0">
        <LinusImageGrid />
      </ScrollReveal>

      <ScrollReveal variant="fadeIn" className="my-5 md:my-11">
        <HeroPortfolio
          width={5760}
          height={3240}
          src={IMAGE_ASSETS.linus.bannerThree}
        />
      </ScrollReveal>

      <ScrollReveal variant="staggerChildren" className="mb-5 md:mb-0">
        <LinusImageCollage />
      </ScrollReveal>

      <div className="flex flex-col gap-5">
        <ScrollReveal variant="fadeUp">
          <LinusWebsiteSection />
        </ScrollReveal>

        <ScrollReveal variant="fadeIn">
          <ProjectVideo
            src={VIDEO_ASSETS.linus.video2}
            containerClassName="max-md:h-[269px] xl:h-[75rem] bg-[#141622] my-5 md:my-11"
            videoClassName="w-full h-full object-cover"
          />
        </ScrollReveal>

        <ScrollReveal variant="staggerChildren" className="flex flex-col gap-5 md:gap-0 mb-11">
          <div className="overflow-hidden flex justify-center ">
            <Image
              src={IMAGE_ASSETS.linus.bannerSeven}
              className="w-full 2xl:w-[96rem] h-auto 2xl:h-[55.375rem] object-cover max-2xl:px-10 "
              width={5760}
              height={3240}
              alt="banner"
            />
          </div>
          <div className="flex flex-col gap-5 md:gap-11 px-7 max-md:p-0">
            <LinusNftSection />
          </div>
        </ScrollReveal>
        
      </div>
    </>
  );
};

export default Linus;
