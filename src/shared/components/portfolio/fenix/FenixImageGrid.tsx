import Image from "next/image";

const FenixImageGrid = () => (
  <div className="flex md:h-[34.4375rem] gap-5 w-full max-md:flex-col">
    <div className="flex-1">
      <Image
        src="/images/portfolios/fenix/grid-1.webp"
        alt=""
        className="size-full object-cover"
        width={1806}
        height={2106}
      />
    </div>
    <div className="flex-1">
      <Image
        src="/images/portfolios/fenix/grid-2.webp"
        alt=""
        className="size-full object-cover"
        width={1806}
        height={2106}
      />
    </div>
  </div>
);

export default FenixImageGrid;
