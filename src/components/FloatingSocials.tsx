import React from "react";
import { Instagram, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function FloatingSocials() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed right-4 bottom-8 md:right-8 md:bottom-12 z-[100] flex flex-col gap-5"
    >
      <a
        href="https://wa.me/917033621675"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="w-14 h-14 md:w-16 md:h-16 bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.08)] text-primary hover:text-accent hover:border-accent/50 flex items-center justify-center rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:-translate-y-2 group"
      >
        <MessageCircle
          size={28}
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </a>
      <a
        href="https://www.instagram.com/zyphoramedia?igsh=bTdqazRkNGhzanpm"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="w-14 h-14 md:w-16 md:h-16 bg-[rgba(255,255,255,0.03)] backdrop-blur-md border border-[rgba(255,255,255,0.08)] text-primary hover:text-accent hover:border-accent/50 flex items-center justify-center rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:-translate-y-2 group"
      >
        <Instagram
          size={28}
          className="group-hover:scale-110 transition-transform duration-300"
        />
      </a>
    </motion.div>
  );
}
