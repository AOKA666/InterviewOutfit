"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import outfitData from "@/data/outfit-data.json";
import generatedImages from "@/data/generated-outfit-images.json";
import { outfitImages, seasonOffsets } from "@/data/outfit-images";

type Gender = "female" | "male";
type Industry = "tech" | "finance" | "marketing" | "startup" | "general";
type Formality = "business-formal" | "business-casual" | "casual";
type Season = "spring" | "summer" | "autumn" | "winter";

type Outfit = {
  top: string;
  bottom: string;
  shoes: string;
  accessories: string;
  style: string;
  explanation: string;
};

const seasonHint: Record<Season, string> = {
  spring: "Use adaptable layers that work across cool mornings and warmer afternoons.",
  summer: "Lean on breathable fabrics and lighter footwear to stay polished without overheating.",
  autumn: "Introduce texture and light outerwear so the outfit feels sharper and more seasonal.",
  winter: "Build warmth into the outfit with refined knit layers and a tailored outer layer."
};

const seasonAdjustments: Record<
  Season,
  {
    top: string;
    bottom: string;
    shoes: string;
    accessories: string;
    explanation: string;
  }
> = {
  spring: {
    top: "Switch to lighter layers such as a breathable blouse, crisp shirt, or thin knit under a blazer",
    bottom: "Choose ankle trousers, cropped tailored pants, or lighter-weight suiting fabrics",
    shoes: "Use loafers, flats, or polished derbies that work in changing weather",
    accessories: "Add a lightweight trench, simple tote, or fine cardigan for commute flexibility",
    explanation:
      "Spring interview outfits should look structured but adaptable. Light layers help you stay polished when temperatures shift during the day."
  },
  summer: {
    top: "Favor breathable cotton, linen-blend, or lightweight shirts and blouses with minimal layering",
    bottom: "Use lightweight trousers, airy skirts, or unlined tailored pieces that still hold shape",
    shoes: "Choose breathable loafers, flats, or low-profile dress shoes instead of heavy footwear",
    accessories: "Keep accessories minimal and practical, with lighter bags and less visible layering",
    explanation:
      "Summer interview outfits need to reduce heat without looking casual. Breathable fabrics and simpler layering keep the outfit sharp."
  },
  autumn: {
    top: "Add texture with fine knits, structured shirts, or layered blazers in richer seasonal tones",
    bottom: "Use darker tailored trousers, heavier chinos, or more substantial skirt fabrics",
    shoes: "Loafers, derbies, boots, or closed-toe shoes work well when weather turns cooler",
    accessories: "Add a refined coat, belt, or knit layer that makes the outfit feel intentional",
    explanation:
      "Autumn interview outfits should look slightly richer and more grounded. Texture and sharper layers make the recommendation feel more complete."
  },
  winter: {
    top: "Use warmer base layers such as fine knits, thicker shirts, or blouses that layer cleanly under outerwear",
    bottom: "Pick wool trousers, heavier tailoring, or winter-ready fabrics that still look neat indoors",
    shoes: "Choose polished closed-toe shoes or boots with enough structure for cold weather",
    accessories: "Add a tailored coat, tights, scarf, or understated cold-weather layer that stays professional",
    explanation:
      "Winter interview outfits need real warmth built into the look, not added as an afterthought. The outfit should stay formal, clean, and comfortable from commute to interview room."
  }
};

function buildKey(gender: Gender, industry: Industry, formality: Formality) {
  return `${gender}-${industry}-${formality}`;
}

function buildPreviewImages(
  gender: Gender,
  industry: Industry,
  formality: Formality,
  season: Season
) {
  const fullKey = `${gender}-${industry}-${formality}-${season}`;
  const generated = (generatedImages as Record<string, string[]>)[fullKey];
  if (generated?.length) {
    return generated;
  }

  const baseKey = buildKey(gender, industry, formality) as keyof typeof outfitImages;
  const matchedImages = outfitImages[baseKey];

  if (!matchedImages?.length) {
    return [];
  }

  const offset = seasonOffsets[season] % matchedImages.length;

  return Array.from({ length: matchedImages.length }, (_, idx) => {
    const imageIndex = (idx + offset) % matchedImages.length;
    return matchedImages[imageIndex];
  });
}

function adaptOutfitForSeason(outfit: Outfit, season: Season): Outfit {
  const seasonal = seasonAdjustments[season];

  return {
    ...outfit,
    top: `${outfit.top}; ${seasonal.top.toLowerCase()}`,
    bottom: `${outfit.bottom}; ${seasonal.bottom.toLowerCase()}`,
    shoes: `${outfit.shoes}; ${seasonal.shoes.toLowerCase()}`,
    accessories: `${outfit.accessories}; ${seasonal.accessories.toLowerCase()}`,
    explanation: `${outfit.explanation} ${seasonal.explanation}`
  };
}

