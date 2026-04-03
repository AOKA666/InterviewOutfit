import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { absoluteUrl, blogPosts, buildBlogPostingSchema, buildBreadcrumbSchema, buildFaqSchema, pageTitle, siteConfig } from "@/lib/seo";

function formatDate(dateString: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(dateString));
}

export const metadata: Metadata = {
  title: pageTitle("What to Wear to a Job Interview"),
  description:
    "Complete guide on what to wear to a job interview, including dress code, colors, shoes, seasonal strategy, and outfit mistakes to avoid.",
  keywords: [
    "what to wear to a job interview",
    "job interview outfit",
    "interview dress code",
    "business casual interview outfit"
  ],
  alternates: {
    canonical: "/blog/what-to-wear-to-an-interview"
  },
  openGraph: {
    title: pageTitle("What to Wear to a Job Interview"),
    description:
      "A complete guide to interview dress code, business casual outfits, formal looks, shoes, seasonal layers, and common mistakes.",
    url: absoluteUrl("/blog/what-to-wear-to-an-interview"),
    type: "article",
    images: [blogPosts.find((entry) => entry.slug === "what-to-wear-to-an-interview")!.image ?? siteConfig.ogImage]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle("What to Wear to a Job Interview"),
    description:
      "A complete guide to interview dress code, business casual outfits, formal looks, shoes, seasonal layers, and common mistakes.",
    images: [blogPosts.find((entry) => entry.slug === "what-to-wear-to-an-interview")!.image ?? siteConfig.ogImage]
  }
};

const faqItems = [
  {
    question: "What is the safest thing to wear to a job interview?",
    answer:
      "For most professional roles, polished business casual is the safest starting point. Add a blazer or more formal shoes if the company appears conservative."
  },
  {
    question: "Should I wear black to an interview?",
    answer:
      "Black can work, but navy, charcoal, soft blue, and other balanced neutrals often feel more approachable for daytime interviews."
  }
];

const relatedPostMap = [
  "business-casual-interview-outfit",
  "startup-interview-outfit",
  "best-shoes-for-an-interview",
  "interview-outfit-for-college-students"
];

