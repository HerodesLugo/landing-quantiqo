import { AURION_VISION_DATA } from "./data";
import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import Image from "next/image";

const AurionVisionLayout = () => {
  return (
    <div className="relative w-full flex items-end justify-center ">
      <VisionSection isColumn {...AURION_VISION_DATA} />

      <div className="w-full justify-end flex items-end flex-col gap-8 ">
        <Image
          src="/images/portfolios/aurion/vision.webp"
          alt="logo"
          className=" object-cover h-[58.625rem] w-[48.8125rem]"
          height={3252}
          width={3252}
        />
      </div>
    </div>
  );
};

export default AurionVisionLayout;
