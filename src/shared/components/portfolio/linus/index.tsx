import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import FontView from "@/shared/components/portfolio/common/FontView";
import Image from "next/image";
import { LINUS_DATA } from "@/shared/components/portfolio/linus/data";
import LinusVisionLayout from "./LinusVisionLayout";
import LinusBentoGrid from "./LinusBentoGrid";
import LinusTypographySection from "./LinusTypographySection";
import LinusImageGrid from "./LinusImageGrid";
import LinusImageCollage from "./LinusImageCollage";
import LinusWebsiteSection from "./LinusWebsiteSection";
import LinusNftSection from "./LinusNftSection";
import ProjectVideo from "@/shared/components/portfolio/common/ProjectVideo";
import { VIDEO_ASSETS } from "@/shared/constants/videoAssets";

const Linus = () => {
  return (
    <>
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/linus/hero.webp"
      />
      <PortfolioOverview {...LINUS_DATA} />
      {/* <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/linus/banner-1.webp"
      /> */}
      <ProjectVideo
        src={VIDEO_ASSETS.linus.video1}
        containerClassName="h-[28rem] md:h-[48rem] xl:h-[69rem] bg-[#141622] my-11"
        videoClassName="w-full h-full object-cover"
      />
      <LinusVisionLayout />

      <div className="hidden md:block">
        <LinusBentoGrid />

        <HeroPortfolio
          width={5760}
          height={3240}
          src="/images/portfolios/linus/banner-2.webp"
        />

        <FontView
          fontName="DM Sans"
          fontClass="font-['DM Sans']"
          gradientClass=""
        />

        <LinusTypographySection />

        <LinusImageGrid />

        <div className="my-11">
          <HeroPortfolio
            width={5760}
            height={3240}
            src="/images/portfolios/linus/banner-3.webp"
          />
        </div>

        <LinusImageCollage />

        <div className="flex flex-col gap-5">
          <LinusWebsiteSection />

          <ProjectVideo
            src={VIDEO_ASSETS.linus.video2}
            containerClassName="h-[28rem] md:h-[50rem] xl:h-[75rem] bg-[#141622] my-11"
            videoClassName="w-full h-full object-cover"
          />

          <div className="flex flex-col mb-11">
            <div className="overflow-hidden flex justify-center">
              <Image
                src="/images/portfolios/linus/banner-7.webp"
                className="w-full xl:w-[96rem] h-auto xl:h-[55.375rem] object-cover"
                width={5760}
                height={3240}
                alt="banner"
              />
            </div>
            <div className="flex flex-col gap-11">
              <LinusNftSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Linus;
