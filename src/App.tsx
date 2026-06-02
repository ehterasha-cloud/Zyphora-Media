/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import { CustomCursor, Loader } from "./components/ui";
import { Navbar, Hero, Marquee, Stats } from "./components/HeaderHero";
import { Projects } from "./components/Projects";
import { Services, Testimonials } from "./components/Services";
import { About, Contact, Footer } from "./components/AboutContact";
import { FAQ } from "./components/FAQ";
import { FloatingSocials } from "./components/FloatingSocials";
import { CookieConsent } from "./components/CookieConsent";

import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <LanguageProvider>
      <CustomCursor />

      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <main className="min-h-screen bg-bg-main text-primary">
        <FloatingSocials />
        <Navbar />
        <Hero />
        <Marquee />
        <Stats />
        <Projects />
        <Services />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
        <Footer />
        <CookieConsent />
      </main>
    </LanguageProvider>
  );
}
