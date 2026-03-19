import Image from "next/image";
import { IMAGE_ASSETS } from "@/shared/constant/imageAssets";

const DualPhonesBanner = () => (
  <div className="relative hidden md:flex items-center 2xl:h-[76.875rem] justify-center overflow-hidden">
    <div className="absolute ">
      <Image
        src={IMAGE_ASSETS.portalfi.decoratorBg}
        alt=""
        height={900}
        className="2xl:w-[95rem] w-[62rem]"
        width={1920}
      />
    </div>
    <div className="relative">
      <div className="absolute flex inset-0 justify-center gap-56 mt-24">
        <div className="mix-blend-overlay justify-start text-zinc-800 text-8xl font-normal font-['Satoshi']">
          Withdraw
        </div>
        <div className="mix-blend-overlay justify-start text-zinc-800 text-8xl font-normal font-['Satoshi']">
          Deposit
        </div>
      </div>
      <Image
        src={IMAGE_ASSETS.portalfi.bothPhones}
        alt=""
        className="relative z-10"
        height={1230}
        width={1920}
      />
    </div>
  </div>
);

export default DualPhonesBanner;
