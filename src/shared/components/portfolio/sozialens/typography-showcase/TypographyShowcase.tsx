import FontWeightsPanel from "@/shared/components/portfolio/common/typography-section/FontWeightsPanel";
import TypographyPreviewPanel from "@/shared/components/portfolio/common/typography-section/TypographyPreviewPanel";
import { FONT_VARIANTS_PORTALFI } from "@/shared/components/portfolio/portalfi/data";

const TypographyShowcase = () => {
  return (
    <div className="flex gap-5 my-10 h-[41.375rem]">
      <TypographyPreviewPanel
        title1="Professional"
        title2="Dynamic"
        title3="Friendly"
        gradientClass="from-[#105FC9] to-[#AED0FF]"
        dotColorClass="bg-sozialens"
        descriptionNode={
          <>
            <span className="text-black text-lg font-normal font-['Satoshi']">
              The time to accelerate the process is now.
            </span>
          </>
        }
      />
      <FontWeightsPanel
        gradientClass="from-[#105FC9] to-[#AED0FF]"
        FONT_VARIANTS={FONT_VARIANTS_PORTALFI}
      />
    </div>
  );
};

export default TypographyShowcase;
