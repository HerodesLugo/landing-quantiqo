import Image from "next/image";
import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import { LINUS_VISION_DATA } from "./data";

const LinusVisionLayout = () => (
  <div className="relative w-full flex items-end justify-center    max-md:flex-col">
    <VisionSection isColumn {...LINUS_VISION_DATA} />

    <div className="w-full justify-end flex items-end flex-col gap-8   h-full max-md:">
      <Image
        src="/images/portfolios/linus/vision.webp"
        alt="logo"
        className=" object-cover h-full w-[60.1875rem] max-md:w-[20.4375rem]"
        height={3252}
        width={3252}
      />
    </div>
  </div>
);

export default LinusVisionLayout;
