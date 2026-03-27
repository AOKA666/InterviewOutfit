"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
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
  // Priority 1: AI-generated images from R2 (key includes season)
  const fullKey = `${gender}-${industry}-${formality}-${season}`;
  const generated = (generatedImages as Record<string, string[]>)[fullKey];
  if (generated?.length) {
    return generated;
  }

  // Priority 2: fallback to manually curated Unsplash images
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

  return (
    <section id="generator" className="space-y-8">
      <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-semibold text-ink">Interview Outfit Tool</h2>
        <p className="mt-2 text-slate-600">
          Select your interview context and get a practical outfit recommendation.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700">Gender</span>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value as Gender)}
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2"
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
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2"
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
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2"
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
              className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2"
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
          className="mt-6 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Generate Outfit
        </button>
      </div>

      {submitted && (
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-semibold text-ink">Recommended Interview Outfit</h2>

          <div className="grid gap-4 md:grid-cols-3">
            {previewImages.map((src, idx) => (
              <div key={`${src}-${idx}`} className="aspect-[9/16] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                <Image
                  src={src}
                  alt={`${gender} ${outfit.style} ${industry} interview outfit example ${idx + 1} for ${season}`}
                  width={1080}
                  height={1920}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="grid gap-4 text-slate-700 md:grid-cols-2">
            <p>
              <strong>Top:</strong> {outfit.top}
            </p>
            <p>
              <strong>Bottom:</strong> {outfit.bottom}
            </p>
            <p>
              <strong>Shoes:</strong> {outfit.shoes}
            </p>
            <p>
              <strong>Accessories:</strong> {outfit.accessories}
            </p>
            <p>
              <strong>Style:</strong> {outfit.style}
            </p>
            <p>
              <strong>Season Tip:</strong> {seasonHint[season]}
            </p>
          </div>

          <p className="rounded-xl bg-cloud p-4 text-slate-700">{outfit.explanation}</p>
        </div>
      )}
    </section>
  );
}
