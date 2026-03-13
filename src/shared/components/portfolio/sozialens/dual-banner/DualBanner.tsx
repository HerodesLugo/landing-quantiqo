import Image from "next/image";

const DualBanner = () => {
  return (
    <div className="flex md:h-[33.25rem] max-md:mt-5 overflow-hidden gap-5 max-md:flex-col max-md:gap-3">
      <div className="md:w-1/4 w-full max-md:h-[16rem] md:h-full">
        <Image
          src="/images/portfolios/sozialens/banner-download.webp"
          alt=""
          className="size-full object-cover object-right"
          height={1074}
          width={1756}
        />
      </div>
      <div className="md:h-full max-md:h-[16rem]">
        <Image
          src="/images/portfolios/sozialens/banner-apps.webp"
          alt=""
          className="object-cover size-full"
          height={1074}
          width={1756}
        />
      </div>
    </div>
  );
};

export default DualBanner;

