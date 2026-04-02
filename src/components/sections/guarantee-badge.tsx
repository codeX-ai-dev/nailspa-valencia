"use client";

import { useState } from "react";
import { useLanguage } from "@/context/language-context";

export default function GuaranteeBadge() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2.5 bg-[#1A1A1A] border border-[#C19A6B] text-[#C19A6B] font-display text-xs sm:text-sm tracking-wider uppercase cursor-pointer hover:bg-[#C19A6B] hover:text-[#1A1A1A] transition-all duration-300 shadow-lg"
        style={{ animation: "guarantee-pulse 3s ease-in-out infinite" }}
      >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5 shrink-0"
          >
            <path
              fillRule="evenodd"
              d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.932 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.416 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="font-bold" style={{ fontSize: "1.25em" }}>2</span> {t("guarantee_btn")}
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-[#1A1A1A] border border-[#C19A6B]/40 max-w-md w-full p-8 sm:p-10 shadow-2xl animate-[fadeIn_0.2s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cerrar */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Icono escudo */}
            <div className="flex justify-center mb-5">
              <div className="w-14 h-14 flex items-center justify-center border border-[#C19A6B]/50 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 text-[#C19A6B]"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.932 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.416 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Título */}
            <h3 className="text-center font-display text-xl sm:text-2xl text-[#C19A6B] tracking-wider uppercase mb-6">
              {t("guarantee_title")}
            </h3>

            {/* Contenido */}
            <div className="space-y-4 text-white/80 font-sans text-sm leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t("guarantee_intro") }} />

              <div>
                <p className="text-[#C19A6B] font-display text-xs tracking-wider uppercase mb-2">{t("guarantee_covers")}</p>
                <ul className="space-y-1.5 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C19A6B] mt-0.5">—</span>
                    {t("guarantee_c1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C19A6B] mt-0.5">—</span>
                    {t("guarantee_c2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C19A6B] mt-0.5">—</span>
                    {t("guarantee_c3")}
                  </li>
                </ul>
              </div>

              <div>
                <p className="text-[#C19A6B] font-display text-xs tracking-wider uppercase mb-2">{t("guarantee_conditions")}</p>
                <ul className="space-y-1.5 text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C19A6B] mt-0.5">—</span>
                    {t("guarantee_cond1")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C19A6B] mt-0.5">—</span>
                    {t("guarantee_cond2")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C19A6B] mt-0.5">—</span>
                    {t("guarantee_cond3")}
                  </li>
                </ul>
              </div>
            </div>

            {/* Botón cerrar */}
            <button
              onClick={() => setOpen(false)}
              className="mt-8 w-full py-3 bg-[#C19A6B] text-[#1A1A1A] font-display text-xs tracking-widest uppercase hover:bg-[#d4ad7e] transition-colors cursor-pointer"
            >
              {t("guarantee_close")}
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes guarantee-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(193, 154, 107, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(193, 154, 107, 0); }
        }
      `}</style>
    </>
  );
}
