import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { absoluteUrl, blogPosts, buildBreadcrumbSchema, pageTitle, siteConfig } from "@/lib/seo";

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
    type: "website",
    images: [siteConfig.ogImage]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle("Interview Outfit Blog"),
    description:
      "Read detailed interview outfit guides for women, men, tech interviews, and complete job interview dress code advice.",
    images: [siteConfig.ogImage]
  }
};

const categoryOrder = [
  "Fundamentals",
  "By audience",
  "By industry",
  "By dress code",
  "By season",
  "Accessories"
];

const categories = categoryOrder
  .map((title) => ({
    title,
    posts: blogPosts.filter((post) => post.category === title)
  }))
  .filter((category) => category.posts.length > 0);

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
    <main className="mx-auto w-full max-w-7xl space-y-10 px-4 py-12 md:px-6 md:py-16 lg:space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />

      <section className="surface overflow-hidden rounded-[36px] md:rounded-[40px]">
        <div className="grid items-center gap-0 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="p-8 md:p-12 lg:p-16 xl:p-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Style Library</p>
            <h1 className="mt-5 text-4xl font-bold tracking-[-0.05em] text-ink md:text-6xl xl:text-7xl">
              Interview Outfit Blog
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Browse practical interview outfit guides for business casual, formal, startup, and tech
              interview situations. This blog is built for candidates who want clear answers to what to
              wear to a job interview, how to match company culture, and how to avoid common outfit
              mistakes.
            </p>
          </div>
          <div className="dark-lux p-6 md:p-8 lg:p-10">
            <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <Image
                src="https://pub-09df3a032e66443f9e06ccae6bfee83b.r2.dev/web_images/2.png"
                alt="Professional interview outfit inspiration on a clothing rack"
                width={1400}
                height={1000}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="surface rounded-[32px] p-8 md:p-10 lg:p-12">
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink md:text-3xl">Start here</h2>
        <p className="mt-3 max-w-4xl text-[15px] leading-7 text-slate-700">
          If you are new to interview prep, begin with the <Link href="/blog/what-to-wear-to-an-interview" className="font-semibold text-cyan underline-offset-4 hover:underline">complete guide on what to wear to a job interview</Link>. Then use the <Link href="/interview-outfit-generator" className="font-semibold text-cyan underline-offset-4 hover:underline">interview outfit generator</Link> to turn those rules into a practical outfit recommendation.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Link href="/blog/what-to-wear-to-an-interview" className="soft-card rounded-[24px] p-5 transition hover:-translate-y-0.5 hover:border-slate-300">
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">What to Wear to a Job Interview</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Best first read for searchers comparing interview dress code basics.</p>
          </Link>
          <Link href="/blog/tech-interview-outfit" className="soft-card rounded-[24px] p-5 transition hover:-translate-y-0.5 hover:border-slate-300">
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">Tech Interview Outfit</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Targets software engineer, startup, and product interview intent.</p>
          </Link>
          <Link href="/blog/business-casual-interview-outfit" className="soft-card rounded-[24px] p-5 transition hover:-translate-y-0.5 hover:border-slate-300">
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">Business Casual Interview Outfit</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Strong high-intent guide for the most common interview dress code.</p>
          </Link>
          <Link href="/interview-outfit-generator" className="soft-card rounded-[24px] p-5 transition hover:-translate-y-0.5 hover:border-slate-300">
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">Try the Generator</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Turn the advice into a quick outfit recommendation.</p>
          </Link>
        </div>
      </section>

      <div className="space-y-10">
        {categories.map((category) => (
          <section key={category.title} className="space-y-5">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink md:text-3xl">{category.title}</h2>
              <div className="hidden h-px flex-1 bg-slate-200 md:block" />
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {category.posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-slate-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={1200}
                      height={750}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-5 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan">{post.category}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink">{post.title}</h3>
                    <p className="mt-2 text-[15px] leading-7 text-slate-600">{post.description}</p>
                    <p className="mt-4 text-xs uppercase tracking-[0.16em] text-slate-400">
                      Updated {formatDate(post.updatedTime ?? post.publishedTime)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
