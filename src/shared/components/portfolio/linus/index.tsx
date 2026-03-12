import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import FontView from "@/shared/components/portfolio/common/FontView";
import Image from "next/image";
import { LINUS_DATA } from "@/shared/components/portfolio/linus/data";
import LinusVisionLayout from "./LinusVisionLayout";
import LinusBentoGrid from "./LinusBentoGrid";
import LinusTypographySection from "./LinusTypographySection";
import LinusImageGrid from "./LinusImageGrid";
import LinusImageCollage from "./LinusImageCollage";
import LinusWebsiteSection from "./LinusWebsiteSection";
import LinusNftSection from "./LinusNftSection";

const Linus = () => {
  return (
    <>
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/linus/hero.webp"
      />
      <PortfolioOverview {...LINUS_DATA} />
      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/linus/banner-1.webp"
      />

      <LinusVisionLayout />

      <LinusBentoGrid />

      <HeroPortfolio
        width={5760}
        height={3240}
        src="/images/portfolios/linus/banner-2.webp"
      />

      {/* {FONT VIEW INFO} HERE  */}
      <FontView
        fontName="DM Sans"
        fontClass="font-['DM Sans']"
        gradientClass=""
      />

      <LinusTypographySection />

      <LinusImageGrid />

      <div className="my-11">
        <HeroPortfolio
          width={5760}
          height={3240}
          src="/images/portfolios/linus/banner-3.webp"
        />
      </div>

      <LinusImageCollage />

      <div className="flex flex-col gap-5">
        <LinusWebsiteSection />

        <div className="h-[75rem] overflow-hidden">
          <Image
            src="/images/portfolios/linus/banner-5.webp"
            className="object-cover"
            width={5760}
            height={3240}
            alt="banner"
          />
        </div>

        <div className="flex flex-col mb-11">
          <div className=" overflow-hidden flex justify-center ">
            <Image
              src="/images/portfolios/linus/banner-7.webp"
              className=" w-[96rem] h-[55.375rem] "
              width={5760}
              height={3240}
              alt="banner"
            />
          </div>
          <div className="flex flex-col gap-11">
            <LinusNftSection />
          </div>
        </div>
      </div>

    </>
  );
};

export default Linus;
