import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, blogPosts, pageTitle } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageTitle("Interview Outfit Blog"),
  description:
    "Interview outfit blog with practical guides on what to wear to a job interview, business casual interview outfits, tech interview style, and outfit ideas for women and men.",
  alternates: {
    canonical: "/blog"
  },
  openGraph: {
    title: pageTitle("Interview Outfit Blog"),
    description:
      "Read detailed interview outfit guides for women, men, tech interviews, and complete job interview dress code advice.",
    url: absoluteUrl("/blog"),
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle("Interview Outfit Blog"),
    description:
      "Read detailed interview outfit guides for women, men, tech interviews, and complete job interview dress code advice."
  }
};

const categories = [
  {
    title: "Fundamentals",
    posts: blogPosts.filter((post) => post.category === "Fundamentals")
  },
  {
    title: "By audience",
    posts: blogPosts.filter((post) => post.category === "By audience")
  },
  {
    title: "By industry",
    posts: blogPosts.filter((post) => post.category === "By industry")
  }
];

export default function BlogIndexPage() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-10 px-4 py-12 md:px-6 md:py-16">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <h1 className="text-4xl font-bold text-ink md:text-5xl">Interview Outfit Blog</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          Browse practical interview outfit guides for business casual, formal, startup, and tech
          interview situations. This blog is built for candidates who want clear answers to what to
          wear to a job interview, how to match company culture, and how to avoid common outfit
          mistakes.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-2xl font-semibold text-ink">Start here</h2>
        <p className="mt-3 text-slate-700">
          If you are new to interview prep, begin with the <Link href="/blog/what-to-wear-to-an-interview" className="font-semibold text-cyan underline-offset-4 hover:underline">complete guide on what to wear to a job interview</Link>. Then use the <Link href="/interview-outfit-generator" className="font-semibold text-cyan underline-offset-4 hover:underline">interview outfit generator</Link> to turn those rules into a practical outfit recommendation.
        </p>
      </section>

      <div className="space-y-8">
        {categories.map((category) => (
          <section key={category.title} className="space-y-4">
            <h2 className="text-2xl font-semibold text-ink">{category.title}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {category.posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300"
                >
                  <p className="text-sm font-semibold uppercase tracking-wide text-cyan">
                    {post.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-ink">{post.title}</h3>
                  <p className="mt-2 text-slate-600">{post.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
