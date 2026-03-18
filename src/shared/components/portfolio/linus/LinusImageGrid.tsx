import Image from "next/image";

const LinusImageGrid = () => (
  <div className="grid grid-cols-2 max-md:h-[12rem] xl:h-[39.125rem] gap-5 mt-5 md:mt-11">
    <div >
      <Image
        src="/images/portfolios/linus/grid-1.webp"
        alt=""
        height={1878}
        width={2718}
        className="size-full object-cover"
      />
    </div>
    <div >
      <Image
        src="/images/portfolios/linus/grid-2.webp"
        alt=""
        className="size-full object-cover"
        height={1878}
        width={2718}
      />
    </div>
  </div>
);

export default LinusImageGrid;
