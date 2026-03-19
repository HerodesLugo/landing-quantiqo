import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const FinalBanner = () => {
  return (
    <div className="2xl:h-[58.5rem] bg-[#1F1F1F] relative max-2xl:my-11 mb-11 max-md:h-[13.75rem]">
      <Image
        src={IMAGE_ASSETS.accelera.finalBanner}
        alt=""
        className="object-cover"
        height={1032}
        width={2022}
      />
    </div>
  );
};

export default FinalBanner;
