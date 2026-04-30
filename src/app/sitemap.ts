import { influencers } from "@/data/influencers";
import { thematicLists } from "@/data/thematic-lists";
import type { MetadataRoute } from "next";

const BASE_URL = "https://readradar.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const influencerUrls = influencers.map(i => ({
    url: `${BASE_URL}/lists/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const thematicUrls = thematicLists.map(t => ({
    url: `${BASE_URL}/lists/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/lists`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...influencerUrls,
    ...thematicUrls,
  ];
}
