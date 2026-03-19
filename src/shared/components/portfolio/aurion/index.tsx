import { AURION_DATA } from "@/shared/components/portfolio/aurion/data";
import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";
import AurionVisionLayout from "./AurionVisionLayout";
import AurionBentoGrid from "./AurionBentoGrid";
import AurionProductShowcase from "./AurionProductShowcase";
import ScrollReveal from "@/shared/components/portfolio/common/scroll-reveal/ScrollReveal";

const Aurion = () => {
  return (
    <>
      <HeroPortfolio
        width={5760}
        height={3240}
        src={IMAGE_ASSETS.aurion.hero}
      />
      <ScrollReveal variant="fadeUp">
        <PortfolioOverview {...AURION_DATA} />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <HeroPortfolio
          width={5760}
          height={3240}
          src={IMAGE_ASSETS.aurion.bannerOne}
        />
      </ScrollReveal>

      <ScrollReveal variant="fadeUp">
        <AurionVisionLayout />
      </ScrollReveal>

      <ScrollReveal variant="staggerChildren">
        <AurionBentoGrid />
      </ScrollReveal>

      <ScrollReveal variant="fadeIn" className="max-md:h-[14rem] xl:h-[67.5rem] flex items-center justify-center mb-5 md:mb-10">
        <Image
          src={IMAGE_ASSETS.aurion.bannerTwo}
          className="object-cover size-full"
          width={7680}
          height={4316}
          alt="banner"
        />
      </ScrollReveal>

      <ScrollReveal variant="scaleIn">
        <AurionProductShowcase />
      </ScrollReveal>

      <ScrollReveal variant="fadeIn" className="max-md:h-[14rem] xl:h-[67.5rem] flex items-center justify-center mb-5 md:mb-10">
        <Image
          src={IMAGE_ASSETS.aurion.bannerThree}
          className="object-cover size-full"
          width={7680}
          height={4316}
          alt="banner"
        />
      </ScrollReveal>
    </>
  );
};

export default Aurion;
