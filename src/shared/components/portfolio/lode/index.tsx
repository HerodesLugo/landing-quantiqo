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
import ScrollReveal from "@/shared/components/portfolio/common/scroll-reveal/ScrollReveal";

const Lode = () => {
  return (
    <>
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/lode/hero.webp"
      />
      <ScrollReveal variant="fadeUp">
        <PortfolioOverview {...LODE_DATA} />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <HeroPortfolio
          width={5760}
          height={3240}
          src="/images/portfolios/lode/banner-1.webp"
        />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp">
        <LodeVisionLayout />
      </ScrollReveal>

      <ScrollReveal variant="staggerChildren">
        <LodeImageGrid />
      </ScrollReveal>

      <ScrollReveal variant="fadeIn">
        <ProjectVideo
          src={VIDEO_ASSETS.lode.video1}
          containerClassName="h-[220px] md:h-[48rem] xl:h-[69rem] bg-[#141622] mb-5 md:mb-11"
          videoClassName="w-full h-full object-cover"
        />
      </ScrollReveal>

      <ScrollReveal variant="fadeUp" className="mt-5 md:mt-11">
        <SectionLabel title="Launch video" subtitle="Motions Graphics and 3D" />
      </ScrollReveal>
      <ScrollReveal variant="staggerChildren">
        <LodeBentoGrid />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" className="my-5 md:my-11">
        <SectionLabel title="product" subtitle="UI / UX and Final Launch" />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn" className="my-5 md:my-11 flex justify-center items-center">
        <Image
          width={5760}
          height={3240}
          src="/images/portfolios/lode/banner-2.webp"
          alt=""
          className="w-full 2xl:w-[96.9375rem] h-auto 2xl:h-[71.1875rem] object-cover"
        />
      </ScrollReveal>
    </>
  );
};

export default Lode;
