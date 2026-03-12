import Image from "next/image";

// ─── DualPhonesBanner ─────────────────────────────────────────────────────────
// Section with a decorator background, "Withdraw" and "Deposit" overlay labels,
// and the two-phones image in the foreground.

const DualPhonesBanner = () => (
  <div className="relative flex items-center h-[76.875rem] justify-center overflow-hidden">
    {/* Background decorator */}
    <div className="absolute">
      <Image
        src="/images/portfolios/portalfi/portalfi-decorator.webp"
        alt=""
        height={900}
        className="w-[95rem]"
        width={1920}
      />
    </div>

    {/* Phones + overlay labels */}
    <div className="relative">
      <div className="absolute flex inset-0 justify-center gap-56 mt-24">
        <div className="mix-blend-overlay justify-start text-zinc-800 text-8xl font-normal font-['Satoshi']">
          Withdraw
        </div>
        <div className="mix-blend-overlay justify-start text-zinc-800 text-8xl font-normal font-['Satoshi']">
          Deposit
        </div>
      </div>
      <Image
        src="/images/portfolios/portalfi/portalfi-both-phones.webp"
        alt=""
        className="relative z-10"
        height={1230}
        width={1920}
      />
    </div>
  </div>
);

export default DualPhonesBanner;
