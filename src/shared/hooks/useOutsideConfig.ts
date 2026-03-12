import { SECOND_SECTION_CONFIG } from "@/shared/components/landing-proposal/hero-section/SectionsConfig";
import { OUTSIDE_FRAMES, OUTSIDE_CHECKPOINTS } from "@/shared/components/landing-proposal/hero-section/data";
import useBreakpoint from "@/shared/hooks/useBreakpoint";

export const useOutsideConfig = () => {
  const isMobile = useBreakpoint();

  if (!isMobile) {
    return { sections: SECOND_SECTION_CONFIG, frames: OUTSIDE_FRAMES };
  }

  const sections = SECOND_SECTION_CONFIG
    .filter((c) => c.checkpoint !== OUTSIDE_CHECKPOINTS.TESTIMONIALS)
    .map((c, i) => ({ ...c, checkpoint: i }));

  const frames = OUTSIDE_FRAMES.filter(
    (_, i) => i !== OUTSIDE_CHECKPOINTS.TESTIMONIALS
  );

  return { sections, frames };
};
