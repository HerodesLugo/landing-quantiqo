import Image from "next/image";

const FenixImageGrid = () => (
  <div className="flex h-[34.4375rem] gap-5 w-full">
    <div className="flex-1 bg-accelera">
      <Image
        src="/images/portfolios/fenix/grid-1.webp"
        alt=""
        width={1806}
        height={2106}
      />
    </div>
    <div className="flex-1 bg-accelera">
      <Image
        src="/images/portfolios/fenix/grid-2.webp"
        alt=""
        width={1806}
        height={2106}
      />
    </div>
  </div>
);

export default FenixImageGrid;
