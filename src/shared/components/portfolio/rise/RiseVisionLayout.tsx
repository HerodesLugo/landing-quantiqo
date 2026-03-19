import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import { RISE_LABS_VISION_DATA } from "./data";
import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const RiseVisionLayout = () => {
  return (
    <div className="relative w-full flex items-center justify-center max-xl:flex-col">
      <VisionSection isColumn {...RISE_LABS_VISION_DATA} />
      <div className="w-full  justify-end flex h-full max-2xl:justify-center items-end flex-col gap-8 max-xl:relative max-2xl:absolute">
        <Image
          src={IMAGE_ASSETS.rise.visionOne}
          alt="logo"
          className="
               h-[24.875rem] 
              2xl:w-[46.4375rem] 
              max-2xl:w-[32rem] 
              max-2xl:h-[16rem]                
              max-xl:w-full
              object-cover
              max-xl:min-h-[23.75rem]
              max-sm:min-h-0
              "
          height={597}
          width={1151}
        />
        <Image
          src={IMAGE_ASSETS.rise.visionTwo}
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
};

export default RiseVisionLayout;
