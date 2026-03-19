import { CARBON_VISION_DATA } from "./data";
import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const CarbonVisionLayout = () => (
  <div className="relative w-full flex items-center justify-center max-xl:flex-col">
    <VisionSection isColumn {...CARBON_VISION_DATA} />
    <div className="w-full justify-center md:justify-end flex xl:items-end items-center flex-col gap-8 max-2xl:absolute max-xl:relative bottom-0">
      <Image
        src={IMAGE_ASSETS.carbon.vision}
        alt="logo"
        className=" object-cover 2xl:size-[67.75rem] max-md:size-[18.5625rem] max-2xl:size-[37.5rem] max-xl:size-[30rem]"
        height={3252}
        width={3252}
      />
    </div>
  </div>
);

export default CarbonVisionLayout;
