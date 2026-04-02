"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Copy, Check } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import LanguageSwitcher from "@/components/language-switcher";

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workModalOpen, setWorkModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("iustinaenea35@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav_servicios"), href: "#services" },
    { name: t("nav_nosotros"), href: "#about" },
    { name: t("nav_testimonios"), href: "#testimonials" },
    { name: t("nav_contacto"), href: "#footer" },
  ];

  return (
    <>
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 py-4 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border py-3"
          : "bg-transparent border-b border-transparent"
      }`}
    >
        <div className="mx-auto px-3 md:pl-6 md:pr-4 flex justify-between items-center max-w-[1280px]">
            {/* Logo */}
              <a
                href="/"
                className={`text-lg lg:text-2xl font-serif tracking-[0.15em] lg:tracking-[0.2em] font-bold transition-colors cursor-pointer uppercase whitespace-nowrap flex-shrink-0 md:mr-8 lg:mr-14 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                NAIL SPA <span className="text-accent font-light">VALENCIA</span>
              </a>

          {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3 lg:space-x-5 xl:space-x-7 flex-shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-[12px] lg:text-[13px] font-medium transition-colors uppercase tracking-wider cursor-pointer whitespace-nowrap ${
                    isScrolled
                      ? "text-foreground hover:text-accent"
                      : "text-white hover:text-accent"
                  }`}
                >
                  {link.name}
                </a>
                ))}
                  <button
                    onClick={() => setWorkModalOpen(true)}
                    className={`text-[12px] lg:text-[13px] font-medium transition-colors uppercase tracking-wider cursor-pointer bg-transparent border-none whitespace-nowrap ${
                      isScrolled
                        ? "text-foreground hover:text-accent"
                        : "text-white hover:text-accent"
                    }`}
                  >
                    {t("nav_trabaja")}
                  </button>
                  <LanguageSwitcher isScrolled={isScrolled} />
                  <a
                    href="https://www.fresha.com/es/a/nail-spa-valencia-calle-puerto-rico-nr-50-djmoo8wm/all-offer?menu=true&pId=167036"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs lg:text-sm font-semibold transition-all hover:opacity-90 active:scale-[0.98] border min-h-[36px] py-2 px-4 lg:px-6 rounded-none uppercase tracking-wider ${
                      isScrolled
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-white text-black border-white"
                    }`}
                  >
                  {t("nav_reservar")}
                  </a>
            </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="p-1 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={isScrolled ? "text-foreground" : "text-white"} size={28} />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-white"} size={28} />
            )}
          </button>
        </div>
      </div>

      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[100] md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-[320px] bg-white z-[101] shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-5">
          <button onClick={() => setMobileMenuOpen(false)}>
            <X className="text-foreground" size={28} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-start pt-4 space-y-7 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-foreground hover:text-accent transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
            ))}
            <button
              onClick={() => { setMobileMenuOpen(false); setWorkModalOpen(true); }}
              className="text-lg font-serif text-foreground hover:text-accent transition-colors uppercase tracking-widest bg-transparent border-none"
            >
              {t("nav_trabaja")}
            </button>
              <a
                href="https://www.fresha.com/es/a/nail-spa-valencia-calle-puerto-rico-nr-50-djmoo8wm/all-offer?menu=true&pId=167036"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-primary text-primary-foreground py-4 text-sm font-bold uppercase tracking-widest mt-4 inline-flex items-center justify-center"
              >
                {t("nav_reservar")}
              </a>
              {/* Language Switcher in mobile menu */}
              <div className="mt-2">
                <LanguageSwitcher isScrolled={true} />
              </div>
          </div>
        </div>

      {/* Work With Us Modal */}
      {workModalOpen && (
        <div className="fixed inset-0 z-[9999]" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setWorkModalOpen(false)}
          />
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-sm w-full p-8 relative text-center">
              <button
                onClick={() => setWorkModalOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 bg-transparent border-none"
              >
                <X size={20} />
              </button>
                <h3 className="font-serif text-2xl text-foreground mb-2 uppercase tracking-widest">
                  {t("work_title")}
                </h3>
                <p className="text-sm text-muted-foreground font-light mb-5">
                  {t("work_desc")}
                </p>
                <p className="text-[#C19A6B] font-medium text-lg mb-4">
                  iustinaenea35@gmail.com
                </p>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 bg-[#C19A6B] text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-[#a8845a] transition-colors border-none cursor-pointer mb-5"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? t("work_copied") : t("work_copy")}
                </button>
                <div className="flex items-center justify-center gap-6">
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=iustinaenea35@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                      <path d="M20.5 4h-17A1.5 1.5 0 002 5.5v13A1.5 1.5 0 003.5 20h17a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0020.5 4z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M2 5.5L12 13l10-7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-xs font-medium">Gmail</span>
                  </a>
                  <a
                    href="https://outlook.live.com/mail/0/deeplink/compose?to=iustinaenea35@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
                      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M22 7l-10 6L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-xs font-medium">Outlook</span>
                  </a>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
    );
  };

export default Navbar;
