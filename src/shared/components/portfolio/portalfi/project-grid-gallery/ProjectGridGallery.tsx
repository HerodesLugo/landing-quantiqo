import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const ProjectGridGallery = () => {
  return (
    <div className="h-[62.5625rem] grid grid-cols-12 grid-rows-2 gap-5 my-10 max-md:hidden">
      <div className="col-span-3 bg-blue-700 overflow-hidden">
        <Image
          src={IMAGE_ASSETS.portalfi.card}
          alt=""
          className="w-[39.25rem] h-[30.75rem] object-cover object-right"
          height={1080}
          width={1920}
        />
      </div>
      <div className="col-span-6 bg-neutral-800 overflow-hidden">
        <Image
          src={IMAGE_ASSETS.portalfi.innerBanner}
          alt=""
          className="w-full object-cover"
          height={1080}
          width={1920}
        />
      </div>
      <div className="col-span-3 bg-neutral-700">
        <Image
          src={IMAGE_ASSETS.portalfi.phonesito}
          alt=""
          className="w-full h-full object-cover"
          height={1080}
          width={1920}
        />
      </div>
      <div className="col-span-3 bg-neutral-300">
        <Image
          src={IMAGE_ASSETS.portalfi.brilliantCard}
          alt=""
          className="w-full h-full object-cover"
          height={1080}
          width={1920}
        />
      </div>
      <div className="col-span-4 bg-neutral-200">
        <Image
          src={IMAGE_ASSETS.portalfi.stand}
          alt=""
          className="w-full h-full object-cover"
          height={1080}
          width={1920}
        />
      </div>
      <div className="col-span-5 bg-blue-600">
        <Image
          src={IMAGE_ASSETS.portalfi.streeth}
          alt=""
          className="w-full h-full object-cover"
          height={1080}
          width={1920}
        />
      </div>
    </div>
  );
};

export default ProjectGridGallery;
