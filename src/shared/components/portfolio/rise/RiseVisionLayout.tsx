import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import { RISE_LABS_VISION_DATA } from "./data";
import Image from "next/image";

const RiseVisionLayout = () => {
  return (
    <div className="relative w-full flex items-center justify-center max-md:flex-col">
      <VisionSection isColumn {...RISE_LABS_VISION_DATA} />
      <div className="w-full  justify-end flex h-full max-2xl:justify-center items-end flex-col gap-8 max-md:relative max-2xl:absolute">
        <Image
          src="/images/portfolios/rise-labs/vision-1.webp"
          alt="logo"
          className="
              h-[24.875rem] 
              2xl:w-[46.4375rem] 
              max-2xl:w-[32rem] 
              max-2xl:h-[16rem] 
              max-md:h-[13.75rem] object-cover
              max-md:w-full
              "
          height={597}
          width={1151}
        />
        <Image
          src="/images/portfolios/rise-labs/vision-2.webp"
          alt="logo"
          className="
              max-2xl:w-[32rem] 
              max-2xl:h-[16rem] 
              h-[24.875rem] object-cover  w-[46.4375rem] max-md:hidden"
          height={597}
          width={1151}
        />
      </div>
    </div>
  );
};

export default RiseVisionLayout;
