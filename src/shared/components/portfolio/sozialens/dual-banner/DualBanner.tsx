import Image from "next/image";

const DualBanner = () => {
  return (
    <div className="flex h-[33.25rem] overflow-hidden gap-5">
      <div className="w-1/4 h-full">
        <Image
          src="/images/portfolios/sozialens/banner-download.webp"
          alt=""
          className="size-full object-cover object-right"
          height={1074}
          width={1756}
        />
      </div>
      <div className="h-full">
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
