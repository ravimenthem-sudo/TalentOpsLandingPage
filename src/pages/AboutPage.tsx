import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyTalentOpsSection } from "@/components/sections/WhyTalentOpsSection";
import { SecurityTrustSection } from "@/components/sections/SecurityTrustSection";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <Navbar />
      <main className="flex-1 pt-20">
        <AboutSection />
        <WhyTalentOpsSection />
        <SecurityTrustSection />
      </main>
      <Footer />
    </div>
  );
}
