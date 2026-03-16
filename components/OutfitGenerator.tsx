"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import outfitData from "@/data/outfit-data.json";

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

const imagesByGender: Record<Gender, string[]> = {
  female: [
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=80"
  ],
  male: [
    "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80"
  ]
};

const seasonHint: Record<Season, string> = {
  spring: "Add a lightweight trench or cardigan for changing temperatures.",
  summer: "Choose breathable fabrics and keep layers light.",
  autumn: "Use textured layers like knitwear and structured outerwear.",
  winter: "Prioritize warm layering with a coat that still looks tailored."
};

function buildKey(gender: Gender, industry: Industry, formality: Formality) {
  return `${gender}-${industry}-${formality}`;
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

  const fallback: Outfit = {
    top: "Neutral button-down shirt",
    bottom: "Tailored trousers",
    shoes: "Leather loafers",
    accessories: "Simple watch",
    style: "Business Casual",
    explanation:
      "When in doubt, business casual is usually the safest interview dress code."
  };

  const outfit = result ?? fallback;

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

          <div className="grid gap-4 md:grid-cols-3">
            {imagesByGender[gender].map((src, idx) => (
              <div key={src} className="overflow-hidden rounded-2xl border border-slate-200">
                <Image
                  src={src}
                  alt={`Outfit example ${idx + 1}`}
                  width={900}
                  height={1200}
                  className="h-56 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
