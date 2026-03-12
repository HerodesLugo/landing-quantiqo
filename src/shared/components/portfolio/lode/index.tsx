import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import SectionLabel from "@/shared/components/portfolio/common/SectionLabel";
import { LODE_DATA } from "@/shared/components/portfolio/lode/data";
import Image from "next/image";
import LodeBentoGrid from "./LodeBentoGrid";
import LodeImageGrid from "./LodeImageGrid";
import LodeVisionLayout from "./LodeVisionLayout";

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
      <LodeImageGrid />
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
          className=" w-[96.9375rem] h-[71.1875rem]"
        />
      </div>

    </>
  );
};

export default Lode;
