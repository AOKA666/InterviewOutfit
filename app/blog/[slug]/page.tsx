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

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);

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

export default function BlogDynamicArticlePage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post || !post.sections || !post.faq) {
    return null;
  }

  const relatedPosts = blogPosts.filter((entry) => entry.slug !== post.slug).slice(0, 4);

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
    <main className="mx-auto w-full max-w-4xl space-y-6 px-4 py-12 md:px-6 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <h1 className="text-4xl font-bold text-ink">{post.title}</h1>
      <p className="text-sm text-slate-500">
        Published {formatDate(post.publishedTime)} · Updated {formatDate(post.updatedTime ?? post.publishedTime)}
      </p>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={800}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      <p className="text-lg leading-8 text-slate-700">{post.intro}</p>

      {post.sections.map((section) => (
        <section key={section.title} className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-800">{section.title}</h2>
          <p className="text-slate-700">{section.body}</p>
        </section>
      ))}

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-ink">Keep your outfit aligned with the role</h2>
        <p className="mt-3 text-slate-700">
          If you want a faster recommendation before interview day, use the{" "}
          <Link href="/interview-outfit-generator" className="font-semibold text-cyan underline-offset-4 hover:underline">
            interview outfit generator
          </Link>{" "}
          to compare dress code, industry, and season in one place. For broader rules, start with the{" "}
          <Link href="/blog/what-to-wear-to-an-interview" className="font-semibold text-cyan underline-offset-4 hover:underline">
            complete interview outfit guide
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-ink">FAQ</h2>
        {post.faq.map((item) => (
          <div key={item.question}>
            <h3 className="text-lg font-semibold text-slate-800">{item.question}</h3>
            <p className="mt-1 text-slate-700">{item.answer}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-ink">Related reads</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          {relatedPosts.map((relatedPost) => (
            <li key={relatedPost.slug}>
              <Link href={`/blog/${relatedPost.slug}`} className="text-cyan underline-offset-4 hover:underline">
                {relatedPost.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
