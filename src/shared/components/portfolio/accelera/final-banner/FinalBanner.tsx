import Image from "next/image";

const FinalBanner = () => {
  return (
    <div className="h-[58.5rem] bg-[#1F1F1F] relative mb-11">
      <Image
        src="/images/portfolios/accelera/banner-accelera-3.webp"
        alt=""
        className="absolute bottom-0 object-cover"
        height={1032}
        width={2022}
      />
    </div>
  );
};

export default FinalBanner;
