import { IconsProps } from "@/shared/components/ui/icon/types";


const ArrowUpRight = ({ className, width, height }: IconsProps) => {
  return (
    <svg
      width={width || 44}
      height={height || 44}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.1654 14.6667H29.425V28.9263M27.8117 16.2782L14.7107 29.381"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default ArrowUpRight;
