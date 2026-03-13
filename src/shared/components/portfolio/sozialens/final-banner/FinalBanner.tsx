import Image from "next/image";

const FinalBanner = () => {
  return (
    <div className="md:h-[62.5rem] max-md:my-5 flex justify-center overflow-hidden">
      <Image
        src="/images/portfolios/sozialens/banner-5.webp"
        alt=""
        className="md:object-fill md:w-[94.125rem] md:h-[56.25rem] w-full h-auto object-cover"
        width={3840}
        height={2192}
      />
    </div>
  );
};

export default FinalBanner;

