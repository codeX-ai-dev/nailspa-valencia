export type Locale = "es" | "en";

const translations = {
  // Navbar
  nav_servicios: { es: "Servicios", en: "Services" },
  nav_nosotros: { es: "Nosotros", en: "About" },
  nav_testimonios: { es: "Testimonios", en: "Testimonials" },
  nav_contacto: { es: "Contacto", en: "Contact" },
  nav_trabaja: { es: "Trabaja con nosotros", en: "Work with us" },
  nav_reservar: { es: "RESERVAR CITA", en: "BOOK NOW" },

  // Work modal
  work_title: { es: "Trabaja con nosotros", en: "Work with us" },
  work_desc: { es: "¿Te gustaría formar parte de nuestro equipo? Envíanos tu CV a:", en: "Would you like to join our team? Send us your CV to:" },
  work_copy: { es: "Copiar correo", en: "Copy email" },
  work_copied: { es: "¡Copiado!", en: "Copied!" },

  // Hero
  hero_subtitle: { es: "Nail Spa Valencia", en: "Nail Spa Valencia" },
  hero_title_1: { es: "Uñas", en: "Flawless" },
  hero_title_2: { es: "Impecables.", en: "Nails." },
  hero_desc: {
    es: "Cuidamos cada detalle con pasión y técnica con más de 10 años de experiencia profesional.",
    en: "We care for every detail with passion and technique, with over 10 years of professional experience.",
  },
  hero_reservar: { es: "Reservar Cita", en: "Book Now" },
  hero_servicios: { es: "Ver Servicios", en: "View Services" },

  // Services
  srv_subtitle: { es: "Nuestros Tratamientos", en: "Our Treatments" },
  srv_title: { es: "Menú de Servicios", en: "Services Menu" },
  srv_desc: {
    es: "Utilizamos exclusivamente productos de primeras marcas para garantizar la salud de tus uñas y un acabado duradero y brillante.",
    en: "We exclusively use top-brand products to ensure the health of your nails and a long-lasting, brilliant finish.",
  },
  srv_manicura: { es: "Manicura", en: "Manicure" },
  srv_pedicura: { es: "Pedicura", en: "Pedicure" },
  srv_complementos: { es: "Complementos", en: "Add-ons" },
  srv_reservar_ahora: { es: "RESERVAR AHORA", en: "BOOK NOW" },
  srv_reservar_cita: { es: "Reservar Cita", en: "Book Now" },

  // Service items - Manicura
  srv_m1_name: { es: "Manicura básica", en: "Basic Manicure" },
  srv_m1_desc: { es: "Cortar / limar / dar forma, esmaltado tradicional OPI (No incluye arreglo de las cutículas)", en: "Cut / file / shape, traditional OPI polish (Does not include cuticle treatment)" },
  srv_m2_name: { es: "Manicura completa", en: "Complete Manicure" },
  srv_m2_desc: { es: "Remojar en agua tibia, limar, retirada de cutícula, esmaltado tradicional y crema hidratante", en: "Warm water soak, filing, cuticle removal, traditional polish and moisturizer" },
  srv_m3_name: { es: "Manicura semipermanente", en: "Gel Manicure" },
  srv_m3_desc: { es: "Limar, retirada de cutícula, esmaltado semipermanente y crema hidratante", en: "Filing, cuticle removal, gel polish and moisturizer" },
  srv_m4_name: { es: "Manicura semi con retirada", en: "Gel Manicure with Removal" },
  srv_m4_desc: { es: "Limar, retirada de color, retirada de cutícula, esmaltado semipermanente y crema hidratante", en: "Filing, color removal, cuticle removal, gel polish and moisturizer" },
  srv_m5_name: { es: "Manicura semi con refuerzo (BIAB)", en: "Gel Manicure with BIAB" },
  srv_m5_desc: { es: "Limar, retirada de cutícula, base de refuerzo, esmaltado semipermanente y crema hidratante", en: "Filing, cuticle removal, reinforcement base, gel polish and moisturizer" },
  srv_m6_name: { es: "Gel /Acrygel Relleno", en: "Gel/Acrygel Fill" },
  srv_m6_desc: { es: "Mantenimiento de las uñas acrílicas/gel, retirada del esmalte anterior, retirada de cutícula, relleno, esmaltado semi y crema hidratante", en: "Acrylic/gel nail maintenance, previous polish removal, cuticle removal, fill, gel polish and moisturizer" },
  srv_m7_name: { es: "Extensión Gel/Acrygel", en: "Gel/Acrygel Extension" },
  srv_m7_desc: { es: "Extensión de uñas con acrygel/gel, esmaltado semipermanente liso y crema hidratante", en: "Nail extension with acrygel/gel, smooth gel polish and moisturizer" },

  // Service items - Pedicura
  srv_p1_name: { es: "Pedicura completa gel", en: "Complete Gel Pedicure" },
  srv_p1_desc: { es: "Pedicura con baño de burbujas, retirada de cutículas, durezas, exfoliación, esmaltado semipermanente y crema hidratante.", en: "Pedicure with bubble bath, cuticle removal, callus treatment, exfoliation, gel polish and moisturizer." },
  srv_p2_name: { es: "Pedicura completa", en: "Complete Pedicure" },
  srv_p2_desc: { es: "Pedicura con baño de burbujas, retirada de cutícula, durezas, exfoliación, esmaltado tradicional y crema hidratante.", en: "Pedicure with bubble bath, cuticle removal, callus treatment, exfoliation, traditional polish and moisturizer." },
  srv_p3_name: { es: "Pedicura semi Flash", en: "Flash Gel Pedicure" },
  srv_p3_desc: { es: "Limar, retirada de cutículas, esmaltado semipermanente en liso o francesa. (No incluye remojo en agua)", en: "Filing, cuticle removal, gel polish smooth or French. (Does not include water soak)" },
  srv_p4_name: { es: "Pedicura tradicional", en: "Traditional Pedicure" },
  srv_p4_desc: { es: "Limado de uñas, retirada de cutículas, exfoliación, esmaltado normal y crema hidratante. (No incluye retirada de durezas)", en: "Nail filing, cuticle removal, exfoliation, traditional polish and moisturizer. (Does not include callus removal)" },
  srv_p5_name: { es: "Pedicura Hombre", en: "Men's Pedicure" },
  srv_p5_desc: { es: "Pedicura con baño de burbujas, retirada de cutículas, durezas, exfoliación, cortar uñas y crema hidratante.", en: "Pedicure with bubble bath, cuticle removal, callus treatment, exfoliation, nail trimming and moisturizer." },

  // Service items - Complementos
  srv_c1_name: { es: "Gel acabado", en: "Gel Finish" },
  srv_c1_desc: { es: "Acabado brillante y duradero con la calidad OPI.", en: "Brilliant and long-lasting finish with OPI quality." },
  srv_c2_name: { es: "Retirada de esmalte en gel", en: "Gel Polish Removal" },
  srv_c2_desc: { es: "Retirada profesional para mantener la salud de tu uña.", en: "Professional removal to maintain your nail health." },
  srv_c3_name: { es: "Reparación de uñas", en: "Nail Repair" },
  srv_c3_desc: { es: "Arreglo puntual para una uña dañada o rota.", en: "Quick fix for a damaged or broken nail." },
  srv_c4_name: { es: "Retirada de acrílico/gel", en: "Acrylic/Gel Removal" },
  srv_c4_desc: { es: "Eliminación segura de extensiones de gel o acrílico.", en: "Safe removal of gel or acrylic extensions." },
  srv_c5_name: { es: "Nail Art / Piedras", en: "Nail Art / Gems" },
  srv_c5_desc: { es: "Decoraciones personalizadas, cristales y diseños artísticos.", en: "Custom decorations, crystals and artistic designs." },
  srv_c6_name: { es: "Masaje de pies", en: "Foot Massage" },
  srv_c6_desc: { es: "Relajación profunda para pies cansados tras tu tratamiento.", en: "Deep relaxation for tired feet after your treatment." },

  // About
  about_subtitle: { es: "Nuestra Filosofía", en: "Our Philosophy" },
  about_title_1: { es: "Más que un salón,", en: "More than a salon," },
  about_title_2: { es: "un", en: "a" },
  about_title_3: { es: "ritual de belleza.", en: "beauty ritual." },
  about_p1: {
    es: "Bienvenido a Nail Spa, donde la creatividad se encuentra con la comodidad, en el corazón de Valencia. Nuestros tratamientos son para todos, con profesionales altamente cualificados disponibles para ofrecer tratamientos de manicuras, pedicuras spa, semipermanente, extensión de uñas, relleno gel, biab.",
    en: "Welcome to Nail Spa, where creativity meets comfort, in the heart of Valencia. Our treatments are for everyone, with highly qualified professionals available to offer manicures, spa pedicures, gel polish, nail extensions, gel fills, and BIAB treatments.",
  },
  about_p2: {
    es: "Visítanos hoy mismo o programa una cita con uno de nuestros miembros del equipo y descubre por qué nuestros clientes vuelven una y otra vez.",
    en: "Visit us today or schedule an appointment with one of our team members and discover why our clients come back again and again.",
  },
  about_benefit_1: { es: "Higiene hospitalaria y esterilización rigurosa", en: "Hospital-grade hygiene and rigorous sterilization" },
  about_benefit_2: { es: "Productos premium (OPI y SEMILAC)", en: "Premium products (OPI and SEMILAC)" },
  about_benefit_3: { es: "Especialistas en Nail Art y últimas tendencias", en: "Nail Art specialists and latest trends" },
  about_benefit_4: { es: "Ambiente relajante y atención personalizada", en: "Relaxing atmosphere and personalized care" },

  // Gallery
  gallery_subtitle: { es: "Inspiración", en: "Inspiration" },
  gallery_title: { es: "Nuestros Trabajos", en: "Our Work" },

  // Testimonials
  test_title: { es: "Lo que dicen nuestras clientas", en: "What our clients say" },
  test_role: { es: "CLIENTE", en: "CLIENT" },

  // Footer
  footer_visitanos: { es: "Visítanos", en: "Visit Us" },
  footer_direccion: { es: "Dirección", en: "Address" },
  footer_telefono: { es: "Teléfono", en: "Phone" },
  footer_llamanos: { es: "Llámanos", en: "Call us" },
  footer_siguenos: { es: "Síguenos", en: "Follow Us" },
  footer_horario: { es: "Horario", en: "Schedule" },
  footer_horario_1: { es: "Lunes a Viernes: 10:00 - 20:00", en: "Monday to Friday: 10:00 - 20:00" },
  footer_horario_2: { es: "Sábado y Domingo: Cerrado", en: "Saturday and Sunday: Closed" },
  footer_rights: { es: "© 2024 NAIL SPA VALENCIA. ALL RIGHTS RESERVED.", en: "© 2024 NAIL SPA VALENCIA. ALL RIGHTS RESERVED." },
  footer_inicio: { es: "INICIO", en: "HOME" },

  // Guarantee badge
  guarantee_btn: { es: "Semanas de Garantía", en: "Weeks Warranty" },
  guarantee_title: { es: "2 Semanas de Garantía", en: "2 Weeks Warranty" },
  guarantee_intro: {
    es: "En <strong>Nail Spa</strong> queremos que salgas 100% satisfecha. Por eso, todos nuestros servicios de uñas incluyen <strong>2 semanas de garantía</strong> sin coste adicional.",
    en: "At <strong>Nail Spa</strong> we want you to leave 100% satisfied. That's why all our nail services include a <strong>2-week warranty</strong> at no additional cost.",
  },
  guarantee_covers: { es: "¿Qué cubre?", en: "What does it cover?" },
  guarantee_c1: { es: "Rotura o desprendimiento de una uña", en: "Breakage or detachment of a nail" },
  guarantee_c2: { es: "Levantamiento del esmalte o gel", en: "Lifting of polish or gel" },
  guarantee_c3: { es: "Cualquier desperfecto del servicio realizado", en: "Any defect from the service performed" },
  guarantee_conditions: { es: "Condiciones", en: "Conditions" },
  guarantee_cond1: { es: "Válida durante los 14 días posteriores al servicio", en: "Valid for 14 days after the service" },
  guarantee_cond2: { es: "No cubre daños por mal uso o golpes externos", en: "Does not cover damage from misuse or external impact" },
  guarantee_cond3: { es: "Contacta con nosotras para agendar tu reparación", en: "Contact us to schedule your repair" },
  guarantee_close: { es: "Entendido", en: "Got it" },
} as const;

export type TranslationKey = keyof typeof translations;

export function getTranslation(key: TranslationKey, locale: Locale): string {
  return translations[key][locale];
}

export default translations;
