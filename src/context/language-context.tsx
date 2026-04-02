"use client";

import React, { createContext, useContext, useCallback, useMemo } from "react";
import { useRouter, usePathname } from "next/navigation";
import { type Locale, type TranslationKey, getTranslation } from "@/lib/translations";

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const setLocale = useCallback(
    (l: Locale) => {
      // Save in cookie (read by middleware for next visit)
      document.cookie = `locale=${l}; path=/; max-age=31536000`;
      // Replace the locale segment in the URL: /es/... → /en/...
      const newPath = pathname.replace(/^\/(es|en)/, `/${l}`);
      router.push(newPath);
    },
    [pathname, router]
  );

  const t = useCallback(
    (key: TranslationKey) => getTranslation(key, initialLocale),
    [initialLocale]
  );

  const value = useMemo(() => ({ locale: initialLocale, setLocale, t }), [initialLocale, setLocale, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
