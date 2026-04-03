import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import OutfitGenerator from "@/components/OutfitGenerator";
import { absoluteUrl, buildBreadcrumbSchema, buildFaqSchema, pageTitle, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageTitle("Interview Outfit Generator"),
  description:
    "Use our free interview outfit generator to choose the best job interview outfit by industry, dress code, season, and interview style.",
  keywords: [
    "interview outfit generator",
    "job interview outfit",
    "what to wear to an interview",
    "business casual interview outfit",
    "tech interview outfit"
  ],
  alternates: {
    canonical: "/interview-outfit-generator"
  },
  openGraph: {
    title: pageTitle("Interview Outfit Generator"),
    description:
      "Get a practical job interview outfit recommendation for business formal, business casual, startup, and tech interview settings.",
    url: absoluteUrl("/interview-outfit-generator"),
    type: "website",
    images: [siteConfig.ogImage]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle("Interview Outfit Generator"),
    description:
      "Get a practical job interview outfit recommendation for business formal, business casual, startup, and tech interview settings.",
    images: [siteConfig.ogImage]
  }
};

const faqItems = [
  {
    question: "How does the interview outfit generator work?",
    answer:
      "The tool asks for context such as industry, dress code, season, and style preference, then suggests an outfit formula that matches common interview expectations."
  },
  {
    question: "Is business casual the best interview outfit?",
    answer:
      "Business casual is the safest default for many office interviews, but finance, law, and consulting often require more formal choices, while startups may allow polished casual."
  },
  {
    question: "Can I use this tool for tech interview outfits?",
    answer:
      "Yes. The generator is useful for software engineering, product, design, and startup interview scenarios where candidates need a polished but natural look."
  }
];

const relatedGuides = [
  {
    href: "/blog/what-to-wear-to-an-interview",
    title: "What to Wear to a Job Interview",
    description: "Start with the complete interview dress code guide."
  },
  {
    href: "/blog/tech-interview-outfit",
    title: "What to Wear to a Tech Interview",
    description: "Use this if you are interviewing in software, startup, product, or data roles."
  },
  {
    href: "/blog/interview-outfit-women",
    title: "Interview Outfit Ideas for Women",
    description: "Outfit formulas, shoes, layers, and practical styling advice."
  },
  {
    href: "/blog/interview-outfit-men",
    title: "Interview Outfit Ideas for Men",
    description: "Fit, color, shoes, and industry-specific outfit guidance."
  }
];

export default function GeneratorPage() {
  const faqSchema = buildFaqSchema(faqItems);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Interview Outfit Generator", path: "/interview-outfit-generator" }
  ]);

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Interview Outfit Generator",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Web",
    url: absoluteUrl("/interview-outfit-generator"),
    description:
      "A free web app that helps candidates choose what to wear to an interview based on role, industry, dress code, and season.",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url
    }
  };

  return (
    <main className="mx-auto w-full max-w-6xl space-y-10 px-4 py-12 md:px-6 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm md:grid-cols-[1.1fr_0.9fr] md:p-12">
        <div>
          <h1 className="text-4xl font-bold leading-tight text-ink md:text-5xl">
            Free Interview Outfit Generator for Job Interview Outfit Ideas
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Find the best interview outfit for business formal, business casual, startup, and tech
            interview settings in seconds.
          </p>
          <a
            href="#generator"
            className="mt-7 inline-block rounded-xl bg-coral px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Try the Generator
          </a>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
          <Image
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
            alt="Professional interview outfit planning before a job interview"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <OutfitGenerator />

      <section className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-3xl font-semibold text-ink">How to Choose an Interview Outfit</h2>
        <h3 className="text-xl font-semibold text-slate-800">
          What to Wear to a Job Interview Without Overthinking It
        </h3>
        <p className="text-slate-700">
          Choosing an interview outfit is not only about fashion. It is about showing respect for the
          opportunity, understanding the company culture, and making it easy for the interviewer to
          focus on your skills. Candidates often search for phrases like interview outfit women,
          interview outfit men, business casual interview outfit, and what to wear to an interview
          because they want practical, low-risk guidance. The best strategy is to use a framework:
          start with the role and industry, match the expected formality, then adapt for season and
          comfort.
        </p>
        <p className="text-slate-700">
          A strong interview outfit usually has three qualities: clean lines, proper fit, and
          consistency. Clean lines mean your top and bottom are structured and not wrinkled. Proper fit
          means nothing is overly tight, baggy, or hard to move in. Consistency means your shoes,
          accessories, and bag follow the same level of formality. For example, if you wear a blazer
          and tailored trousers, pair them with polished loafers or oxfords rather than athletic
          sneakers.
        </p>
        <p className="text-slate-700">
          Industry matters. Finance, law, and consulting usually favor business formal looks. That can
          include a suit, dress shirt or blouse, conservative shoes, and minimal accessories. Tech and
          startup environments often accept business casual, and in some companies a polished casual
          look is acceptable for technical interviews. Marketing sits in the middle: creative but still
          professional. If you are unsure, business casual is usually the safest default.
        </p>
        <p className="text-slate-700">
          The purpose of an interview outfit generator is to turn this strategy into quick action.
          Instead of reading dozens of conflicting posts, you enter your gender preference, industry,
          formality target, and season, then receive a practical outfit recommendation with a short
          explanation. If you want deeper guidance, continue with the <Link href="/blog/what-to-wear-to-an-interview" className="font-semibold text-cyan underline-offset-4 hover:underline">complete interview outfit guide</Link> or the <Link href="/blog/tech-interview-outfit" className="font-semibold text-cyan underline-offset-4 hover:underline">tech interview outfit guide</Link>.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-semibold text-ink">Related Guides</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-slate-300"
            >
              <h3 className="text-lg font-semibold text-ink">{guide.title}</h3>
              <p className="mt-2 text-slate-700">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
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
