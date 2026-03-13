
import { AURION_DATA } from "@/shared/components/portfolio/aurion/data";
import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import Image from "next/image";
import AurionVisionLayout from "./AurionVisionLayout";
import AurionBentoGrid from "./AurionBentoGrid";
import AurionProductShowcase from "./AurionProductShowcase";

const Aurion = () => {
  return (
    <>
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/aurion/hero.webp"
      />
      <PortfolioOverview {...AURION_DATA} />
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/aurion/banner-1.webp"
      />

      <AurionVisionLayout />

      <div className="hidden md:block">
        <AurionBentoGrid />

        <div className="h-[67.5rem] flex items-center justify-center mb-10">
          <Image
            src="/images/portfolios/aurion/banner-2.webp"
            className="object-cover size-full"
            width={7680}
            height={4316}
            alt="banner"
          />
        </div>

        <AurionProductShowcase />

        <div className="h-[67.5rem] flex items-center justify-center mb-10">
          <Image
            src="/images/portfolios/aurion/banner-3.webp"
            className="object-cover size-full"
            width={7680}
            height={4316}
            alt="banner"
          />
        </div>
      </div>

    </>
  );
};

export default Aurion;
