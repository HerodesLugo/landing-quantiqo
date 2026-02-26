"use client";
import Button from "./index";
import { ButtonProps } from "./types";
import useCal from "@/shared/hooks/useCal";

const TalkButton: React.FC<ButtonProps> = ({
  children = "Let's Talk ",
  className,
  ...props
}) => {
  useCal();

  return (
    <Button
      className={className}
      data-cal-namespace="15min"
      data-cal-link="quatiqo-labs/15min"
      data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
      {...props}
    >
      {children}
    </Button>
  );
};

export default TalkButton;
