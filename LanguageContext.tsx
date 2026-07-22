"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { content, Lang } from "./content";

type Translation = (typeof content)[keyof typeof content];

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translation;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Lang>("fa");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = content[lang].dir;
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t: content[lang] as Translation,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}