import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function CookieConsent() {
  const [show, setShow] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  const content = {
    en: {
      text: "We use cookies to improve your experience. By continuing to visit this site you agree to our use of cookies.",
      accept: "Accept",
      decline: "Decline",
    },
    es: {
      text: "Utilizamos cookies para mejorar su experiencia. Al continuar visitando este sitio, acepta nuestro uso de cookies.",
      accept: "Aceptar",
      decline: "Rechazar",
    },
    hi: {
      text: "हम आपके अनुभव को बेहतर बनाने के लिए कुकीज़ का उपयोग करते हैं। इस साइट पर जाना जारी रखकर आप कुकीज़ के हमारे उपयोग से सहमत हैं।",
      accept: "स्वीकार करें",
      decline: "अस्वीकार करें",
    },
    ru: {
      text: "Мы используем файлы cookie для улучшения вашего опыта. Продолжая посещать этот сайт, вы соглашаетесь с использованием нами файлов cookie.",
      accept: "Принять",
      decline: "Отклонить",
    },
    fr: {
      text: "Nous utilisons des cookies pour améliorer votre expérience. En continuant à visiter ce site, vous acceptez notre utilisation des cookies.",
      accept: "Accepter",
      decline: "Refuser",
    },
  };

  const currentContent =
    content[language as keyof typeof content] || content.en;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl z-[200] glass-nav border-t border-b border-l border-r border-border-main rounded-xl p-5 md:p-6 shadow-[0_10px_40px_rgba(16,185,129,0.1)] flex flex-col md:flex-row items-center gap-5 md:gap-8 justify-between"
          style={{
            background: "rgba(20, 20, 20, 0.75)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          <div className="flex-1 text-sm text-primary/80 font-medium text-center md:text-left leading-relaxed">
            {currentContent.text}
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 md:flex-none px-6 py-2.5 border border-primary/20 text-primary/80 hover:text-primary hover:border-primary/50 transition-colors text-xs font-bold uppercase tracking-widest rounded transition-all"
            >
              {currentContent.decline}
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 md:flex-none px-6 py-2.5 bg-accent text-black font-bold uppercase tracking-widest text-xs hover:bg-accent-hover transition-colors rounded shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all"
            >
              {currentContent.accept}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
