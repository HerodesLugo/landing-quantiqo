import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import { INTENTX_VISION_DATA } from "@/shared/components/portfolio/intentx/data";
import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const IntentxVisionLayout = () => (
  <div className="relative w-full flex items-end justify-center max-md:flex-col">
    <VisionSection isColumn {...INTENTX_VISION_DATA} />

    <div className="w-full justify-end flex items-center md:items-end flex-col gap-8 h-full overflow-hidden">
      <Image
        src={IMAGE_ASSETS.intentx.vision}
        alt="logo"
        className="object-cover h-full w-[32.1875rem] md:w-[60.1875rem] relative -bottom-16 md:-bottom-24"
        height={3252}
        width={3252}
      />
    </div>
  </div>
);

export default IntentxVisionLayout;
