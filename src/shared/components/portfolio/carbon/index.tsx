import {
  CARBON_DATA,
  FONT_VARIANTS_CARBON,
} from "@/shared/components/portfolio/carbon/data";
import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import FontWeightsPanel from "@/shared/components/portfolio/common/typography-section/FontWeightsPanel";
import TypographyPreviewPanel from "@/shared/components/portfolio/common/typography-section/TypographyPreviewPanel";
import FontView from "@/shared/components/portfolio/common/FontView";
import Image from "next/image";
import CarbonVisionLayout from "./CarbonVisionLayout";
import CarbonBentoGrid from "./CarbonBentoGrid";
import CarbonProductSection from "./CarbonProductSection";
import ProjectVideo from "@/shared/components/portfolio/common/ProjectVideo";
import { VIDEO_ASSETS } from "@/shared/constants/videoAssets";

const Carbon = () => {
  return (
    <>
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/carbon/hero.webp"
      />
      <PortfolioOverview {...CARBON_DATA} />
      <ProjectVideo
        src={VIDEO_ASSETS.carbon.chain}
        containerClassName="h-[28rem] md:h-[48rem] xl:h-[69rem] bg-[#141622]"
        videoClassName="w-full h-full object-cover"
      />

      <CarbonVisionLayout />
      <div className="h-[20rem] md:h-[92.375rem]">
        <Image
          src="/images/portfolios/carbon/banner-2.webp"
          alt=""
          className="object-cover size-full"
          height={7668}
          width={6124}
        />
      </div>
      <div className="hidden md:block">
        <FontView
          fontName="Plus Jakarta Sans"
          fontClass="font-['Plus Jakarta Sans']"
          gradientClass=""
        />
        <div className="flex gap-5 h-[41.375rem]">
          <TypographyPreviewPanel
            title1="Professional"
            title2="Dynamic"
            title3="Friendly"
            gradientClass=""
            dotColorClass="bg-rise-labs"
            descriptionNode={
              <>
                <span className="text-black text-lg font-normal font-['Satoshi']">
                  The time to accelerate the process is now.{" "}
                </span>
              </>
            }
          />
          <FontWeightsPanel
            FONT_VARIANTS={FONT_VARIANTS_CARBON}
            gradientClass=""
          />
        </div>
      </div>
      <div className="h-[14rem] md:h-[67.5rem] flex items-center justify-center mb-5 md:mb-10">
        <Image
          src="/images/portfolios/carbon/banner-3.webp"
          className="object-cover size-full"
          width={7680}
          height={4316}
          alt="banner"
        />
      </div>

      <CarbonBentoGrid />
      <CarbonProductSection />

      <ProjectVideo
        src={VIDEO_ASSETS.carbon.portraitDiscord}
        containerClassName="h-[28rem] md:h-[48rem] xl:h-[69rem] bg-[#141622] mb-11"
        videoClassName="w-full h-full object-cover"
      />
    </>
  );
};

export default Carbon;
