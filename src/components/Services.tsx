import React from "react";
import { FadeSection } from "./ui";

export function Services() {
  const customCards = [
    {
      num: "01",
      title: "Landing Pages",
      desc: "Single page sites that convert visitors into customers fast.",
    },
    {
      num: "02",
      title: "Business Websites",
      desc: "Multi-page professional sites for serious businesses.",
    },
    {
      num: "03",
      title: "Portfolio Sites",
      desc: "Showcase your work with a site that impresses every client.",
    },
    {
      num: "04",
      title: "Redesigns",
      desc: "Transform your outdated site into a modern digital presence.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-6 bg-bg-section border-y border-border-main"
    >
      <div className="max-w-7xl mx-auto">
        <FadeSection>
          <div className="text-accent text-sm font-medium tracking-widest mb-4">
            ✦ WHAT WE OFFER
          </div>
          <h2 className="text-[44px] md:text-[60px] font-heading font-light leading-tight mb-16">
            Our Services
          </h2>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {customCards.map((c, i) => (
            <FadeSection key={i} delay={i * 0.15}>
              <div className="glass-card group relative overflow-hidden rounded-xl p-10 h-full flex flex-col items-start bg-[rgba(255,255,255,0.03)] hover:bg-[#1A1A1A] transition-colors duration-400">
                {/* Emerald left border transition */}
                <div className="absolute top-0 left-0 w-[3px] h-0 bg-accent group-hover:h-full transition-all duration-500 ease-out" />

                <div className="text-accent font-heading text-3xl italic mb-6 transition-colors duration-400">
                  {c.num}
                </div>
                <h3 className="text-xs tracking-widest text-muted uppercase font-bold mb-4">
                  {c.title}
                </h3>
                <p className="text-muted text-base md:text-lg leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Zyphora delivered a stunning digital experience that instantly elevated our brand. Expensive feel, fast delivery.",
      name: "James T.",
      role: "CEO, Iron Forge",
    },
    {
      quote:
        "Our old site was losing us clients. The new redesign looks world-class and converts incredibly well.",
      name: "Sarah W.",
      role: "Founder, Apex Craft Co.",
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-[30%] -right-[10%] w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -z-10" />
      <div className="max-w-7xl mx-auto">
        <FadeSection>
          <div className="text-center mb-16">
            <h2 className="text-[40px] md:text-[56px] font-heading font-light leading-tight mb-4">
              Client Feedback
            </h2>
            <p className="text-muted text-lg">
              Don't just take our word for it.
            </p>
          </div>
        </FadeSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <FadeSection key={i} delay={i * 0.2}>
              <div className="glass-testimonial p-10 rounded-xl flex flex-col justify-between h-full relative">
                <div className="text-accent text-6xl font-heading absolute top-6 left-6 opacity-20">
                  "
                </div>
                <p className="text-lg md:text-xl font-body leading-relaxed mb-10 z-10 text-primary/90 mt-4">
                  {t.quote}
                </p>
                <div className="flex flex-col border-t border-border-main/50 pt-6">
                  <span className="font-semibold text-primary">{t.name}</span>
                  <span className="text-muted text-sm">{t.role}</span>
                </div>
              </div>
            </FadeSection>
          ))}
        </div>
      </div>
    </section>
  );
}
