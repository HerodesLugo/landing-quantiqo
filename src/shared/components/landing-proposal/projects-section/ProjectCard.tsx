import Image from "next/image";
import { IProject } from "./data";
import Link from "next/link";
import ArrowLeftAlt from "@/shared/components/ui/icon/ArrowLeftAlt";
import { CARD_BLUR_DATA_URL } from "@/shared/utils/shimmer";

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
          quality={75}
          height={1080}
          width={1920}
          placeholder="blur"
          blurDataURL={CARD_BLUR_DATA_URL}
        />
      </div>

      <div className="flex justify-between px-8  pb-8 xl:pb-14 w-full">
        <div className="flex xl:items-end xl:gap-24 w-full max-xl:flex-col max-xl:gap-6">
          
          <div
            className={`text-2xl w-full  text-white flex ${showExpanded ? "xl:items-center max-xl:flex-col xl:gap-11" : "flex-col gap-1.5"}`}
          >
            <span className="uppercase font-semibold tracking-[4px]">
              {title}
            </span>
            <span className="2xl:text-base font-normal  xl:max-w-[46.5rem] xl:line-clamp-2 text-sm max-xl:text-base max-sm:text-sm">
              {description}
            </span>
          </div>

          <Link target="_blank" href={source} className="flex items-end xl:gap-5  max-xl:justify-end gap-2">
            {showExpanded && (
              <span className="uppercase xl:whitespace-nowrap tracking-[3.6px] text-base text-primary-100 font-bold">
                case study
              </span>
            )}
            <span
              className={`icon-arrow-up-right xl:group-hover:text-3xl transition-all duration-300 text-primary-100 ${showExpanded ? "text-3xl max-xl:text-base" : "text-xl max-xl:text-base"}`}
            ></span>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;
