import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProductOverviewSection } from "@/components/sections/ProductOverviewSection";

export function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <Navbar />
      <main className="flex-1 pt-20">
        <ProductOverviewSection />
      </main>
      <Footer />
    </div>
  );
}
