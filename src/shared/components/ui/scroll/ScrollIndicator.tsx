interface Props {
  sections: number;
  activeSlideUI: number;
}
const ScrollIndicator = ({ activeSlideUI, sections }: Props) => {
  return (
    <div
      className={`  transition-opacity flex bottom-60 gap-3.5  sm:flex-col  sm:mx-auto justify-center ${activeSlideUI <= 5 ? "opacity-100 " : "opacity-0"}`}>
      {Array.from({ length: sections }).map((_, i) => (
        <div key={i} className="flex  items-center">
          <div
            className={`size-2 max-sm:size-1.5 rounded-full transition-colors  ${
              activeSlideUI >= i ? "bg-primary-100" : "bg-base-300/80"
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default ScrollIndicator;
