import { IconsProps } from "@/shared/components/ui/icon/types";

const HamburguerIcon = ({ className }: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className={className}
    >
      <path
        d="M4 6.66667H28M4 16H28M4 25.3333H28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
};

export default HamburguerIcon;
