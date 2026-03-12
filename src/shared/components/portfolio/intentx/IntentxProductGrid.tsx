import Image from "next/image";

const IntentxProductGrid = () => (
  <div className="flex h-[39.125rem] gap-5">
    <div className="flex-1 bg-gray-500">
      <Image
        src="/images/portfolios/intentx/website.webp"
        alt=""
        className="size-full"
        width={2725}
        height={1594}
      />
    </div>
    <div className="flex-1 bg-gray-500">
      <Image
        src="/images/portfolios/intentx/phone.webp"
        alt=""
        className="size-full"
        width={2725}
        height={1594}
      />
    </div>
  </div>
);

export default IntentxProductGrid;
