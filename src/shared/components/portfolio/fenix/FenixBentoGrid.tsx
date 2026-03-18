import Image from "next/image";

const FenixBentoGrid = () => (
  <div className="flex  gap-5 max-md:my-5 my-11 xl:h-[39.125rem] max-xl:flex-col">
    <div className="flex-1 col-span-2 max-md:h-[13.75rem]">
      <Image
        src="/images/portfolios/fenix/bento-grid-1.webp"
        alt=""
        className="size-full object-cover max-md:h-[13.75rem] max-xl:h-[28rem]"
        width={1806}
        height={2106}
      />
    </div>
    <div className="flex-1 ">
      <Image
        src="/images/portfolios/fenix/bento-grid-2.webp"
        alt=""
        className="size-full object-cover max-md:h-[13.75rem] max-xl:h-[28rem]"
        width={1806}
        height={2106}
      />
    </div>
    <div className="flex-1">
      <Image
        src="/images/portfolios/fenix/bento-grid-3.webp"
        alt=""
        className="size-full object-cover object-center max-md:h-[13.75rem] max-xl:h-[28rem]"
        width={1806}
        height={2106}
      />
    </div>
  </div>
);

export default FenixBentoGrid;
