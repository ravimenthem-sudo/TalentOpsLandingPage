"use client";
import React from "react";

export function DashboardShowcaseSection() {
  return (
    <section className="py-24 bg-slate-50 relative border-b border-slate-100 overflow-hidden" id="preview">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-blue-600 font-semibold tracking-wider text-sm uppercase mb-3">
            PRODUCT PREVIEW
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
            Powerful. Intuitive. <br/> Built for Modern Work.
          </h2>
        </div>

        {/* The 3 overlapping screenshots */}
        <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[600px] flex items-center justify-center">
          
          {/* Left: Pie Chart widget */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 md:w-80 bg-white rounded-xl shadow-2xl border border-slate-200 p-5 z-10 hidden md:block">
            <h4 className="text-xs font-semibold text-slate-800 mb-4">Department Budget</h4>
            <div className="w-32 h-32 rounded-full border-8 border-blue-500 mx-auto mb-4 border-r-emerald-400 border-b-purple-400"></div>
            <div className="space-y-2">
              <div className="flex justify-between text-[10px]">
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-blue-500 rounded-full"></span>Engineering</span>
                <span className="font-semibold text-slate-700">45%</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-emerald-400 rounded-full"></span>Marketing</span>
                <span className="font-semibold text-slate-700">30%</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="flex items-center gap-1"><span className="w-2 h-2 bg-purple-400 rounded-full"></span>Sales</span>
                <span className="font-semibold text-slate-700">25%</span>
              </div>
            </div>
          </div>

          {/* Center: Main App Window */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[90%] md:w-[700px] h-full bg-[#1e293b] rounded-xl shadow-2xl border border-slate-700 overflow-hidden z-20 flex flex-col">
            <div className="h-12 border-b border-slate-700 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
            </div>
            <div className="flex-1 p-6">
              <h3 className="text-white font-bold mb-4">Employees</h3>
              <div className="space-y-3">
                {[1,2,3,4,5,6].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-800/50 border border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-600"></div>
                      <div>
                        <div className="w-24 h-2.5 bg-slate-600 rounded mb-1"></div>
                        <div className="w-16 h-2 bg-slate-700 rounded"></div>
                      </div>
                    </div>
                    <div className="w-16 h-2 bg-slate-700 rounded hidden sm:block"></div>
                    <div className="w-16 h-2 bg-slate-700 rounded hidden sm:block"></div>
                    <div className="w-8 h-4 bg-emerald-500/20 text-emerald-400 rounded flex items-center justify-center text-[8px] font-bold">Active</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Overlapping small card on main window */}
            <div className="absolute bottom-8 right-8 bg-white rounded-xl shadow-lg border border-slate-200 p-4 w-48">
              <h4 className="text-[10px] font-semibold text-slate-500 mb-1">Monthly Attendance</h4>
              <div className="text-2xl font-bold text-slate-800">88.6%</div>
              <div className="text-[10px] text-emerald-500 font-medium">+4.5% vs last month</div>
            </div>
          </div>

          {/* Right: Mobile App */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-56 h-[400px] bg-white rounded-3xl shadow-2xl border-4 border-slate-200 p-4 z-30 hidden lg:flex flex-col">
            <div className="flex justify-between items-center mb-6">
               <div className="w-4 h-4 bg-slate-200 rounded"></div>
               <div className="text-xs font-bold">Attendance</div>
               <div className="w-4 h-4 bg-slate-200 rounded"></div>
            </div>
            <div className="text-center font-bold text-slate-800 mb-4">May 2023</div>
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-semibold text-slate-400 mb-2">
              <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] text-slate-700 font-medium mb-6">
              {[...Array(31)].map((_, i) => (
                <div key={i} className={`p-1 rounded-full ${i===15 ? 'bg-blue-600 text-white' : i===10||i===11 ? 'bg-rose-100 text-rose-600' : ''}`}>{i+1}</div>
              ))}
            </div>
            
            <div className="mt-auto bg-slate-50 rounded-xl p-3 border border-slate-100">
              <div className="text-[10px] text-slate-500 mb-1">Attendance Rate</div>
              <div className="text-lg font-bold text-slate-800">95.4%</div>
              <div className="text-[10px] text-blue-600 font-semibold text-right">View Report</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
