import ArrowBounce from "@/shared/components/ui/animations/ArrowBounce";
interface ScrollDownProps {
  showText?: boolean;
}
const ScrollDown = ({ showText = true }: ScrollDownProps) => {
  return (
    <div className="flex flex-col items-center max-sm:animate-bounce sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 gap-2.5 max-sm:border-base-purple-200 max-sm:border max-sm:p-2.5 rounded-full">
      <ArrowBounce />

      {showText && (
        <span className="uppercase text-sm text-white font-normal max-sm:hidden">
          SCROLL TO DISCOVER
        </span>
      )}
    </div>
  );
};

export default ScrollDown;
