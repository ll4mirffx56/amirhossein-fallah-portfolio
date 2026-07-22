"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const { lang, t } = useLanguage();
  const Arrow = lang === "fa" ? ArrowUpLeft : ArrowUpRight;

  return (
    <section id="home" className="max-w-5xl mx-auto px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
      {/* Minimal placeholder avatar: initials monogram, no photo */}
      <Reveal>
        <div className="w-14 h-14 rounded-2xl bg-ink text-paper flex items-center justify-center font-mono text-[15px] mb-8">
          {t.hero.initials}
        </div>
      </Reveal>

      <Reveal delay={40}>
        <span className="inline-block font-mono text-[12px] tracking-widest text-muted mb-5">
          {t.hero.eyebrow}
        </span>
      </Reveal>

      <Reveal delay={100}>
        <h1 className="text-[34px] sm:text-[56px] leading-[1.15] font-extrabold tracking-tight max-w-3xl">
          {t.hero.title1}
          <br />
          <span className="text-signal">{t.hero.titleHighlight}</span>
        </h1>
      </Reveal>

      <Reveal delay={180}>
        <p className="mt-6 text-[16px] sm:text-[18px] text-muted max-w-xl leading-relaxed">
          {t.hero.subtitle}
        </p>
      </Reveal>

      <Reveal delay={260}>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-ink text-paper rounded-full px-6 py-3 text-[14px] font-medium hover:bg-signal transition-colors"
          >
            {t.hero.ctaPrimary}
            <Arrow size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-line rounded-full px-6 py-3 text-[14px] font-medium hover:border-signal hover:text-signal transition-colors"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </Reveal>

      <Reveal delay={340} className="mt-10">
        <TerminalStatus text={t.hero.terminal} />
      </Reveal>
    </section>
  );
}

function TerminalStatus({ text }: { text: string }) {
  return (
    <div
      className="inline-flex items-center gap-2 font-mono text-[12.5px] sm:text-sm text-muted bg-white border border-line rounded-lg px-3 py-2"
      dir="ltr"
    >
      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
      <span>
        {text}
        <span className="inline-block w-[7px] h-[14px] bg-ink ml-1 align-middle animate-blink" />
      </span>
    </div>
  );
}
