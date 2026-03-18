import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import { GARBO_VISION_DATA } from "./data";
import Image from "next/image";

const GarboVisionLayout = () => {
  return (
    <div className="relative w-full flex items-end justify-center    md:h-[64.75rem]">
      <VisionSection isColumn {...GARBO_VISION_DATA} />

      <div className="w-full justify-end flex items-end flex-col gap-8   h-full max-md:hidden">
        <Image
          src="/images/portfolios/garbo/vision.webp"
          alt="logo"
          className=" 2xl:w-[60.1875rem]"
          height={3252}
          width={3252}
        />
      </div>
    </div>
  );
};

export default GarboVisionLayout;