export default function BlogCompleteGuidePage() {
  const post = blogPosts.find((entry) => entry.slug === "what-to-wear-to-an-interview")!;
  const relatedPosts = relatedPostMap
    .map((slug) => blogPosts.find((entry) => entry.slug === slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  const articleSchema = buildBlogPostingSchema({
    title: "What to Wear to a Job Interview (Complete Guide)",
    description: metadata.description as string,
    path: "/blog/what-to-wear-to-an-interview",
    publishedTime: post.publishedTime,
    updatedTime: post.updatedTime,
    keywords: metadata.keywords as string[]
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: metadata.title as string, path: metadata.alternates?.canonical as string }
  ]);

  const faqSchema = buildFaqSchema(faqItems);

  return (
    <main className="mx-auto w-full max-w-4xl space-y-6 px-4 py-12 md:px-6 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <h1 className="text-4xl font-bold text-ink">
        What to Wear to a Job Interview (Complete Guide)
      </h1>
      <p className="text-sm text-slate-500">Published {formatDate(post.publishedTime)} · Updated {formatDate(post.updatedTime ?? post.publishedTime)}</p>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
        <Image
          src={post.image}
          alt="Candidates choosing what to wear to a job interview"
          width={1200}
          height={800}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <h2 className="text-2xl font-semibold text-slate-800">How to Choose an Interview Outfit</h2>
      <p className="text-slate-700">
        The fastest way to decide what to wear to an interview is to answer four questions. What
        industry is this role in? What is the expected dress code? What is the weather? What outfit
        lets you move comfortably for one to three hours? If you can answer these clearly, outfit
        decisions become predictable and low stress. If you want an instant recommendation before going
        deeper, use the <Link href="/interview-outfit-generator" className="font-semibold text-cyan underline-offset-4 hover:underline">interview outfit generator</Link>.
      </p>
      <p className="text-slate-700">
        Interview dress code usually falls into three levels: business formal, business casual, and
        casual. Business formal is common in finance, law, consulting, and some executive roles.
        Business casual is the broad default and works in many office environments. Casual appears in
        startups and some creative teams, but still requires polished basics.
      </p>
      <section className="rounded-2xl border border-cyan/20 bg-cyan/5 p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan">Best next step</p>
        <h2 className="mt-2 text-xl font-semibold text-ink">Turn broad advice into a specific outfit</h2>
        <p className="mt-2 text-slate-700">
          Use the <Link href="/interview-outfit-generator" className="font-semibold text-cyan underline-offset-4 hover:underline">interview outfit generator</Link> when you want a practical recommendation instead of reading general rules only.
        </p>
      </section>
      <p className="text-slate-700">
        If you do not know the company norm, business casual is the safest answer. It shows preparation
        and flexibility. A polished shirt or blouse, tailored pants, and clean leather shoes is a
        reliable structure for almost all industries. You can add a blazer to move one level more
        formal when needed. This is why candidates searching for <strong>what to wear to a job interview</strong> often end up with the same core answer: clean, structured, and slightly elevated.
      </p>
      <p className="text-slate-700">
        Colors should support clarity. Neutral tones such as navy, charcoal, black, white, gray, and
        soft earth tones are easiest to style and look professional in person and on camera. Keep
        prints subtle. Loud patterns and high-contrast combinations can distract from your answers.
      </p>
      <p className="text-slate-700">
        Footwear should match formality and remain comfortable. Loafers, oxfords, derbies, flats, and
        modest heels are common interview choices. Clean condition is essential. Scuffed or worn shoes
        quickly reduce a polished impression, even if the rest of the outfit is strong.
      </p>
      <p className="text-slate-700">
        Accessories should be minimal. A watch, simple earrings, or one subtle necklace is enough.
        Strong fragrance and noisy jewelry are unnecessary risks. Your outfit should frame your
        communication, not become the main topic.
      </p>
      <p className="text-slate-700">
        Seasonal adjustment improves performance. In summer, breathable fabrics and lighter layers keep
        you focused. In winter, use warm but structured layers such as tailored coats and fine knitwear.
        In spring and autumn, bring adaptable layers for commuting and changing indoor temperatures.
        The standard does not change with weather; only the fabric and layering strategy should change.
      </p>
      <p className="text-slate-700">
        It also helps to think in signals. Interviewers notice whether your outfit feels aligned with
        the role, not whether it is fashion-forward. A candidate in consulting or law who shows up in a
        clean suit or elevated business casual usually reads as prepared. A candidate in tech who wears
        structured smart casual with polished shoes reads as calibrated. The goal is to lower friction,
        not create a style event.
      </p>
      <p className="text-slate-700">
        Common mistakes include underdressing, overdressing far beyond team culture, wearing brand-new
        shoes that cause pain, and ignoring fit. Another mistake is poor final preparation. Check lint,
        wrinkles, missing buttons, and bag organization the night before. Interview day should be about
        your stories and examples, not wardrobe troubleshooting.
      </p>
      <p className="text-slate-700">
        Final rule: choose an outfit that is one level above casual daily wear, aligned to the role,
        and easy to wear confidently. Professional consistency beats fashion complexity every time. If
        you want more specific help, compare the <Link href="/blog/interview-outfit-women" className="font-semibold text-cyan underline-offset-4 hover:underline">women&apos;s interview outfit guide</Link>, the <Link href="/blog/interview-outfit-men" className="font-semibold text-cyan underline-offset-4 hover:underline">men&apos;s interview outfit guide</Link>, and the <Link href="/blog/tech-interview-outfit" className="font-semibold text-cyan underline-offset-4 hover:underline">tech interview outfit guide</Link>, then test your final choice in the <Link href="/interview-outfit-generator" className="font-semibold text-cyan underline-offset-4 hover:underline">generator</Link>.
      </p>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-ink">Related reads</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {relatedPosts.map((relatedPost) => (
            <Link
              key={relatedPost.slug}
              href={`/blog/${relatedPost.slug}`}
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-slate-300"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-cyan">{relatedPost.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{relatedPost.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{relatedPost.description}</p>
            </Link>
          ))}
        </div>
        <Link href="/interview-outfit-generator" className="mt-5 inline-block rounded-xl bg-coral px-5 py-3 text-sm font-semibold text-white hover:opacity-90">
          Try the Interview Outfit Generator
        </Link>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-ink">FAQ</h2>
        {faqItems.map((item) => (
          <div key={item.question}>
            <h3 className="text-lg font-semibold text-slate-800">{item.question}</h3>
            <p className="mt-1 text-slate-700">{item.answer}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
