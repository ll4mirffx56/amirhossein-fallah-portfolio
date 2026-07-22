"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import { SectionMark, Pill } from "./ui";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const { t, lang } = useLanguage();

  const labels =
    lang === "fa"
      ? { problem: "مشکل", solution: "راه‌حل", result: "نتیجه" }
      : { problem: "Problem", solution: "Solution", result: "Result" };

  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-line">
      <Reveal>
        <SectionMark label={t.projects.label} />
      </Reveal>
      <div className="space-y-6">
        {t.projects.items.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <div className="group border border-line rounded-2xl p-6 sm:p-8 bg-white/60 hover:border-signal/40 transition-colors">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <span className="font-mono text-[11px] text-muted">{p.tag}</span>
                  <h3 className="text-[19px] sm:text-[21px] font-bold mt-1">{p.title}</h3>
                </div>
                <ExternalLink
                  size={18}
                  className="text-muted group-hover:text-signal transition-colors shrink-0 mt-1"
                />
              </div>
              <div className="grid sm:grid-cols-3 gap-5 mt-5 text-[14px] leading-7 text-ink/80">
                <div>
                  <p className="text-[12px] text-muted mb-1">{labels.problem}</p>
                  <p>{p.problem}</p>
                </div>
                <div>
                  <p className="text-[12px] text-muted mb-1">{labels.solution}</p>
                  <p>{p.solution}</p>
                </div>
                <div>
                  <p className="text-[12px] text-muted mb-1">{labels.result}</p>
                  <p>{p.result}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                {p.stack.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <p className="text-[13px] text-muted mt-5">{t.projects.note}</p>
      </Reveal>
    </section>
  );
}
