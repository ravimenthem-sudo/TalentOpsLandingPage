import React from "react";
import { ArrowRight, Users, Briefcase, DollarSign } from "lucide-react";

export function HeroSection({ onBookDemo }: { onBookDemo?: () => void }) {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-900">

      {/* Background Elements */}
      <div className="absolute top-0 inset-x-0 h-full overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=')] opacity-[0.5]" />

        {/* Soft Gradients */}
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-primary-200/40 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-sky-200/40 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left max-w-2xl">

            {/* Supporting Brand Line */}
            <div className="inline-flex items-center gap-2.5 px-6 py-3 mb-8 text-base font-semibold tracking-wide text-primary-200 bg-primary-900/40 rounded-full border border-primary-800 shadow-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-primary-400 animate-pulse"></span>
              HIRE. MANAGE. GROW.
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15] tracking-tight mb-6 w-full text-white">
              From Hiring to High Performance — Manage Your Entire Workforce in One Place.
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-medium pr-8">
              TalentOps brings recruitment, employee management, payroll, performance and workforce operations together in one connected platform built for growing businesses.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onBookDemo}
                className="group relative h-14 px-8 text-base font-bold rounded-md bg-primary-600 text-white overflow-hidden shadow-premium transition-all hover:-translate-y-1 hover:shadow-primary-600/30 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a Demo <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Image with Floating Cards */}
          <div className="relative h-[600px] w-full flex items-center justify-center hidden lg:flex">

            {/* Central Image */}
            <div className="relative w-full max-w-[550px] z-10">
              <div className="absolute inset-0 bg-indigo-500/20 blur-[120px] rounded-full"></div>
              <img
                src="/ai_professional_woman.png"
                alt="TalentOps Platform Overview"
                className="w-full h-auto object-contain drop-shadow-2xl relative z-10"
                onError={(e) => { e.currentTarget.src = "/hr-woman.png"; }}
              />
            </div>

            {/* Floating Card 1: Total Employees (Top Left) */}
            <div className="absolute top-[5%] left-[-10%] bg-white p-3 rounded-2xl shadow-xl border border-slate-100 z-20 w-48 animate-float">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-[10px] font-semibold text-slate-500">Total Employees</div>
                  <div className="text-lg font-black text-slate-900 mt-0.5">12,845</div>
                </div>
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                  <Users className="w-3 h-3" />
                </div>
              </div>
              <div className="text-[10px] font-semibold text-emerald-500 mb-2">+12.5% <span className="text-slate-400 font-medium">from last month</span></div>
              <div className="w-full h-6 flex items-end gap-1">
                <svg viewBox="0 0 100 20" className="w-full h-full overflow-visible">
                  <path d="M0,15 L20,12 L40,18 L60,8 L80,10 L100,0" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Floating Card 2: Attendance (Middle Left) */}
            <div className="absolute top-[40%] left-[-5%] bg-white p-3 rounded-2xl shadow-xl border border-slate-100 z-30 w-48 animate-float-delayed">
              <div className="text-[10px] font-semibold text-slate-500 mb-2">Attendance Overview</div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full border-2 border-indigo-600 flex items-center justify-center border-l-indigo-100">
                  <span className="text-[10px] font-black text-slate-900">95%</span>
                </div>
                <div className="text-[10px] font-bold text-slate-400">Present Today</div>
              </div>
              <div className="text-[8px] font-bold border-t border-slate-100 pt-2 flex justify-between w-full">
                <span className="text-indigo-600">Present <span className="text-slate-900">11k</span></span>
                <span className="text-slate-300">|</span>
                <span className="text-rose-500">Absent <span className="text-slate-900">568</span></span>
                <span className="text-slate-300">|</span>
                <span className="text-slate-500">Leave <span className="text-slate-900">775</span></span>
              </div>
            </div>

            {/* Floating Card 3: Payroll (Bottom Left) */}
            <div className="absolute bottom-[5%] left-[-5%] bg-white p-3 rounded-2xl shadow-xl border border-slate-100 z-20 w-48 animate-float">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
                  <DollarSign className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-slate-500">Payroll Processed</div>
                  <div className="text-lg font-black text-slate-900 mt-0.5">₹ 8.45 Cr</div>
                </div>
              </div>
              <div className="text-[10px] font-semibold text-slate-400 flex justify-between items-end">
                <span>This Month</span>
                <div className="flex gap-1">
                  {[4, 7, 5, 8, 6, 9].map((h, i) => <div key={i} className="w-1 bg-indigo-200 rounded-full" style={{ height: `${h * 3}px` }}></div>)}
                </div>
              </div>
            </div>

            {/* Floating Card 4: Performance (Top Right) */}
            <div className="absolute top-[10%] right-[-10%] bg-white p-3 rounded-2xl shadow-xl border border-slate-100 z-20 w-48 animate-float-delayed">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-[10px] font-semibold text-slate-500">Performance Score</div>
                  <div className="text-lg font-black text-slate-900 mt-0.5">4.7<span className="text-xs text-slate-400 font-medium">/5</span></div>
                </div>
                <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
              </div>
              <div className="text-[10px] font-semibold text-emerald-500 mb-2">+0.3 <span className="text-slate-400 font-medium">from last quarter</span></div>
              <div className="w-full h-6 flex items-end gap-1">
                <svg viewBox="0 0 100 20" className="w-full h-full overflow-visible">
                  <path d="M0,18 L20,19 L40,15 L60,10 L80,12 L100,5" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Floating Card 5: Leave Requests (Middle Right) */}
            <div className="absolute top-[45%] right-[-15%] bg-white p-3 rounded-2xl shadow-xl border border-slate-100 z-30 w-48 animate-float">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-[10px] font-semibold text-slate-500">Leave Requests</div>
                  <div className="text-xl font-black text-slate-900 mt-1 mb-1">128</div>
                  <div className="text-[9px] font-semibold text-slate-400">Pending Requests</div>
                </div>
                <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
              </div>
            </div>

            {/* Floating Card 6: Engagement (Bottom Right) */}
            <div className="absolute bottom-[15%] right-[-5%] bg-white p-3 rounded-2xl shadow-xl border border-slate-100 z-20 w-48 animate-float-delayed">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-[10px] font-semibold text-slate-500">Employee Engagement</div>
                  <div className="text-xl font-black text-slate-900 mt-1 mb-1">92%</div>
                  <div className="text-[9px] font-semibold text-slate-400">Engagement Score</div>
                </div>
                <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
