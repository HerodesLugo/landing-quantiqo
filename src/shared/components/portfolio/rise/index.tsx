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

const RiseLabs = () => {
  return (
    <>
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/rise-labs/hero.webp"
      />
      <PortfolioOverview {...RISE_LABS_DATA} />
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/rise-labs/banner-1.webp"
      />
      <RiseVisionLayout />

      <RiseBentoGrid />
      <div className="hidden md:block">
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
      </div>

      <div className="h-[24rem] md:h-[70rem] flex items-center justify-center">
        <Image
          src="/images/portfolios/rise-labs/banner-2.webp"
          className=" md:w-[56rem] h-[20rem] w-[17.9375rem] md:h-[60.5rem] object-top"
          width={7680}
          height={4316}
          alt="banner"
        />
      </div>
      <RiseProductShowcase />
      <div className="h-[20rem] md:h-[75.1875rem] border mb-11 max-md:my-11">
        <Image
          src="/images/portfolios/rise-labs/banner-final.webp"
          className="object-cover size-full object-top"
          width={7680}
          height={4316}
          alt="banner"
        />
      </div>
    </>
  );
};

export default RiseLabs;
