import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const ImageGalleryStrip = () => (
  <div className="h-full w-full flex gap-5 max-xl:flex-col">
    <div className="2xl:h-[39.1875rem] w-full max-md:h-[12.5rem] xl:w-1/4">
      <Image
        src={IMAGE_ASSETS.portalfi.tunnel}
        className="h-full object-cover"
        alt=""
        height={2508}
        width={1980}
      />
    </div>

    <div className="2xl:h-[39.1875rem] w-full max-md:h-[12.5rem] xl:w-1/4">
      <Image
        src={IMAGE_ASSETS.portalfi.standardCard}
        className="h-full object-cover"
        alt=""
        height={2508}
        width={1980}
      />
    </div>

    <div className="2xl:h-[39.1875rem] w-full max-md:h-[12.5rem] xl:w-1/2">
      <Image
        src={IMAGE_ASSETS.portalfi.card}
        className="h-full object-cover"
        alt=""
        height={2508}
        width={1980}
      />
    </div>
  </div>
);

export default ImageGalleryStrip;
