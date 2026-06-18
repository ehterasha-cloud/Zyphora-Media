import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import { FadeSection } from "./ui";
import { useLanguage } from "../context/LanguageContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { language, setLanguage, t, availableLanguages } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a
          href="#"
          className="font-heading text-xl font-medium uppercase tracking-widest opacity-90 hover:opacity-100 transition-opacity"
        >
          ZYPHORA
        </a>

        <div className="hidden md:flex gap-8 items-center">
          <a
            href="#work"
            className="text-sm font-medium hover:text-accent transition-colors tracking-wide"
          >
            {t("nav.work")}
          </a>
          <a
            href="#services"
            className="text-sm font-medium hover:text-accent transition-colors tracking-wide"
          >
            {t("nav.services")}
          </a>
          <a
            href="#about"
            className="text-sm font-medium hover:text-accent transition-colors tracking-wide"
          >
            {t("nav.about")}
          </a>
          <a
            href="#contact"
            className="text-sm font-medium hover:text-accent transition-colors tracking-wide"
          >
            {t("nav.contact")}
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors tracking-wide uppercase"
            >
              <Globe size={16} />
              {availableLanguages.find((l) => l.code === language)?.name ||
                "EN"}
            </button>
            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-4 right-0 w-32 bg-bg-card border border-border-main rounded-md overflow-hidden shadow-2xl z-50 flex flex-col py-2"
                >
                  {availableLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangMenuOpen(false);
                      }}
                      className={`text-left px-4 py-2 text-sm hover:bg-bg-main transition-colors ${language === lang.code ? "text-accent font-medium" : "text-primary"}`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a
            href="#contact"
            className="bg-accent text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-accent-hover transition-colors"
          >
            {t("nav.talk")}
          </a>
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full glass-nav flex flex-col items-center py-8 gap-6 md:hidden border-t border-accent/20">
          <div className="flex flex-wrap justify-center gap-3 px-6 mb-2">
            {availableLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${
                  language === lang.code
                    ? "border-accent text-accent bg-accent/10"
                    : "border-border-main text-muted hover:text-primary"
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg hover:text-accent"
          >
            {t("nav.work")}
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg hover:text-accent"
          >
            {t("nav.services")}
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg hover:text-accent"
          >
            {t("nav.about")}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg hover:text-accent"
          >
            {t("nav.contact")}
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-accent text-black px-6 py-3 mt-2 w-11/12 text-center text-sm font-bold uppercase tracking-widest hover:bg-accent-hover transition-colors"
          >
            {t("nav.talk")}
          </a>
        </div>
      )}
    </nav>
  );
}

export function Hero() {
  const { t } = useLanguage();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -250]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Floating Gradient Orbs */}
      <motion.div
        style={{
          y: y1,
          background:
            "radial-gradient(circle, rgba(16,185,129,0.25) 0%, transparent 70%)",
        }}
        className="absolute w-[800px] h-[800px] -top-[100px] -left-[100px] blur-[80px] z-0 rounded-full pointer-events-none"
      />
      <motion.div
        style={{
          y: y2,
          background:
            "radial-gradient(circle, rgba(16,185,129,0.20) 0%, transparent 70%)",
        }}
        className="absolute w-[600px] h-[600px] bottom-0 right-[100px] blur-[60px] z-0 rounded-full pointer-events-none"
      />
      <motion.div
        style={{
          y: y3,
          background:
            "radial-gradient(circle, rgba(52,211,153,0.15) 0%, transparent 70%)",
        }}
        className="absolute w-[300px] h-[300px] top-[50%] right-[30%] blur-[40px] z-0 rounded-full pointer-events-none"
      />

      {/* Watermark */}
      <motion.div
        style={{ y: y3 }}
        className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#111111] text-[400px] font-heading font-semibold select-none -z-10 leading-none"
      >
        ZM
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-[1] flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.5 }} // After loader
          className="text-accent text-xs font-bold tracking-widest mb-6 uppercase"
        >
          {t("hero.badge")}
        </motion.div>

        <div className="overflow-hidden relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 60 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="h-[1px] bg-accent mx-auto mb-6"
          />
          <motion.h1
            initial={{
              clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
              y: "20%",
            }}
            animate={{
              clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
              y: "0%",
            }}
            transition={{ duration: 1, delay: 3, ease: [0.33, 1, 0.68, 1] }}
            className="text-[44px] md:text-[84px] font-heading font-light leading-[0.95] tracking-[0.03em] text-balance"
          >
            <span className="sr-only">Zyphora Media - Remote UI/UX Designer & Web Design Agency</span>
            {t("hero.title1")}
            <br />
            <span className="font-semibold">{t("hero.title2")}</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          className="mt-6 text-muted text-lg md:text-xl max-w-2xl text-balance"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.8 }}
          className="mt-10 flex flex-col md:flex-row gap-4 w-full md:w-auto"
        >
          <a
            href="#work"
            className="w-full md:w-auto bg-accent text-black px-10 py-4 font-bold text-sm tracking-wide uppercase hover:bg-accent-hover transition-colors text-center"
          >
            {t("hero.cta1")}
          </a>
          <a
            href="#contact"
            className="w-full md:w-auto border border-primary text-primary px-10 py-4 font-bold text-sm tracking-wide uppercase hover:bg-primary hover:text-black transition-colors text-center"
          >
            {t("hero.cta2")}
          </a>
        </motion.div>
      </div>

      {/* Down arrow marker */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-accent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2 }}
      />
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 w-2 h-2 bg-accent rounded-full"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}

