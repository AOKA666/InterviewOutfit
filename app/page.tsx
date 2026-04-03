import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { absoluteUrl, buildBreadcrumbSchema, buildFaqSchema, pageTitle, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageTitle("Interview Outfit Generator"),
  description:
    "Use the free interview outfit generator to choose what to wear to a job interview and get practical interview outfit guides.",
  keywords: [
    "interview outfit",
    "interview outfit generator",
    "what to wear to an interview",
    "job interview outfit",
    "interview outfit women",
    "interview outfit men",
    "tech interview outfit"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: pageTitle("Interview Outfit Generator"),
    description:
      "Choose the right job interview outfit faster with a free tool, practical style advice, and detailed interview outfit guides.",
    url: absoluteUrl("/"),
    type: "website",
    images: [siteConfig.ogImage]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle("Interview Outfit Generator"),
    description:
      "Choose the right job interview outfit faster with a free tool, practical style advice, and detailed interview outfit guides.",
    images: [siteConfig.ogImage]
  }
};

const faqItems = [
  {
    question: "What is the safest outfit to wear to a job interview?",
    answer:
      "For most office roles, polished business casual is the safest choice. Think tailored pants, a clean blouse or shirt, simple shoes, and an optional blazer."
  },
  {
    question: "Should I dress formally for every interview?",
    answer:
      "No. Finance, law, and consulting often lean formal, while tech and startups often accept business casual. The best move is to match the company culture and stay one level more polished than everyday office wear."
  },
  {
    question: "Can this site help with men and women interview outfits?",
    answer:
      "Yes. The generator and guides cover interview outfit ideas for women, men, tech interviews, and general job interview dress codes."
  }
];

