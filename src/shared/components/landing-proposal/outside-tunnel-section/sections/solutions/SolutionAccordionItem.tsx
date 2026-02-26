import { clsx } from "clsx";
import QuantiqoLabel from "@/shared/components/landing-proposal/hero-section/common/QuantiqoLabel";
import { SolutionItem } from "./data";

interface SolutionAccordionItemProps {
  solution: SolutionItem;
  isExpanded?: boolean;
  onClick?: () => void;
  isMobileSlider?: boolean;
}

export const SolutionAccordionItem = ({
  solution,
  isExpanded = false,
  onClick,
  isMobileSlider,
}: SolutionAccordionItemProps) => {
  if (isMobileSlider) {
    return (
      <div className="flex flex-col bg-amber-800 anim-accordion-title will-change-transform items-start  sm:w-full">
        <div className="flex items-center gap-2 sm:mb-6">
          <div className="text-left uppercase tracking-[3px] text-white text-2xl font-normal">
            {solution.title}
          </div>
        </div>

        <div className="flex flex-col w-full items-start gap-5">
          <div className="text-left text-base-300 text-[10px] font-light leading-relaxed">
            {solution.description}
          </div>
          <div className="grid grid-cols-2 gap-y-3 m:gap-x-4 sm:gap-y-6 w-full">
            {solution.points.map((point) => (
              <QuantiqoLabel key={point} label={point} classNameLabel="text-[.625rem]" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start sm:items-end anim-accordion-title will-change-transform">
      <button
        onClick={onClick}
        className=" flex items-center gap-2 cursor-pointer group"
      >
        <div
          className={clsx(
            "text-left sm:text-right uppercase tracking-[3px] transition-all duration-300 max-sm:text-lg",
            isExpanded
              ? "text-primary-100 text-4xl font-normal tracking-[4.04px]"
              : "text-base-300 text-2xl font-light",
          )}
        >
          {solution.title}
        </div>
        <div
          className={clsx(
            "transition-transform duration-300",
            isExpanded ? "rotate-180" : "rotate-0",
          )}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className={
              isExpanded ? "text-primary-100" : "text-white opacity-70"
            }
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      <div
        className={clsx(
          "overflow-hidden transition-all duration-500 ease-in-out",
          isExpanded ? "max-h-96 opacity-100 mt-5" : "max-h-0 opacity-0",
        )}
      >
        <div className="flex flex-col sm:w-96 sm:items-end gap-2.5 sm:gap-5">
          <div className="text-left sm:text-right text-base-300 text-sm font-light ">
            {solution.description}
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-2 gap-6">
            {solution.points.map((point) => (
              <QuantiqoLabel classNameLabel="" key={point} label={point} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
