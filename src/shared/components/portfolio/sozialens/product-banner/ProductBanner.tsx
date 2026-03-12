import Image from "next/image";

const ProductBanner = () => {
  return (
    <div className="h-[70.625rem] flex flex-col gap-9">
      <Image
        src="/images/portfolios/sozialens/banner-3.webp"
        alt=""
        width={3840}
        height={2192}
      />

      <div className="flex flex-col gap-5 px-10">
        <span className="text-5xl text-black font-semibold tracking-[3.6px]">
          PRODUCT
        </span>
        <span className="text-xl font-normal text-base-300">
          UI / UX and Final Launch
        </span>
      </div>
    </div>
  );
};

export default ProductBanner;
