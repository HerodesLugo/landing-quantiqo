import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const LodeBentoGrid = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 border my-5 md:my-11">
        <div className="h-[220px] md:h-auto md:flex-1 overflow-hidden">
          <Image
            src={IMAGE_ASSETS.lode.bentoGridOne}
            alt=""
            className="size-full object-cover"
            width={1806}
            height={2106}
          />
        </div>
        <div className="h-[220px] md:h-auto md:flex-1 overflow-hidden">
          <Image
            src={IMAGE_ASSETS.lode.bentoGridTwo}
            alt=""
            className="size-full object-cover"
            width={1806}
            height={2106}
          />
        </div>
        <div className="h-[220px] md:h-auto md:flex-1 overflow-hidden">
          <Image
            src={IMAGE_ASSETS.lode.bentoGridThree}
            alt=""
            className="size-full object-cover"
            width={1806}
            height={2106}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="h-[220px] md:h-auto md:flex-1 overflow-hidden">
          <Image
            src={IMAGE_ASSETS.lode.bentoGridFour}
            alt=""
            className="size-full object-cover"
            width={1806}
            height={2106}
          />
        </div>
        <div className="h-[220px] md:h-auto md:flex-1 overflow-hidden">
          <Image
            src={IMAGE_ASSETS.lode.bentoGridFive}
            alt=""
            className="size-full object-cover"
            width={1806}
            height={2106}
          />
        </div>
      </div>
    </>
  );
};

export default LodeBentoGrid;
