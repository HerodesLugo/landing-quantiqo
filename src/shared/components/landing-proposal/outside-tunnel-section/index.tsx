// "use client";
// import { forwardRef, useImperativeHandle, useRef, useState } from "react";
// import HeroSection from "@/shared/components/landing-proposal/hero-section/Herosection";
// import IconStack from "@/shared/components/landing-proposal/hero-section/IconStack";
// import Backed from "@/shared/components/landing-proposal/outside-tunnel-section/sections/Backed";
// import Industries from "@/shared/components/landing-proposal/outside-tunnel-section/sections/Industries";
// import Solutions from "@/shared/components/landing-proposal/outside-tunnel-section/sections/solutions/Solutions";
// import Testimonials from "@/shared/components/landing-proposal/outside-tunnel-section/sections/testimonials/Testimonials";
// import Tunnel from "@/shared/components/landing-proposal/tunnel-section/Tunnel";
// import { ScrollableSectionHandle } from "@/shared/components/ui/scroll/SectionScroller";
// import SectionWrapper from "@/shared/components/landing-proposal/hero-section/SectionWrapper";

// const CHECKPOINTS = {
//   TUNNEL: 0,
//   INDUSTRIES: 1,
//   SOLUTIONS: 2,
//   TESTIMONIALS: 3,
//   BACKED: 4,
// } as const;

// const OutSideTunnelSection = forwardRef<ScrollableSectionHandle>(
//   (props, ref) => {
//     const [activeCheckpoint, setActiveCheckpoint] = useState<number>(CHECKPOINTS.TUNNEL);
//     const [isLastFrame, setIsLastFrame] = useState(false);

//     const heroRef = useRef<ScrollableSectionHandle>(null);
//     const tunnelRef = useRef<ScrollableSectionHandle>(null);

//     const handleTunnelScroll = (direction: "next" | "prev"): boolean => {
//       if (tunnelRef.current) {
//         const didTunnelMove = tunnelRef.current.onScroll(direction);
//         if (didTunnelMove) return true;
//       }

//       if (heroRef.current) {
//         return heroRef.current.onScroll(direction);
//       }

//       return false;
//     };

//     const handleContentScroll = (direction: "next" | "prev"): boolean => {
//       if (heroRef.current) {
//         return heroRef.current.onScroll(direction);
//       }
//       return false;
//     };

//     useImperativeHandle(ref, () => ({
//       onScroll: (direction) => {
//         if (activeCheckpoint === CHECKPOINTS.TUNNEL) {
//           return handleTunnelScroll(direction);
//         } else {
//           return handleContentScroll(direction);
//         }
//       },
//     }));

//     return (
//       <div className="relative w-full h-screen overflow-hidden">
//         <HeroSection
//           ref={heroRef}
//           isFinished={true}
//           onProgress={() => {}}
//           onCheckpointChange={setActiveCheckpoint}
//           // isLastFrame={isLastFrame}
//           // setIsLastFrame={setIsLastFrame}
//         />

//         <div className="absolute bg-black/80 inset-0" />

//         <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
//           <SectionWrapper isActive={activeCheckpoint === CHECKPOINTS.TUNNEL}>
//             <Tunnel ref={tunnelRef} />
//           </SectionWrapper>

//           <SectionWrapper isActive={activeCheckpoint === CHECKPOINTS.INDUSTRIES}>
//             <Industries isActive={activeCheckpoint === CHECKPOINTS.INDUSTRIES} />
//           </SectionWrapper>

//           <SectionWrapper isActive={activeCheckpoint === CHECKPOINTS.SOLUTIONS}>
//             <Solutions isActive={activeCheckpoint === CHECKPOINTS.SOLUTIONS} />
//           </SectionWrapper>

//           <SectionWrapper isActive={activeCheckpoint === CHECKPOINTS.TESTIMONIALS}>
//             <Testimonials />
//           </SectionWrapper>

//           <SectionWrapper isActive={activeCheckpoint === CHECKPOINTS.BACKED}>
//             <Backed isActive={activeCheckpoint === CHECKPOINTS.BACKED} />
//           </SectionWrapper>
//         </div>

//         <div className="absolute z-20 flex flex-col gap-10 right-20 bottom-24 pointer-events-auto transition-opacity duration-500">
//           <IconStack />
//         </div>
//       </div>
//     );
//   },
// );

// OutSideTunnelSection.displayName = "OutSideTunnelSection";

// export default OutSideTunnelSection;
