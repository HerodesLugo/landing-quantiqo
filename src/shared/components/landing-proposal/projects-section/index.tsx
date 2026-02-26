"use client";
import { forwardRef, useImperativeHandle } from "react";
import { ScrollableSectionHandle } from "@/shared/components/ui/scroll/types";
import { useProjects } from "./hooks/useProjects";
import HeaderProject from "./HeaderProject";
import ProjectPagination from "./ProjectPagination";
import { ProjectCarousel } from "./ProjectCarousel";

interface ProjectsProps {
  isActive: boolean;
}

const Projects = forwardRef<ScrollableSectionHandle, ProjectsProps>(
  ({ isActive }, ref) => {
    const { state, refs, handlers } = useProjects(isActive);
    const { showExpanded, activeIndex, isTransitioning } = state;
    const {
      containerRef,
      contentRef,
      slidesContainerRef,
      carouselWrapperRef,
      slideRefs,
    } = refs;
    const { handleClickSlide, handleScroll } = handlers;

    useImperativeHandle(ref, () => ({
      onScroll: handleScroll,
    }));

    return (
      <section
        ref={containerRef}
        id="projects"
        className="h-dvh flex flex-col gap-8 justify-center relative w-full"
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[19px]" />

        {/* Navigation Indicator / Dots */}
        <ProjectPagination activeIndex={activeIndex} />

        <div
          ref={contentRef}
          className="relative z-30 w-full flex flex-col gap-8 opacity-0"
        >
          {/* Header Action / Copy */}
          <HeaderProject showExpanded={showExpanded} />

          {/* Cards Slides / Carousel */}
          <ProjectCarousel
            showExpanded={showExpanded}
            activeIndex={activeIndex}
            isTransitioning={isTransitioning}
            handleClickSlide={handleClickSlide}
            carouselWrapperRef={carouselWrapperRef}
            slidesContainerRef={slidesContainerRef}
            slideRefs={slideRefs}
          />
        </div>
      </section>
    );
  },
);

Projects.displayName = "Projects";
export default Projects;
