"use client";

import { useEffect, useRef, useState } from "react";

interface UseProjectVideoProps {
  initialMuted?: boolean;
  autoPlay?: boolean;
}

export const useProjectVideo = ({
  initialMuted = true,
  autoPlay = true,
}: UseProjectVideoProps = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const loadedRef = useRef(false);
  const [muted, setMuted] = useState(initialMuted);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (!loadedRef.current) {
              video.load();
              loadedRef.current = true;
            }
            if (autoPlay) {
              video.play().catch(() => {});
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1, rootMargin: "150px 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [autoPlay]);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !muted;
    setMuted(next);
    video.muted = next;
  };

  return {
    containerRef,
    videoRef,
    muted,
    toggleMute,
  };
};
