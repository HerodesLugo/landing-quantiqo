import Image from "next/image";
import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import { NEST_VISION_DATA } from "./data";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const NestVisionLayout = () => (
  <div className="relative w-full flex items-center justify-center max-2xl:flex-col">
    <VisionSection isColumn {...NEST_VISION_DATA} />

    <div className="w-full  justify-end flex h-full max-2xl:justify-center items-end flex-col gap-8 max-xl:relative max-2xl:absolute">
      <Image
        src={IMAGE_ASSETS.nest.visionOne}
        alt="logo"
        className="
        
        md:min-h-[24.875rem] 
        xl:min-h-0
        2xl:w-[46.4375rem] 
        max-2xl:w-[32rem] 
        max-2xl:h-[16rem] 
        max-md:h-[8.4375rem] object-cover
        max-xl:w-full
        "
        height={597}
        width={1151}
      />
      <Image
        src={IMAGE_ASSETS.nest.visionTwo}
        alt="logo"
        className="
        max-2xl:w-[32rem] 
        max-2xl:h-[16rem] 
        h-[24.875rem] object-cover  w-[46.4375rem] max-xl:hidden"
        height={597}
        width={1151}
      />
    </div>

  </div>
);

export default NestVisionLayout;
