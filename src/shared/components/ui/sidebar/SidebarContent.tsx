import Button from "@/shared/components/ui/button";

export const SidebarContent = () => {
  return (
    <div className="flex h-full items-center  max-sm:items-end max-sm:w-full">
      
      <div className="flex flex-col sm:gap-7 gap-3 sm:mb-10 mb-4  sm:max-w-[560px]  max-sm:w-full">
        <div className="flex flex-col sm:gap-3.5 right-content-item">
          <div className="justify-start">
            <span className="text-white text-2xl max-sm:text-sm font-light">
              Believe it or not,
              <br className="max-sm:hidden" /> the small details{" "}
            </span>
            <span className="text-white text-2xl max-sm:text-sm font-semibold">
              make the real difference.
            </span>
          </div>

          <div className="justify-start text-White text-lg max-sm:text-xs font-bold sm:leading-6">
            We find value where others see nothing.
          </div>
        </div>

        <div className="right-content-item">
          <Button className="anim-button will-change-transform h-16 flex relative overflow-hidden sm:w-[16.875rem] w-[13rem] max-sm:text-base max-sm:h-12 ">
            BOOK A ALL
          </Button>
        </div>

        <div className="text-base-300 justify-start text-lg font-normal right-content-item max-sm:text-[.625rem] max-sm:max-w-[321px]">
          Architecting the digital foundations of tomorrow. Our structures are
          meticulously designed to amplify your brand’s impact and drive
          continuous, optimized growth.
        </div>
      </div>
    </div>
  );
};
