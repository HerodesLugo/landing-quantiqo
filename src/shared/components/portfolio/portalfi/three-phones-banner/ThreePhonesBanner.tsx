import Image from "next/image";

// ─── ThreePhonesBanner ────────────────────────────────────────────────────────
// Section with a top decorator and three phones in the foreground.

const ThreePhonesBanner = () => (
  <div className="relative justify-center h-[66.3125rem] hidden md:flex overflow-hidden">
    {/* Top decorator */}
    <div className="absolute top-0">
      <Image
        src="/images/portfolios/portalfi/portalfi-decorator.webp"
        alt=""
        height={900}
        className="w-[100rem]"
        width={1920}
      />
    </div>

    {/* Three phones */}
    <Image
      src="/images/portfolios/portalfi/portalfi-tree-phones.webp"
      alt=""
      className="w-[87.875rem] h-[56.0625rem] relative z-10"
      height={2029}
      width={2957}
    />
  </div>
);

export default ThreePhonesBanner;
