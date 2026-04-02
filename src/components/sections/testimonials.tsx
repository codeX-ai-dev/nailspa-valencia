"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

const testimonialsData = [
  {
    quote: {
      es: '"Fue mi primera vez en este salón. En nuestra zona es difícil encontrar un buen salón, pero por fin lo encontré. Recomiendo este salón, todo está muy limpio y cuidado, el ambiente es agradable y con buena música. Quiero destacar especialmente a la manicurista Daría! Es muy profesional, cuidadosa, amable y hace su trabajo con mucho detalle."',
      en: '"It was my first time at this salon. In our area it\'s hard to find a good salon, but I finally found one. I recommend this salon, everything is very clean and well-kept, the atmosphere is pleasant with good music. I especially want to highlight the manicurist Daria! She is very professional, careful, kind and does her work with great detail."',
    },
    author: "Elena",
    rating: 5,
  },
  {
    quote: {
      es: '"Increíble atención y resultados. He probado muchos lugares en Valencia y este es definitivamente mi favorito. Los productos son de primera y el acabado es perfecto."',
      en: '"Incredible attention and results. I\'ve tried many places in Valencia and this is definitely my favorite. The products are top-notch and the finish is perfect."',
    },
    author: "Gabriela",
    rating: 5,
  },
  {
    quote: {
      es: '"El mejor ritual de belleza que me he hecho. El masaje de pies es obligatorio si vienes. Salí renovada y con las uñas más bonitas que nunca."',
      en: '"The best beauty ritual I\'ve ever had. The foot massage is a must if you come. I left feeling renewed with the most beautiful nails ever."',
    },
    author: "Marta",
    rating: 5,
  }
];

export default function Testimonials() {
  const { t, locale } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="bg-[#262626] py-14 md:py-20 relative overflow-hidden selection:bg-accent selection:text-white border-none">
      {/* Background Decorative Quotes */}
      <div className="absolute top-10 left-10 opacity-10 pointer-events-none">
        <Quote size={80} className="text-white transform -scale-x-100" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 pointer-events-none">
        <Quote size={80} className="text-white" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display text-white mb-4">
            {t("test_title")}
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative px-12">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/50 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/20 text-white/50 hover:text-white hover:border-white/50 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>

          <div className="text-center transition-opacity duration-500">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(testimonialsData[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={16} className="fill-accent text-accent" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-white/90 text-lg md:text-2xl font-light italic leading-relaxed mb-10 max-w-3xl mx-auto font-sans">
              {testimonialsData[currentIndex].quote[locale]}
            </p>

            {/* Author */}
            <div className="space-y-1">
              <h4 className="text-white font-serif text-xl tracking-wide">
                {testimonialsData[currentIndex].author}
              </h4>
              <p className="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
                {t("test_role")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-12">
        {testimonialsData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-accent w-6' : 'bg-white/20'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
