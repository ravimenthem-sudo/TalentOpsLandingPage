"use client";
import React from "react";
import { 
  Users, Clock, CalendarDays, Wallet, 
  Target, Network, MessageSquare, Calendar, 
  Headset, BarChart4, ShieldCheck, ArrowRight 
} from "lucide-react";

export function CoreFeaturesSection() {
  const features = [
    { icon: Users, title: "Employee\nManagement", bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200", hoverBg: "group-hover:bg-blue-600", shadow: "group-hover:shadow-blue-500/30", hoverText: "group-hover:text-blue-600" },
    { icon: Clock, title: "Attendance &\nTimecards", bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200", hoverBg: "group-hover:bg-purple-600", shadow: "group-hover:shadow-purple-500/30", hoverText: "group-hover:text-purple-600" },
    { icon: CalendarDays, title: "Leave\nManagement", bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200", hoverBg: "group-hover:bg-emerald-600", shadow: "group-hover:shadow-emerald-500/30", hoverText: "group-hover:text-emerald-600" },
    { icon: Wallet, title: "Payroll &\nPayslips", bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200", hoverBg: "group-hover:bg-amber-600", shadow: "group-hover:shadow-amber-500/30", hoverText: "group-hover:text-amber-600" },
    { icon: Target, title: "Performance\nReviews", bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-200", hoverBg: "group-hover:bg-rose-600", shadow: "group-hover:shadow-rose-500/30", hoverText: "group-hover:text-rose-600" },
    { icon: Network, title: "Organization\nHierarchy", bg: "bg-cyan-50", text: "text-cyan-600", border: "border-cyan-200", hoverBg: "group-hover:bg-cyan-600", shadow: "group-hover:shadow-cyan-500/30", hoverText: "group-hover:text-cyan-600" },
    { icon: MessageSquare, title: "Internal\nMessaging", bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-200", hoverBg: "group-hover:bg-indigo-600", shadow: "group-hover:shadow-indigo-500/30", hoverText: "group-hover:text-indigo-600" },
    { icon: Calendar, title: "Calendar &\nEvents", bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200", hoverBg: "group-hover:bg-teal-600", shadow: "group-hover:shadow-teal-500/30", hoverText: "group-hover:text-teal-600" },
    { icon: Headset, title: "Helpdesk /\nRaise a Ticket", bg: "bg-fuchsia-50", text: "text-fuchsia-600", border: "border-fuchsia-200", hoverBg: "group-hover:bg-fuchsia-600", shadow: "group-hover:shadow-fuchsia-500/30", hoverText: "group-hover:text-fuchsia-600" },
    { icon: BarChart4, title: "Reports &\nAnalytics", bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200", hoverBg: "group-hover:bg-orange-600", shadow: "group-hover:shadow-orange-500/30", hoverText: "group-hover:text-orange-600" },
    { icon: ShieldCheck, title: "Role-Based\nAccess & Security", bg: "bg-violet-50", text: "text-violet-600", border: "border-violet-200", hoverBg: "group-hover:bg-violet-600", shadow: "group-hover:shadow-violet-500/30", hoverText: "group-hover:text-violet-600" },
  ];

  return (
    <section className="pb-16 pt-8 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-blue-600 font-semibold tracking-wider text-lg uppercase">
            CORE FEATURES
          </div>
        </div>
      </div>

      {/* Full-width edge-to-edge box */}
      <div className="bg-white border-y border-slate-200 py-12 shadow-md w-full overflow-hidden pause-marquee relative">
        
        {/* Subtle gradient fades for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>

        <div className="flex whitespace-nowrap">
          {/* First set of items */}
          <div className="flex gap-16 px-8 animate-marquee min-w-max">
            {features.map((feature, i) => (
              <div key={i} className="flex flex-col items-center justify-start group cursor-pointer w-[160px]">
                <div className={`w-20 h-20 rounded-2xl ${feature.bg} border ${feature.border} shadow-sm flex items-center justify-center mb-5 ${feature.text} ${feature.hoverBg} group-hover:text-white group-hover:border-transparent group-hover:-translate-y-2 group-hover:shadow-lg ${feature.shadow} transition-all duration-300`}>
                  <feature.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h4 className={`font-semibold text-slate-700 text-[15px] leading-snug text-center ${feature.hoverText} transition-colors whitespace-pre-line`}>
                  {feature.title}
                </h4>
              </div>
            ))}
          </div>
          
          {/* Second identical set for seamless looping */}
          <div className="flex gap-16 px-8 animate-marquee min-w-max" aria-hidden="true">
            {features.map((feature, i) => (
              <div key={`dup-${i}`} className="flex flex-col items-center justify-start group cursor-pointer w-[160px]">
                <div className={`w-20 h-20 rounded-2xl ${feature.bg} border ${feature.border} shadow-sm flex items-center justify-center mb-5 ${feature.text} ${feature.hoverBg} group-hover:text-white group-hover:border-transparent group-hover:-translate-y-2 group-hover:shadow-lg ${feature.shadow} transition-all duration-300`}>
                  <feature.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h4 className={`font-semibold text-slate-700 text-[15px] leading-snug text-center ${feature.hoverText} transition-colors whitespace-pre-line`}>
                  {feature.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
