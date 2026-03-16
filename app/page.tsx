import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-20 md:px-6">
      <section className="rounded-3xl border border-slate-200 bg-white/85 p-8 shadow-sm md:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">
          Interview Preparation
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-ink md:text-5xl">
          Interview Outfit Generator
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Find the perfect outfit for your job interview in seconds.
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
    </main>
  );
}
