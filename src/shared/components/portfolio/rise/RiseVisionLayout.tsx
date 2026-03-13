import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import { RISE_LABS_VISION_DATA } from "./data";
import Image from "next/image";

const RiseVisionLayout = () => {
  return (
    <div className="relative w-full flex items-center justify-center max-md:flex-col">
      <VisionSection isColumn {...RISE_LABS_VISION_DATA} />
      <div className="w-full justify-end flex items-end flex-col gap-8">
        <Image
          src="/images/portfolios/rise-labs/vision-1.webp"
          alt="logo"
          className="h-[33.9375rem] w-[52.5rem] object-cover max-md:h-[8.4375rem]"
          height={1629}
          width={2520}
        />
        <Image
          src="/images/portfolios/rise-labs/vision-2.webp"
          alt="logo"
          className="h-[25.9375rem] w-[46.4375rem] object-center max-md:hidden"
          height={1247}
          width={2231}
        />
      </div>
    </div>
  );
};

export default RiseVisionLayout;
