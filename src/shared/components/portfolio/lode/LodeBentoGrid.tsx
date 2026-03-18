import Image from "next/image";

const LodeBentoGrid = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 border my-5 md:my-11">
        <div className="h-[220px] md:h-auto md:flex-1 overflow-hidden">
          <Image
            src="/images/portfolios/lode/bento-grid-1.webp"
            alt=""
            className="size-full object-cover"
            width={1806}
            height={2106}
          />
        </div>
        <div className="h-[220px] md:h-auto md:flex-1 overflow-hidden">
          <Image
            src="/images/portfolios/lode/bento-grid-2.webp"
            alt=""
            className="size-full object-cover"
            width={1806}
            height={2106}
          />
        </div>
        <div className="h-[220px] md:h-auto md:flex-1 overflow-hidden">
          <Image
            src="/images/portfolios/lode/bento-grid-3.webp"
            alt=""
            className="size-full object-cover"
            width={1806}
            height={2106}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-5">
        <div className="h-[220px] md:h-auto md:flex-1 overflow-hidden">
          <Image
            src="/images/portfolios/lode/bento-grid-4.webp"
            alt=""
            className="size-full object-cover"
            width={1806}
            height={2106}
          />
        </div>
        <div className="h-[220px] md:h-auto md:flex-1 overflow-hidden">
          <Image
            src="/images/portfolios/lode/bento-grid-5.webp"
            alt=""
            className="size-full object-cover"
            width={1806}
            height={2106}
          />
        </div>
      </div>
    </>
  );
};

export default LodeBentoGrid;
