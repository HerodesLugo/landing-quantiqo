import Image from "next/image";



const EarnBanner = () => (
  <div className=" hidden md:flex justify-center overflow-hidden relative">
    {/* Curve overlay */}
    <div className="absolute inset-0 flex items-center">
      <Image
        src="/images/portfolios/portalfi/portalfi-line-courve.webp"
        className="mix-blend-color-dodge w-full mb-40"
        alt=""
        height={2508}
        width={1980}
      />
    </div>

    {/* Gradient glow */}
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="size-[37.5rem] origin-top-left opacity-10 bg-gradient-to-bl from-blue-700 to-blue-200 blur-[150.15px]" />
    </div>

    {/* Banner image + watermark */}
    <div className="relative justify-center items-center">
      <div className="text-zinc-800 text-8xl font-normal font-['Satoshi'] absolute text-center p-16 opacity-30 inset-0">
        Earn
      </div>
      <Image
        src="/images/portfolios/portalfi/banner-portalfi-2.webp"
        height={903}
        width={1569}
        className="h-full object-cover relative z-10"
        alt=""
      />
    </div>
  </div>
);

export default EarnBanner;
