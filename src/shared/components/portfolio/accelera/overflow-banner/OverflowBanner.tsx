import Image from "next/image";

const OverflowBanner = () => {
  return (
    <div className="2xl:h-[83.0625rem] xl:h-[62rem] relative overflow-hidden max-md:hidden">
      <Image
        src="/images/portfolios/accelera/accelera-banner-6.webp"
        alt=""
        className="object-cover  xl:absolute -bottom-[12.5rem]"
        height={1080}
        width={1920}
      />
    </div>
  );
};

export default OverflowBanner;  
