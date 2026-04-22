"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useLanguage } from '@/context/language-context';

type ServiceItem = { nameKey: string; price: string; descKey: string };

const servicesDataKeys = {
  manicura: {
    titleKey: "srv_manicura" as const,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&q=80",
    items: [
      { nameKey: "srv_m1_name", price: "14€", descKey: "srv_m1_desc" },
      { nameKey: "srv_m2_name", price: "19€", descKey: "srv_m2_desc" },
      { nameKey: "srv_m3_name", price: "25€", descKey: "srv_m3_desc" },
      { nameKey: "srv_m4_name", price: "28€", descKey: "srv_m4_desc" },
      { nameKey: "srv_m5_name", price: "36€", descKey: "srv_m5_desc" },
      { nameKey: "srv_m6_name", price: "39€", descKey: "srv_m6_desc" },
      { nameKey: "srv_m7_name", price: "46€", descKey: "srv_m7_desc" },
    ],
  },
  pedicura: {
    titleKey: "srv_pedicura" as const,
    image: "/images/services-pedicura.jpg",
    items: [
      { nameKey: "srv_p1_name", price: "42€", descKey: "srv_p1_desc" },
      { nameKey: "srv_p2_name", price: "35€", descKey: "srv_p2_desc" },
      { nameKey: "srv_p3_name", price: "26€", descKey: "srv_p3_desc" },
      { nameKey: "srv_p4_name", price: "25€", descKey: "srv_p4_desc" },
      { nameKey: "srv_p5_name", price: "30€", descKey: "srv_p5_desc" },
    ],
  },
  complementos: {
    titleKey: "srv_complementos" as const,
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&q=80",
    items: [
      { nameKey: "srv_c1_name", price: "8€", descKey: "srv_c1_desc" },
      { nameKey: "srv_c2_name", price: "10€", descKey: "srv_c2_desc" },
      { nameKey: "srv_c3_name", price: "4€", descKey: "srv_c3_desc" },
      { nameKey: "srv_c4_name", price: "15€", descKey: "srv_c4_desc" },
      { nameKey: "srv_c5_name", price: "desde 1,5€", descKey: "srv_c5_desc" },
      { nameKey: "srv_c6_name", price: "10€", descKey: "srv_c6_desc" },
    ],
  }
};

const ServiceModal = ({ 
  isOpen, 
  onClose, 
  service, 
  image 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  service: { name: string; price: string; description: string } | null;
  image: string;
}) => {
  const { t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen || !service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl max-w-md w-full overflow-hidden shadow-2xl animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-48 overflow-hidden">
          <Image src={image} alt={service.name} fill className="object-cover" sizes="448px" />
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 bg-white/90 rounded-full p-1.5 hover:bg-white transition-colors"
          >
            <X size={18} className="text-[#1A1A1A]" />
          </button>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-baseline">
            <h3 className="font-display text-[22px] font-semibold text-[#1A1A1A]">{service.name}</h3>
            <span className="font-display text-[20px] font-semibold text-[#C19A6B]">{service.price}</span>
          </div>
          <p className="font-sans text-[15px] text-[#71717A] font-light leading-relaxed">
            {service.description}
          </p>
          <a
            href="https://www.fresha.com/es/a/nail-spa-valencia-calle-puerto-rico-nr-50-djmoo8wm/all-offer?menu=true&pId=167036"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#1A1A1A] text-white py-3 px-6 text-[14px] font-sans font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:opacity-90 rounded-lg"
          >
            {t("srv_reservar_cita")}
          </a>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ 
  title, 
  items, 
  image,
  delay,
  onServiceClick,
}: { 
  title: string; 
  items: { name: string; price: string; description: string }[];
  image: string;
  delay: number;
  onServiceClick: (service: { name: string; price: string; description: string }, image: string) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
        className="group/card bg-[#F2ECE4]/10 rounded-[12px] h-full shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] border-none
          hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] hover:-translate-y-2 transition-all duration-500 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms, box-shadow 0.3s ease, translate 0.3s ease`,
      }}
    >
        <div className="px-6 py-6 text-center border-b border-[#E4E4E7]/50 mx-6 mb-4">
          <h3 className="font-display text-[24px] font-semibold tracking-wide uppercase transition-colors duration-300 group-hover/card:text-[#C19A6B]">{title}</h3>
        </div>
      <div className="p-6 pt-0 space-y-6">
        {items.map((service, index) => (
          <div 
            key={index} 
            className="flex flex-col gap-1 group cursor-pointer rounded-lg px-3 py-2 -mx-3 hover:bg-[#F2ECE4]/30 transition-colors duration-200"
            onClick={() => onServiceClick(service, image)}
          >
            <div className="flex justify-between items-baseline">
              <h4 className="font-sans text-[16px] font-medium text-[#1A1A1A] group-hover:text-[#C19A6B] transition-colors">
                {service.name}
              </h4>
              <span className="font-display text-[18px] font-semibold text-[#C19A6B]">
                {service.price}
              </span>
            </div>
            <p className="font-sans text-[14px] text-[#71717A] font-light leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{ name: string; price: string; description: string } | null>(null);
  const [selectedImage, setSelectedImage] = useState("");

  const handleServiceClick = (service: { name: string; price: string; description: string }, image: string) => {
    setSelectedService(service);
    setSelectedImage(image);
    setModalOpen(true);
  };

  // Resolve translation keys to strings
  const resolveItems = (items: ServiceItem[]) =>
    items.map((item) => ({
      name: t(item.nameKey as any),
      price: item.price,
      description: t(item.descKey as any),
    }));

  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-[1280px]">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#C19A6B] uppercase tracking-[0.2em] text-[14px] font-semibold font-sans">
            {t("srv_subtitle")}
          </span>
          <h2 className="text-[48px] font-display font-normal text-[#1A1A1A]">
            {t("srv_title")}
          </h2>
          <p className="font-sans text-[18px] font-light text-[#71717A] max-w-2xl mx-auto leading-relaxed">
            {t("srv_desc")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <ServiceCard title={t("srv_manicura")} items={resolveItems(servicesDataKeys.manicura.items)} image={servicesDataKeys.manicura.image} delay={0} onServiceClick={handleServiceClick} />
          <ServiceCard title={t("srv_pedicura")} items={resolveItems(servicesDataKeys.pedicura.items)} image={servicesDataKeys.pedicura.image} delay={200} onServiceClick={handleServiceClick} />
          <ServiceCard title={t("srv_complementos")} items={resolveItems(servicesDataKeys.complementos.items)} image={servicesDataKeys.complementos.image} delay={400} onServiceClick={handleServiceClick} />
        </div>

        {/* Global CTA Button */}
        <div className="mt-16 text-center">
            <a 
              href="https://www.fresha.com/es/a/nail-spa-valencia-calle-puerto-rico-nr-50-djmoo8wm/all-offer?menu=true&pId=167036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1A1A1A] text-white py-4 px-10 text-[18px] font-semibold uppercase tracking-[0.3em] transition-all duration-300 hover:opacity-90 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] active:scale-[0.98]"
              style={{ borderRadius: '0px' }}
            >
              {t("srv_reservar_ahora")}
            </a>
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        service={selectedService}
        image={selectedImage}
      />

      <style jsx global>{`
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-in {
          animation: modal-in 0.25s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
