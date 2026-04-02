"use client";

import React from 'react';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="bg-[#1A1A1A] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[#C19A6B] uppercase tracking-[0.3em] text-sm font-semibold block mb-2">
            {t("footer_visitanos")}
          </span>
          <div className="w-12 h-[1px] bg-[#C19A6B] mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Contact Information */}
          <div className="space-y-10">
            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 transition-colors group-hover:bg-[#C19A6B] group-hover:border-[#C19A6B]">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#C19A6B] font-semibold">
                  {t("footer_direccion")}
                </h4>
                <p className="text-white/80 leading-relaxed font-light">
                  Carrer de Puerto Rico, 50<br />
                  Russafa, 46006 Valencia
                </p>
              </div>
            </div>

              <a href="tel:+34653274615" className="flex items-start gap-6 group cursor-pointer">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 transition-colors group-hover:bg-[#C19A6B] group-hover:border-[#C19A6B]">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#C19A6B] font-semibold">
                    {t("footer_llamanos")}
                  </h4>
                <span className="text-white/80 hover:text-white transition-colors block font-light">
                  +34 653 27 46 15
                </span>
              </div>
            </a>

            <a href="https://instagram.com/nailspa_vlc" target="_blank" rel="noopener noreferrer" className="flex items-start gap-6 group cursor-pointer">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 transition-colors group-hover:bg-[#C19A6B] group-hover:border-[#C19A6B]">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#C19A6B] font-semibold">
                  {t("footer_siguenos")}
                </h4>
                <span className="text-white/80 hover:text-white transition-colors block font-light">
                  @nailspa_vlc
                </span>
              </div>
            </a>

            <div className="flex items-start gap-6 group">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 transition-colors group-hover:bg-[#C19A6B] group-hover:border-[#C19A6B]">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs uppercase tracking-[0.2em] text-[#C19A6B] font-semibold">
                  {t("footer_horario")}
                </h4>
                <p className="text-white/80 leading-relaxed font-light">
                  {t("footer_horario_1")}<br />
                  {t("footer_horario_2")}
                </p>
              </div>
            </div>
          </div>

            {/* Google Maps */}
            <div className="relative w-full max-w-lg aspect-video overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398.3939068785417!2d-0.3800771271363641!3d39.460784213270905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604920a8fe4d0f%3A0xf5043b62c6c8e268!2sNailSpa%20U%C3%B1as%20Valencia!5e0!3m2!1ses!2ses!4v1770978734076!5m2!1ses!2ses"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/logo.png"
            alt="Nail Spa Logo"
            className="w-24 h-auto opacity-80"
          />
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-[10px] md:text-xs uppercase tracking-widest text-white/40">
          <p>{t("footer_rights")}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#C19A6B] transition-colors">{t("footer_inicio")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
