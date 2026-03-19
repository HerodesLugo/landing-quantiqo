
const shimmerSvg = (w: number, h: number) => `
<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="shimmer-gradient" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0%"   stop-color="#1e1f26" />
      <stop offset="40%"  stop-color="#2a2b36" />
      <stop offset="60%"  stop-color="#343742" />
      <stop offset="100%" stop-color="#1e1f26" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#shimmer-gradient)" rx="12" />
</svg>`;

const toBase64 = (str: string): string =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(unescape(encodeURIComponent(str)));

export const CARD_BLUR_DATA_URL = `data:image/svg+xml;base64,${toBase64(shimmerSvg(960, 540))}`;
