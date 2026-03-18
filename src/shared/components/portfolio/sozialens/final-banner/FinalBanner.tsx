import Image from "next/image";

const FinalBanner = () => {
  return (
    <div className="2xl:h-[62.5rem]  max-2xl:p-10  max-md:my-5 flex justify-center overflow-hidden ">
      <Image
        src="/images/portfolios/sozialens/banner-5.webp"
        alt=""
        className="md:object-fill 2xl:w-[94.125rem] 2xl:h-[56.25rem] w-full h-auto object-cover "
        width={3840}
        height={2192}
      />
    </div>
  );
};

export default FinalBanner;

