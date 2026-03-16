import type { Metadata } from "next";
import OutfitGenerator from "@/components/OutfitGenerator";

export const metadata: Metadata = {
  title: "Interview Outfit Generator | Find the Perfect Interview Look",
  description:
    "Use our interview outfit generator to find the best outfit for your job interview based on industry and dress code."
};

export default function GeneratorPage() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-10 px-4 py-12 md:px-6 md:py-16">
      <section className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-sm md:p-12">
        <h1 className="text-4xl font-bold leading-tight text-ink md:text-5xl">
          Interview Outfit Generator
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Find the perfect outfit for your job interview in seconds.
        </p>
        <a
          href="#generator"
          className="mt-7 inline-block rounded-xl bg-coral px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
        >
          Try the Generator
        </a>
      </section>

      <OutfitGenerator />

      <section className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-3xl font-semibold text-ink">How to Choose an Interview Outfit</h2>
        <h3 className="text-xl font-semibold text-slate-800">
          What to Wear to a Job Interview
        </h3>
        <p className="text-slate-700">
          Choosing an interview outfit is not only about fashion. It is about showing respect for
          the opportunity, understanding the company culture, and making it easy for the interviewer
          to focus on your skills. Candidates often search for phrases like interview outfit women,
          interview outfit men, business casual interview outfit, and what to wear to an interview
          because they want practical, low-risk guidance. The best strategy is to use a framework:
          start with the role and industry, match the expected formality, then adapt for season and
          comfort. When you do this, your clothing supports your message instead of distracting from
          it.
        </p>
        <p className="text-slate-700">
          A strong interview outfit usually has three qualities: clean lines, proper fit, and
          consistency. Clean lines mean your top and bottom are structured and not wrinkled. Proper
          fit means nothing is overly tight, baggy, or hard to move in. Consistency means your shoes,
          accessories, and bag follow the same level of formality. For example, if you wear a blazer
          and tailored trousers, pair them with polished loafers or oxfords rather than athletic
          sneakers. If your outfit is business casual, keep the same logic with slightly softer
          pieces: chinos, knit tops, blouses, and simple leather shoes. This consistency creates a
          composed first impression.
        </p>
        <p className="text-slate-700">
          Industry matters. Finance, law, and consulting usually favor business formal looks. That
          can include a suit, dress shirt or blouse, conservative shoes, and minimal accessories.
          Tech and startup environments often accept business casual, and in some companies a polished
          casual look is acceptable for technical interviews. Marketing sits in the middle: creative
          but still professional. If you are unsure, business casual is usually the safest default.
          It communicates seriousness without appearing rigid. A simple formula is blazer or smart
          shirt, tailored pants, and clean leather shoes. If the company website, LinkedIn team
          photos, or recruiter notes suggest a more formal style, elevate your outfit one level.
        </p>
        <p className="text-slate-700">
          Season should change materials, not standards. In summer, choose breathable fabrics such as
          cotton blends and lighter layers, but keep silhouettes structured. In winter, add warmth
          through coats, fine knits, and tights while maintaining neat lines. Spring and autumn often
          require adaptable layers because the weather shifts during commuting hours. A lightweight
          trench, cardigan, or unstructured blazer can help. Avoid pieces that look overly seasonal
          in a distracting way, such as loud holiday prints or beach-focused fabrics. The goal is to
          stay comfortable enough to focus on conversation while preserving a professional look.
        </p>
        <p className="text-slate-700">
          Colors are another common concern. Neutral palettes remain the most reliable for interviews:
          navy, charcoal, black, white, soft blue, and earth tones. These colors photograph well,
          pair easily, and keep attention on your communication. Accent colors are fine in moderation,
          such as a muted tie, scarf, or blouse detail, but avoid high-saturation combinations that
          dominate the room. Patterns should also be subtle. Fine stripes or small checks can work,
          while very bold patterns may distract. For video interviews, test your outfit on camera to
          ensure contrast and lighting look balanced.
        </p>
        <p className="text-slate-700">
          Footwear often decides whether an outfit looks complete. Shoes should be clean, in good
          condition, and appropriate to the formality level. Loafers, oxfords, derbies, simple flats,
          and modest heels are all common interview options. Even in casual settings, avoid worn gym
          shoes unless the company clearly communicates a very relaxed culture. Accessories should be
          minimal and intentional. A watch, simple earrings, or a slim belt can finish the outfit.
          Over-accessorizing, strong perfume, or noisy jewelry can shift attention away from your
          answers. The right finishing touches should be almost invisible in effect: polished but not
          loud.
        </p>
        <p className="text-slate-700">
          Common mistakes are predictable and avoidable. The first is dressing significantly below the
          company norm. The second is choosing brand-new items that you have never worn, which can
          cause discomfort and awkward adjustments during the interview. The third is ignoring
          practical details: wrinkled shirts, visible lint, missing buttons, scuffed shoes, or an
          overloaded bag. Another frequent mistake is over-correcting with extremely formal clothing
          in a clearly casual environment. Being one level more formal than average is usually safe,
          but three levels above can look misaligned. Finally, some candidates forget movement: sit,
          stand, and walk in your outfit beforehand to confirm comfort and confidence.
        </p>
        <p className="text-slate-700">
          If you want a fast decision method, use this checklist. First, identify the expected dress
          code from recruiter guidance and company signals. Second, choose one base formula by
          industry: formal, business casual, or casual. Third, adapt fabric weight for season.
          Fourth, prepare shoes and accessories that match the same formality level. Fifth, do a final
          quality check the night before. This process takes stress out of interview preparation and
          gives you a repeatable standard for future opportunities. A good interview outfit does not
          need to be expensive. It only needs to be neat, coherent, and aligned with the role.
        </p>
        <p className="text-slate-700">
          The purpose of an interview outfit generator is to turn this strategy into quick action.
          Instead of reading dozens of conflicting posts, you enter your gender preference, industry,
          formality target, and season, then receive a practical outfit recommendation with a short
          explanation. This saves time and reduces second-guessing. You can still personalize details,
          but the structure is already handled. For most candidates, that clarity is the difference
          between feeling anxious and feeling prepared. Dress intentionally, keep things simple, and
          let your experience lead the conversation.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-semibold text-ink">FAQ</h2>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            What is the best outfit for a job interview?
          </h3>
          <p className="mt-1 text-slate-700">
            A business casual outfit is usually the safest option for most interviews.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Can I wear jeans to an interview?</h3>
          <p className="mt-1 text-slate-700">
            In some industries like tech startups, clean dark jeans may be acceptable.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-800">Should I wear a suit to an interview?</h3>
          <p className="mt-1 text-slate-700">
            For finance or consulting interviews, a suit is recommended.
          </p>
        </div>
      </section>
    </main>
  );
}
