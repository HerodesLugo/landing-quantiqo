import { AURION_VISION_DATA } from "./data";
import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const AurionVisionLayout = () => {
  return (
    <div className="relative w-full flex items-end justify-center max-xl:flex-col">
      <VisionSection isColumn {...AURION_VISION_DATA} />

      <div className="w-full justify-end flex xl:items-end items-center flex-col gap-8 ">
        <Image
          src={IMAGE_ASSETS.aurion.vision}
          alt="logo"
          className=" object-cover xl:h-[58.625rem] xl:w-[48.8125rem] max-xl:w-[19.3125rem] max-xl:h-[23.1875rem]"
          height={3252}
          width={3252}
        />
      </div>
    </div>
  );
};

export default AurionVisionLayout;
