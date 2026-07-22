"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import { SectionMark } from "./ui";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20 border-t border-line">
      <Reveal>
        <SectionMark label={t.about.label} />
      </Reveal>
      <Reveal delay={80}>
        <div className="grid sm:grid-cols-5 gap-10">
          <div className="sm:col-span-3 space-y-5 text-[15.5px] leading-8 text-ink/80">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="sm:col-span-2 space-y-4">
            {t.about.values.map((v, i) => (
              <div key={i} className="border border-line rounded-xl p-4 bg-white/60">
                <span className="font-mono text-[12px] text-signal">{"{ value }"}</span>
                <p className="text-[14px] mt-1.5 leading-6 text-ink/80">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
