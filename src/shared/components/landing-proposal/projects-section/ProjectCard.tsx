import Image from "next/image";
import { IProject } from "./data";
import Link from "next/link";
import ArrowLeftAlt from "@/shared/components/ui/icon/ArrowLeftAlt";

interface ProjectCardProps extends IProject {
  showExpanded: boolean;
}

const ProjectCard = ({
  title,
  img,
  description,
  showExpanded,
  source,
}: ProjectCardProps) => {
  return (
    <div
      className={` bg-[rgba(52,_55,_66,_0.50)] size-full 
        hover:bg-base-purple-200/30 group relative  transition-colors duration-300  overflow-hidden ease-in-out rounded-[1.5rem] sm:rounded-[2.5rem] border border-[#454E61]  justify-between !flex flex-col gap-8`}
    >
      <button className={`${showExpanded ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-300 absolute cursor-pointer top-10 left-10 z-10 text-xl text-primary-100 hover:text-primary-200 flex items-center gap-2.5 max-sm:hidden`}>
        <ArrowLeftAlt />
        Back
      </button>

      <div className={`w-full h-full rounded-[1.5rem] bg-dark relative ${showExpanded ? "max-sm:min-h-[270px]" : "max-sm:min-h-[220px]"}`}>
        <Image
          src={img}
          alt="images"
          className="object-cover h-full w-full absolute rounded-[1.5rem]"
          quality={100}
          height={1080}
          width={1920}
        />
      </div>

      <div className="flex justify-between max-sm:h-full px-8 pb-14">
        <div className="flex sm:items-end sm:gap-24 w-full max-sm:h-full max-sm:flex-col max-sm:justify-between">
          
          <div
            className={`text-2xl w-full  text-white flex ${showExpanded ? "sm:items-center max-sm:flex-col sm:gap-11" : "flex-col gap-1.5"}`}
          >
            <span className="uppercase font-semibold tracking-[4px]">
              {title}
            </span>
            <span className="2xl:text-base font-normal  sm:max-w-[46.5rem] sm:line-clamp-2 text-sm">
              {description}
            </span>
          </div>

          <Link target="_blank" href={source} className="flex items-end sm:gap-5  max-sm:justify-end gap-2">
            {showExpanded && (
              <span className="uppercase sm:whitespace-nowrap tracking-[3.6px] text-base text-primary-100 font-bold">
                case study
              </span>
            )}

            <span
              className={`icon-arrow-up-right sm:group-hover:text-3xl transition-all duration-300 text-primary-100 ${showExpanded ? "text-3xl max-sm:text-base" : "text-xl max-sm:text-base"}`}
            ></span>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
