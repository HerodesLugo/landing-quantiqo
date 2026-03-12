import Image from "next/image";

const IntentxFinalGrid = () => (
  <div className="flex h-[39.125rem] gap-5">
    <div className="flex-1 bg-gray-500">
      <Image
        src="/images/portfolios/intentx/grid-1.webp"
        alt=""
        width={2725}
        height={1594}
      />
    </div>
    <div className="flex-1 bg-gray-500">
      <Image
        src="/images/portfolios/intentx/grid-2.webp"
        alt=""
        width={2725}
        height={1594}
      />
    </div>
  </div>
);

export default IntentxFinalGrid;
