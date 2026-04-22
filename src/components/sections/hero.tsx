"use client";

import React from 'react';
import NextImage from 'next/image';
import { useLanguage } from '@/context/language-context';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="home" 
      className="relative h-screen min-h-[600px] w-full overflow-hidden"
    >
      {/* Background Layer */}
        <div className="absolute inset-0">
          {/* Desktop image */}
          <div className="absolute inset-0 hidden md:block -scale-x-100">
            <NextImage
              src="/images/hero-desktop.png"
              alt=""
              fill
              priority
              quality={90}
              className="object-cover object-[center_70%]"
              sizes="100vw"
            />
          </div>
          {/* Mobile image */}
          <div className="absolute inset-0 md:hidden">
            <NextImage
              src="/images/hero-mobile.png"
              alt=""
              fill
              priority
              quality={90}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        {/* Subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start">
        {/* Glassmorphism Panel */}
          <div 
            className="max-w-2xl bg-black/[0.11] backdrop-blur-[1px] p-5 md:p-12 border border-white/15 shadow-none relative z-10"
            style={{
              borderRadius: '0px'
            }}
          >
            {/* Subheading */}
            <span 
              className="inline-block text-white text-xs md:text-sm tracking-[0.3em] uppercase mb-2 md:mb-4 border-b border-white/30 pb-2 font-medium font-sans"
            >
              {t("hero_subtitle")}
            </span>

            {/* Headline */}
            <h1 
              className="text-4xl md:text-7xl lg:text-8xl font-display text-white mb-4 md:mb-6 leading-[0.9] tracking-tighter"
            >
              {t("hero_title_1")} <br />
              <span className="italic font-light text-accent">{t("hero_title_2")}</span>
            </h1>

            {/* Description */}
            <p 
              className="text-white/90 text-base md:text-xl mb-5 md:mb-8 font-light max-w-md leading-relaxed font-sans"
            >
              {t("hero_desc")}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a 
                  href="https://www.fresha.com/es/a/nail-spa-valencia-calle-puerto-rico-nr-50-djmoo8wm/all-offer?menu=true&pId=167036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-white min-h-10 bg-transparent text-white md:bg-white md:text-black hover:bg-white hover:text-black md:hover:bg-white/90 active:scale-95 rounded-none text-sm md:text-base px-6 md:px-8 h-10 md:h-12 uppercase tracking-wide font-sans cursor-pointer"
                >
                  {t("hero_reservar")}
                </a>
              
              <a 
                href="#services"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-white text-white hover:bg-white hover:text-black active:scale-95 rounded-none text-sm md:text-base px-6 md:px-8 h-10 md:h-12 uppercase tracking-wide bg-transparent font-sans cursor-pointer"
              >
                {t("hero_servicios")}
              </a>
            </div>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
