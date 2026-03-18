import Image from "next/image";

const GarboBannerSequence = () => {
  return (
    <div className="flex flex-col gap-5 mb-5 md:mb-11">
      <div className="max-md:h-[14rem] 2xl:h-[67.5rem]">
        <Image
          src="/images/portfolios/garbo/banner-4.webp"
          className="object-cover size-full"
          width={5760}
          height={3240}
          alt="banner"
        />
      </div>
      <div className="max-md:h-[14rem] 2xl:h-[75rem] overflow-hidden">
        <Image
          src="/images/portfolios/garbo/banner-5.webp"
          className="object-cover size-full"
          width={5760}
          height={3240}
          alt="banner"
        />
      </div>

      <div className="max-md:h-[14rem] 2xl:h-[75rem] overflow-hidden">
        <Image
          src="/images/portfolios/garbo/banner-6.webp"
          className="object-cover size-full"
          width={5760}
          height={3240}
          alt="banner"
        />
      </div>
    </div>
  );
};

export default GarboBannerSequence;
