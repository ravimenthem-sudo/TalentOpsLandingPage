import React from "react";
import { XCircle, FileSpreadsheet, Unplug, RefreshCcw, EyeOff } from "lucide-react";

export function TheProblemSection() {
  const problems = [
    {
      icon: <FileSpreadsheet className="w-6 h-6 text-rose-500" />,
      title: "Scattered Spreadsheets",
      desc: "Employee data lives across 10 different files, leading to errors and duplicated work."
    },
    {
      icon: <Unplug className="w-6 h-6 text-rose-500" />,
      title: "Disconnected Tools",
      desc: "Hiring doesn't talk to onboarding, and onboarding doesn't talk to payroll."
    },
    {
      icon: <RefreshCcw className="w-6 h-6 text-rose-500" />,
      title: "Manual Processes",
      desc: "HR teams spend hours doing manual data entry instead of focusing on people."
    },
    {
      icon: <EyeOff className="w-6 h-6 text-rose-500" />,
      title: "Poor Visibility",
      desc: "Founders lack a single source of truth for workforce costs, performance, and headcount."
    }
  ];

  return (
    <section className="py-24 bg-[#0B1121] relative overflow-hidden border-y border-slate-800">
      {/* Decorative background blob */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold tracking-wide text-rose-400 bg-rose-500/10 rounded-full border border-rose-500/20">
              <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse"></span>
              THE PROBLEM
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              Fragmented HR is breaking your business.
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Growing professional service organizations run on their people. But managing them with disconnected tools, endless emails, and manual spreadsheets creates a chaotic employee experience and blinds business leaders.
            </p>
            <div className="bg-[#0f172a] p-6 rounded-xl border border-slate-800 shadow-sm border-l-4 border-l-rose-500">
              <p className="text-slate-300 font-medium italic">
                "We were using one tool for hiring, spreadsheets for attendance, and another provider for payroll. It was impossible to know our true headcount."
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {problems.map((prob, i) => (
              <div key={i} className="bg-[#0f172a] p-6 rounded-xl border border-slate-800 shadow-sm hover:border-slate-700 transition-colors">
                <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center mb-4">
                  {prob.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <XCircle className="w-4 h-4 text-rose-500" /> {prob.title}
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {prob.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
