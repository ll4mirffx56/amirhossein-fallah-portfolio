"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import { SectionMark, Pill } from "./ui";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20 border-t border-line">
      <Reveal>
        <SectionMark label={t.skills.label} />
      </Reveal>
      <div className="grid sm:grid-cols-3 gap-8">
        {t.skills.groups.map((group, i) => (
          <Reveal key={group.name} delay={i * 100}>
            <h3 className="text-[15px] font-semibold mb-4">{group.name}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
