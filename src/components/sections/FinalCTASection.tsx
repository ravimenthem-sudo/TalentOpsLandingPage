import React from "react";
import { ArrowRight } from "lucide-react";

export function FinalCTASection({ onBookDemo }: { onBookDemo?: () => void }) {
  return (
    <section className="py-24 bg-primary-600 relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[150%] bg-white opacity-5 transform rotate-12"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[30%] h-[100%] bg-white opacity-5 transform -rotate-12"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
          Ready to operate your talent?
        </h2>
        <p className="text-xl text-primary-100 mb-10 leading-relaxed font-medium">
          Join growing organizations that have connected their workforce from hiring to high performance.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onBookDemo}
            className="h-14 px-10 text-lg font-bold rounded-md bg-white text-primary-700 hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center gap-2 group w-full sm:w-auto"
          >
            Book a Demo
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
