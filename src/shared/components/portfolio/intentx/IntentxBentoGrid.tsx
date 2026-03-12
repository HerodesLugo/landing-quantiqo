import Image from "next/image";

const IntentxBentoGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 w-full md:h-[60rem]">
    {/* Left Column */}
    <div className="md:col-span-5 flex flex-col gap-5 h-[45rem] md:h-full">
      <div className="bg-[#1F2937] w-full mt-0 md:mt-0 flex-[55]">
        <Image
          src="/images/portfolios/intentx/bento-grid-1.webp"
          alt=""
          className="size-full object-cover"
          width={2478}
          height={1209}
        />
      </div>
      <div className="bg-[#1E3A5F] w-full flex-[45]">
        <Image
          src="/images/portfolios/intentx/bento-grid-3.webp"
          alt=""
          className="size-full object-cover"
          width={2478}
          height={1209}
        />
      </div>
    </div>

    {/* Right Column */}
    <div className="md:col-span-7 flex flex-col gap-5 h-[45rem] md:h-full">
      <div className="bg-[#0F172A] w-full flex-[45]">
        <Image
          src="/images/portfolios/intentx/bento-grid-2.webp"
          alt=""
          className="size-full object-cover"
          width={2478}
          height={1209}
        />
      </div>
      <div className="bg-[#111827] w-full flex-[55]">
        <Image
          src="/images/portfolios/intentx/bento-grid-4.webp"
          alt=""
          className="size-full object-cover"
          width={2478}
          height={1209}
        />
      </div>
    </div>
  </div>
);

export default IntentxBentoGrid;
