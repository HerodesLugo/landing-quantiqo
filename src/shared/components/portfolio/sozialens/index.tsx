import HeroPortfolio from "@/shared/components/portfolio/common/HeroPortfolio";
import PortfolioOverview from "@/shared/components/portfolio/common/portfolio-overview/PortfolioOverview";
import FontView from "@/shared/components/portfolio/common/FontView";
import { SOZIALENS_DATA } from "@/shared/components/portfolio/sozialens/data";
import SozialensVision from "@/shared/components/portfolio/sozialens/vision-section/SozialensVision";
import DualBanner from "@/shared/components/portfolio/sozialens/dual-banner/DualBanner";
import FullWidthBanner from "@/shared/components/portfolio/sozialens/full-width-banner/FullWidthBanner";
import TypographyShowcase from "@/shared/components/portfolio/sozialens/typography-showcase/TypographyShowcase";
import ProductBanner from "@/shared/components/portfolio/sozialens/product-banner/ProductBanner";
import LayeredBanner from "@/shared/components/portfolio/sozialens/layered-banner/LayeredBanner";
import FinalBanner from "@/shared/components/portfolio/sozialens/final-banner/FinalBanner";
import ScrollReveal from "@/shared/components/portfolio/common/scroll-reveal/ScrollReveal";

const Sozialens = () => {
  return (
    <>
      <HeroPortfolio src="/images/portfolios/sozialens/hero.webp" />
      <ScrollReveal variant="fadeUp">
        <PortfolioOverview {...SOZIALENS_DATA} />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <HeroPortfolio src="/images/portfolios/sozialens/banner-1.webp" />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp">
        <SozialensVision />
      </ScrollReveal>

      <ScrollReveal variant="staggerChildren">
        <DualBanner />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <FullWidthBanner />
      </ScrollReveal>
      <ScrollReveal variant="fadeUp" className="hidden 2xl:block">
        <FontView
          fontName="DM Sans"
          fontClass="font-['DM Sans']"
          gradientClass="from-[#105FC9] to-[#AED0FF]"
        />
        <TypographyShowcase />
      </ScrollReveal>

      <ScrollReveal variant="scaleIn">
        <ProductBanner />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <LayeredBanner />
      </ScrollReveal>
      <ScrollReveal variant="fadeIn">
        <FinalBanner />
      </ScrollReveal>
    </>
  );
};

export default Sozialens;
