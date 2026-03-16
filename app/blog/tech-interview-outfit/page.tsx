import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What to Wear to a Tech Interview",
  description:
    "Practical guidance on tech interview outfit choices across startups, product teams, and enterprise companies."
};

export default function BlogTechPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-6 px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-4xl font-bold text-ink">What to Wear to a Tech Interview</h1>
      <h2 className="text-2xl font-semibold text-slate-800">How to Choose an Interview Outfit</h2>
      <p className="text-slate-700">
        Tech interview outfit decisions are often confusing because company cultures vary widely. A
        fintech enterprise and an early-stage startup can have completely different norms. Instead of
        guessing, aim for structured business casual as the default, then adjust one level up or down
        based on recruiter guidance and team signals.
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
        clothing details.
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
      </p>
      <p className="text-slate-700">
        One practical rule for tech: do not dress below the interviewer panel average. If engineering
        managers appear in collared shirts and clean layers, mirror that level or slightly above. If
        leadership is present, elevate your look. This helps signal that you understand context and can
        calibrate professionally.
      </p>
      <p className="text-slate-700">
        Common mistakes in tech interviews include over-casual hoodies, wrinkled shirts, worn sneakers,
        and ignoring grooming. Another common issue is formal mismatch: full suit in a clearly relaxed
        startup panel can feel disconnected. The best strategy is polished business casual with optional
        formal upgrades.
      </p>
      <p className="text-slate-700">
        In summary, a strong tech interview outfit is clean, modern, and practical. Keep the silhouette
        sharp, the palette controlled, and the comfort high. That balance supports confidence during
        system design, coding, and behavioral rounds.
      </p>
    </main>
  );
}
