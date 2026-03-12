import Image from "next/image";

const LayeredBanner = () => {
  return (
    <div className="h-[75.4375rem] relative overflow-hidden">
      <Image
        src="/images/portfolios/sozialens/banner-4.webp"
        alt=""
        width={3840}
        height={2192}
        className="relative z-10"
      />
      <Image
        src="/images/portfolios/sozialens/background-light.webp"
        width={3840}
        height={2167}
        alt="background"
        className="absolute top-0 opacity-5"
      />
    </div>
  );
};

export default LayeredBanner;