export function Marquee() {
  const { t } = useLanguage();

  const items = [
    t("marquee.item1"),
    "✦",
    t("marquee.item2"),
    "✦",
    t("marquee.item3"),
    "✦",
    t("marquee.item4"),
    "✦",
    t("marquee.item5"),
    "✦",
    t("marquee.item6"),
    "✦",
  ];

  return (
    <div className="bg-bg-section py-6 overflow-hidden border-y border-border-main flex">
      <div className="flex w-[200%] animate-marquee">
        <div className="flex w-1/2 justify-around whitespace-nowrap">
          {items.map((item, i) => (
            <span
              key={i}
              className="text-accent font-medium tracking-[0.2em] text-[12px] uppercase mx-4"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex w-1/2 justify-around whitespace-nowrap">
          {items.map((item, i) => (
            <span
              key={i + 100}
              className="text-accent font-medium tracking-[0.2em] text-[12px] uppercase mx-4"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Stats() {
  const { t } = useLanguage();

  const stats = [
    { value: 30, suffix: "+", label: t("stats.built") },
    { value: 100, suffix: "%", label: t("stats.custom") },
    { value: 10, suffix: " Days", label: "Fast Delivery", duration: false },
    { value: 1, suffix: "st", label: "Mobile First", isWord: true }, // customized loosely for visual
  ];

  const Counter = ({ value, label, suffix }: any) => {
    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      if (!visible) return;
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [value, visible]);

    return (
      <motion.div
        className="glass-card p-6 md:p-8 rounded-lg text-center flex flex-col items-center justify-center border border-border-main/50"
        onViewportEnter={() => setVisible(true)}
      >
        <div className="text-[48px] md:text-[64px] lg:text-[80px] font-heading font-light text-accent leading-none mb-2">
          {count}
          {suffix}
        </div>
        <div className="text-primary font-medium tracking-wide text-sm">
          {label}
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <Counter value={10} suffix="+" label={t("stats.built")} />
        <Counter value={100} suffix="%" label={t("stats.custom")} />
        <FadeSection
          delay={0.4}
          className="glass-card p-6 md:p-8 rounded-lg text-center flex flex-col items-center justify-center border border-border-main/50"
        >
          <div className="text-[40px] md:text-[54px] lg:text-[70px] font-heading font-light text-accent leading-[1.2] mb-2 uppercase tracking-wide">
            {t("stats.fast")}
          </div>
          <div className="text-primary font-medium tracking-wide text-sm">
            {t("stats.delivery")}
          </div>
        </FadeSection>
        <FadeSection
          delay={0.6}
          className="glass-card p-6 md:p-8 rounded-lg text-center flex flex-col items-center justify-center border border-border-main/50"
        >
          <div className="text-[40px] md:text-[54px] lg:text-[70px] font-heading font-light text-accent leading-[1.2] mb-2 uppercase tracking-wide">
            {t("stats.mobile")}
          </div>
          <div className="text-primary font-medium tracking-wide text-sm">
            {t("stats.first")}
          </div>
        </FadeSection>
      </div>
    </section>
  );
}
