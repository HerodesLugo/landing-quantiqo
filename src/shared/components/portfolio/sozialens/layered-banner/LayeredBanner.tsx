import Image from "next/image";

const LayeredBanner = () => {
  return (
    <div className="md:h-[75.4375rem] max-md:mt-5 relative overflow-hidden">
      <Image
        src="/images/portfolios/sozialens/banner-4.webp"
        alt=""
        width={3840}
        height={2192}
        className="relative z-10 w-full h-auto"
      />
      <Image
        src="/images/portfolios/sozialens/background-light.webp"
        width={3840}
        height={2167}
        alt="background"
        className="absolute top-0 opacity-5 w-full h-auto"
      />
    </div>
  );
};

export default LayeredBanner;

