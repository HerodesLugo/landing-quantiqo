import Image from "next/image";


const ThreePhonesBanner = () => (
  <div className="relative justify-center max-2xl:p-10 2xl:h-[66.3125rem] hidden md:flex overflow-hidden">
    {/* Top decorator */}
    <div className="absolute top-0">
      <Image
        src="/images/portfolios/portalfi/portalfi-decorator.webp"
        alt=""
        height={900}
        className="xl:w-[100rem]"
        width={1920}
      />
    </div>

    {/* Three phones */}
    <Image
      src="/images/portfolios/portalfi/portalfi-tree-phones.webp"
      alt=""
      className="xl:w-[87.875rem] xl:h-[56.0625rem] relative z-10"
      height={2029}
      width={2957}
    />
  </div>
);

export default ThreePhonesBanner;
