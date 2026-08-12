"use client";
import React from "react";
import { CheckCircle2, ArrowRight, BrainCircuit, Layers, Zap, Heart, Activity, Shield, TrendingUp } from "lucide-react";

export function AiAutomationSection() {
  const reasons = [
    { title: "One Unified Platform", desc: "Replace multiple HR tools with a single integrated system.", icon: Layers, color: "text-blue-700", bg: "bg-blue-200", border: "group-hover:border-blue-300", shadow: "group-hover:shadow-blue-500/20", cardBg: "bg-blue-100", titleHover: "group-hover:text-blue-700" },
    { title: "Automation That Saves Time", desc: "Reduce manual work through intelligent workflows and approvals.", icon: Zap, color: "text-amber-700", bg: "bg-amber-200", border: "group-hover:border-amber-300", shadow: "group-hover:shadow-amber-500/20", cardBg: "bg-amber-100", titleHover: "group-hover:text-amber-700" },
    { title: "Better Employee Experience", desc: "Provide a modern self-service experience employees actually enjoy using.", icon: Heart, color: "text-rose-700", bg: "bg-rose-200", border: "group-hover:border-rose-300", shadow: "group-hover:shadow-rose-500/20", cardBg: "bg-rose-100", titleHover: "group-hover:text-rose-700" },
    { title: "Real-time Visibility", desc: "Track workforce operations across teams, locations, and departments instantly.", icon: Activity, color: "text-emerald-700", bg: "bg-emerald-200", border: "group-hover:border-emerald-300", shadow: "group-hover:shadow-emerald-500/20", cardBg: "bg-emerald-100", titleHover: "group-hover:text-emerald-700" },
    { title: "Enterprise Security", desc: "Built with encryption, access controls, audit logs, and cloud-native security.", icon: Shield, color: "text-indigo-700", bg: "bg-indigo-200", border: "group-hover:border-indigo-300", shadow: "group-hover:shadow-indigo-500/20", cardBg: "bg-indigo-100", titleHover: "group-hover:text-indigo-700" },
    { title: "Built to Scale", desc: "Support organizations from start-ups to enterprises with thousands of employees.", icon: TrendingUp, color: "text-purple-700", bg: "bg-purple-200", border: "group-hover:border-purple-300", shadow: "group-hover:shadow-purple-500/20", cardBg: "bg-purple-100", titleHover: "group-hover:text-purple-700" },
  ];

  return (
    <section className="py-24 bg-slate-50 relative border-b border-slate-100">
      <div className="max-w-[1500px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12">
          <div className="text-blue-600 font-semibold tracking-wider text-lg uppercase mb-3">
            WHY BUSINESSES CHOOSE TALENTOPS
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, i) => (
            <div 
              key={i} 
              className={`p-6 rounded-2xl ${reason.cardBg} border border-transparent ${reason.border} hover:shadow-xl ${reason.shadow} transition-all duration-300 group cursor-pointer`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${reason.bg} ${reason.color}`}>
                <reason.icon className="w-6 h-6" />
              </div>
              <h4 className={`font-bold text-slate-900 text-[16px] mb-2 transition-colors ${reason.titleHover}`}>{reason.title}</h4>
              <p className="text-slate-500 text-[14px] leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>

        {/* Full-width AI Card */}
        <div className="w-full bg-gradient-to-br from-slate-900 to-[#0a0f29] rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-2xl border border-slate-800 flex flex-col md:flex-row items-center ring-1 ring-white/10 group">
          {/* Background glowing effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60" />
          
          <div className="relative z-10 w-full md:w-1/2 md:pr-10 flex flex-col mb-10 md:mb-0">
            <div className="flex items-center gap-3 mb-6 font-bold text-3xl md:text-4xl lg:text-5xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 leading-tight">
                AI-Powered Workforce Operations
              </span>
            </div>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              TalentOps uses AI to automate tasks, detect anomalies, predict trends, and help you build a more productive, engaged, and efficient workforce.
            </p>
            
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all duration-300 w-max border border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:-translate-y-1">
              See AI in Action <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative md:absolute md:right-0 md:top-0 md:bottom-0 w-full md:w-1/2 z-0 flex items-center justify-end h-[300px] md:h-auto">
              <img 
                src="/images/ai_abstract_sphere.png" 
                alt="AI Abstract Sphere" 
                className="w-full h-full object-cover object-center absolute inset-0 scale-[1.15] transition-transform duration-700 group-hover:scale-[1.25]"
                style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%)', maskImage: 'linear-gradient(to right, transparent 0%, black 25%)' }}
              />
          </div>
        </div>
      </div>
    </section>
  );
}
