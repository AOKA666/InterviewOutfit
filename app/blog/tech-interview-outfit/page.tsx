import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, pageTitle, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageTitle("What to Wear to a Tech Interview"),
  description:
    "Tech interview outfit guidance for software engineering, product, design, and startup interviews, with practical business casual and smart-casual examples.",
  alternates: {
    canonical: "/blog/tech-interview-outfit"
  },
  openGraph: {
    title: pageTitle("What to Wear to a Tech Interview"),
    description:
      "Learn what to wear to a tech interview in startups, enterprise software teams, and product organizations.",
    url: absoluteUrl("/blog/tech-interview-outfit"),
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle("What to Wear to a Tech Interview"),
    description:
      "Learn what to wear to a tech interview in startups, enterprise software teams, and product organizations."
  }
};

const faqItems = [
  {
    question: "What should I wear to a tech interview?",
    answer:
      "Polished business casual is the safest default: clean trousers or dark jeans, a structured top, and shoes in good condition. Add a blazer if the role is senior or client-facing."
  },
  {
    question: "Can I wear sneakers to a tech interview?",
    answer:
      "Sometimes, yes, but only if they are minimal, clean, and aligned with the company culture. When in doubt, loafers or other smart casual shoes are safer."
  }
];

export default function BlogTechPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "What to Wear to a Tech Interview",
    description: metadata.description,
    datePublished: "2026-03-20T00:00:00.000Z",
    dateModified: "2026-03-20T00:00:00.000Z",
    author: {
      "@type": "Organization",
      name: siteConfig.name
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    },
    mainEntityOfPage: absoluteUrl("/blog/tech-interview-outfit")
  };

  return (
    <main className="mx-auto w-full max-w-4xl space-y-6 px-4 py-12 md:px-6 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <h1 className="text-4xl font-bold text-ink">What to Wear to a Tech Interview</h1>
      <h2 className="text-2xl font-semibold text-slate-800">How to Choose an Interview Outfit</h2>
      <p className="text-slate-700">
        Tech interview outfit decisions are often confusing because company cultures vary widely. A
        fintech enterprise and an early-stage startup can have completely different norms. Instead of
        guessing, aim for structured business casual as the default, then adjust one level up or down
        based on recruiter guidance and team signals. If you want an immediate recommendation, try the
        <Link href="/interview-outfit-generator" className="font-semibold text-cyan underline-offset-4 hover:underline"> interview outfit generator</Link> first.
      </p>
      <p className="text-slate-700">
        For software engineering roles, a clean button-down or knit top, tailored chinos or dark jeans,
        and polished loafers or minimal sneakers usually works. If you are interviewing for senior or
        client-facing roles, add a blazer. This keeps your appearance credible across technical and
        leadership discussions.
      </p>
      <p className="text-slate-700">
        Product, data, and design roles can include a bit more personal style, but keep the same
        quality standard: neat fit, neutral palette, and consistent formality. Avoid outfits that are
        too trend-heavy or distracting. Interviewers should remember your thinking process, not your
        clothing details. This is why many candidates searching for a <strong>tech interview outfit</strong> end up doing better with clean basics than with trend-heavy startup stereotypes.
      </p>
      <p className="text-slate-700">
        For startup interviews, casual can be acceptable. Dark non-ripped jeans, a clean top, and
        simple shoes can be enough. Still, avoid gym wear, oversized hoodies, and heavily branded
        sports items unless explicitly aligned with company culture. Casual should still read as
        intentional.
      </p>
      <p className="text-slate-700">
        Remote interviews require extra attention. Test your outfit on camera with your lighting setup.
        Medium-contrast solids often work best. Avoid thin stripes that may create flicker on webcam.
        Make sure your upper-body outfit matches the level of professionalism you want to communicate.
        A strong webcam presentation matters because many first-round tech interviews happen online.
      </p>
      <p className="text-slate-700">
        One practical rule for tech: do not dress below the interviewer panel average. If engineering
        managers appear in collared shirts and clean layers, mirror that level or slightly above. If
        leadership is present, elevate your look. This helps signal that you understand context and can
        calibrate professionally.
      </p>
      <p className="text-slate-700">
        The role itself also matters. Backend and infrastructure roles in relaxed startups may accept a
        more casual look, while solutions engineering, product leadership, and customer-facing roles
        often benefit from a stronger business casual signal. Candidates sometimes over-focus on whether
        jeans are allowed and under-focus on whether the full outfit looks intentional. In most cases,
        fit, grooming, and clean shoes matter more than whether the bottom is denim or chino.
      </p>
      <p className="text-slate-700">
        Common mistakes in tech interviews include over-casual hoodies, wrinkled shirts, worn sneakers,
        and ignoring grooming. Another common issue is formal mismatch: full suit in a clearly relaxed
        startup panel can feel disconnected. The best strategy is polished business casual with optional
        formal upgrades. If you need broader cross-industry guidance, read the <Link href="/blog/what-to-wear-to-an-interview" className="font-semibold text-cyan underline-offset-4 hover:underline">complete interview outfit guide</Link>.
      </p>
      <p className="text-slate-700">
        In summary, a strong tech interview outfit is clean, modern, and practical. Keep the silhouette
        sharp, the palette controlled, and the comfort high. That balance supports confidence during
        system design, coding, and behavioral rounds. You can compare this page with our <Link href="/blog/interview-outfit-men" className="font-semibold text-cyan underline-offset-4 hover:underline">men&apos;s interview outfit guide</Link> or <Link href="/blog/interview-outfit-women" className="font-semibold text-cyan underline-offset-4 hover:underline">women&apos;s interview outfit guide</Link>, then run your final choice through the <Link href="/interview-outfit-generator" className="font-semibold text-cyan underline-offset-4 hover:underline">generator</Link>.
      </p>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-ink">Related reads</h2>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li><Link href="/blog/what-to-wear-to-an-interview" className="text-cyan underline-offset-4 hover:underline">What to Wear to a Job Interview</Link></li>
          <li><Link href="/blog/interview-outfit-women" className="text-cyan underline-offset-4 hover:underline">Best Interview Outfits for Women</Link></li>
        </ul>
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
