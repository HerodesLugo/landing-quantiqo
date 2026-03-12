import Image from "next/image";
import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import { FENIX_VISION_DATA } from "./data";

const FenixVisionLayout = () => (
  <div className="relative w-full flex items-end justify-center    ">
    <VisionSection isColumn {...FENIX_VISION_DATA} />

    <div className="w-full justify-end flex items-end flex-col gap-8   h-full">
      <Image
        src="/images/portfolios/fenix/vision.webp"
        alt="logo"
        className=" object-cover h-full w-[60.1875rem]"
        height={3252}
        width={3252}
      />
    </div>
  </div>
);

export default FenixVisionLayout;
