import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "es" | "hi" | "ru" | "fr";

export const LANGUAGES: { code: Language; name: string }[] = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "hi", name: "हिन्दी" },
  { code: "ru", name: "Русский" },
  { code: "fr", name: "Français" },
];

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  availableLanguages: typeof LANGUAGES;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.work": "Work",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.talk": "Let's Talk",
    "hero.badge": "✦ WEB DESIGN STUDIO",
    "hero.title1": "We Build Websites",
    "hero.title2": "That Win Clients",
    "hero.subtitle":
      "Premium web design for local businesses that want to stand out and grow.",
    "hero.cta1": "View Our Work",
    "hero.cta2": "Get In Touch",
    "marquee.item1": "WEB DESIGN",
    "marquee.item2": "LANDING PAGES",
    "marquee.item3": "BUSINESS WEBSITES",
    "marquee.item4": "PORTFOLIOS",
    "marquee.item5": "REDESIGNS",
    "marquee.item6": "MOBILE FIRST",
    "stats.built": "Websites Built",
    "stats.custom": "Custom Design",
    "stats.fast": "Fast",
    "stats.delivery": "Delivery",
    "stats.mobile": "Mobile",
    "stats.first": "First",
  },
  es: {
    "nav.work": "Trabajo",
    "nav.services": "Servicios",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "nav.talk": "Hablemos",
    "hero.badge": "✦ ESTUDIO DE DISEÑO WEB",
    "hero.title1": "Construimos Sitios",
    "hero.title2": "Que Ganan Clientes",
    "hero.subtitle":
      "Diseño web premium para negocios locales que quieren destacar y crecer.",
    "hero.cta1": "Ver Trabajo",
    "hero.cta2": "Contáctanos",
    "marquee.item1": "DISEÑO WEB",
    "marquee.item2": "LANDING PAGES",
    "marquee.item3": "SITIOS CORPORATIVOS",
    "marquee.item4": "PORTAFOLIOS",
    "marquee.item5": "REDISEÑOS",
    "marquee.item6": "MÓVIL PRIMERO",
    "stats.built": "Sitios Creados",
    "stats.custom": "Diseño a Medida",
    "stats.fast": "Rápido",
    "stats.delivery": "Entrega",
    "stats.mobile": "Móvil",
    "stats.first": "Primero",
  },
  hi: {
    "nav.work": "काम",
    "nav.services": "सेवाएं",
    "nav.about": "हमारे बारे में",
    "nav.contact": "संपर्क करें",
    "nav.talk": "आइए बात करें",
    "hero.badge": "✦ वेब डिजाइन स्टूडियो",
    "hero.title1": "हम ऐसी वेबसाइट्स बनाते हैं",
    "hero.title2": "जो क्लाइंट्स लाती हैं",
    "hero.subtitle":
      "स्थानीय व्यवसायों के लिए प्रीमियम वेब डिज़ाइन जो अलग दिखना और बढ़ना चाहते हैं।",
    "hero.cta1": "हमारा काम देखें",
    "hero.cta2": "संपर्क करें",
    "marquee.item1": "वेब डिज़ाइन",
    "marquee.item2": "लैंडिंग पेज",
    "marquee.item3": "व्यावसायिक वेबसाइटें",
    "marquee.item4": "पोर्टफोलियो",
    "marquee.item5": "रीडिज़ाइन",
    "marquee.item6": "मोबाइल फर्स्ट",
    "stats.built": "वेबसाइटें बनाई गईं",
    "stats.custom": "कस्टम डिज़ाइन",
    "stats.fast": "तेज़",
    "stats.delivery": "डिलीवरी",
    "stats.mobile": "मोबाइल",
    "stats.first": "फर्स्ट",
  },
  ru: {
    "nav.work": "Работы",
    "nav.services": "Услуги",
    "nav.about": "О нас",
    "nav.contact": "Контакты",
    "nav.talk": "Связаться с нами",
    "hero.badge": "✦ СТУДИЯ ВЕБ-ДИЗАЙНА",
    "hero.title1": "Мы создаем сайты,",
    "hero.title2": "которые приносят клиентов",
    "hero.subtitle":
      "Премиум веб-дизайн для местных бизнесов, которые хотят выделяться и расти.",
    "hero.cta1": "Смотреть работы",
    "hero.cta2": "Связаться",
    "marquee.item1": "ВЕБ-ДИЗАЙН",
    "marquee.item2": "ЛЕНДИНГИ",
    "marquee.item3": "БИЗНЕС САЙТЫ",
    "marquee.item4": "ПОРТФОЛИО",
    "marquee.item5": "РЕДИЗАЙН",
    "marquee.item6": "MOBILE FIRST",
    "stats.built": "Создано сайтов",
    "stats.custom": "Уникальный дизайн",
    "stats.fast": "Быстрая",
    "stats.delivery": "Доставка",
    "stats.mobile": "Мобильная",
    "stats.first": "Адаптация",
  },
  fr: {
    "nav.work": "Travail",
    "nav.services": "Services",
    "nav.about": "À propos",
    "nav.contact": "Contact",
    "nav.talk": "Discutons",
    "hero.badge": "✦ STUDIO DESIGN WEB",
    "hero.title1": "Création de Sites Web",
    "hero.title2": "Qui Attirent des Clients",
    "hero.subtitle":
      "Design web premium pour des entreprises locales qui veulent se démarquer et grandir.",
    "hero.cta1": "Notre Travail",
    "hero.cta2": "Contactez-nous",
    "marquee.item1": "DESIGN WEB",
    "marquee.item2": "ATELIER",
    "marquee.item3": "SITES PRO",
    "marquee.item4": "PORTFOLIOS",
    "marquee.item5": "REFONTES",
    "marquee.item6": "MOBILE PREMIER",
    "stats.built": "Sites Créés",
    "stats.custom": "Design Sur Mesure",
    "stats.fast": "Livraison",
    "stats.delivery": "Rapide",
    "stats.mobile": "Mobile",
    "stats.first": "Premier",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string) => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, t, availableLanguages: LANGUAGES }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
