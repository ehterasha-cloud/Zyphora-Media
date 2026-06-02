import React, { useState } from "react";
import { FadeSection } from "./ui";
import {
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { LegalModal } from "./LegalModal";
import { motion, AnimatePresence } from "motion/react";
export function About() {
  const skills = [
    "Web Design",
    "UI/UX",
    "Branding",
    "Fast Delivery",
    "Mobile-First",
    "SEO Ready",
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 bg-bg-section border-y border-border-main"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="w-full md:w-1/2">
          <FadeSection>
            <div className="text-accent text-sm font-medium tracking-widest mb-6">
              ✦ ABOUT US
            </div>
            <h2 className="text-[44px] md:text-[60px] font-heading font-light leading-[1.05] tracking-[0.03em] mb-8">
              Built For
              <br />
              Businesses That
              <br />
              Want To Grow
            </h2>
          </FadeSection>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <FadeSection delay={0.2}>
            <p className="text-muted text-lg md:text-xl leading-relaxed mb-10 text-balance">
              Zyphora Media is a web design studio focused on building premium
              websites for local businesses. We combine clean design with smart
              strategy to help businesses win online.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="px-4 py-2 border border-accent rounded-full text-primary tracking-wide text-sm bg-accent/5 backdrop-blur-sm"
                >
                  {skill}
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus("idle"), 5000);
      }
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 border-b border-border-main relative overflow-hidden"
    >
      {/* Toast Notification */}
      <AnimatePresence>
        {formStatus === "success" && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="fixed bottom-8 left-1/2 z-[200] bg-bg-card border border-accent/20 px-6 py-4 rounded-xl shadow-[0_0_40px_rgba(16,185,129,0.15)] flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-primary font-medium text-lg">
                Message Sent Successfully
              </p>
              <p className="text-muted text-sm">
                We'll get back to you within 24 hours.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] -z-10 -translate-y-1/2" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        <div className="w-full md:w-5/12">
          <FadeSection>
            <div className="text-accent text-sm font-medium tracking-widest mb-6">
              ✦ GET IN TOUCH
            </div>
            <h2 className="text-[44px] md:text-[64px] font-heading font-light leading-[1.05] tracking-[0.03em] mb-8">
              Let's Build
              <br />
              Something Great
            </h2>
            <p className="text-muted text-lg mb-10 leading-relaxed max-w-md">
              Ready to elevate your digital presence? Fill out the form or reach
              out directly to start a conversation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <a
                href="https://wa.me/917033621675"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] backdrop-blur-md px-6 py-4 rounded hover:border-accent hover:text-accent transition-all text-primary font-medium w-full lg:w-max"
              >
                <MessageCircle size={20} className="text-accent" /> WhatsApp Us
              </a>
              <a
                href="https://www.instagram.com/zyphoramedia?igsh=bTdqazRkNGhzanpm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] backdrop-blur-md px-6 py-4 rounded hover:border-accent hover:text-accent transition-all text-primary font-medium w-full lg:w-max"
              >
                <Instagram size={20} className="text-accent" /> Instagram
              </a>
            </div>
            <div className="flex flex-col gap-4 mb-8">
              <a
                href="mailto:zyphoramedia.co@gmail.com"
                className="flex items-center gap-4 text-muted hover:text-accent transition-colors text-base font-medium"
              >
                <Mail size={20} className="text-accent" />{" "}
                zyphoramedia.co@gmail.com
              </a>
            </div>
          </FadeSection>
        </div>

        <div className="w-full md:w-7/12">
          <FadeSection delay={0.2}>
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xwvzdrlw"
              method="POST"
              className="glass-card p-8 md:p-10 rounded-xl border border-border-main bg-bg-section/50 flex flex-col gap-6"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Project Inquiry — Zyphora Media"
              />
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-sm font-medium text-muted">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="bg-bg-main border border-border-main rounded px-4 py-3 text-primary focus:outline-none focus:border-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <label className="text-sm font-medium text-muted">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="bg-bg-main border border-border-main rounded px-4 py-3 text-primary focus:outline-none focus:border-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-muted">
                  Project Type
                </label>
                <select
                  name="project_type"
                  required
                  defaultValue=""
                  className="bg-bg-main border border-border-main rounded px-4 py-3 text-primary focus:outline-none focus:border-accent transition-colors appearance-none"
                >
                  <option value="" disabled>
                    Select a project type...
                  </option>
                  <option value="landing">Landing Page</option>
                  <option value="business">Business Website</option>
                  <option value="portfolio">Portfolio Site</option>
                  <option value="redesign">Redesign</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-muted">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="bg-bg-main border border-border-main rounded px-4 py-3 text-primary focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus === "submitting"}
                className="mt-4 bg-accent text-black font-bold uppercase tracking-wide py-4 px-10 hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 group w-full text-sm disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {formStatus === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </>
                )}
              </button>
            </form>
          </FadeSection>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const [legalType, setLegalType] = useState<"privacy" | "terms" | null>(null);

  return (
    <footer className="bg-[#050505] pt-16 pb-8 border-t-[1px] border-accent/10 relative text-[10px] tracking-widest text-muted uppercase">
      <LegalModal
        isOpen={legalType !== null}
        type={legalType}
        onClose={() => setLegalType(null)}
      />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="font-heading text-2xl tracking-widest font-semibold italic text-primary">
            ZYPHORA
          </div>
          <p className="text-muted text-sm tracking-wide text-center md:text-left">
            Building the web,
            <br />
            one business at a time.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 text-sm font-medium">
          <div className="flex gap-6 md:gap-12">
            <a
              href="#work"
              className="text-muted hover:text-accent transition-colors tracking-wide"
            >
              Work
            </a>
            <a
              href="#services"
              className="text-muted hover:text-accent transition-colors tracking-wide"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-muted hover:text-accent transition-colors tracking-wide"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-muted hover:text-accent transition-colors tracking-wide"
            >
              Contact
            </a>
          </div>
          <div className="flex gap-4">
            <a
              href="https://wa.me/917033621675"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-muted hover:text-accent transition-colors"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href="https://www.instagram.com/zyphoramedia?igsh=bTdqazRkNGhzanpm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted hover:text-accent transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-border-main/50 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-subtle text-sm">
          © {new Date().getFullYear()} Zyphora Media. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm font-medium">
          <button
            onClick={() => setLegalType("privacy")}
            className="hover:text-accent transition-colors uppercase tracking-widest"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setLegalType("terms")}
            className="hover:text-accent transition-colors uppercase tracking-widest"
          >
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
}
