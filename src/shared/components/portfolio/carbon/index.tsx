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
import { VIDEO_ASSETS } from "@/shared/constant/videoAssets";
import SectionLabel from "@/shared/components/portfolio/common/SectionLabel";
import ScrollReveal from "@/shared/components/portfolio/common/scroll-reveal/ScrollReveal";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const Carbon = () => {
  return (
    <>
      <HeroPortfolio
        width={5760}
        height={3240}
        src={IMAGE_ASSETS.carbon.hero}
      />
      <ScrollReveal variant="fadeUp">
        <PortfolioOverview {...CARBON_DATA} />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <ProjectVideo
          src={VIDEO_ASSETS.carbon.chain}
          containerClassName="h-[28rem] md:h-[48rem] xl:h-[69rem] bg-[#141622]"
          videoClassName="w-full h-full object-cover"
        />
      </ScrollReveal>

      <ScrollReveal variant="fadeUp">
        <CarbonVisionLayout />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn" className="max-sm:h-[20rem] xl:h-[92.375rem]">
        <Image
          src={IMAGE_ASSETS.carbon.bannerTwo}
          alt=""
          className="object-cover size-full"
          height={7668}
          width={6124}
        />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" className="hidden 2xl:block">
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
      </ScrollReveal>
      <ScrollReveal variant="fadeIn" className="max-sm:h-[14rem] xl:h-[67.5rem] flex items-center justify-center mb-5 md:mb-10">
        <Image
          src={IMAGE_ASSETS.carbon.bannerThree}
          className="object-cover size-full"
          width={7680}
          height={4316}
          alt="banner"
        />
      </ScrollReveal>

      <ScrollReveal variant="staggerChildren">
        <CarbonBentoGrid />
      </ScrollReveal>
      <ScrollReveal variant="scaleIn">
        <CarbonProductSection />
      </ScrollReveal>

      <ScrollReveal variant="fadeIn">
        <ProjectVideo
          src={VIDEO_ASSETS.carbon.portraitDiscord}
          containerClassName="h-[28rem] md:h-[48rem] xl:h-[69rem] bg-[#141622] mb-11"
          videoClassName="w-full h-full object-cover"
        />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" className="my-5 md:my-11 flex flex-col gap-5 max-md:px-0 px-7">
        <div>
          <Image
            src={IMAGE_ASSETS.carbon.bannerSix}
            alt=""
            className="object-cover w-full max-md:h-[14rem] xl:h-[69.125rem]"
            width={2748}
            height={1491}
          />
        </div>
        <div className="">
          <SectionLabel title="product / app" subtitle="UI / UX and Final Launch" />
        </div>
      </ScrollReveal>
    </>
  );
};

export default Carbon;
