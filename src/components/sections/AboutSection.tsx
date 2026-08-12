"use client";
import React from "react";
import { Users, GitMerge, Clock, LineChart, ShieldCheck, Smartphone, CheckCircle2, ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Content Split */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left side: Image with decorative elements */}
          <div className="lg:col-span-7 relative lg:-ml-12 xl:-ml-20">
            {/* Background glowing blobs */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] border border-slate-100 group mt-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent mix-blend-overlay z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
                alt="Team collaborating" 
                className="w-full h-[500px] md:h-[600px] lg:h-[720px] object-cover transform group-hover:scale-[1.03] transition-transform duration-700"
              />
              

            </div>
          </div>

          {/* Right side: Content */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-blue-600"></span>
              <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">About TalentOps</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-[1.15]">
              Transform your workforce with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">intelligent operations.</span>
            </h2>
            
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Stop wrestling with fragmented HR tools. TalentOps unifies your entire employee lifecycle—from seamless onboarding to performance management—into one intuitive platform. Empower your team with automation and insights that let you focus on what truly matters: your people.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { title: "Eliminate manual data entry", desc: "Automate paperwork and focus on real work." },
                { title: "Boost employee engagement", desc: "Create a culture of retention and growth." },
                { title: "Make data-driven decisions", desc: "Real-time HR analytics at your fingertips." }
              ].map((item, i) => {
                const [isOpen, setIsOpen] = React.useState(false);
                return (
                  <button 
                    key={i} 
                    onClick={() => setIsOpen(!isOpen)}
                    className="group flex flex-col items-start gap-0 text-slate-700 bg-white border border-slate-100 p-4 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(59,130,246,0.15)] hover:border-blue-100 transition-all duration-300 relative overflow-hidden text-left w-full"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    
                    <div className="flex items-center gap-4 w-full">
                      <div className="bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300 p-2 rounded-xl shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1 flex justify-between items-center">
                        <h4 className="font-bold text-slate-900 text-[15px]">{item.title}</h4>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-blue-500 transition-colors">
                          {isOpen ? "CLOSE" : "CLICK TO OPEN"}
                        </span>
                      </div>
                    </div>

                    <div className={`grid transition-all duration-300 ease-in-out w-full ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                      <div className="overflow-hidden">
                        <p className="text-sm text-slate-500 pl-[3.25rem]">{item.desc}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        </div>

      </div>

      <style>
        {`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 20s linear infinite;
            width: max-content;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Features Horizontal Marquee (Full Width) */}
      <div className="py-6 w-full z-30 bg-white/80 backdrop-blur-xl border-y border-slate-100 shadow-sm overflow-hidden relative">
        {/* Gradient masks for smooth fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-infinite-scroll hover:[animation-play-state:paused]">
          {[
            { icon: Users, label: "Centralized Data", bg: "bg-blue-50", text: "text-blue-600" },
            { icon: GitMerge, label: "Automated Workflows", bg: "bg-purple-50", text: "text-purple-600" },
            { icon: Clock, label: "Real-time Tracking", bg: "bg-emerald-50", text: "text-emerald-600" },
            { icon: LineChart, label: "Actionable Insights", bg: "bg-rose-50", text: "text-rose-600" },
            { icon: ShieldCheck, label: "Secure & Compliant", bg: "bg-amber-50", text: "text-amber-600" },
            { icon: Smartphone, label: "Mobile Accessible", bg: "bg-cyan-50", text: "text-cyan-600" },
            // Duplicated for seamless infinite scrolling
            { icon: Users, label: "Centralized Data", bg: "bg-blue-50", text: "text-blue-600" },
            { icon: GitMerge, label: "Automated Workflows", bg: "bg-purple-50", text: "text-purple-600" },
            { icon: Clock, label: "Real-time Tracking", bg: "bg-emerald-50", text: "text-emerald-600" },
            { icon: LineChart, label: "Actionable Insights", bg: "bg-rose-50", text: "text-rose-600" },
            { icon: ShieldCheck, label: "Secure & Compliant", bg: "bg-amber-50", text: "text-amber-600" },
            { icon: Smartphone, label: "Mobile Accessible", bg: "bg-cyan-50", text: "text-cyan-600" },
          ].map((feature, i) => (
            <div key={i} className={`flex items-center gap-4 px-6 py-3 rounded-2xl mx-3 shrink-0 ${feature.bg}`}>
              <div className={`w-12 h-12 rounded-xl bg-white ${feature.text} flex items-center justify-center shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.06)]`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <span className={`text-[14px] font-bold ${feature.text} whitespace-nowrap`}>
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
