import TypographyAnnotationPanel from "@/shared/components/portfolio/common/typography-section/TypographyAnnotationPanel";
import FontAlphabetPanel from "@/shared/components/portfolio/common/typography-section/FontAlphabetPanel";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const LinusTypographySection = () => (
  <div className="grid grid-cols-3 gap-5  mb-11">
    <div className="flex-1 bg-accelera col-span-2">
      <TypographyAnnotationPanel titleFontClass="font-['Bungee']" />
    </div>
    <div className="flex-1 col-span-1">
      <FontAlphabetPanel
        fontName="Bungee"
        fontClass="font-['Bungee']"
        imageSrc={IMAGE_ASSETS.linus.pegmilioSmoke}
        imageWidth={2725}
        imageHeight={1594}
        imageClassName="w-[46.6875rem] object-cover absolute bottom-0 right-0"
      />
    </div>
  </div>
);

export default LinusTypographySection;
