/**
 * Central registry of all video assets used across portfolio projects.
 *
 * Each key maps to a project slug. Swap the base path (or individual values)
 * to point to an external storage provider without touching any component.
 *
 * Usage:
 *   import { VIDEO_ASSETS } from "@/shared/constants/videoAssets";
 *   <ProjectVideo src={VIDEO_ASSETS.accelera.launch} ... />
 */
export const VIDEO_ASSETS = {
  accelera: {
    launch: "/videos/accelera/accelera-launch.mp4",
  },
  carbon: {
    chain: "/videos/carbon/carbo-chain.mp4",
    portraitDiscord: "/videos/carbon/carbon_portrait_discord_04.mp4",
  },
  fenix: {
    video1: "/videos/fenix/video-1.mp4",
    video2: "/videos/fenix/video-2.mp4",
  },
  garbo: {
    launch: "/videos/garbo/garbo_launch.mp4",
    hero: "/videos/garbo/garbo_hero.mp4",
  },
  linus: {
    video1: "/videos/linus/video-1.mp4",
    video2: "/videos/linus/video-2.mp4",
  },
  lode: {
    video1: "/videos/lode/video-1.mp4",
  },
  nest: {
    partnership: "/videos/nest/nest_partnership_video-01.mp4",
    launch: "/videos/nest/nest-launch.mp4",
  },
  portalfi: {
    main: "/videos/portalfi/portalfi-video.mp4",
  },
} as const;
