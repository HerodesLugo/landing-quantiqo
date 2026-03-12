import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import FontView from "@/shared/components/portfolio/common/FontView";
import SectionLabel from "@/shared/components/portfolio/common/SectionLabel";
import { INTENTX_DATA } from "@/shared/components/portfolio/intentx/data";
import IntentxVisionLayout from "@/shared/components/portfolio/intentx/IntentxVisionLayout";
import IntentxBentoGrid from "@/shared/components/portfolio/intentx/IntentxBentoGrid";
import IntentxTypographySection from "@/shared/components/portfolio/intentx/IntentxTypographySection";
import IntentxProductGrid from "@/shared/components/portfolio/intentx/IntentxProductGrid";
import IntentxFinalGrid from "@/shared/components/portfolio/intentx/IntentxFinalGrid";
import Image from "next/image";

const Intentx = () => {
  return (
    <>
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/intentx/hero.webp"
      />
      <PortfolioOverview {...INTENTX_DATA} />
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/intentx/banner-1.webp"
      />

      <IntentxVisionLayout />
      <IntentxBentoGrid />

      <FontView
        fontName="DM Sans"
        fontClass="font-dm-sans"
        gradientClass=""
      />

      <IntentxTypographySection />
      <IntentxProductGrid />

      <div className="my-11">
        <HeroPortfolio
          width={5760}
          height={3240}
          src="/images/portfolios/intentx/banner-1.webp"
        />
      </div>

      <div className="h-[46.875rem] mt-11 flex justify-center">
        <Image
          src="/images/portfolios/intentx/tablet.webp"
          alt=""
          width={5760}
          height={3240}
          className="w-[80rem] h-[46.875rem] relative -bottom-16"
        />
      </div>

      <IntentxFinalGrid />

      <div className="my-11">
        <SectionLabel title="website" subtitle="UI / UX and Final Launch" />
      </div>

      <div className="h-[62.1875rem] flex justify-center">
        <Image
          src="/images/portfolios/intentx/banner-2.webp"
          alt=""
          width={5760}
          height={3240}
          className="w-[89.3125rem] h-[62.1875rem]"
        />
      </div>

      <div className="my-11">
        <SectionLabel title="product / app" subtitle="UI / UX and Final Launch" />
      </div>

    </>
  );
};

export default Intentx;
