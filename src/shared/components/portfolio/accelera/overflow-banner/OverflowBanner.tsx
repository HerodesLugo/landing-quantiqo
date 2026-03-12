import Image from "next/image";

const OverflowBanner = () => {
  return (
    <div className="h-[83.0625rem] relative overflow-hidden">
      <Image
        src="/images/portfolios/accelera/accelera-banner-6.webp"
        alt=""
        className="object-cover absolute -bottom-[12.5rem]"
        height={1080}
        width={1920}
      />
    </div>
  );
};

export default OverflowBanner;
