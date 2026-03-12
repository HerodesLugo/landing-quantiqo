import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import { LODE_VISION_DATA } from "./data";
import Image from "next/image";

const LodeVisionLayout = () => {
  return (
    <div className="relative w-full flex items-center justify-center">
      <VisionSection isColumn {...LODE_VISION_DATA} />
      <div className="w-full justify-end flex items-end flex-col gap-8">
        <Image
          src="/images/portfolios/lode/vision-1.webp"
          alt="logo"
          className="h-[24.875rem] w-[46.4375rem]"
          height={597}
          width={1151}
        />
        <Image
          src="/images/portfolios/lode/vision-2.webp"
          alt="logo"
          className="h-[24.875rem] w-[46.4375rem]"
          height={597}
          width={1151}
        />
      </div>
    </div>
  );
};

export default LodeVisionLayout;
