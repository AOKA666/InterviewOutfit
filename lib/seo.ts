export const siteConfig = {
  name: "Interview Outfit",
  title: "Interview Outfit Generator",
  description:
    "Interview outfit ideas, job interview style guides, and a free interview outfit generator for business formal, business casual, and tech interviews.",
  url: "https://outfitguide.online",
  ogImage: "/og-image.png"
};

export const blogPosts = [
  {
    slug: "interview-outfit-women",
    title: "Best Interview Outfits for Women in 2025",
    description:
      "A practical guide to interview outfit women ideas, business casual formulas, formal looks, shoes, layering, and common interview style mistakes.",
    category: "By audience",
    publishedTime: "2026-03-20T00:00:00.000Z"
  },
  {
    slug: "interview-outfit-men",
    title: "Best Interview Outfits for Men",
    description:
      "Reliable interview outfit men combinations for finance, consulting, startup, and business casual interviews, with shoe, fit, and color advice.",
    category: "By audience",
    publishedTime: "2026-03-20T00:00:00.000Z"
  },
  {
    slug: "what-to-wear-to-an-interview",
    title: "What to Wear to a Job Interview (Complete Guide)",
    description:
      "Learn what to wear to a job interview with practical advice on dress code, color palette, shoes, seasonal layers, and interview outfit mistakes.",
    category: "Fundamentals",
    publishedTime: "2026-03-20T00:00:00.000Z"
  },
  {
    slug: "tech-interview-outfit",
    title: "What to Wear to a Tech Interview",
    description:
      "Tech interview outfit guidance for software engineers, product managers, designers, and startup candidates who want a polished but natural look.",
    category: "By industry",
    publishedTime: "2026-03-20T00:00:00.000Z"
  }
] as const;

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function pageTitle(title: string) {
  return `${title} | ${siteConfig.name}`;
}
