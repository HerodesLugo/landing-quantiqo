import { CARBON_VISION_DATA } from "./data";
import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import Image from "next/image";

const CarbonVisionLayout = () => (
  <div className="relative w-full flex items-center justify-center max-md:flex-col">
    <VisionSection isColumn {...CARBON_VISION_DATA} />
    <div className="w-full justify-center md:justify-end flex md:items-end items-center flex-col gap-8 ">
      <Image
        src="/images/portfolios/carbon/vision.webp"
        alt="logo"
        className=" object-cover md:size-[67.75rem] size-[18.5625rem] "
        height={3252}
        width={3252}
      />
    </div>
  </div>
);

export default CarbonVisionLayout;
