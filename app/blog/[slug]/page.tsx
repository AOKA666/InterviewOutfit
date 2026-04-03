import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  absoluteUrl,
  blogPosts,
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  getPostBySlug,
  pageTitle,
  siteConfig
} from "@/lib/seo";

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(dateString));
}

export function generateStaticParams() {
  const existingStaticSlugs = new Set([
    "interview-outfit-women",
    "interview-outfit-men",
    "what-to-wear-to-an-interview",
    "tech-interview-outfit"
  ]);

  return blogPosts
    .filter((post) => post.sections && post.faq && !existingStaticSlugs.has(post.slug))
    .map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.sections || !post.faq) {
    return {};
  }

  return {
    title: pageTitle(post.title),
    description: post.description,
    keywords: [
      post.slug.replaceAll("-", " "),
      "interview outfit",
      "job interview outfit",
      post.category.toLowerCase()
    ],
    alternates: {
      canonical: `/blog/${post.slug}`
    },
    openGraph: {
      title: pageTitle(post.title),
      description: post.description,
      url: absoluteUrl(`/blog/${post.slug}`),
      type: "article",
      images: [post.image ?? siteConfig.ogImage]
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle(post.title),
      description: post.description,
      images: [post.image ?? siteConfig.ogImage]
    }
  };
}

const relatedPostMap: Record<string, string[]> = {
  "business-casual-interview-outfit": [
    "what-to-wear-to-an-interview",
    "best-shoes-for-an-interview",
    "startup-interview-outfit",
    "finance-interview-outfit"
  ],
  "startup-interview-outfit": [
    "tech-interview-outfit",
    "can-you-wear-jeans-to-an-interview",
    "business-casual-interview-outfit",
    "what-to-wear-to-an-interview"
  ],
  "interview-outfit-summer": [
    "interview-outfit-winter",
    "best-shoes-for-an-interview",
    "what-to-wear-to-an-interview",
    "business-casual-interview-outfit"
  ],
  "interview-outfit-winter": [
    "interview-outfit-summer",
    "best-shoes-for-an-interview",
    "what-to-wear-to-an-interview",
    "finance-interview-outfit"
  ],
  "best-shoes-for-an-interview": [
    "business-casual-interview-outfit",
    "finance-interview-outfit",
    "startup-interview-outfit",
    "what-to-wear-to-an-interview"
  ],
  "can-you-wear-jeans-to-an-interview": [
    "startup-interview-outfit",
    "business-casual-interview-outfit",
    "tech-interview-outfit",
    "what-to-wear-to-an-interview"
  ],
  "finance-interview-outfit": [
    "business-casual-interview-outfit",
    "best-shoes-for-an-interview",
    "what-to-wear-to-an-interview",
    "interview-outfit-men"
  ],
  "interview-outfit-for-college-students": [
    "what-to-wear-to-an-interview",
    "business-casual-interview-outfit",
    "best-shoes-for-an-interview",
    "interview-outfit-women"
  ]
};

const toolLinkMap: Record<string, { href: string; label: string; description: string }> = {
  "business-casual-interview-outfit": {
    href: "/interview-outfit-generator",
    label: "Generate a business casual interview outfit",
    description: "Use the generator to compare industry, season, and dress code before locking your outfit."
  },
  "startup-interview-outfit": {
    href: "/interview-outfit-generator",
    label: "Check your startup interview outfit",
    description: "Compare startup, tech, and business casual expectations in one quick recommendation flow."
  },
  "interview-outfit-summer": {
    href: "/interview-outfit-generator",
    label: "Plan a summer interview outfit",
    description: "Use the generator to balance season, industry, and formality without overthinking the heat."
  },
  "interview-outfit-winter": {
    href: "/interview-outfit-generator",
    label: "Plan a winter interview outfit",
    description: "Get a practical recommendation that accounts for weather and interview dress code together."
  },
  "best-shoes-for-an-interview": {
    href: "/interview-outfit-generator",
    label: "Match your shoes to the full outfit",
    description: "Start with the generator, then use shoe choice to sharpen the final level of formality."
  },
  "can-you-wear-jeans-to-an-interview": {
    href: "/interview-outfit-generator",
    label: "Check if your interview setting allows jeans",
    description: "Use the generator to compare startup, tech, and formal settings before gambling on denim."
  },
  "finance-interview-outfit": {
    href: "/interview-outfit-generator",
    label: "Build a safer finance interview outfit",
    description: "Use the tool when you want a more conservative recommendation for formal industries."
  },
  "interview-outfit-for-college-students": {
    href: "/interview-outfit-generator",
    label: "Generate a low-risk student interview outfit",
    description: "Use the generator to get a practical starting point for internships, campus recruiting, and first-job interviews."
  }
};

