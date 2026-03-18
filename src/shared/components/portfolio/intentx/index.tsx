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
import ScrollReveal from "@/shared/components/portfolio/common/scroll-reveal/ScrollReveal";

const Intentx = () => {
  return (
    <>
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/intentx/hero.webp"
      />
      <ScrollReveal variant="fadeUp">
        <PortfolioOverview {...INTENTX_DATA} />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp">
        <IntentxVisionLayout />
      </ScrollReveal>
      <ScrollReveal variant="staggerChildren">
        <IntentxBentoGrid />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" className="hidden 2xl:block">
        <FontView
          fontName="DM Sans"
          fontClass="font-dm-sans"
          gradientClass=""
        />
        <IntentxTypographySection />
      </ScrollReveal>

      <ScrollReveal variant="staggerChildren">
        <IntentxProductGrid />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn" className="max-xl:px-10 xl:h-[46.875rem] mt-5 md:mt-11 flex justify-center relative z-50">
        <Image
          src="/images/portfolios/intentx/tablet.webp"
          alt=""
          width={5760}
          height={3240}
          className="w-full xl:w-[80rem] h-full xl:h-[46.875rem] object-cover relative xl:-bottom-16"
        />
      </ScrollReveal>
      <ScrollReveal variant="staggerChildren">
        <IntentxFinalGrid />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" className="my-5 md:my-11 md:px-0">
        <SectionLabel title="website" subtitle="UI / UX and Final Launch" />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn" className="2xl:h-[62.1875rem] flex justify-center overflow-hidden">
        <Image
          src="/images/portfolios/intentx/banner-2.webp"
          alt=""
          width={5760}
          height={3240}
          className="w-full md:w-[89.3125rem] h-full 2xl:h-[62.1875rem] object-cover"
        />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" className="my-5 md:mb-11 md:px-0">
        <SectionLabel
          title="product / app"
          subtitle="UI / UX and Final Launch"
        />
      </ScrollReveal>
    </>
  );
};

export default Intentx;
