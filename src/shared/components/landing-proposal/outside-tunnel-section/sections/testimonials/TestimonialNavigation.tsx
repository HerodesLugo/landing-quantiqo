import ArrowLeft from "@/shared/components/ui/icon/ArrowLeft";
import ArrowRight from "@/shared/components/ui/icon/ArrowRight";

interface TestimonialNavigationProps {
  onPrev: () => void;
  onNext: () => void;
}

export const TestimonialNavigation = ({
  onPrev,
  onNext,
}: TestimonialNavigationProps) => {
  return (
    <div className="xl:absolute left-0 bottom-0 z-20 flex gap-[-20px] ">
      <button
        onClick={onPrev}
        className="group cursor-pointer relative max-xl:size-20 size-28 2xl:size-32 rounded-full border border-base-purple-100 transition-all flex items-center justify-center mix-blend-screen sm:-mr-10 -mr-3 z-10 hover:bg-base-purple-100/50 hover:border-base-purple-200 hover:z-30"
      >
        <ArrowLeft />
      </button>
      <button
        onClick={onNext}
        className="group cursor-pointer relative max-xl:size-20 size-28 2xl:size-32 rounded-full border border-base-purple-100 transition-all flex items-center justify-center mix-blend-screen z-20 hover:border-base-purple-100/50 hover:bg-base-purple-200"
      >
        <ArrowRight />
      </button>
    </div>
  );
};
