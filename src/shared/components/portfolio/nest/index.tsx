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
import ScrollReveal from "@/shared/components/portfolio/common/scroll-reveal/ScrollReveal";

const Nest = () => {
  return (
    <>
      <HeroPortfolio src="/images/portfolios/nest/hero.webp" />
      <ScrollReveal variant="fadeUp">
        <PortfolioOverview {...NEST_DATA} />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <ProjectVideo
          src={VIDEO_ASSETS.nest.partnership}
          containerClassName="max-md:h-[28rem] xl:h-[48rem] xl:h-[69rem] bg-[#0E160C]"
        />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp">
        <NestVisionLayout />
      </ScrollReveal>

      <ScrollReveal variant="staggerChildren" className="max-md:mt-5">
        <NestBentoGrid />

        <div className="max-md:h-[16rem] xl:h-[43.9375rem] max-md:mt-5 overflow-hidden">
          <Image
            src="/images/portfolios/nest/cartel.webp"
            width={1920}
            height={703}
            alt="cartel"
            className="object-cover size-full"
          />
        </div>

        <div className="h-[18rem] xl:h-[43.9375rem] flex justify-center items-center overflow-hidden max-md:hidden ">
          <Image
            src="/images/portfolios/nest/banner-avatar.webp"
            className="w-full xl:w-[75.8125rem] object-cover h-full"
            width={1920}
            height={703}
            alt="cartel"
          />
        </div>
        <div className="max-md:h-[14rem] xl:h-[68.5rem] max-md:hidden">
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
      </ScrollReveal>

      <ScrollReveal variant="fadeIn">
        <ProjectVideo
          src={VIDEO_ASSETS.nest.launch}
          containerClassName="max-md:h-[13.75rem] xl:h-[48rem] xl:h-[69rem] bg-[#0E160C] max-md:mt-5 my-11"
          videoClassName="object-cover size-full"
        />
      </ScrollReveal>

      <ScrollReveal variant="fadeIn">
        <div className="max-md:h-[30rem] max-md:p-10 2xl:h-[116.875rem] flex items-center justify-center overflow-hidden max-2xl:p-20">
          <Image
            src="/images/portfolios/nest/banner-3.webp"
            className="w-full 2xl:w-[102.875rem] 2xl:h-[108.75rem] max-md:object-cover md:object-top"
            width={7680}
            height={4316}
            alt="banner"
          />
        </div>
      </ScrollReveal>
    </>
  );
};

export default Nest;
