import Image from "next/image";

const CenteredBanner = () => {
  return (
    <div className="2xl:h-[80.4375rem] pt-10 items-center justify-center overflow-hidden flex gap-5 max-md:hidden">
      <Image
        src="/images/portfolios/accelera/banner-accelera-4.webp"
        alt=""
        className=""
        height={1234}
        width={1880}
      />
    </div>
  );
};

export default CenteredBanner;
