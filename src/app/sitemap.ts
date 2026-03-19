import { MetadataRoute } from "next";

const SLUGS = [
  "portalfi",
  "accelera",
  "sozialens",
  "nest",
  "rise-labs",
  "carbon",
  "garbo",
  "aurion",
  "linus",
  "lode",
  "fenix",
  "intentx",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://quantiqolabs.com",
      lastModified: new Date(),
      priority: 1,
    },
    ...SLUGS.map((slug) => ({
      url: `https://quantiqolabs.com/portfolio/${slug}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
  ];
}