export default function HomePage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Interview Outfit Generator",
    url: absoluteUrl("/"),
    description: metadata.description,
    about: ["Interview outfit", "Job interview outfit", "Interview preparation"],
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url
    }
  };

  const breadcrumbSchema = buildBreadcrumbSchema([{ name: "Home", path: "/" }]);
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 py-16 md:px-6 lg:gap-12 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="surface overflow-hidden rounded-[36px] md:rounded-[40px]">
        <div className="grid items-start gap-0 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex h-full items-start p-8 md:p-12 lg:p-14 xl:p-16">
            <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">
              Interview Preparation
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.05em] text-ink md:text-6xl xl:text-[5.25rem]">
              Interview Outfit Generator for Smarter Job Interview Style Decisions
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              Use our free interview outfit generator to decide what to wear to a job interview based on
              industry, dress code, season, and role expectations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/interview-outfit-generator"
                className="rounded-2xl bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Try the Generator
              </Link>
              <Link
                href="/blog"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Read Style Guides
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              <span>Practical outfit logic</span>
              <span>Role-aware recommendations</span>
              <span>Guides for women, men, and tech interviews</span>
            </div>
            </div>
          </div>
          <div className="dark-lux relative min-h-[640px] overflow-hidden">
            <Image
              src="https://pub-09df3a032e66443f9e06ccae6bfee83b.r2.dev/web_images/1-v3.png"
              alt="Job candidates reviewing interview outfits before an interview"
              width={1200}
              height={1500}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent p-6 text-white md:p-8 lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Preview</p>
              <p className="mt-3 max-w-lg text-base leading-7 text-slate-100 md:text-lg md:leading-8">
                Build a safer interview look faster, then refine it with role-specific guides.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <article className="soft-card rounded-[28px] p-6 md:p-7">
          <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink">Practical, low-risk outfit advice</h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            Instead of generic fashion inspiration, Interview Outfit focuses on job interview clothing
            decisions that help candidates look polished, credible, and aligned with company culture.
          </p>
        </article>
        <article className="soft-card rounded-[28px] p-6 md:p-7">
          <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink">Built for real interview scenarios</h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            We cover business formal, business casual, startup interviews, seasonal adjustments,
            camera-friendly looks, and industry-specific expectations from tech to consulting.
          </p>
        </article>
        <article className="soft-card rounded-[28px] p-6 md:p-7">
          <h2 className="text-xl font-semibold tracking-[-0.03em] text-ink">Tool + content working together</h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            The generator gives instant outfit recommendations, while the blog library explains why a
            look works, what mistakes to avoid, and how to adapt the same formula for your interview.
          </p>
        </article>
      </section>

      <section className="surface rounded-[32px] p-8 md:p-10 lg:p-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-ink md:text-4xl">How It Works</h2>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3 lg:grid-cols-1">
          <div className="rounded-[24px] bg-white/70 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan">Step 1</p>
            <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-slate-800">Choose your interview context</h3>
            <p className="mt-2 text-[15px] leading-7 text-slate-700">
              Start with industry, gender preference, dress code expectations, and season. These four
              inputs do most of the work.
            </p>
          </div>
          <div className="rounded-[24px] bg-white/70 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan">Step 2</p>
            <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-slate-800">Get a recommended outfit</h3>
            <p className="mt-2 text-[15px] leading-7 text-slate-700">
              The tool suggests a clean, interview-safe outfit formula with reasoning so you know why
              the recommendation fits your role.
            </p>
          </div>
          <div className="rounded-[24px] bg-white/70 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan">Step 3</p>
            <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-slate-800">Go deeper with guides</h3>
            <p className="mt-2 text-[15px] leading-7 text-slate-700">
              Use the linked articles to refine details like shoes, colors, layering, and industry
              calibration before interview day.
            </p>
          </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-slate-100 shadow-sm">
            <Image
              src="https://pub-09df3a032e66443f9e06ccae6bfee83b.r2.dev/web_images/2.png"
              alt="Interview outfit flat lay with blazer, shirt, trousers, shoes, and bag"
              width={1400}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="surface rounded-[32px] p-8 md:p-10 lg:p-12 editorial-prose">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-ink md:text-4xl">How to choose the right interview outfit</h2>
        <div className="mt-6 max-w-4xl space-y-5 text-[17px] text-slate-700">
          <p>
            Most interview outfit decisions come down to four things: industry, company culture, dress code, and season. If you get those four right, you usually avoid the two biggest mistakes candidates make — looking underdressed or looking disconnected from the company environment.
          </p>
          <p>
            Traditional industries such as finance, consulting, law, and some enterprise-facing roles often reward more structure. That usually means business formal or elevated business casual, with tailored trousers, a blazer, polished shoes, and a controlled color palette. Tech, startup, product, and creative roles often allow one step less formality, but the same rules still matter: clean fit, neat grooming, and shoes that look deliberate rather than casual by accident.
          </p>
          <p>
            Weather matters too. Summer changes fabric weight, not professionalism. Winter adds layers, not clutter. The best outfit is one you can wear comfortably for the full interview process without adjusting sleeves, worrying about wrinkles, or feeling awkwardly overdressed. Comfort supports confidence, and confidence shows up in how you speak and carry yourself.
          </p>
          <p>
            If you want a practical shortcut, use the <Link href="/interview-outfit-generator" className="font-semibold text-cyan underline-offset-4 hover:underline">interview outfit generator</Link> to narrow the right outfit category first, then use the <Link href="/blog" className="font-semibold text-cyan underline-offset-4 hover:underline">blog guides</Link> to refine details like shoes, layering, and role-specific dress code decisions.
          </p>
          <p>
            In most cases, polished business casual is the safest starting point. From there, you can move more formal for conservative industries or slightly more relaxed for startup and tech settings. The goal is not to impress through fashion. It is to show judgment, preparation, and alignment with the role.
          </p>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <article className="soft-card rounded-[28px] p-6 md:p-7">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">Start with the tool</h2>
          <p className="mt-3 text-[15px] leading-7 text-slate-700">
            Get an instant recommendation for business formal, business casual, or startup-friendly
            interview outfits.
          </p>
          <Link
            href="/interview-outfit-generator"
            className="mt-5 inline-block rounded-2xl bg-coral px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(251,113,133,0.22)] transition hover:-translate-y-0.5 hover:opacity-90"
          >
            Open the Interview Outfit Generator
          </Link>
        </article>
        <article className="soft-card rounded-[28px] p-6 md:p-7">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink">Read the best guides</h2>
          <ul className="mt-3 space-y-2 text-[15px] leading-7 text-slate-700">
            <li>
              <Link href="/blog/what-to-wear-to-an-interview" className="text-cyan underline-offset-4 hover:underline">
                What to Wear to a Job Interview
              </Link>
            </li>
            <li>
              <Link href="/blog/interview-outfit-women" className="text-cyan underline-offset-4 hover:underline">
                Interview Outfit Ideas for Women
              </Link>
            </li>
            <li>
              <Link href="/blog/interview-outfit-men" className="text-cyan underline-offset-4 hover:underline">
                Interview Outfit Ideas for Men
              </Link>
            </li>
            <li>
              <Link href="/blog/tech-interview-outfit" className="text-cyan underline-offset-4 hover:underline">
                What to Wear to a Tech Interview
              </Link>
            </li>
          </ul>
        </article>
      </section>

      <section className="surface rounded-[32px] p-8 md:p-10 lg:p-12">
        <h2 className="text-3xl font-semibold tracking-[-0.04em] text-ink md:text-4xl">Interview Outfit FAQ</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {faqItems.map((item) => (
            <div key={item.question} className="rounded-[24px] bg-white/72 p-5">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-800">{item.question}</h3>
              <p className="mt-3 text-[15px] leading-7 text-slate-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
