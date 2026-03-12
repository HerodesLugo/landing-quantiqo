import { NEST_DATA } from "./data";
import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import Image from "next/image";
import NestVisionLayout from "./NestVisionLayout";
import NestBentoGrid from "./NestBentoGrid";
import NestPlatformGrid from "./NestPlatformGrid";
import NestProductShowcase from "./NestProductShowcase";

const Nest = () => {
  return (
    <>
      <HeroPortfolio src="/images/portfolios/nest/hero.webp" />
      <PortfolioOverview {...NEST_DATA} />
      <HeroPortfolio src="/images/portfolios/nest/banner-video.webp" />
      <NestVisionLayout />
      <NestBentoGrid />

      <div className="h-[43.9375rem]">
        <Image
          src="/images/portfolios/nest/cartel.webp"
          width={1920}
          height={703}
          alt="cartel"
        />
      </div>
      <div className="h-[43.9375rem] flex justify-center items-center">
        <Image
          src="/images/portfolios/nest/banner-avatar.webp"
          className="w-[75.8125rem]"
          width={1920}
          height={703}
          alt="cartel"
        />
      </div>
      <div className="h-[68.5rem]">
        <Image
          src="/images/portfolios/nest/banner.webp"
          className=""
          width={1957}
          height={1096}
          alt="banner"
        />
      </div>

      <NestPlatformGrid />
      <NestProductShowcase />

      <div className="h-[75.1875rem] border">
        <Image
          src="/images/portfolios/nest/banner-2.webp"
          className="object-cover size-full object-top"
          width={7680}
          height={4316}
          alt="banner"
        />
      </div>
      <div className="h-[116.875rem] flex items-center justify-center">
        <Image
          src="/images/portfolios/nest/banner-3.webp"
          className="w-[102.875rem] h-[108.75rem] object-top"
          width={7680}
          height={4316}
          alt="banner"
        />
      </div>
    </>
  );
};

export default Nest;
