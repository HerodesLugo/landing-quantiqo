import TypographyPreviewPanel from "@/shared/components/portfolio/common/typography-section/TypographyPreviewPanel";
import FontWeightsPanel from "@/shared/components/portfolio/common/typography-section/FontWeightsPanel";
import { FONT_VARIANTS_ACCELERA } from "@/shared/components/portfolio/accelera/data";

const TypographyShowcase = () => {
  return (
    <div className="flex gap-5 my-10 h-[41.375rem]">
      <TypographyPreviewPanel
        title1="Professional"
        title2="Dynamic"
        title3="Friendly"
        gradientClass="from-green-500 to-green-200"
        dotColorClass="bg-accelera"
        descriptionNode={
          <>
            <span className="text-black text-lg font-normal font-['Satoshi']">
              The time to accelerate the process is now.{" "}
            </span>
            
          </>
        }
      />
      <FontWeightsPanel
        FONT_VARIANTS={FONT_VARIANTS_ACCELERA}
        gradientClass="from-green-500 to-green-200"
      />
    </div>
  );
};

export default TypographyShowcase;
