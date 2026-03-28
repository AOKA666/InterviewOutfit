import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, buildBreadcrumbSchema, buildFaqSchema, pageTitle, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: pageTitle("What to Wear to an Interview"),
  description:
    "Use the free interview outfit generator to choose what to wear to a job interview, compare business casual vs formal looks, and read practical interview outfit guides.",
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
    title: pageTitle("What to Wear to an Interview"),
    description:
      "Choose the right job interview outfit faster with a free tool, practical style advice, and detailed interview outfit guides.",
    url: absoluteUrl("/"),
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle("What to Wear to an Interview"),
    description:
      "Choose the right job interview outfit faster with a free tool, practical style advice, and detailed interview outfit guides."
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

      <section className="rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-sm md:p-12">
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
        <h2 className="text-3xl font-semibold text-ink">What to wear to an interview: a practical SEO guide</h2>
        <div className="mt-5 space-y-4 text-slate-700">
          <p>
            Candidates search for phrases like <strong>interview outfit</strong>, <strong>what to wear to an interview</strong>, <strong>interview outfit women</strong>, <strong>interview outfit men</strong>, and <strong>tech interview outfit</strong> because job interview dress is a high-stakes decision with little room for error. Most people do not want fashion theory. They want a reliable answer that fits the company, feels comfortable, and avoids looking underdressed or awkwardly formal. That is exactly the gap this site is designed to fill.
          </p>
          <p>
            A strong interview outfit is usually built from the same logic. First, identify the company signal. Traditional industries such as finance, consulting, law, and some enterprise sales teams often expect business formal or at least elevated business casual. That usually means tailored trousers, a blazer or suit jacket, clean leather shoes, and a restrained color palette. Tech, startup, product, and creative roles often move one level down in formality, but the underlying standard still matters. Clean fit, neat grooming, and consistent shoes and accessories continue to shape first impressions.
          </p>
          <p>
            The second variable is role context. A software engineer interviewing with a startup panel can often wear dark jeans, a refined knit, and minimal shoes, while a candidate for consulting or client-facing leadership roles should usually choose more structure. The third variable is season. Summer changes fabric weight, not professionalism. Winter adds layers, not clutter. The fourth variable is confidence. If a candidate spends the whole interview adjusting sleeves, worrying about wrinkles, or noticing painful shoes, that discomfort leaks into communication.
          </p>
          <p>
            Interview Outfit turns that decision process into a repeatable tool. Instead of scanning random outfit inspiration online, you can use the <Link href="/interview-outfit-generator" className="font-semibold text-cyan underline-offset-4 hover:underline">interview outfit generator</Link> to narrow the right outfit category, then read supporting content in the <Link href="/blog" className="font-semibold text-cyan underline-offset-4 hover:underline">interview outfit blog</Link>. This combination is useful for job seekers who want a practical answer fast and also for content-driven search visitors comparing dress codes before a specific interview.
          </p>
          <p>
            If you are unsure where to start, default to polished business casual and move one step more formal when the company appears conservative. Choose neutral colors, structured pieces, and shoes in good condition. Keep accessories simple. Let your clothes support your message instead of competing with it. Interviews are not won by fashionable risk. They are won by preparation, fit, and alignment with context. That is why the best interview outfit is rarely the loudest one. It is the one that helps the interviewer focus on your judgment, communication, and readiness for the role.
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
