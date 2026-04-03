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
    <main className="mx-auto w-full max-w-7xl space-y-10 px-4 py-12 md:px-6 md:py-16 lg:space-y-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="surface overflow-hidden rounded-[36px] md:rounded-[40px]">
        <div className="grid items-center lg:grid-cols-[1.05fr_0.95fr]">
          <div className="p-8 md:p-12 lg:p-16 xl:p-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coral">Interactive Tool</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.03] tracking-[-0.05em] text-ink md:text-6xl xl:text-7xl">
              Free Interview Outfit Generator for Job Interview Outfit Ideas
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Find the best interview outfit for business formal, business casual, startup, and tech
              interview settings in seconds.
            </p>
            <a
              href="#generator"
              className="mt-8 inline-block rounded-2xl bg-coral px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(251,113,133,0.22)] transition hover:-translate-y-0.5 hover:opacity-90"
            >
              Try the Generator
            </a>
          </div>
          <div className="dark-lux p-6 md:p-8 lg:p-10">
            <div className="relative z-10 overflow-hidden rounded-[30px] border border-white/10 bg-white/5 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              <Image
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                alt="Professional interview outfit planning before a job interview"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-coral">Tool preview</p>
                <p className="mt-2 max-w-md text-sm leading-6 text-slate-100">
                  Use role, industry, season, and dress code to get a safer interview outfit recommendation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OutfitGenerator />

      <section className="surface rounded-[32px] p-6 md:p-8 lg:p-10 editorial-prose">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-ink md:text-4xl">How to Choose an Interview Outfit</h2>
        <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-800">
          What to Wear to a Job Interview Without Overthinking It
        </h3>
        <div className="space-y-5 text-[17px] text-slate-700">
          <p>
            Choosing an interview outfit is not only about fashion. It is about showing respect for the
            opportunity, understanding the company culture, and making it easy for the interviewer to
            focus on your skills. Candidates often search for phrases like interview outfit women,
            interview outfit men, business casual interview outfit, and what to wear to an interview
            because they want practical, low-risk guidance. The best strategy is to use a framework:
            start with the role and industry, match the expected formality, then adapt for season and
            comfort.
          </p>
          <p>
            A strong interview outfit usually has three qualities: clean lines, proper fit, and
            consistency. Clean lines mean your top and bottom are structured and not wrinkled. Proper fit
            means nothing is overly tight, baggy, or hard to move in. Consistency means your shoes,
            accessories, and bag follow the same level of formality. For example, if you wear a blazer
            and tailored trousers, pair them with polished loafers or oxfords rather than athletic
            sneakers.
          </p>
          <p>
            Industry matters. Finance, law, and consulting usually favor business formal looks. That can
            include a suit, dress shirt or blouse, conservative shoes, and minimal accessories. Tech and
            startup environments often accept business casual, and in some companies a polished casual
            look is acceptable for technical interviews. Marketing sits in the middle: creative but still
            professional. If you are unsure, business casual is usually the safest default.
          </p>
          <p>
            The purpose of an interview outfit generator is to turn this strategy into quick action.
            Instead of reading dozens of conflicting posts, you enter your gender preference, industry,
            formality target, and season, then receive a practical outfit recommendation with a short
            explanation. If you want deeper guidance, continue with the <Link href="/blog/what-to-wear-to-an-interview" className="font-semibold text-cyan underline-offset-4 hover:underline">complete interview outfit guide</Link> or the <Link href="/blog/tech-interview-outfit" className="font-semibold text-cyan underline-offset-4 hover:underline">tech interview outfit guide</Link>.
          </p>
        </div>
      </section>

      <section className="surface rounded-[32px] p-6 md:p-8 lg:p-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink md:text-3xl">Related Guides</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {relatedGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="soft-card rounded-[24px] p-5 transition hover:-translate-y-0.5 hover:border-slate-300"
            >
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-ink">{guide.title}</h3>
              <p className="mt-2 text-[15px] leading-7 text-slate-700">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="surface rounded-[32px] p-6 md:p-8 lg:p-10">
        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink md:text-3xl">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {faqItems.map((item) => (
            <div key={item.question} className="rounded-[22px] bg-white/72 p-5">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-800">{item.question}</h3>
              <p className="mt-2 text-[15px] leading-7 text-slate-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
