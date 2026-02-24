export interface AnimationOptions {
  steps?: number;
  duration?: number;
  maskUrl?: string;
}

type TButtonVariant = "light" | "dark";


export interface ButtonProps {
  AnimationOptions: AnimationOptions;
  label: string;
  className?: string;
  classNameLabel?: string;
  variants?: TButtonVariant
  iconButtonActive?: boolean;
  onClick?: () => void;
}