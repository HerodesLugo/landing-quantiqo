import Image from "next/image";

const CenteredBanner = () => {
  return (
    <div className="h-[80.4375rem] pt-10 items-center justify-center overflow-hidden flex gap-5">
      <Image
        src="/images/portfolios/accelera/banner-accelera-4.webp"
        alt=""
        height={1234}
        width={1880}
      />
    </div>
  );
};

export default CenteredBanner;
