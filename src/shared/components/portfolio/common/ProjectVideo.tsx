"use client";

import { useProjectVideo } from "@/shared/hooks/useProjectVideo";

interface ProjectVideoProps {
  src: string;
  containerClassName?: string;
  videoClassName?: string;
  loop?: boolean;
  initialMuted?: boolean;
  autoPlay?: boolean;
}

const ProjectVideo = ({
  src,
  containerClassName = "h-[69rem]",
  videoClassName = "w-full object-cover h-full",
  loop = false,
  initialMuted = true,
  autoPlay = true,
}: ProjectVideoProps) => {
  const { containerRef, videoRef, muted, toggleMute } = useProjectVideo({
    initialMuted,
    autoPlay,
  });

  return (
    <div
      ref={containerRef}
      className={`relative cursor-pointer ${containerClassName}`}
      onClick={toggleMute}
    >
      <video
        ref={videoRef}
        muted={muted}
        loop={loop}
        playsInline
        preload="none"
        className={videoClassName}
      >
        <source src={src} type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>

      <div
        className={`absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 text-xs text-white backdrop-blur-sm transition-opacity duration-300 pointer-events-none select-none ${
          muted ? "opacity-100" : "opacity-0"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-3.5 w-3.5"
        >
          <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
        </svg>
        Clic para activar audio
      </div>
    </div>
  );
};

export default ProjectVideo;
