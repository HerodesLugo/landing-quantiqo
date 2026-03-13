import Image from "next/image";

const ProductBanner = () => {
  return (
    <div className="md:h-[70.625rem] flex flex-col gap-9 max-md:gap-5">
      <Image
        src="/images/portfolios/sozialens/banner-3.webp"
        alt=""
        width={3840}
        height={2192}
        className="w-full h-auto"
      />

      <div className="flex flex-col gap-5 px-10 max-md:px-5 max-md:gap-2">
        <span className="text-5xl max-md:text-2xl text-black font-semibold tracking-[3.6px] max-md:tracking-[2px]">
          PRODUCT
        </span>
        <span className="text-xl max-md:text-sm font-normal text-base-300">
          UI / UX and Final Launch
        </span>
      </div>
    </div>
  );
};

export default ProductBanner;

