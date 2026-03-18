import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import { LODE_VISION_DATA } from "./data";
import Image from "next/image";

const LodeVisionLayout = () => {
  return (
    <div className="relative w-full flex items-center justify-center max-xl:flex-col">
      <VisionSection isColumn {...LODE_VISION_DATA} />
      <div className="w-full md:justify-end flex items-end flex-col md:gap-8  max-xl:hidden max-md:flex  max-md:flex-row max-md:justify-between">
        <Image
          src="/images/portfolios/lode/vision-1.webp"
          alt="logo"
          className="h-[24.875rem] xl:w-[46.4375rem] max-md:w-[11.5625rem] max-md:h-[9.1875rem]"
          height={597}
          width={1151}
        />
        <Image
          src="/images/portfolios/lode/vision-2.webp"
          alt="logo"
          className="h-[24.875rem] xlw-[46.4375rem] max-md:w-[11.5625rem] max-md:h-[9.1875rem]"
          height={597}
          width={1151}
        />
      </div>
    </div>
  );
};

export default LodeVisionLayout;
