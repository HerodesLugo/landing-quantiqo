import Image from "next/image";

const FinalBanner = () => {
  return (
    <div className="h-[62.5rem] flex justify-center">
      <Image
        src="/images/portfolios/sozialens/banner-5.webp"
        alt=""
        className="object-fill w-[94.125rem] h-[56.25rem]"
        width={3840}
        height={2192}
      />
    </div>
  );
};

export default FinalBanner;
