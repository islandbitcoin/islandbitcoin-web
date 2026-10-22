export const dynamic = "force-static";
import type { MetadataRoute } from "next";

const BASE_URL = "https://islandbitcoin.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{ path: string; priority: number }> = [
    { path: "", priority: 1 },
    { path: "/investors", priority: 0.8 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date("2026-10-21"),
    changeFrequency: "monthly",
    priority,
  }));
}
