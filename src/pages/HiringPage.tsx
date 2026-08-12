import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HiringAgencySection } from "@/components/sections/HiringAgencySection";

export function HiringPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <Navbar />
      <main className="flex-1 pt-20">
        <HiringAgencySection />
      </main>
      <Footer />
    </div>
  );
}
