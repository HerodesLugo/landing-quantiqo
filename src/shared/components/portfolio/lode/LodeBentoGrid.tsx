import Image from "next/image";

const LodeBentoGrid = () => {
  return (
    <>
      <div className="flex  gap-5 border my-11">
        <div className="flex-1">
          <Image
            src="/images/portfolios/lode/bento-grid-1.webp"
            alt=""
            width={1806}
            height={2106}
          />
        </div>
        <div className="flex-1">
          <Image
            src="/images/portfolios/lode/bento-grid-2.webp"
            alt=""
            width={1806}
            height={2106}
          />
        </div>
        <div className="flex-1">
          <Image
            src="/images/portfolios/lode/bento-grid-3.webp"
            alt=""
            width={1806}
            height={2106}
          />
        </div>
      </div>

      <div className="flex gap-5 ">
        <div className="flex-1 ">
          <Image
            src="/images/portfolios/lode/bento-grid-4.webp"
            alt=""
            className="size-full"
            width={1806}
            height={2106}
          />
        </div>
        <div className="flex-1">
          <Image
            src="/images/portfolios/lode/bento-grid-5.webp"
            alt=""
            className="size-full"
            width={1806}
            height={2106}
          />
        </div>
      </div>
    </>
  );
};

export default LodeBentoGrid;
