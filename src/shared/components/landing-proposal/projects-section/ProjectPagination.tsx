import { PROJECTS } from "@/shared/components/landing-proposal/projects-section/data";

interface ProjectPaginationProps {
  activeIndex: number;
}

const ProjectPagination = ({ activeIndex }: ProjectPaginationProps) => {
  return (
    <div className="flex items-center bottom-10  inset-x-0 z-30 h-2.5 absolute px-8 sm:px-20 gap-14 transition-opacity duration-300">
      <div className="flex gap-2.5 sm:gap-3.5">
        {PROJECTS.map((_, i) => (
          <span
            key={i}
            className={`flex rounded-full size-1.5 sm:size-2.5 transition-all duration-300 ${i === activeIndex ? "bg-primary-100 scale-125" : "bg-base-300"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectPagination;
