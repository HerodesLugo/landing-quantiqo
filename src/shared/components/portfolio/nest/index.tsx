import { NEST_DATA } from "./data";
import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import Image from "next/image";
import NestVisionLayout from "./NestVisionLayout";
import NestBentoGrid from "./NestBentoGrid";
import NestPlatformGrid from "./NestPlatformGrid";
import NestProductShowcase from "./NestProductShowcase";
import ProjectVideo from "@/shared/components/portfolio/common/ProjectVideo";
import { VIDEO_ASSETS } from "@/shared/constants/videoAssets";

const Nest = () => {
  return (
    <>
      <HeroPortfolio src="/images/portfolios/nest/hero.webp" />
      <PortfolioOverview {...NEST_DATA} />
      {/* <HeroPortfolio src="/images/portfolios/nest/banner-video.webp" /> */}
      <ProjectVideo
        src={VIDEO_ASSETS.nest.partnership}
        containerClassName="h-[28rem] md:h-[48rem] xl:h-[69rem] bg-[#0E160C]"
      />
      <NestVisionLayout />

      <div className="max-md:mt-5">
        <NestBentoGrid />

        <div className="h-[16rem] md:h-[43.9375rem] max-md:mt-5 overflow-hidden">
          <Image
            src="/images/portfolios/nest/cartel.webp"
            width={1920}
            height={703}
            alt="cartel"
            className="object-cover size-full"
          />
        </div>

        <div className="h-[18rem] md:h-[43.9375rem] flex justify-center items-center overflow-hidden max-md:hidden ">
          <Image
            src="/images/portfolios/nest/banner-avatar.webp"
            className="w-full md:w-[75.8125rem] object-cover h-full"
            width={1920}
            height={703}
            alt="cartel"
          />
        </div>
        <div className="h-[14rem] md:h-[68.5rem] max-md:hidden">
          <Image
            src="/images/portfolios/nest/banner.webp"
            width={1957}
            height={1096}
            alt="banner"
            className="object-cover size-full"
          />
        </div>

        <NestPlatformGrid />
        <NestProductShowcase />
      </div>

      <ProjectVideo
        src={VIDEO_ASSETS.nest.launch}
        containerClassName="h-[13.75rem] md:h-[48rem] xl:h-[69rem] bg-[#0E160C] max-md:mt-5 my-11"
        videoClassName="object-cover size-full"
      />

        <div className="h-[30rem] max-md:p-10 md:h-[116.875rem] flex items-center justify-center overflow-hidden">
          <Image
            src="/images/portfolios/nest/banner-3.webp"
            className="w-full md:w-[102.875rem] md:h-[108.75rem] max-md:object-cover md:object-top"
            width={7680}
            height={4316}
            alt="banner"
          />
        </div>
    </>
  );
};

export default Nest;
