import type { MetadataRoute } from "next";
import { absoluteUrl, blogPosts } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", "/interview-outfit-generator", "/blog"];

  return [
    ...staticPages.map((path) => ({
      url: absoluteUrl(path),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "/" ? 1 : 0.8
    })),
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.publishedTime),
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
