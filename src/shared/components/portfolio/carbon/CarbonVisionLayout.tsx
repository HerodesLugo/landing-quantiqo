import { CARBON_VISION_DATA } from "./data";
import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import Image from "next/image";

const CarbonVisionLayout = () => (
  <div className="relative w-full flex items-center justify-center">
    <VisionSection isColumn {...CARBON_VISION_DATA} />
    <div className="w-full justify-end flex items-end flex-col gap-8">
      <Image
        src="/images/portfolios/carbon/vision.webp"
        alt="logo"
        className=" object-cover size-[67.75rem]"
        height={3252}
        width={3252}
      />
    </div>
  </div>
);

export default CarbonVisionLayout;
