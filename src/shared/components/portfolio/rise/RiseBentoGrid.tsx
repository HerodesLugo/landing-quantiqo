import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const RiseBentoGrid = () => {
  return (
    <div className="flex flex-col gap-4 xl:gap-8 py-8">
      {/* Mobile layout */}
      <div className="flex xl:hidden flex-col gap-4">
        <div className="flex gap-4 xl:h-[12rem]">
          <div className="w-1/2">
            <Image
              src={IMAGE_ASSETS.rise.bentoGridOne}
              alt=""
              className="size-full object-cover"
              height={395}
              width={440}
            />
          </div>
          <div className="w-1/2">
            <Image
              src={IMAGE_ASSETS.rise.bentoGridTwo}
              alt=""
              className="size-full object-cover"
              height={1187}
              width={1521}
            />
          </div>
        </div>
        <div className="xl:h-[14rem]">
          <Image
            src={IMAGE_ASSETS.rise.bentoGridFive}
            alt=""
            className="size-full object-cover"
            height={1187}
            width={2816}
          />
        </div>
        <div className="xl:h-[14rem]">
          <Image
            src={IMAGE_ASSETS.rise.bentoGridSeven}
            alt=""
            className="size-full object-cover"
            height={1505}
            width={2716}
          />
        </div>
        <div className="flex gap-4 xl:h-[12rem]">
          <div className="w-1/2">
            <Image
              src={IMAGE_ASSETS.rise.bentoGridEight}
              alt=""
              className="size-full object-cover"
              height={1418}
              width={1493}
            />
          </div>
          <div className="w-1/2">
            <Image
              src={IMAGE_ASSETS.rise.bentoGridNine}
              alt=""
              className="size-full object-cover"
              height={1418}
              width={1493}
            />
          </div>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden xl:flex gap-8 h-[27.5rem]">
        <div className="w-1/4">
          <Image
            src={IMAGE_ASSETS.rise.bentoGridOne}
            alt=""
            className="size-full object-cover"
            height={395}
            width={440}
          />
        </div>
        <div className="w-1/4">
          <Image
            src={IMAGE_ASSETS.rise.bentoGridTwo}
            alt=""
            className="size-full object-cover"
            height={1187}
            width={1521}
          />
        </div>
        <div className="w-1/2">
          <Image
            src={IMAGE_ASSETS.rise.bentoGridThree}
            alt=""
            className="size-full object-cover"
            height={1187}
            width={2716}
          />
        </div>
      </div>
      <div className="hidden xl:flex gap-8 h-[27.5rem]">
        <div className="w-1/4">
          <Image
            src={IMAGE_ASSETS.rise.bentoGridFour}
            alt=""
            className="size-full object-cover"
            height={1187}
            width={1321}
          />
        </div>
        <div className="w-1/2">
          <Image
            src={IMAGE_ASSETS.rise.bentoGridFive}
            alt=""
            className="size-full object-cover"
            height={1187}
            width={2816}
          />
        </div>
        <div className="w-1/4">
          <Image
            src={IMAGE_ASSETS.rise.bentoGridSix}
            alt=""
            className="size-full object-cover"
            height={1187}
            width={1418}
          />
        </div>
      </div>
      <div className="hidden xl:flex gap-8 h-[27.5rem]">
        <div className="w-1/2">
          <Image
            src={IMAGE_ASSETS.rise.bentoGridSeven}
            alt=""
            className="size-full object-cover"
            height={1505}
            width={2716}
          />
        </div>
        <div className="w-1/4">
          <Image
            src={IMAGE_ASSETS.rise.bentoGridEight}
            alt=""
            className="size-full object-cover"
            height={1418}
            width={1493}
          />
        </div>
        <div className="w-1/4">
          <Image
            src={IMAGE_ASSETS.rise.bentoGridNine}
            alt=""
            className="size-full object-cover"
            height={1418}
            width={1493}
          />
        </div>
      </div>
    </div>
  );
};

export default RiseBentoGrid;
