"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Nav() {
  const { lang, setLang, t } = useLanguage();

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#projects", label: t.nav.projects },
    { href: "#blog", label: t.nav.blog },
  ];

  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-paper/80 border-b border-line">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-bold text-[17px] tracking-tight">
          {lang === "fa" ? (
            <>
              امیرحسین<span className="text-signal">.</span>فلاح
            </>
          ) : (
            <>
              amirhossein<span className="text-signal">.</span>fallah
            </>
          )}
        </a>

        <nav className="hidden sm:flex items-center gap-7 text-[14px] text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-ink border border-line rounded-full px-4 py-1.5 hover:border-signal hover:text-signal transition-colors"
          >
            {t.nav.contact}
          </a>
          <button
            onClick={() => setLang(lang === "fa" ? "en" : "fa")}
            aria-label="Toggle language"
            className="font-mono text-[12px] border border-line rounded-full px-3 py-1.5 hover:border-signal hover:text-signal transition-colors"
          >
            {lang === "fa" ? "EN" : "FA"}
          </button>
        </nav>

        {/* Mobile: just the language toggle + contact, full nav collapses to keep it simple */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="#contact"
            className="text-ink border border-line rounded-full px-3 py-1.5 text-[13px] hover:border-signal hover:text-signal transition-colors"
          >
            {t.nav.contact}
          </a>
          <button
            onClick={() => setLang(lang === "fa" ? "en" : "fa")}
            aria-label="Toggle language"
            className="font-mono text-[12px] border border-line rounded-full px-3 py-1.5 hover:border-signal hover:text-signal transition-colors"
          >
            {lang === "fa" ? "EN" : "FA"}
          </button>
        </div>
      </div>
    </header>
  );
}
