import Image from "next/image";

interface TestimonialProps {
  name: string;
  role: string;
  quote: string;
  feedback: string;
  stats: { label: string; value: string }[];
  image?: string;
}

const TestimonialCard = ({ data }: { data: TestimonialProps }) => {
  return (
    <div className="2xl:w-[636.30px]  w-[33.25rem] max-sm:p-4 sm:p-10 flex flex-col  max-w-full z-20 2xl:h-[588.57px] h-[510.57px] relative rounded-3xl outline-[0.83px]  outline-offset-[-0.83px] outline-base-purple-200  overflow-hidden flex-shrink-0 transition-all duration-500 max-sm:w-[20rem] max-sm:h-[320px] max-xl:h-[460px] max-xl:w-[500px]">
      <div className="flex gap-4 sm:gap-7 max-sm:mt-4 items-center ">
        <div className="size-32 bg-zinc-300 rounded-full max-sm:size-12">
          <Image
            src="/images/testimonials/jhonde.svg"
            alt="Avatar"
            height={128}
            width={128}
          />
        </div>

        <div className="flex flex-col sm:gap-2">
          <div className=" text-white text-4xl font-semibold max-sm:text-lg">
            {data.name}
          </div>
          <div className=" text-base-200 text-sm font-normal uppercase max-sm:text-xs">
            {data.role}
          </div>
        </div>
      </div>

      <div className="w-full h-px opacity-30 sm:my-8 bg-neutral-400 my-3" />

      <div className="flex items-center sm:gap-8">
        <div className="grid grid-cols-2 gap-x-1.5 sm:gap-x-24 gap-y-4 w-full">
          {data.stats.map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-white text-2xl 2xl:text-3xl font-semibold max-sm:text-sm">
                {stat.value}
              </span>
              <span className="text-base-200 text-xs font-normal mt-1 ">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="sm:w-56 text-cyan-100  text-xl 2xl:text-2xl font-normal leading-tight max-sm:text-sm">
          “{data.quote}”
        </div>
      </div>

      <div className="flex items-end sm:h-full justify-between max-sm:mt-6">
        <div className="size-52  absolute left-0 sm:-bottom-16 -bottom-8 rounded-full pointer-events-none max-sm:size-28">
          <Image
            src="/images/testimonials/nest_logo.svg"
            alt="Decoration"
            height={208}
            width={208}
            className="mix-blend-overlay opacity-40"
          />
        </div>
        <div className="max-sm:w-full  max-sm:mr-10 "></div>

        <div className="sm:w-64 text-neutral-400 text-sm font-light leading-relaxed ">
          {data.feedback}
        </div>
      </div>

      <div className="sm:right-10 items-center sm:gap-5 flex top-[21px] absolute text-cyan-100 text-lg font-bold tracking-[2px] sm:tracking-[3.60px] cursor-pointer hover:text-white transition-colors max-sm:text-[.5rem] right-3 gap-1.5">
        <span className="icon-arrow-up-right" />{" "}
        <span className="shrink-0">CASE STUDY</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
