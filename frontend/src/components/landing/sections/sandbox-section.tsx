"use client";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

import { Section } from "../section";

export function SandboxSection({ className }: { className?: string }) {
  return (
    <Section
      className={className}
      title="AI CRE Broker"
      subtitle={
        <p>
          One phone number. Every commercial real estate call gets qualified,
          matched, and turned into a live lead on social.cremarket.io.
        </p>
      }
    >
      <div className="mt-8 flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Left: Terminal */}
        <div className="w-full flex-1">
          <Terminal className="h-[360px] w-full">
            {/* Scene: Live AI CRE Broker Call */}
            <TypingAnimation>📞 Incoming Call – New Lead</TypingAnimation>

            <AnimatedSpan delay={800} className="text-zinc-400">
              Lead: "I need to lease office space in Atlanta."
            </AnimatedSpan>

            <TypingAnimation delay={1200}>
              AI CRE Broker: "Hi, this is the AI CRE Broker at CREmarket.io. Are you looking to buy, lease, or sell a commercial property today?"
            </TypingAnimation>

            <AnimatedSpan delay={2000} className="text-zinc-400">
              Lead: "Lease."
            </AnimatedSpan>

            <TypingAnimation delay={2400}>
              AI CRE Broker: "What property type and city or zip code?"
            </TypingAnimation>

            <AnimatedSpan delay={3000} className="text-zinc-400">
              Lead: "Office, 30303."
            </AnimatedSpan>

            <TypingAnimation delay={3400}>
              AI CRE Broker: "What is your budget or desired price range per square foot?"
            </TypingAnimation>

            <AnimatedSpan delay={4000} className="text-zinc-400">
              Lead: "Around $25–$30."
            </AnimatedSpan>

            <TypingAnimation delay={4400}>
              AI CRE Broker: "Thank you. I've logged your request into the CREmarket.io broker database. A qualified local broker will typically reach out within 24 hours on social.cremarket.io. May I have your full name and best phone number for follow‑up?"
            </TypingAnimation>

            <AnimatedSpan delay={5200} className="text-zinc-400">
              Lead: "John Smith, 404-555-1234."
            </AnimatedSpan>

            <TypingAnimation delay={5600}>
              AI CRE Broker: "Thank you, John. Your lead has been matched. You can view this live lead feed at social.cremarket.io/leads."
            </TypingAnimation>

            <AnimatedSpan delay={6400} className="text-blue-500">
              ✔ Lead qualified (7 questions completed)<br />
              ✔ Property type + location matched to specialist broker<br />
              ✔ Lead logged as structured JSON → broker assigned<br />
              ✔ Broker notified via daily digest (9 AM local)<br />
              ✔ Live feed updated on social.cremarket.io/leads
            </AnimatedSpan>
          </Terminal>
        </div>

        {/* Right: Description */}
        <div className="w-full flex-1 space-y-6">
          <div className="space-y-4">
            <p className="text-sm font-medium tracking-wider text-purple-400 uppercase">
              Call Agent
            </p>
            <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
              <a
                href="https://github.com/agent-infra/sandbox"
                target="_blank"
                rel="noopener noreferrer"
              >
                (404) 947-5422
              </a>
            </h2>
          </div>

          <div className="space-y-4 text-lg text-zinc-400">
            <p>
              Subscribe to social.cremarket.io to get your leads
              for{" "}
              <a
                href="https://social.cremarket.io/"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                $99 /month
              </a>{" "}.
            </p>
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-3 pt-4">
            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
              ⏱️ 20+ hours/week saved vs cold calling
            </span>
            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
              💵 $99/month vs $2k+ traditional lead gen
            </span>
            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
              🚫 No more door‑knocking or chasing dead leads
            </span>
            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
              🤖 AI qualifies leads while you sleep
            </span>
            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
              📈 1 phone number for the whole CRE market
            </span>
            <span className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300">
              🔁 Replace manual outreach with automated matching
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}