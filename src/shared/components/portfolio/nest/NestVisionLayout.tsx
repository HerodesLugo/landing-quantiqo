import Image from "next/image";
import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import { NEST_VISION_DATA } from "./data";

const NestVisionLayout = () => (
  <div className="relative w-full flex items-center justify-center max-md:flex-col">
    <VisionSection isColumn {...NEST_VISION_DATA} />
    <div className="w-full justify-end flex items-end flex-col gap-8">
      <Image
        src="/images/portfolios/nest/vision-1.webp"
        alt="logo"
        className="h-[24.875rem] md:w-[46.4375rem] max-md:h-[8.4375rem] object-cover"
        height={597}
        width={1151}
      />
      <Image
        src="/images/portfolios/nest/vision-2.webp"
        alt="logo"
        className="h-[24.875rem] w-[46.4375rem] max-md:hidden"
        height={597}
        width={1151}
      />
    </div>
  </div>
);

export default NestVisionLayout;
