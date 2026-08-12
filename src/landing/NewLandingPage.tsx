import React, { useState } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import { TheProblemSection } from "@/components/sections/TheProblemSection";
import { TalentLifecycleSection } from "@/components/sections/TalentLifecycleSection";
import { ProductOverviewSection } from "@/components/sections/ProductOverviewSection";
import { HiringAgencySection } from "@/components/sections/HiringAgencySection";
import { WhyTalentOpsSection } from "@/components/sections/WhyTalentOpsSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { AboutSection } from "@/components/sections/AboutSection";

import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { BookDemoModal } from "@/components/ui/BookDemoModal";

export function NewLandingPage() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-primary-500 selection:text-white overflow-x-hidden">
      <Navbar onBookDemo={openDemoModal} />
      
      <main className="flex-1">
        <HeroSection onBookDemo={openDemoModal} />
        <SolutionsSection />
        {/* <TheProblemSection /> */}
        <TalentLifecycleSection />
        <ProductOverviewSection />
        <HiringAgencySection />
        <AboutSection />
        <WhyTalentOpsSection />
        <ContactSection />
        <FAQSection />
        <FinalCTASection onBookDemo={openDemoModal} />
      </main>
      
      <Footer />
      
      <BookDemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </div>
  );
}
