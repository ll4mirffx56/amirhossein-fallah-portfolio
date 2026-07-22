"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";
import { SectionMark } from "./ui";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";

export default function Blog() {
  const { t, lang } = useLanguage();
  const Arrow = lang === "fa" ? ArrowUpLeft : ArrowUpRight;

  return (
    <section id="blog" className="max-w-5xl mx-auto px-6 py-20 border-t border-line">
      <Reveal>
        <SectionMark label={t.blog.label} />
      </Reveal>
      <div className="grid sm:grid-cols-3 gap-6">
        {t.blog.posts.map((post, i) => (
          <Reveal key={post.title} delay={i * 100}>
            <a
              href="#"
              className="block border border-line rounded-2xl p-5 h-full bg-white/60 hover:border-signal/40 transition-colors"
            >
              <h4 className="text-[15.5px] font-semibold leading-7">{post.title}</h4>
              <p className="text-[13.5px] text-muted mt-2 leading-6">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-[13px] text-signal mt-4">
                {t.blog.readMore}
                <Arrow size={14} />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
