import { PROJECTS } from "./data";
import ProjectCard from "./ProjectCard";

interface ProjectCarouselProps {
  showExpanded: boolean;
  activeIndex: number;
  isTransitioning: boolean;
  handleClickSlide: (_index: number) => void;
  carouselWrapperRef: React.RefObject<HTMLDivElement | null>;
  slidesContainerRef: React.RefObject<HTMLDivElement | null>;
  slideRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

export const ProjectCarousel = ({
  showExpanded,
  activeIndex,
  isTransitioning,
  handleClickSlide,
  carouselWrapperRef,
  slidesContainerRef,
  slideRefs,
}: ProjectCarouselProps) => {
  return (
    <div ref={carouselWrapperRef} className="overflow-hidden">
      {/* Custom Carousel Container */}
      <div className="relative w-full h-full">
        <div
          ref={slidesContainerRef}
          className="flex gap-10"
          style={{ willChange: "transform" }}
        >
          {PROJECTS.map(({ description, img, source, title, id }, i) => (
            <div
              key={id}
              ref={(el) => {
                slideRefs.current[i] = el;
              }}
              className={`
                shrink-0
                cursor-pointer transition-all duration-[800ms] ease-out ${
                  showExpanded
                    ? "2xl:h-[46.25rem] h-[37.5rem] w-full max-sm:px-5 sm:px-40 max-sm:h-[31rem]"
                    : "2xl:h-[32rem] h-[31.25rem]  w-[49.6875rem] max-sm:w-[22.5rem] max-sm:h-[26rem] max-xl:w-[37.5rem] max-xl:h-[28.125rem]"
                }
              `}
              style={{
                opacity: 1,
                pointerEvents: isTransitioning ? "none" : "auto",
              }}
              onClick={() => handleClickSlide(i)}
            >
              <ProjectCard
                id={id}
                title={title}
                img={img}
                description={description}
                source={source}
                showExpanded={showExpanded && i === activeIndex}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
