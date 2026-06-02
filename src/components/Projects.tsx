import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FadeSection } from "./ui";
import { X, ArrowRight } from "lucide-react";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      tag: "Fitness & Gym",
      name: "Iron Forge",
      description:
        "Bold editorial gym website with dark theme, strong typography and smooth animations.",
      url: "https://iron-forge-khaki.vercel.app",
      imageAlign: "left",
      imgColor: "bg-[#111111] from-[#1A1A1A] to-[#0A0A0A]",
      imageSrc:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop",
      challenge:
        "Iron Forge needed an aggressive, high-energy online presence to match their elite clientele. The previous site was outdated and failed to communicate the premium, high-stakes environment of their modern facility.",
      solution:
        "We engineered a dark-themed, highly-kinetic digital experience. Utilizing bold display typography and deep shadow layouts, the final site encapsulates the intensity of the gym, significantly boosting their class sign-ups.",
      extraImages: [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop",
      ],
    },
    {
      id: 2,
      tag: "Home Contractor",
      name: "Apex Craft Co.",
      description:
        "Luxury contractor site with ivory palette, gold accents and premium editorial layout.",
      url: "https://apex-craft-co.vercel.app",
      imageAlign: "right",
      imgColor: "bg-[#F3F2EE] from-[#F3F2EE] to-[#E3E1DB]",
      imageSrc:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1475&auto=format&fit=crop",
      challenge:
        "Apex Craft Co. creates ultra-premium custom homes but their online portfolio looked like a baseline local contractor. They needed an identity that instantly communicated precision luxury and architectural mastery.",
      solution:
        "We designed a sophisticated editorial-style interface centered around a soft ivory and subtle gold palette. Expansive negative space and fluid scroll behaviors allow their high-end craftsmanship to take center stage.",
      extraImages: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=1470&auto=format&fit=crop",
      ],
    },
    {
      id: 3,
      tag: "Cleaning Company",
      name: "PureSpace Co.",
      description:
        "Clean modern service site with blue accents, animations and professional brand presence.",
      url: "https://pure-space-co.vercel.app",
      imageAlign: "left",
      imgColor: "bg-[#0A192F] from-[#112240] to-[#020C1B]",
      imageSrc:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1470&auto=format&fit=crop",
      challenge:
        "PureSpace Co. struggled to stand out in a saturated market due to a template-based website that failed to build credibility or emphasize their extreme attention to hygienic details.",
      solution:
        "We crafted a crystal-clear, modern web application emphasizing trust and hygiene. With custom service animations and a calming deep blue motif, the digital experience now validates their high-end pricing model.",
      extraImages: [
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1470&auto=format&fit=crop",
      ],
    },
  ];

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeSection>
          <div className="text-accent text-sm font-medium tracking-widest mb-4">
            ✦ OUR WORK
          </div>
          <h2 className="text-[44px] md:text-[60px] font-heading font-light leading-tight mb-4">
            Selected Work
          </h2>
          <p className="text-muted text-lg max-w-xl mb-16">
            Projects built for real businesses that need a premium digital
            presence.
          </p>
        </FadeSection>

        <div className="flex flex-col gap-12 md:gap-24">
          {projects.map((p, i) => (
            <FadeSection key={p.id} delay={i * 0.1}>
              <motion.div
                className={`flex flex-col ${p.imageAlign === "right" ? "md:flex-row-reverse" : "md:flex-row"} gap-8 md:gap-16 items-center group cursor-pointer`}
                whileHover="hover"
                onClick={() => setSelectedProject(p)}
              >
                {/* Image Placeholder */}
                <div className="w-full md:w-[60%] overflow-hidden rounded-lg aspect-[4/3] border border-border-main relative bg-bg-card">
                  <motion.div
                    variants={{ hover: { scale: 1.04 } }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full h-full bg-gradient-to-br ${p.imgColor} flex items-center justify-center relative shadow-inner`}
                  >
                    <img
                      src={p.imageSrc}
                      alt={p.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                        borderRadius: "inherit",
                      }}
                    />
                  </motion.div>
                  {/* Subtle emerald outer glow on hover */}
                  <motion.div
                    variants={{
                      hover: { opacity: 1 },
                    }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 border-2 border-accent rounded-lg pointer-events-none z-10"
                    style={{
                      boxShadow: "inset 0 0 40px rgba(16, 185, 129, 0.2)",
                    }}
                  />
                </div>

                {/* Text Content */}
                <div className="w-full md:w-[40%] flex flex-col items-start text-left">
                  <div className="text-accent border border-accent/30 px-2 py-1 text-[10px] font-bold tracking-tighter mb-6 uppercase">
                    {p.tag}
                  </div>
                  <h3 className="text-[32px] md:text-[3xl] font-heading font-semibold leading-[1.1] mb-6">
                    {p.name}
                  </h3>
                  <p className="text-muted text-base md:text-lg mb-8 leading-relaxed">
                    {p.description}
                  </p>

                  <motion.a
                    variants={{
                      hover: { y: -4 },
                    }}
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-accent font-bold text-xl uppercase tracking-widest flex items-center gap-3 group-hover:text-accent-hover transition-colors overflow-hidden"
                  >
                    <span className="relative">
                      View Live
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-accent-hover"
                        variants={{ hover: { width: "100%" } }}
                        initial={{ width: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                    <motion.span
                      variants={{ hover: { x: 4 } }}
                      transition={{ duration: 0.3 }}
                    >
                      →
                    </motion.span>
                  </motion.a>
                </div>
              </motion.div>
            </FadeSection>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-bg-main/90 backdrop-blur-xl overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-bg-card border border-border-main rounded-2xl overflow-hidden shadow-2xl flex flex-col my-auto max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 md:p-3 bg-bg-main/80 backdrop-blur-md rounded-full text-primary hover:text-accent hover:bg-bg-main transition-colors border border-border-main/50"
              >
                <X size={24} />
              </button>

              <div className="flex-1 overflow-y-auto w-full custom-scrollbar">
                {/* Hero Image Section */}
                <div className="relative w-full h-[40vh] md:h-[50vh]">
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-bg-card via-transparent to-transparent z-10`}
                  />
                  <img
                    src={selectedProject.imageSrc}
                    alt={selectedProject.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                      <div className="text-accent text-xs font-bold tracking-widest mb-3 uppercase border border-accent/30 inline-block px-3 py-1 rounded-sm bg-bg-main/50 backdrop-blur-md">
                        {selectedProject.tag}
                      </div>
                      <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
                        {selectedProject.name}
                      </h2>
                    </div>
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 bg-accent text-bg-main px-6 py-3 rounded font-medium flex items-center gap-2 hover:bg-accent-hover transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] w-max"
                    >
                      Visit Live Site <ArrowRight size={18} />
                    </a>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    <div>
                      <h3 className="text-sm font-semibold tracking-widest text-accent uppercase mb-4 opacity-80">
                        The Challenge
                      </h3>
                      <p className="text-muted leading-relaxed text-lg">
                        {selectedProject.challenge}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold tracking-widest text-accent uppercase mb-4 opacity-80">
                        The Solution
                      </h3>
                      <p className="text-muted leading-relaxed text-lg">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Extra Images Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedProject.extraImages?.map(
                      (img: string, idx: number) => (
                        <div
                          key={idx}
                          className="rounded-xl overflow-hidden border border-border-main/50 bg-bg-main aspect-[4/3]"
                        >
                          <img
                            src={img}
                            alt={`${selectedProject.name} detail ${idx + 1}`}
                            className="w-full h-full object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                          />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
