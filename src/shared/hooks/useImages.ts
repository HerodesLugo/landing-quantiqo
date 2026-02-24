import { useState, useEffect } from "react";

const globalImageCache: Record<string, HTMLImageElement[]> = {};
const globalLoadedStatus: Record<string, boolean> = {};

export const useHeroImages = (totalFrames: number, basePath: string) => {
  const cacheKey = `${basePath}-${totalFrames}`;
  
  const [images, setImages] = useState<HTMLImageElement[]>(globalImageCache[cacheKey] || []);
  const [isLoaded, setIsLoaded] = useState<boolean>(globalLoadedStatus[cacheKey] || false);
  const [progress, setProgress] = useState<number>(globalLoadedStatus[cacheKey] ? 100 : 0);

  useEffect(() => {
    if (globalLoadedStatus[cacheKey]) {
      setImages(globalImageCache[cacheKey]);
      setIsLoaded(true);
      setProgress(100);
      return;
    }

    let isMounted = true;
    const loadedImages: HTMLImageElement[] = new Array(totalFrames);
    let loadCount = 0;

    const handleImageLoadOrError = (index: number, img: HTMLImageElement) => {
      loadCount++;
      loadedImages[index] = img;
      
      if (!isMounted) return;

      setProgress(Math.round((loadCount / totalFrames) * 100));

      if (loadCount === totalFrames) {
        globalImageCache[cacheKey] = loadedImages;
        globalLoadedStatus[cacheKey] = true;
        setImages(loadedImages);
        setIsLoaded(true);
      }
    };

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const fileName = String(i).padStart(4, "0");
      if (basePath.includes("0001.webp")) {
        img.src = basePath.replace("0001.webp", `${fileName}.webp`);
      } else {
        img.src = `${basePath}/${fileName}.webp`;
      }

      img.onload = () => handleImageLoadOrError(i - 1, img);
      img.onerror = () => handleImageLoadOrError(i - 1, img); // Avanzamos a pesar del error de la imagen para no bloquear
    }

    return () => {
      isMounted = false;
    };
  }, [totalFrames, basePath, cacheKey]);

  return { images, isLoaded, progress };
};
