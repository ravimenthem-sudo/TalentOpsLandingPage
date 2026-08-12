import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PersonaBenefitsSection } from "@/components/sections/PersonaBenefitsSection";

export function SolutionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <Navbar />
      <main className="flex-1 pt-20">
        <PersonaBenefitsSection />
      </main>
      <Footer />
    </div>
  );
}
