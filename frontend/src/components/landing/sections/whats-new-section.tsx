// WhatsNewSection.tsx (full updated file)
"use client";

import MagicBento, { type BentoCardProps } from "@/components/ui/magic-bento";
import { cn } from "@/lib/utils";

import { Section } from "../section";

const COLOR = "#0a0a0a";

// Map labels to their TikTok effect URLs
const getEffectLink = (label: string): string => {
  const links: Record<string, string> = {
    "🧭 Sourcing": "https://www.tiktok.com/effect/CREMARKET-Sourcing-4044235805",
    "🔎 Underwriting": "https://www.tiktok.com/effect/CREMARKET-Underwriting-4040000245",
    "💼 Offer": "https://www.tiktok.com/effect/CREMARKET-Offer-4041042734",
    "🏛️ Capital": "https://www.tiktok.com/effect/CREMARKET-Capital-4044615789",
    "🏗️ Build": "https://www.tiktok.com/effect/CREMARKET-Build-4041043310",
    "🔑 Key": "https://www.tiktok.com/effect/CREMARKET-Key-4040046357",
    "📈 Story": "https://www.tiktok.com/effect/CREMARKET-Story-4041042071",
  };
  return links[label] || "#";
};

// Simple description text (no anchor inside anymore)
const createDescription = (label: string, text: string) => (
  <>
    <p>{text}</p>
    <span className="inline-flex items-center gap-1 mt-2 text-blue-400">
      🎵 Try AR Effect →
    </span>
  </>
);

const features: BentoCardProps[] = [
  {
    color: COLOR,
    label: "🧭 Sourcing",
    title: "Where is it at?",
    description: createDescription("🧭 Sourcing", "The new CRE address system is powered by what3words.com. Keep it simple. Use #CREsourcing and tag @CREMARKET."),
    href: getEffectLink("🧭 Sourcing"),
  },
  {
    color: COLOR,
    label: "🔎 Underwriting",
    title: "Is it a good deal?",
    description: createDescription("🔎 Underwriting", "Analyze numbers, video OM created replacing boring PDFs with engaging TikTok content. Use #CREunderwriting and tag @CREMARKET."),
    href: getEffectLink("🔎 Underwriting"),
  },
  {
    color: COLOR,
    label: "💼 Offer",
    title: "I want in!",
    description: createDescription("💼 Offer", "Post the offer, share the video, and get feedback from the community to move the deal forward. Use #CREoffer and tag @CREMARKET."),
    href: getEffectLink("💼 Offer"),
  },
  {
    color: COLOR,
    label: "🏛️ Capital",
    title: "Got funding?",
    description: createDescription("🏛️ Capital", "Celebrate the win, share the news, and attract more investors with TikTok content. Use #CREcapital and tag @CREMARKET."),
    href: getEffectLink("🏛️ Capital"),
  },
  {
    color: COLOR,
    label: "🏗️ Build",
    title: "Construction & Development",
    description: createDescription("🏗️ Build", "Discuss development, construction, and value-add strategies with CRE builders, contractors, and service providers. Use #CREbuild and tag @CREMARKET."),
    href: getEffectLink("🏗️ Build"),
  },
  {
    color: COLOR,
    label: "🔑 Key",
    title: "Lease & Operations",
    description: createDescription("🔑 Key", "Talk about lease signing, property management, and operations with CRE operators, property managers, and tenants. Use #CREcontrol and tag @CREMARKET."),
    href: getEffectLink("🔑 Key"),
  },
  {
    color: COLOR,
    label: "📈 Story",
    title: "Share the Journey",
    description: createDescription("📈 Story", "What happened? Share the story behind the deal, the lessons learned, and the journey. Use #CREstory and tag @CREMARKET."),
    href: getEffectLink("📈 Story"),
  },
];

export function WhatsNewSection({ className }: { className?: string }) {
  return (
    <Section
      className={cn("", className)}
      title="CRE TikTok AR Effect Deal Flow"
      subtitle="The complete deal pipeline — from sourcing to story — powered by TikTok AR effects and community collaboration."
    >
      <div className="flex w-full items-center justify-center">
        <MagicBento data={features} />
      </div>
    </Section>
  );
}