"use client";
import React from "react";
import { motion } from "framer-motion";

export function MetricsSection() {
  const metrics = [
    { value: "10,000+", label: "Employees Managed" },
    { value: "500+", label: "Organizations" },
    { value: "99.9%", label: "Platform Uptime" },
    { value: "40%", label: "Reduction in HR Work" },
    { value: "95%", label: "Self-Service Adoption" },
  ];

  return (
    <section className="py-12 border-y border-white/10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {metrics.map((metric, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.9, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, type: "spring", bounce: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-brand-400 mb-1">{metric.value}</div>
              <div className="text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
