import TypographyPreviewPanel from "@/shared/components/portfolio/common/typography-section/TypographyPreviewPanel";
import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const IntentxTypographySection = () => (
  <div className="grid grid-cols-3 gap-5 mb-11">
    <div className="col-span-2">
      <TypographyPreviewPanel
        title1="Intentx"
        title2="Decentralized Derivatives"
        title3="DeFi Simplified"
        gradientClass=""
        dotColorClass="bg-intentx"
        fontFamilyName="DM Sans"
        fontFamilyClass="font-dm-sans"
        descriptionNode={
          <span>
            The time to accelerate the process is now.{" "}
          </span>
        }
      />
    </div>
    <div className="flex-1 bg-white col-span-1 relative p-14">
      <div className="justify-start text-black text-2xl font-normal font-dm-sans">
        AaBbCcDdEeFfGgHhIiJjKkLlMmNn{" "}
      </div>
      <div className="justify-start text-black text-2xl font-normal font-dm-sans">
        OoPpQqRrSsTtUuVvWwXxYyZz
      </div>
      <div className="justify-start text-black text-2xl font-normal font-dm-sans">
        1234567890()$#@%^*+?/
      </div>
      <Image
        src={IMAGE_ASSETS.intentx.hands}
        alt=""
        width={2725}
        height={1594}
        className="w-[24.375rem] object-cover absolute bottom-0 right-0"
      />
    </div>
  </div>
);

export default IntentxTypographySection;
