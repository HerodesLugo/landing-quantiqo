import Image from "next/image";
import VisionSection from "@/shared/components/portfolio/common/vision-section/VisionSection";
import { FENIX_VISION_DATA } from "./data";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const FenixVisionLayout = () => (
  <div className="relative w-full flex md:items-end justify-center max-md:flex-col">
    <VisionSection isColumn {...FENIX_VISION_DATA} />

    <div className="w-full justify-end flex md:items-end  flex-col gap-8   h-full items-start">
      <Image
        src={IMAGE_ASSETS.fenix.vision}
        alt="logo"
        className=" object-cover h-full md:w-[60.1875rem] w-[20rem]"
        height={3252}
        width={3252}
      />
    </div>
  </div>
);

export default FenixVisionLayout;
