import { useHeroImages } from "./useImages";
import { HERO_BASE_URL } from "@/shared/constant/frames";

export const useLoading = () => {
  const { isLoaded, progress } = useHeroImages(313, HERO_BASE_URL);

  return { 
    isLoading: !isLoaded,
    progress 
  };
};