export default async function BlogDynamicArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.sections || !post.faq) {
    return null;
  }

  const relatedPosts = (relatedPostMap[post.slug] ?? [])
    .map((slug) => getPostBySlug(slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))
    .slice(0, 4);

  const toolLink = toolLinkMap[post.slug];

  const articleSchema = buildBlogPostingSchema({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    publishedTime: post.publishedTime,
    updatedTime: post.updatedTime,
    keywords: [post.slug.replaceAll("-", " "), "interview outfit", "job interview outfit"]
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` }
  ]);

  const faqSchema = buildFaqSchema(post.faq);

  return (
    <main className="mx-auto w-full max-w-6xl space-y-8 px-4 py-12 md:px-6 md:py-16 lg:space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="surface overflow-hidden rounded-[36px] md:rounded-[40px]">
        <div className="grid lg:grid-cols-[0.96fr_1.04fr] lg:items-stretch">
          <div className="p-8 md:p-10 lg:p-12 xl:p-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">{post.category}</p>
            <h1 className="mt-4 text-4xl font-bold tracking-[-0.05em] text-ink md:text-5xl xl:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 text-sm uppercase tracking-[0.16em] text-slate-400">
              Published {formatDate(post.publishedTime)} · Updated {formatDate(post.updatedTime ?? post.publishedTime)}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{post.description}</p>
          </div>
          <div className="dark-lux p-6 md:p-8 lg:p-10">
            <div className="relative z-10 h-full overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <Image
                src={post.image}
                alt={post.title}
                width={1400}
                height={1000}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {post.intro ? (
        <section className="surface rounded-[32px] p-8 md:p-10 editorial-prose">
          <p className="text-lg leading-8 text-slate-700 md:text-[19px]">{post.intro}</p>
        </section>
      ) : null}

      <div className="grid gap-8 lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_360px]">
        <div className="space-y-8">
          <section className="surface rounded-[32px] p-8 md:p-10 editorial-prose">
            {post.sections.map((section, index) => (
              <section key={section.title} className={index === 0 ? "space-y-3" : "space-y-3 pt-6"}>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-800 md:text-3xl">{section.title}</h2>
                <p className="text-[17px] text-slate-700">{section.body}</p>
                {index === 0 && toolLink ? (
                  <div className="mt-6 rounded-[24px] border border-cyan/20 bg-cyan/5 p-5">
                    <p className="text-sm font-semibold uppercase tracking-wide text-cyan">Best next step</p>
                    <h3 className="mt-2 text-lg font-semibold text-ink">{toolLink.label}</h3>
                    <p className="mt-2 text-slate-700">{toolLink.description}</p>
                    <Link
                      href={toolLink.href}
                      className="mt-4 inline-block rounded-2xl bg-ink px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"
                    >
                      Open the Interview Outfit Generator
                    </Link>
                  </div>
                ) : null}
              </section>
            ))}
          </section>

          <section className="surface rounded-[32px] p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">Use the tool, then go deeper</h2>
            <p className="mt-3 text-[15px] leading-7 text-slate-700">
              Use the{" "}
              <Link href="/interview-outfit-generator" className="font-semibold text-cyan underline-offset-4 hover:underline">
                interview outfit generator
              </Link>{" "}
              to compare dress code, industry, and season in one place. Then review the{" "}
              <Link href="/blog/what-to-wear-to-an-interview" className="font-semibold text-cyan underline-offset-4 hover:underline">
                complete interview outfit guide
              </Link>{" "}
              and the{" "}
              <Link href="/blog/business-casual-interview-outfit" className="font-semibold text-cyan underline-offset-4 hover:underline">
                business casual interview outfit guide
              </Link>{" "}
              if you want safer, lower-risk outfit decisions.
            </p>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="surface rounded-[28px] p-6">
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink">Article snapshot</h2>
            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
              <p><strong>Category:</strong> {post.category}</p>
              <p><strong>Published:</strong> {formatDate(post.publishedTime)}</p>
              <p><strong>Updated:</strong> {formatDate(post.updatedTime ?? post.publishedTime)}</p>
            </div>
          </section>

          <section className="surface space-y-4 rounded-[28px] p-6">
            <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink">FAQ</h2>
            {post.faq.map((item) => (
              <div key={item.question} className="rounded-[20px] bg-white/75 p-4">
                <h3 className="text-base font-semibold text-slate-800">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">{item.answer}</p>
              </div>
            ))}
          </section>
        </aside>
      </div>

      <section className="surface rounded-[32px] p-6 md:p-8 lg:p-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">Related reads</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {relatedPosts.map((relatedPost) => (
            <Link
              key={relatedPost.slug}
              href={`/blog/${relatedPost.slug}`}
              className="soft-card rounded-[24px] p-5 transition hover:-translate-y-0.5 hover:border-slate-300"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan">{relatedPost.category}</p>
              <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-ink">{relatedPost.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{relatedPost.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
