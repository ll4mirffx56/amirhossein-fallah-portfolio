"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-line">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-3 text-[13px] text-muted">
        <span>© {new Date().getFullYear()} {t.footer.rights}</span>
        <span className="font-mono">{t.footer.builtWith}</span>
      </div>
    </footer>
  );
}
