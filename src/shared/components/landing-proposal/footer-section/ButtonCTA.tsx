import ArrowUpRight from "@/shared/components/ui/icon/ArrowUpRight";
import useCal from "@/shared/hooks/useCal";

const ButtonCTA = () => {
  useCal();

  return (
    <div
      data-cal-namespace="15min"
      data-cal-link="quatiqo-labs/15min"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      className="relative  z-20 flex sm:h-full max-sm:mt-10 max-sm:mb-6 w-full items-center justify-center anim-cta will-change-transform"
    >
      <div className="relative flex items-center justify-center cursor-pointer">
        <div className="group flex relative items-center overflow-hidden pr-10 sm:h-40 w-[318px] h-20  sm:w-[600px] rounded-[3686.13px] bg-primary-200 z-10  hover:scale-105 transition-transform duration-500 ">
          <div className="absolute h-full z-20 bg-primary-100  inset-0 rounded-[3686.13px] mr-40 group-hover:mr-0 transition-all duration-300 max-sm:w-[14.1875rem]"></div>

          <span className="whitespace-nowrap text-xl sm:text-4xl font-semibold tracking-[4.70px] sm:tracking-[13.60px] text-black absolute left-10 z-30">
            {"LET’S TALK"}
          </span>

          <div className="absolute right-5 sm:right-10 z-30 text-black">
            <ArrowUpRight className="sm:size-24 size-14" />
          </div>
        </div>

        <div className="sm:h-60 w-[350px] h-28 sm:w-[700px] absolute rounded-[3686.13px] border border-cyan-100 opacity-20" />
      </div>
    </div>
  );
};

export default ButtonCTA;
