"use client";
import React, { useState } from "react";
import { LineChart, Timer, Zap, Monitor, Eye, ShieldCheck, ChevronDown } from "lucide-react";

export function BusinessBenefitsSection() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const benefits = [
    { icon: LineChart, value: "70%", label: "Reduction in Administrative Effort", description: "Automate routine tasks and paperwork, freeing up your HR team to focus on strategic initiatives.", color: "text-blue-600", bg: "bg-blue-50/80", activeBg: "bg-blue-600", activeText: "text-white" },
    { icon: Timer, value: "50%", label: "Faster Payroll Processing", description: "Eliminate manual data entry and errors with automated payroll calculation and instant deposits.", color: "text-purple-600", bg: "bg-purple-50/80", activeBg: "bg-purple-600", activeText: "text-white" },
    { icon: Zap, value: "3x", label: "Faster Approval Workflows", description: "Streamline leave requests and expenses with customizable multi-level approval chains.", color: "text-amber-600", bg: "bg-amber-50/80", activeBg: "bg-amber-500", activeText: "text-white" },
    { icon: Monitor, value: "99.9%", label: "Platform Uptime", description: "Rely on a cloud infrastructure built for high availability and constant accessibility.", color: "text-emerald-600", bg: "bg-emerald-50/80", activeBg: "bg-emerald-600", activeText: "text-white" },
    { icon: Eye, value: "100%", label: "Real-time Workforce Visibility", description: "Gain instant insights into attendance, performance metrics, and team productivity from a single dashboard.", color: "text-indigo-600", bg: "bg-indigo-50/80", activeBg: "bg-indigo-600", activeText: "text-white" },
    { icon: ShieldCheck, value: "Enterprise", label: "Grade Security Architecture", description: "Keep your sensitive employee data protected with end-to-end encryption and SOC2 compliance.", color: "text-rose-600", bg: "bg-rose-50/80", activeBg: "bg-rose-600", activeText: "text-white" },
  ];

  return (
    <section className="py-24 bg-[#FAFAFC] border-b border-slate-100 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 flex flex-col items-center justify-center text-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-2 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-sm font-bold uppercase tracking-widest">
            Business Benefits
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 tracking-tight max-w-3xl">
            The measurable impact of <span className="text-blue-600">TalentOps</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl leading-relaxed mt-2">
            See how our platform transforms organizations by delivering real, quantifiable results.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {benefits.map((benefit, i) => {
            const isActive = activeTab === i;
            
            return (
              <button
                key={i}
                onClick={() => setActiveTab(isActive ? null : i)}
                className={`w-full text-left transition-all duration-300 rounded-3xl p-6 sm:p-8 border-2 ${
                  isActive 
                    ? `${benefit.activeBg} border-transparent shadow-xl scale-[1.01]` 
                    : `${benefit.bg} border-transparent hover:shadow-md hover:scale-[1.005]`
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 flex-shrink-0 rounded-2xl flex items-center justify-center transition-colors duration-300 bg-white shadow-sm ${
                      isActive ? benefit.color : benefit.color
                    }`}>
                      <benefit.icon className="w-8 h-8" strokeWidth={isActive ? 2.5 : 2} />
                    </div>
                    <div>
                      <div className={`font-extrabold transition-colors duration-300 ${isActive ? 'text-white text-2xl' : 'text-slate-800 text-xl'}`}>
                        {benefit.label}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    {/* Numbers have been removed from here */}
                    {/* Chevron Indicator */}
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'rotate-180 bg-white/20 text-white' 
                        : 'bg-white text-slate-400 shadow-sm'
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                {/* Expandable Description */}
                <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] mt-6 opacity-100' : 'grid-rows-[0fr] mt-0 opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className={`text-lg leading-relaxed pl-22 sm:ml-22 sm:pl-0 sm:pr-24 ${isActive ? 'text-white/90' : 'text-slate-600'}`}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
