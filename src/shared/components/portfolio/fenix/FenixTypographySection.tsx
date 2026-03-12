import FenixTypographyAnnotationPanel from "./FenixTypographyAnnotationPanel";
import FontAlphabetPanel from "@/shared/components/portfolio/common/typography-section/FontAlphabetPanel";

const FenixTypographySection = () => (
  <div className="grid grid-cols-3 gap-5  mb-11">
    <div className="flex-1 bg-[#F6F7F9] col-span-2">
      <FenixTypographyAnnotationPanel />
    </div>
    <div className="flex-1 col-span-1">
      <FontAlphabetPanel
        fontName="Space Grotesk"
        fontClass="font-space-grotesk"
        imageSrc="/images/portfolios/fenix/fenix-hands.webp"
        imageWidth={2725}
        imageHeight={1594}
        imageClassName="w-[46.6875rem] object-cover absolute bottom-0 right-0"
      />
    </div>
  </div>
);

export default FenixTypographySection;
