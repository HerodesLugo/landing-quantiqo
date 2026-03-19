import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import { SOZIALENS_VISION_DATA } from "@/shared/components/portfolio/sozialens/data";
import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const SozialensVision = () => {
  return (
    <div className="relative w-full flex items-center justify-center max-xl:flex-col">
      <VisionSection {...SOZIALENS_VISION_DATA} />

      <div className="absolute -top-1 max-xl:hidden">
        <Image
          src={IMAGE_ASSETS.sozialens.backgroundDots}
          alt=""
          className="opacity-50 mix-blend-overlay"
          width={3840}
          height={878}
        />
      </div>
      <div className="w-full xl:justify-end flex xl:pr-10 justify-center max-xl:relative  max-2xl:absolute">
        <Image
          src={IMAGE_ASSETS.sozialens.visionDecorator}
          alt="logo"
          className="max-md:h-[14.1875rem] max-md:w-[13.9375rem] max-xl:w-[20rem]"
          height={515}
          width={505}
        />
      </div>
    </div>
  );
};

export default SozialensVision;
