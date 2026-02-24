import { useCallback, useEffect } from "react";

export const useHeroCanvas = (
  canvasRef: React.RefObject<HTMLCanvasElement>,
  images: HTMLImageElement[],
  isLoaded: boolean,
  getCurrentFrame: () => number
) => {
  const renderFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      if (!canvas || !images.length) return;

      const ctx = canvas.getContext("2d");
      const safeIndex = Math.max(0, Math.min(Math.round(frameIndex), images.length - 1));
      const img = images[safeIndex];

      if (!ctx || !img) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();

      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
      }

      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = canvas.width / 2 - (img.width / 2) * scale;
      const y = canvas.height / 2 - (img.height / 2) * scale;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "medium";
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    },
    [canvasRef, images]
  );

  useEffect(() => {
    if (isLoaded && images.length > 0) {
      renderFrame(getCurrentFrame());
    }
  }, [isLoaded, images, renderFrame, getCurrentFrame]);

  useEffect(() => {
    const handleResize = () => {
      if (isLoaded) renderFrame(getCurrentFrame());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isLoaded, renderFrame, getCurrentFrame]);

  return { renderFrame };
};