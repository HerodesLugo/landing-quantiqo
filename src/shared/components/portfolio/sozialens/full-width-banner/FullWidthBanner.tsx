import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const FullWidthBanner = () => {
  return (
    <div className="xl:h-[68.5rem] my-5 w-full overflow-hidden">
      <Image
        src={IMAGE_ASSETS.sozialens.bannerTwo}
        alt=""
        width={3840}
        height={2192}
        className="w-full h-auto md:h-full md:w-auto object-cover"
      />
    </div>
  );
};

export default FullWidthBanner;

