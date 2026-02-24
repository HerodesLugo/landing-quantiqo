import { cn } from "@/shared/utils/cn";

export type TVariant = "light" | "dark";

interface IconButtonProps {
  className?: string;
  variants?: TVariant;
}

const IconButton = ({ className, variants = "light" }: IconButtonProps) => {
  const variant = {
    light: "bg-primary-100 text-dark",
    dark: "bg-dark group-hover:bg-white group-hover:text-dark text-white",
  };
  
  return (
    <div
      className={cn(
        " size-10 rounded-full flex items-center justify-center text-base",
        className,
        variant[variants]
      )}
    >
      <span className="icon-right" />
    </div>
  );
};

export default IconButton;
