import Image from "next/image";
import { cn } from "@/shared/utils/cn";

interface CardTestimonialsProps {
  className?: string;
}

const CardTestimonials = ({className}: CardTestimonialsProps) => {
  return (
    <div className={cn("w-[500px] h-[463.54px] relative bg-stone-500/30 rounded-3xl  outline-1 outline-offset-[-1px] outline-stone-500 backdrop-blur-2xl overflow-hidden",className)}>
      <div className="w-64 left-[222.66px] top-[43.07px] absolute inline-flex flex-col justify-start items-start gap-[2.60px]">
        <div className="self-stretch justify-center text-white text-4xl font-extralight  uppercase leading-8">
          Juan{" "}
        </div>
        <div className="self-stretch justify-center text-stone-300 text-xl font-normal ">
          Ceo Brand Manager
          <br />
          Garbo
        </div>
      </div>
      <div className="w-40 h-40 left-[33.85px] top-[33.22px] absolute rounded-[79.24px] overflow-hidden bg-base-400">
        {/* <Image
          className="w-40 h-60 left-[0.06px] top-[-42.35px] absolute"
          src="/"
          alt=""
          height={162}
          width={243}
        /> */}
      </div>
      <div className="w-96 h-[0.25px] left-[33.22px] top-[224.26px] absolute bg-neutral-400" />
      <div className="w-80 left-[33.85px] top-[286.46px] absolute justify-center text-white text-3xl font-normal ">
        “Everything was delivered on time and with zero stress’’
      </div>
    </div>
  );
};

export default CardTestimonials;
