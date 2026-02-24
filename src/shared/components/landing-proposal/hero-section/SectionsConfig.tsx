import { SectionConfig } from "@/shared/components/ui/scroll/animated-section/types";
import { HERO_CHECKPOINTS, OUTSIDE_CHECKPOINTS } from "@/shared/components/landing-proposal/hero-section/data";

// Hero Section imports
import UiLayout from "@/shared/components/landing-proposal/hero-section/UiLayout";
import SecondSection from "@/shared/components/landing-proposal/hero-section/sections/SecondSection";
import ThirdSection from "@/shared/components/landing-proposal/hero-section/sections/ThirdSection";
import FifthSection from "@/shared/components/landing-proposal/hero-section/sections/FifthSection";
import FourthSection from "@/shared/components/landing-proposal/hero-section/sections/FourthSection";
import LastSection from "@/shared/components/landing-proposal/hero-section/sections/LastSection";
import Projects from "@/shared/components/landing-proposal/projects-section";

// Outside Tunnel Section imports
import Tunnel from "@/shared/components/landing-proposal/tunnel-section/Tunnel";
import Industries from "@/shared/components/landing-proposal/outside-tunnel-section/sections/Industries";
import Solutions from "@/shared/components/landing-proposal/outside-tunnel-section/sections/solutions/Solutions";
import Testimonials from "@/shared/components/landing-proposal/outside-tunnel-section/sections/testimonials/Testimonials";
import Backed from "@/shared/components/landing-proposal/outside-tunnel-section/sections/Backed";
import Footer from "@/shared/components/landing-proposal/footer-section";


export const FIRST_SECTION_CONFIG: SectionConfig[] = [
  {
    checkpoint: HERO_CHECKPOINTS.FIRST,
    component: ({ isActive }: { isActive: boolean }) => (
      <UiLayout scrollDown={isActive} />
    ),
  },
  {
    checkpoint: HERO_CHECKPOINTS.SECOND,
    component: SecondSection,
  },
  {
    checkpoint: HERO_CHECKPOINTS.THIRD,
    component: ThirdSection,
  },
  {
    checkpoint: HERO_CHECKPOINTS.FOURTH,
    component: FifthSection,
  },
  {
    checkpoint: HERO_CHECKPOINTS.FIFTH,
    component: FourthSection,
  },
  {
    checkpoint: HERO_CHECKPOINTS.PROJECTS,
    component: Projects,
    hasRef: true,
  },
  {
    checkpoint: HERO_CHECKPOINTS.LAST_COMPONENT,
    component: LastSection,
  },
];

export const SECOND_SECTION_CONFIG: SectionConfig[] = [
  {
    checkpoint: OUTSIDE_CHECKPOINTS.TUNNEL,
    component: Tunnel,
    hasRef: true,
  },
  {
    checkpoint: OUTSIDE_CHECKPOINTS.INDUSTRIES,
    component: Industries,
  },
  {
    checkpoint: OUTSIDE_CHECKPOINTS.SOLUTIONS,
    component: Solutions,
  },
  {
    checkpoint: OUTSIDE_CHECKPOINTS.TESTIMONIALS,
    component: Testimonials,
  },
  {
    checkpoint: OUTSIDE_CHECKPOINTS.BACKED,
    component: Backed,
  },
  {
    checkpoint: OUTSIDE_CHECKPOINTS.FOOTER,
    component: Footer,
  },
];