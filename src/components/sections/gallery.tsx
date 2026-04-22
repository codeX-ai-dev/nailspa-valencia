"use client";

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/language-context';

const galleryImages = [
  {
    src: '/images/gallery-1.jpg',
    alt: 'Manicura minimalista con puntos azules',
  },
  {
    src: '/images/gallery-2.jpg',
    alt: 'Manicura rosa y fucsia',
  },
  {
    src: '/images/gallery-3.jpg',
    alt: 'Manicura azul brillante',
  },
  {
    src: '/images/gallery-4.jpg',
    alt: 'Manicura con brillantes',
  },
  {
    src: '/images/gallery-5.jpg',
    alt: 'Manicura rosa con diseño ondulado',
  },
  {
    src: '/images/gallery-6.jpg',
    alt: 'Manicura rosa coral',
  },
  {
    src: '/images/gallery-7.jpg',
    alt: 'Manicura negra con glitter plateado',
  },
  {
    src: '/images/gallery-8.png',
    alt: 'Nail Spa Work 8',
  },
];

const GallerySection = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = useCallback((index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  }, []);

  return (
    <>
      <section id="gallery" className="py-20 bg-[#F2ECE4]/20">
        <div className="container mx-auto px-4 max-w-[1440px]">
          <div className="text-center mb-12">
            <span className="text-[#C19A6B] uppercase tracking-[0.2em] text-[0.875rem] font-semibold font-sans">
              {t("gallery_subtitle")}
            </span>
            <h2 className="text-[3rem] font-display font-normal text-[#1A1A1A] mt-2 leading-[1.2]">
              {t("gallery_title")}
            </h2>
          </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square relative group overflow-hidden cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-[0.85]"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>

        {/* Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-[200] bg-black/80 flex items-center justify-center p-4 animate-[fadeIn_150ms_ease-out]"
            onClick={closeModal}
          >
            <style>{`@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`}</style>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white/70 hover:text-white text-4xl font-light transition-colors z-[201]"
            >
              &times;
            </button>
            <div
              className="relative max-w-3xl max-h-[85vh] w-full aspect-square"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </div>
        )}
    </>
  );
};

export default GallerySection;
