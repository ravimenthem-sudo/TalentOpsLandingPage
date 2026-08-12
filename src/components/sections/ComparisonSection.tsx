"use client";
import React from "react";
import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export function ComparisonSection() {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-primary-600 font-semibold tracking-wide text-sm uppercase mb-3">The Choice is Clear</div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Why Businesses Choose TalentOps</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how TalentOps compares to traditional, disconnected HR systems.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Traditional Systems */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200"
          >
            <h3 className="text-xl font-bold text-slate-600 mb-8 line-through decoration-slate-400">Traditional HR Systems</h3>
            <ul className="space-y-6">
              {[
                "Multiple disconnected tools",
                "Manual processes",
                "Limited visibility",
                "Complex workflows",
                "Difficult scaling"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-slate-500" />
                  </div>
                  <span className="text-slate-600 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* TalentOps */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="bg-gradient-to-br from-primary-600 to-primary-800 border border-primary-500 rounded-2xl p-8 md:p-10 shadow-xl relative overflow-hidden text-white"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-2xl font-display font-bold mb-8 relative z-10 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 border border-white/30 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl leading-none">T</span>
              </div>
              TalentOps
            </h3>
            <ul className="space-y-6 relative z-10">
              {[
                "One unified platform",
                "Modern employee experience",
                "Operational efficiency",
                "Cloud-first architecture",
                "Reliable, secure, and scalable",
                "Built for growing organizations"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-white/20 border border-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-primary-50 font-medium text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
