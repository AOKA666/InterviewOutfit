import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, blogPosts, buildBreadcrumbSchema, pageTitle } from "@/lib/seo";

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(dateString));
}

export const metadata: Metadata = {
  title: pageTitle("Interview Outfit Blog"),
  description:
    "Interview outfit blog with practical guides on job interview style, business casual looks, tech interview outfits, and tips for women and men.",
  keywords: [
    "interview outfit blog",
    "what to wear to a job interview",
    "interview outfit women",
    "interview outfit men",
    "tech interview outfit"
  ],
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
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" }
  ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Interview Outfit Blog",
    url: absoluteUrl("/blog"),
    description: metadata.description,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: absoluteUrl(`/blog/${post.slug}`),
        name: post.title,
        description: post.description
      }))
    }
  };

  return (
    <main className="mx-auto w-full max-w-6xl space-y-10 px-4 py-12 md:px-6 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
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
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Link href="/blog/what-to-wear-to-an-interview" className="rounded-2xl border border-slate-200 p-5 transition hover:border-slate-300">
            <h3 className="text-lg font-semibold text-ink">What to Wear to a Job Interview</h3>
            <p className="mt-2 text-sm text-slate-600">Best first read for searchers comparing interview dress code basics.</p>
          </Link>
          <Link href="/blog/tech-interview-outfit" className="rounded-2xl border border-slate-200 p-5 transition hover:border-slate-300">
            <h3 className="text-lg font-semibold text-ink">Tech Interview Outfit</h3>
            <p className="mt-2 text-sm text-slate-600">Targets software engineer, startup, and product interview intent.</p>
          </Link>
          <Link href="/interview-outfit-generator" className="rounded-2xl border border-slate-200 p-5 transition hover:border-slate-300">
            <h3 className="text-lg font-semibold text-ink">Try the Generator</h3>
            <p className="mt-2 text-sm text-slate-600">Turn the advice into a quick outfit recommendation.</p>
          </Link>
        </div>
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
                  <p className="mt-3 text-xs text-slate-500">
                    Updated {formatDate(post.updatedTime ?? post.publishedTime)}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
