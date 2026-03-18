import Image from "next/image";

const IntentxFinalGrid = () => (
  <div className="flex flex-col md:flex-row h-auto xl:h-[39.125rem] gap-5 px-7  max-md:px-0">
    <div className="flex-1 bg-gray-500 h-[220px] md:h-auto overflow-hidden">
      <Image
        src="/images/portfolios/intentx/grid-1.webp"
        alt=""
        className="size-full object-cover object-left"
        width={2725}
        height={1594}
      />
    </div>
    <div className="flex-1 bg-gray-500 h-[220px] md:h-auto overflow-hidden">
      <Image
        src="/images/portfolios/intentx/grid-2.webp"
        alt=""
        className="size-full object-cover object-left"
        width={2725}
        height={1594}
      />
    </div>
  </div>
);

export default IntentxFinalGrid;
