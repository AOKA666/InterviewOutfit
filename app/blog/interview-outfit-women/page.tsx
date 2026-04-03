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
  title: pageTitle("Best Interview Outfits for Women in 2025"),
  description:
    "A practical guide to interview outfit women ideas, business formal and business casual outfits, shoes, layering, and common interview style mistakes.",
  keywords: [
    "interview outfit women",
    "women job interview outfit",
    "business casual interview outfit women",
    "what women should wear to an interview"
  ],
  alternates: {
    canonical: "/blog/interview-outfit-women"
  },
  openGraph: {
    title: pageTitle("Best Interview Outfits for Women in 2025"),
    description:
      "Interview outfit women ideas for formal, business casual, startup, and modern office interviews.",
    url: absoluteUrl("/blog/interview-outfit-women"),
    type: "article",
    images: [blogPosts.find((entry) => entry.slug === "interview-outfit-women")!.image ?? siteConfig.ogImage]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle("Best Interview Outfits for Women in 2025"),
    description:
      "Interview outfit women ideas for formal, business casual, startup, and modern office interviews.",
    images: [blogPosts.find((entry) => entry.slug === "interview-outfit-women")!.image ?? siteConfig.ogImage]
  }
};

const faqItems = [
  {
    question: "What should women wear to a job interview?",
    answer:
      "A polished blouse or knit, tailored trousers or a smart skirt, and clean shoes usually work well. Add a blazer for more formal industries."
  },
  {
    question: "Are heels required for women interview outfits?",
    answer:
      "No. Flats, loafers, or modest heels are all acceptable as long as they are clean, comfortable, and aligned with the interview dress code."
  }
];

const relatedPostMap = [
  "what-to-wear-to-an-interview",
  "business-casual-interview-outfit",
  "interview-outfit-for-college-students",
  "best-shoes-for-an-interview"
];

export default function BlogWomenPage() {
  const post = blogPosts.find((entry) => entry.slug === "interview-outfit-women")!;
  const relatedPosts = relatedPostMap
    .map((slug) => blogPosts.find((entry) => entry.slug === slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  const articleSchema = buildBlogPostingSchema({
    title: "Best Interview Outfits for Women in 2025",
    description: metadata.description as string,
    path: "/blog/interview-outfit-women",
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
      <h1 className="text-4xl font-bold text-ink">Best Interview Outfits for Women in 2025</h1>
      <p className="text-sm text-slate-500">Published {formatDate(post.publishedTime)} · Updated {formatDate(post.updatedTime ?? post.publishedTime)}</p>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm">
        <Image
          src={post.image}
          alt="Professional interview outfit inspiration for women"
          width={1200}
          height={800}
          className="h-full w-full object-cover"
          priority
        />
      </div>
      <h2 className="text-2xl font-semibold text-slate-800">How to Choose an Interview Outfit</h2>
      <p className="text-slate-700">
        If you are searching for interview outfit women ideas, the most useful approach is to build a
        repeatable decision framework instead of memorizing random looks. Start by checking industry
        expectations, then select a formality level, and finally adjust for weather and comfort.
        Finance and consulting usually expect business formal. Tech and startup roles often allow
        business casual. Marketing can sit in the middle, where polished personal style is welcome if
        it remains professional. If you want a fast recommendation first, use the <Link href="/interview-outfit-generator" className="font-semibold text-cyan underline-offset-4 hover:underline">interview outfit generator</Link>.
      </p>
      <p className="text-slate-700">
        Business formal options for women are usually simple: structured blazer, crisp blouse, tailored
        trousers or a knee-length skirt, and polished closed-toe shoes. The emphasis is on fit and
        neatness. Choose neutral tones such as navy, charcoal, black, cream, and soft blue. Keep
        jewelry minimal. A watch, small earrings, and a clean tote are enough. This look communicates
        reliability and discipline, especially in traditional sectors.
      </p>
      <section className="rounded-2xl border border-cyan/20 bg-cyan/5 p-5 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan">Best next step</p>
        <h2 className="mt-2 text-xl font-semibold text-ink">Build a safer women’s interview outfit faster</h2>
        <p className="mt-2 text-slate-700">
          Use the <Link href="/interview-outfit-generator" className="font-semibold text-cyan underline-offset-4 hover:underline">interview outfit generator</Link> to compare dress code, season, and role context before you lock your final outfit.
        </p>
      </section>
      <p className="text-slate-700">
        Business casual gives you more flexibility while staying safe for most interviews. A silk or
        cotton blouse, soft blazer, tailored pants, and loafers make a strong baseline. If the company
        is less formal, replace the blazer with a structured cardigan or refined knit. The key is that
        every item still looks intentional. Wrinkle-free clothing and clean shoes matter more than
        expensive labels. For many candidates, the best result comes from using one dependable outfit
        formula repeatedly instead of buying an entirely new wardrobe.
      </p>
      <p className="text-slate-700">
        Casual interview outfits for women should still avoid extremes. Dark non-ripped jeans can work
        in startups or creative teams when paired with a polished top and clean shoes. Keep silhouettes
        sharp and color palette restrained. Skip overly distressed denim, thin leggings, loud graphic
        prints, and very casual sandals. You want to signal cultural fit without looking careless. For
        startup and software roles, it helps to compare this page with the <Link href="/blog/tech-interview-outfit" className="font-semibold text-cyan underline-offset-4 hover:underline">tech interview outfit guide</Link>.
      </p>
      <p className="text-slate-700">
        Season planning is often overlooked. In spring and autumn, use light layers that handle
        temperature changes during commute. In summer, choose breathable fabrics and avoid heavy
        synthetic materials that hold heat. In winter, prioritize warmth through a tailored coat and
        knit layers without adding bulk. Interview comfort directly affects confidence and eye contact,
        so test your outfit at home before interview day.
      </p>
      <p className="text-slate-700">
        Another useful lens is movement. Sit, stand, walk, and carry your bag in the full outfit before
        interview day. A blouse that pulls, a skirt that shifts, or shoes that feel fine for five
        minutes but not for a commute can become a real distraction. The strongest interview outfit for
        women is rarely the most fashion-forward one. It is the one that stays polished for the full
        interview process without requiring adjustment.
      </p>
      <p className="text-slate-700">
        Common mistakes include overdressing for a clearly casual office, underdressing for corporate
        interviews, wearing untested new shoes, and carrying a bag that does not match the outfit
        level. Another issue is choosing beautiful pieces that restrict movement. Sit, stand, and walk
        in your outfit before the interview. If you keep adjusting sleeves, skirt, or shoes, change
        those items.
      </p>
      <p className="text-slate-700">
        For 2025, interview style trends still favor clean tailoring with soft structure. The winning
        formula is timeless: one polished top, one fitted bottom, one reliable shoe, one subtle
        accessory strategy. Use trends only as accents, not as the core. Interviewers remember how
        clearly you communicate and how well prepared you look, not whether you wore the newest fashion
        item. If you want broader rules beyond women-specific outfit ideas, read the <Link href="/blog/what-to-wear-to-an-interview" className="font-semibold text-cyan underline-offset-4 hover:underline">complete interview outfit guide</Link> and then test your choice in the <Link href="/interview-outfit-generator" className="font-semibold text-cyan underline-offset-4 hover:underline">generator</Link>.
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
