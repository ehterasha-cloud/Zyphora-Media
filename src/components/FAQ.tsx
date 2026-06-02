import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FadeSection } from "./ui";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer:
        "A standard business website typically takes 2-4 weeks from start to finish, depending on the complexity of the design and the availability of content.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we offer comprehensive support and maintenance packages to ensure your website remains fast, secure, and up to date.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer:
        "Absolutely. Every website we build is developed with a mobile-first approach, ensuring a flawless experience on smartphones, tablets, and desktops.",
    },
    {
      question: "What do you need from me to get started?",
      answer:
        "We typically need your logo, brand guidelines (if any), and an idea of the pages you want. We can also help with copywriting and sourcing imagery if needed.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10" />
      <div className="max-w-4xl mx-auto">
        <FadeSection>
          <div className="text-center mb-16">
            <div className="text-accent text-sm font-medium tracking-widest mb-4">
              ✦ FAQ
            </div>
            <h2 className="text-[40px] md:text-[56px] font-heading font-light leading-tight">
              Common Questions
            </h2>
          </div>
        </FadeSection>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <FadeSection key={i} delay={i * 0.1}>
              <div
                className="glass-card rounded-xl overflow-hidden cursor-pointer bg-[rgba(255,255,255,0.03)] hover:bg-[#1A1A1A] transition-colors duration-400"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="px-6 py-6 flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-medium text-primary">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-accent" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-muted text-base md:text-lg leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
