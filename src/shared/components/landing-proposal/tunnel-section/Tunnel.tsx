"use client";
import React, { forwardRef } from "react";
import ScrollDown from "@/shared/components/landing-proposal/hero-section/common/ScrollDown";
import { ScrollableSectionHandle } from "@/shared/components/ui/scroll/types";
import { TUNNEL_TEXTS } from "./data";
import { useTunnel } from "./hooks/useTunnel";

const Tunnel = forwardRef<ScrollableSectionHandle>((props, ref) => {
  const { refs, state } = useTunnel(ref);
  const { containerRef, canvasRef } = refs;
  const { isLoaded } = state;

  return (
    <div
      ref={containerRef}
      id="tunnel-monolith"
      className="relative w-full h-full overflow-hidden bg-black"
    >
      {/* LAYER 1: TEXTS (Absolute Center) */}
      <div className="absolute inset-0 size-full flex justify-center items-center pointer-events-none z-40">
        {TUNNEL_TEXTS.map((text, i) => (
          <div
            key={i}
            className="absolute flex justify-center items-center w-full will-change-transform"
          >
            <h2 className="word-item text-white font-medium text-5xl mix-blend-difference text-center px-4 backface-hidden">
              {text}
            </h2>
          </div>
        ))}
      </div>

      {/* LAYER 2: CANVAS (Background Overlay) */}
      <div
        className={`block w-full h-full transition-opacity duration-700 z-20 relative ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <canvas
          ref={canvasRef}
          className="block w-full h-full mix-blend-lighten"
        />
      </div>

      {/* <div className="absolute bottom-10 max-sm:left-5 sm:bottom-40 z-50 sm:inset-x-0">
        <ScrollDown />
      </div> */}
    </div>
  );
});

Tunnel.displayName = "Tunnel";
export default Tunnel;
