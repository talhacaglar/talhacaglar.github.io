import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-05");
  return [
    { url: "https://talhacaglar.github.io/", lastModified, changeFrequency: "monthly", priority: 1 },
    { url: "https://talhacaglar.github.io/projects/", lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];
}
