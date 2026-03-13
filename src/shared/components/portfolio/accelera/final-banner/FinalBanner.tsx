import Image from "next/image";

const FinalBanner = () => {
  return (
    <div className="md:h-[58.5rem] bg-[#1F1F1F] relative max-md:my-11 mb-11 max-md:h-[13.75rem]">
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
