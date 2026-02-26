import Marquee from "react-fast-marquee";
import Image from "next/image";
import { MARQUEE_LOGOS } from "./data";

export const TestimonialMarquee = () => {
  return (
    <div className="w-full 2xl:mt-10  sm:pr-20">
      <Marquee speed={40}>
        {MARQUEE_LOGOS.map((value) => (
          <Image
            key={value}
            src={`/images/projects/icons/${value}.svg`}
            alt={`${value} logo`}
            className="sm:mx-10 hover:bg-[rgba(44,_51,_64,_0.50)] max-sm:w-[10rem] w-[11.25rem] 2xl:w-[12.375rem] transition-all px-5 !py-2.5 duration-300 hover:outline-1 outline-base-blue-400 rounded-[1.375rem]"
            height={59}
            width={160}
          />
        ))}
      </Marquee>
    </div>
  );
};
