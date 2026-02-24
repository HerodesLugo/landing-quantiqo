import Button from "@/shared/components/ui/button";
import { OTHER_SERVICES_LIST } from "./data";

export const SolutionsOtherServices = () => {
  return (
    <div className="flex max-sm:items-end gap-20 2xl:gap-28 justify-between max-sm:h-full sm:flex-col ">
      <div className="flex flex-col sm:gap-8 gap-3.5">
        <h3 className="anim-services-title will-change-transform text-sm font-medium tracking-[2.80px] text-base-300 max-sm:text-xs">
          OTHER SERVICES
        </h3>
        <div className="flex flex-col gap-1.5 sm:gap-2.5">
          {OTHER_SERVICES_LIST.map((service) => (
            <span
              key={service}
              className="anim-service-item will-change-transform text-base font-normal sm:tracking-[3.20px] text-white max-sm:text-xs"
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      <Button className="anim-button h-16 flex relative overflow-hidden sm:w-[16.875rem] w-[13rem] max-sm:text-base max-sm:h-14 ">
        BOOK NOW
      </Button>
    </div>
  );
};
