import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const FinalBanner = () => (
  <div className="relative 2xl:h-[64.5rem] max-md:mb-11">
    <Image
      src={IMAGE_ASSETS.portalfi.bannerThree}
      alt=""
      className="object-cover"
      height={4128}
      width={7680}
    />
  </div>
);

export default FinalBanner;
