"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/language-context";

export default function LanguageSwitcher({ isScrolled = false }: { isScrolled?: boolean }) {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium uppercase tracking-wider bg-transparent border transition-colors cursor-pointer rounded-sm ${
            isScrolled
              ? "text-foreground border-black/20 hover:border-black/40"
              : "text-white border-white/20 hover:border-white/40"
          }`}
        >
          <span className="text-sm leading-none">{locale === "es" ? "🇪🇸" : "🇬🇧"}</span>
          <span>{locale === "es" ? "Idioma" : "Language"}</span>
        </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 bg-white shadow-lg border border-black/10 overflow-hidden z-50 min-w-[120px]">
          <button
            onClick={() => { setLocale("es"); setOpen(false); }}
            className={`w-full flex items-center gap-2 px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer bg-transparent border-none ${
              locale === "es" ? "text-[#C19A6B] bg-[#C19A6B]/10" : "text-[#1A1A1A] hover:bg-black/5"
            }`}
          >
            <span className="text-sm">🇪🇸</span> Español
          </button>
          <button
            onClick={() => { setLocale("en"); setOpen(false); }}
            className={`w-full flex items-center gap-2 px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer bg-transparent border-none ${
              locale === "en" ? "text-[#C19A6B] bg-[#C19A6B]/10" : "text-[#1A1A1A] hover:bg-black/5"
            }`}
          >
            <span className="text-sm">🇬🇧</span> English
          </button>
        </div>
      )}
    </div>
  );
}
