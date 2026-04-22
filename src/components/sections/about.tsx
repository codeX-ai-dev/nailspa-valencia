"use client";
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

const carouselImages = [
  {
    src: "/images/about-salon.png",
    alt: "Nail Spa Valencia Interior"
  },
  {
    src: "/images/about-station.png",
    alt: "Nail Spa Valencia Estación de trabajo"
  },
  {
    src: "/images/about-opi.png",
    alt: "Nail Spa Valencia OPI Productos"
  }
];

export default function AboutSection() {
  const { t } = useLanguage();
  const listRef = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [resetKey, setResetKey] = useState(0);

  const benefits = [
    t("about_benefit_1"),
    t("about_benefit_2"),
    t("about_benefit_3"),
    t("about_benefit_4"),
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  }, []);

  const prevSlideManual = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    setResetKey((k) => k + 1);
  }, []);

  const nextSlideManual = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    setResetKey((k) => k + 1);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    setResetKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, resetKey]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (listRef.current) observer.observe(listRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      className="py-20 md:py-32 bg-[#F2ECE4]/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
            {/* Left Column: Image Carousel with Decorative Frame */}
            <div className="relative">
              <div className="relative z-10 aspect-[4/3] overflow-hidden bg-muted">
                {carouselImages.map((img, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out"
                    style={{ opacity: currentSlide === index ? 1 : 0 }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))}
                {/* Flechas */}
                <button
                  onClick={prevSlideManual}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                  style={{ opacity: 0.4 }}
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                <button
                  onClick={nextSlideManual}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 transition-colors"
                  style={{ opacity: 0.4 }}
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
                {/* Indicadores */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-white w-4' : 'bg-white/50'}`}
                      aria-label={`Imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              {/* Decorative Offset Border Frame */}
              <div 
                className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border border-[#1A1A1A]/20 -z-0"
                aria-hidden="true"
              ></div>
            </div>

          {/* Right Column: Text Content */}
          <div className="space-y-6 relative z-30">
            <div className="space-y-2">
              <span className="text-[#C19A6B] uppercase tracking-widest text-sm font-semibold">
                {t("about_subtitle")}
              </span>
              <h2 className="text-4xl md:text-5xl font-display leading-tight text-[#1A1A1A]">
                &quot;{t("about_title_1")} <br /> {t("about_title_2")} <span className="italic text-[#1A1A1A]/80 font-light">{t("about_title_3")}</span>&quot;
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-[#71717A] text-lg leading-relaxed font-light">
                {t("about_p1")}
              </p>
              <p className="text-[#71717A] text-lg leading-relaxed font-light">
                {t("about_p2")}
              </p>
            </div>

            {/* Service Benefits List - Animated */}
            <ul ref={listRef} className="space-y-4 pt-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 transition-all duration-700 ease-out"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-30px)',
                    transitionDelay: `${index * 200}ms`,
                  }}
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C19A6B]/20 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-[#C19A6B]" strokeWidth={3} />
                  </span>
                  <span className="text-[#1A1A1A]/80 font-medium text-sm md:text-base">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
