import Image from "next/image";

const FenixBentoGrid = () => (
  <div className="flex  gap-5  my-11 h-[39.125rem] ">
    <div className="flex-1 col-span-2">
      <Image
        src="/images/portfolios/fenix/bento-grid-1.webp"
        alt=""
        className="size-full object-cover"
        width={1806}
        height={2106}
      />
    </div>
    <div className="flex-1">
      <Image
        src="/images/portfolios/fenix/bento-grid-2.webp"
        alt=""
        className="size-full object-cover"
        width={1806}
        height={2106}
      />
    </div>
    <div className="flex-1">
      <Image
        src="/images/portfolios/fenix/bento-grid-3.webp"
        alt=""
        className="size-full object-cover"
        width={1806}
        height={2106}
      />
    </div>
  </div>
);

export default FenixBentoGrid;
