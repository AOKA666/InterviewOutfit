import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interview Outfit Blog | Practical Interview Style Guides",
  description:
    "Read practical guides for interview outfit women, interview outfit men, tech interview outfits, and complete interview dress advice."
};

const posts = [
  {
    slug: "interview-outfit-women",
    title: "Best Interview Outfits for Women in 2025",
    excerpt:
      "Practical formulas for business formal, business casual, and modern startup interviews."
  },
  {
    slug: "interview-outfit-men",
    title: "Best Interview Outfits for Men",
    excerpt:
      "Reliable combinations for finance, tech, marketing, and general interview settings."
  },
  {
    slug: "what-to-wear-to-an-interview",
    title: "What to Wear to a Job Interview (Complete Guide)",
    excerpt: "Step-by-step guidance on formality, color, season, and common mistakes to avoid."
  },
  {
    slug: "tech-interview-outfit",
    title: "What to Wear to a Tech Interview",
    excerpt: "How to look professional in software, product, data, and startup interviews."
  }
];

export default function BlogIndexPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-4xl font-bold text-ink">Interview Outfit Blog</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        SEO-focused guides covering women, men, general interview dress, and tech interview style.
      </p>

      <div className="mt-8 grid gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300"
          >
            <h2 className="text-xl font-semibold text-ink">{post.title}</h2>
            <p className="mt-2 text-slate-600">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
