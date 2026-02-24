import { cva } from "class-variance-authority";

// TODO: Check hover states

export const variantClass = cva(
  "transition-all duration-500 ease-in-out max-sm:font-medium  font-bold flex items-center whitespace-nowrap group justify-center cursor-pointer rounded-full ",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-200 uppercase  text-base-900  ",
        secondary: "bg-dark uppercase text-white",
        success: "",
        outline: "",
        transparent: "border border-white text-white",
      },
      size: {
        sm: "",
        md: "",
        lg: "px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
    },
  }
);
