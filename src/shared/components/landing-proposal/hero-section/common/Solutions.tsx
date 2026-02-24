import ArrowUpRight from "@/shared/components/ui/icon/ArrowUpRight";

const Solutions = () => {
  return (
    <div className="flex items-center  group text-primary-100 hover:text-white cursor-pointer transition-colors  duration-300 ">
      <span className="uppercase text-lg font-bold tracking-[3.6px] group-hover:scale-110 transition-all">
        solutions
      </span>
      <div className="group-hover:scale-110 transition-all group-hover:ml-2.5">
        <ArrowUpRight  className="max-sm:size-6"/>
      </div>
    </div>
  );
};

export default Solutions;
