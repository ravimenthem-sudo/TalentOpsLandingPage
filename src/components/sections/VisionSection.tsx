"use client";
import React from "react";
import { motion } from "framer-motion";

export function VisionSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#0a101f] text-center flex flex-col items-center justify-center border-b-[2px] border-white">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }} 
      />
      {/* Subtle Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center justify-center px-8 py-2.5 rounded-full bg-[#1e3a8a] text-blue-100 font-bold text-lg mb-8">
            Our Vision
          </div>
          
          {/* Heading */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-tight whitespace-nowrap">
            Building the future of <span className="text-[#38bdf8]">Workforce Operations</span>
          </h2>
          
          {/* Paragraph */}
          <p className="text-[15px] md:text-[17px] text-slate-300 leading-relaxed font-normal max-w-[54rem] mx-auto mt-4">
            Our vision is to build an intelligent workforce operating system that enables organizations to manage people, automate operations, and create exceptional employee experiences through innovation and technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
