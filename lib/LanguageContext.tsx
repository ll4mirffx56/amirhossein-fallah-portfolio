"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { content, Lang } from "./content";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof content.fa;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fa");

  // Persist choice for the session only (no localStorage per environment constraints —
  // in a real deployment you may swap this for localStorage safely).
  useEffect(() => {
    document.documentElement.lang = lang === "fa" ? "fa" : "en";
    document.documentElement.dir = content[lang].dir;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
