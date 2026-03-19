import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const IntentxBentoGrid = () => (
  <>
    {/* Mobile layout */}
    <div className="flex md:hidden flex-col gap-5 w-full max-md:mb-5">
      <div className="h-[220px] overflow-hidden">
        <Image
          src={IMAGE_ASSETS.intentx.bentoGridTwo}
          alt=""
          className="size-full object-cover"
          width={2478}
          height={1209}
        />
      </div>
      <div className="flex gap-5 h-[220px]">
        <div className="w-1/2 overflow-hidden">
          <Image
            src={IMAGE_ASSETS.intentx.bentoGridThree}
            alt=""
            className="size-full object-cover"
            width={2478}
            height={1209}
          />
        </div>
        <div className="w-1/2 overflow-hidden">
          <Image
            src={IMAGE_ASSETS.intentx.bentoGridOne}
            alt=""
            className="size-full object-cover"
            width={2478}
            height={1209}
          />
        </div>
      </div>
      <div className="h-[220px] overflow-hidden">
        <Image
          src={IMAGE_ASSETS.intentx.bentoGridFour}
          alt=""
          className="size-full object-cover"
          width={2478}
          height={1209}
        />
      </div>
    </div>

    {/* Desktop layout */}
    <div className="hidden md:grid grid-cols-12 gap-5 w-full 2xl:h-[60rem] max-2xl:mb-5">
      {/* Left Column */}
      <div className="col-span-5 flex flex-col gap-5 h-full">
        <div className="bg-[#1F2937] w-full flex-[55]">
          <Image
            src={IMAGE_ASSETS.intentx.bentoGridOne}
            alt=""
            className="size-full object-cover"
            width={2478}
            height={1209}
          />
        </div>
        <div className="bg-[#1E3A5F] w-full flex-[45]">
          <Image
            src={IMAGE_ASSETS.intentx.bentoGridThree}
            alt=""
            className="size-full object-cover"
            width={2478}
            height={1209}
          />
        </div>
      </div>

      {/* Right Column */}
      <div className="col-span-7 flex flex-col gap-5 h-full">
        <div className="bg-[#0F172A] w-full flex-[45]">
          <Image
            src={IMAGE_ASSETS.intentx.bentoGridTwo}
            alt=""
            className="size-full object-cover"
            width={2478}
            height={1209}
          />
        </div>
        <div className="bg-[#111827] w-full flex-[55]">
          <Image
            src={IMAGE_ASSETS.intentx.bentoGridFour}
            alt=""
            className="size-full object-cover"
            width={2478}
            height={1209}
          />
        </div>
      </div>
    </div>
  </>
);

export default IntentxBentoGrid;
