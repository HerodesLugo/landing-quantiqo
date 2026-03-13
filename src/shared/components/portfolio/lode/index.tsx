import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import SectionLabel from "@/shared/components/portfolio/common/SectionLabel";
import { LODE_DATA } from "@/shared/components/portfolio/lode/data";
import Image from "next/image";
import LodeBentoGrid from "./LodeBentoGrid";
import LodeImageGrid from "./LodeImageGrid";
import LodeVisionLayout from "./LodeVisionLayout";
import ProjectVideo from "@/shared/components/portfolio/common/ProjectVideo";
import { VIDEO_ASSETS } from "@/shared/constants/videoAssets";

const Lode = () => {
  return (
    <>
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/lode/hero.webp"
      />
      <PortfolioOverview {...LODE_DATA} />
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/lode/banner-1.webp"
      />
      <LodeVisionLayout />

      <div className="hidden md:block">
        <LodeImageGrid />
      </div>

      <ProjectVideo
        src={VIDEO_ASSETS.lode.video1}
        containerClassName="h-[28rem] md:h-[48rem] xl:h-[69rem] bg-[#141622] mb-11"
        videoClassName="w-full h-full object-cover"
      />

      <div className="hidden md:block">
        <div className="mt-11">
          <SectionLabel title="Launch video" subtitle="Motions Graphics and 3D" />
        </div>
        <LodeBentoGrid />
        <div className="my-11">
          <SectionLabel title="product" subtitle="UI / UX and Final Launch" />
        </div>
        <div className="my-11 flex justify-center items-center">
          <Image
            width={5760}
            height={3240}
            src="/images/portfolios/lode/banner-2.webp"
            alt=""
            className="w-full xl:w-[96.9375rem] h-auto xl:h-[71.1875rem] object-cover"
          />
        </div>
      </div>

    </>
  );
};

export default Lode;
