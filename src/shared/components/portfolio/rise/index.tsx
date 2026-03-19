import { FONT_VARIANTS_RISE_LABS } from "@/shared/components/portfolio/rise/data";
import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import FontWeightsPanel from "@/shared/components/portfolio/common/typography-section/FontWeightsPanel";
import TypographyPreviewPanel from "@/shared/components/portfolio/common/typography-section/TypographyPreviewPanel";
import FontView from "@/shared/components/portfolio/common/FontView";
import { RISE_LABS_DATA } from "@/shared/components/portfolio/rise/data";
import Image from "next/image";
import RiseVisionLayout from "./RiseVisionLayout";
import RiseBentoGrid from "./RiseBentoGrid";
import RiseProductShowcase from "./RiseProductShowcase";
import ScrollReveal from "@/shared/components/portfolio/common/scroll-reveal/ScrollReveal";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const RiseLabs = () => {
  return (
    <>
      <HeroPortfolio
        width={5760}
        height={3240}
        src={IMAGE_ASSETS.rise.hero}
      />
      <ScrollReveal variant="fadeUp">
        <PortfolioOverview {...RISE_LABS_DATA} />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <HeroPortfolio
          width={5760}
          height={3240}
          src={IMAGE_ASSETS.rise.bannerOne}
        />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp">
        <RiseVisionLayout />
      </ScrollReveal>

      <ScrollReveal variant="staggerChildren">
        <RiseBentoGrid />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" className="hidden 2xl:block">
        <FontView
          fontName="Host Grotesk"
          fontClass="font-['Host Grotesk']"
          gradientClass="from-green-500 to-green-200"
        />
        <div className="flex gap-5 my-10 h-[41.375rem]">
          <TypographyPreviewPanel
            title1="Professional"
            title2="Dynamic"
            title3="Friendly"
            gradientClass="from-rise-labs to-green-200"
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
            FONT_VARIANTS={FONT_VARIANTS_RISE_LABS}
            gradientClass="from-rise-labs to-green-200"
          />
        </div>
      </ScrollReveal>

      <ScrollReveal variant="fadeIn" className="h-[24rem] md:h-[70rem] flex items-center justify-center">
        <Image
          src={IMAGE_ASSETS.rise.bannerTwo}
          className=" xl:w-[56rem] max-sm:h-[20rem] max-sm:w-[17.9375rem] xl:h-[60.5rem] object-top"
          width={7680}
          height={4316}
          alt="banner"
        />
      </ScrollReveal>
      <ScrollReveal variant="scaleIn">
        <RiseProductShowcase />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn" className="max-ms:h-[20rem] xl:h-[75.1875rem] border mb-11 max-xl:my-11">
        <Image
          src={IMAGE_ASSETS.rise.bannerFinal}
          className="object-cover size-full object-top"
          width={7680}
          height={4316}
          alt="banner"
        />
      </ScrollReveal>
    </>
  );
};

export default RiseLabs;
