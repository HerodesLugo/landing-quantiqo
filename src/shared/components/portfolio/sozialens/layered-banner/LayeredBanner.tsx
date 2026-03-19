import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const LayeredBanner = () => {
  return (
    <div className="2xl:h-[75.4375rem] mt-5 relative overflow-hidden">
      <Image
        src={IMAGE_ASSETS.sozialens.bannerFour}
        alt=""
        width={3840}
        height={2192}
        className="relative z-10 w-full h-auto"
      />
      <Image
        src={IMAGE_ASSETS.sozialens.backgroundLight}
        width={3840}
        height={2167}
        alt="background"
        className="absolute top-0 opacity-5 w-full h-auto"
      />
    </div>
  );
};

export default LayeredBanner;

