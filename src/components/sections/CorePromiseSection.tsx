import React from "react";
import { UserPlus, UserCog, TrendingUp } from "lucide-react";

export function CorePromiseSection() {
  const pillars = [
    {
      title: "Hire.",
      icon: <UserPlus className="w-8 h-8 text-indigo-600" />,
      desc: "Attract, interview, and onboard the best candidates seamlessly.",
      bg: "bg-indigo-50",
      border: "border-indigo-100",
    },
    {
      title: "Manage.",
      icon: <UserCog className="w-8 h-8 text-emerald-600" />,
      desc: "Centralize employee data, attendance, leave, and daily operations.",
      bg: "bg-emerald-50",
      border: "border-emerald-100",
    },
    {
      title: "Grow.",
      icon: <TrendingUp className="w-8 h-8 text-amber-600" />,
      desc: "Drive high performance with goal tracking and insightful analytics.",
      bg: "bg-amber-50",
      border: "border-amber-100",
    }
  ];

  return (
    <section id="core-promise" className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            TalentOps operates the talents of your organization.
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Stop managing fragmented processes. Start managing a connected workforce lifecycle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-indigo-200 via-emerald-200 to-amber-200 -z-10"></div>

          {pillars.map((pillar, idx) => (
            <div key={idx} className={`relative flex flex-col items-center text-center p-8 rounded-2xl bg-white border shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${pillar.border}`}>
              <div className={`w-20 h-20 rounded-full ${pillar.bg} flex items-center justify-center mb-6 shadow-sm`}>
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