export default function OutfitGenerator() {
  const [gender, setGender] = useState<Gender>("female");
  const [industry, setIndustry] = useState<Industry>("tech");
  const [formality, setFormality] = useState<Formality>("business-casual");
  const [season, setSeason] = useState<Season>("spring");
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement | null>(null);
  const resultRef = useRef<HTMLDivElement | null>(null);

  const result = useMemo(() => {
    const key = buildKey(gender, industry, formality);
    return (outfitData as Record<string, Outfit>)[key];
  }, [gender, industry, formality]);

  const previewImages = useMemo(
    () => buildPreviewImages(gender, industry, formality, season),
    [gender, industry, formality, season]
  );

  const fallback: Outfit = {
    top: "Neutral button-down shirt",
    bottom: "Tailored trousers",
    shoes: "Leather loafers",
    accessories: "Simple watch",
    style: "Business Casual",
    explanation:
      "When in doubt, business casual is usually the safest interview dress code."
  };

  const outfit = adaptOutfitForSeason(result ?? fallback, season);

  useEffect(() => {
    if (submitted && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [submitted, gender, industry, formality, season]);

  function handleRetry() {
    setSubmitted(false);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <section id="generator" className="space-y-8">
      <div ref={formRef} className="surface rounded-[32px] p-6 md:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-coral">Generator</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-ink md:text-3xl">Interview Outfit Tool</h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-600">
              Select your interview context and get a practical outfit recommendation.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-[22px] bg-white/72 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">What it uses</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">Industry, dress code, season, and interview style.</p>
            </div>
            <div className="rounded-[22px] bg-white/72 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">What it returns</p>
              <p className="mt-2 text-sm leading-6 text-slate-700">A safer outfit formula with reasoning and seasonal adjustments.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Gender</span>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value as Gender)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-cyan focus:ring-4 focus:ring-cyan/10"
            >
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Industry</span>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value as Industry)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-cyan focus:ring-4 focus:ring-cyan/10"
            >
              <option value="tech">Tech</option>
              <option value="finance">Finance</option>
              <option value="marketing">Marketing</option>
              <option value="startup">Startup</option>
              <option value="general">General</option>
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Formality</span>
            <select
              value={formality}
              onChange={(e) => setFormality(e.target.value as Formality)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-cyan focus:ring-4 focus:ring-cyan/10"
            >
              <option value="business-formal">Business Formal</option>
              <option value="business-casual">Business Casual</option>
              <option value="casual">Casual</option>
            </select>
          </label>

          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Season</span>
            <select
              value={season}
              onChange={(e) => setSeason(e.target.value as Season)}
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-800 shadow-sm outline-none transition focus:border-cyan focus:ring-4 focus:ring-cyan/10"
            >
              <option value="spring">Spring</option>
              <option value="summer">Summer</option>
              <option value="autumn">Autumn</option>
              <option value="winter">Winter</option>
            </select>
          </label>
        </div>

        <button
          onClick={() => setSubmitted(true)}
          className="mt-6 rounded-2xl bg-ink px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(15,23,42,0.16)] transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Generate Outfit
        </button>
      </div>

      {submitted && (
        <div ref={resultRef} className="surface space-y-6 rounded-[32px] p-6 md:p-8 lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-[-0.04em] text-ink md:text-3xl">Recommended Interview Outfit</h2>
              <p className="mt-2 text-[15px] leading-7 text-slate-600">Use the visual references and outfit breakdown together, not separately.</p>
            </div>
            <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              {outfit.style}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {previewImages.map((src, idx) => (
              <div key={`${src}-${idx}`} className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100 shadow-sm">
                <div className="aspect-[9/16]">
                  <Image
                    src={src}
                    alt={`${gender} ${outfit.style} ${industry} interview outfit example ${idx + 1} for ${season}`}
                    width={1080}
                    height={1920}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <p className="rounded-[22px] bg-white/72 p-4 text-slate-700 shadow-sm">
              <strong>Top:</strong> {outfit.top}
            </p>
            <p className="rounded-[22px] bg-white/72 p-4 text-slate-700 shadow-sm">
              <strong>Bottom:</strong> {outfit.bottom}
            </p>
            <p className="rounded-[22px] bg-white/72 p-4 text-slate-700 shadow-sm">
              <strong>Shoes:</strong> {outfit.shoes}
            </p>
            <p className="rounded-[22px] bg-white/72 p-4 text-slate-700 shadow-sm">
              <strong>Accessories:</strong> {outfit.accessories}
            </p>
            <p className="rounded-[22px] bg-white/72 p-4 text-slate-700 shadow-sm">
              <strong>Style:</strong> {outfit.style}
            </p>
            <p className="rounded-[22px] bg-white/72 p-4 text-slate-700 shadow-sm">
              <strong>Season Tip:</strong> {seasonHint[season]}
            </p>
          </div>

          <p className="rounded-[24px] bg-[#eef8ff] p-5 text-[15px] leading-7 text-slate-700">{outfit.explanation}</p>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleRetry}
              className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Retry
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
