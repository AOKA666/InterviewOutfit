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
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-20 md:px-6">
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

      <section className="grid items-center gap-8 rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-sm md:grid-cols-[1.2fr_0.8fr] md:p-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
            Interview Preparation
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-ink md:text-5xl">
            Interview Outfit Generator for Smarter Job Interview Style Decisions
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Use our free interview outfit generator to decide what to wear to a job interview based on
            industry, dress code, season, and role expectations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/interview-outfit-generator"
              className="rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Try the Generator
            </Link>
            <Link
              href="/blog"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Read Style Guides
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
            alt="Job candidates reviewing interview outfits before an interview"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
            priority
          />
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-ink">Practical, low-risk outfit advice</h2>
          <p className="mt-3 text-slate-700">
            Instead of generic fashion inspiration, Interview Outfit focuses on job interview clothing
            decisions that help candidates look polished, credible, and aligned with company culture.
          </p>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-ink">Built for real interview scenarios</h2>
          <p className="mt-3 text-slate-700">
            We cover business formal, business casual, startup interviews, seasonal adjustments,
            camera-friendly looks, and industry-specific expectations from tech to consulting.
          </p>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-ink">Tool + content working together</h2>
          <p className="mt-3 text-slate-700">
            The generator gives instant outfit recommendations, while the blog library explains why a
            look works, what mistakes to avoid, and how to adapt the same formula for your interview.
          </p>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-semibold text-ink">How It Works</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan">Step 1</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-800">Choose your interview context</h3>
            <p className="mt-2 text-slate-700">
              Start with industry, gender preference, dress code expectations, and season. These four
              inputs do most of the work.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan">Step 2</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-800">Get a recommended outfit</h3>
            <p className="mt-2 text-slate-700">
              The tool suggests a clean, interview-safe outfit formula with reasoning so you know why
              the recommendation fits your role.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan">Step 3</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-800">Go deeper with guides</h3>
            <p className="mt-2 text-slate-700">
              Use the linked articles to refine details like shoes, colors, layering, and industry
              calibration before interview day.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-semibold text-ink">How to choose the right interview outfit</h2>
        <div className="mt-5 space-y-4 text-slate-700">
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
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-ink">Start with the tool</h2>
          <p className="mt-3 text-slate-700">
            Get an instant recommendation for business formal, business casual, or startup-friendly
            interview outfits.
          </p>
          <Link
            href="/interview-outfit-generator"
            className="mt-5 inline-block rounded-xl bg-coral px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            Open the Interview Outfit Generator
          </Link>
        </article>
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-ink">Read the best guides</h2>
          <ul className="mt-3 space-y-2 text-slate-700">
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

      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
        <h2 className="text-3xl font-semibold text-ink">Interview Outfit FAQ</h2>
        <div className="mt-6 space-y-5">
          {faqItems.map((item) => (
            <div key={item.question}>
              <h3 className="text-lg font-semibold text-slate-800">{item.question}</h3>
              <p className="mt-2 text-slate-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
