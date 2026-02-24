import { ScrollableSectionHandle } from "@/shared/components/ui/scroll/types";
import { ComponentType } from "react";

export interface SectionConfig {
  checkpoint: number;
  component: ComponentType<{ isActive: boolean; ref?: React.Ref<ScrollableSectionHandle> }>;
  hasRef?: boolean; // Si la sección necesita manejar su propio scroll
}

export interface AnimatedSectionProps {
  sections: SectionConfig[];
  showScrollIndicator?: boolean;
  showDecorations?: boolean;
  overlayClassName?: string;
  checkpoints: number[];
  showIconStack?: boolean;
}