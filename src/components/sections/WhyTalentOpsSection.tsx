import React from "react";
import { Link2, Building2, Workflow, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function WhyTalentOpsSection() {
  const reasons = [
    {
      icon: <Link2 className="w-6 h-6 text-indigo-600" />,
      bgClass: "bg-indigo-50/70",
      borderClass: "border-indigo-200 hover:border-indigo-400",
      iconBgClass: "bg-indigo-100 group-hover:bg-indigo-200",
      title: "One Connected Workforce",
      desc: "No more data silos. Your recruitment pipeline flows directly into onboarding, which flows directly into payroll and performance."
    },
    {
      icon: <Building2 className="w-6 h-6 text-emerald-600" />,
      bgClass: "bg-emerald-50/70",
      borderClass: "border-emerald-200 hover:border-emerald-400",
      iconBgClass: "bg-emerald-100 group-hover:bg-emerald-200",
      title: "Built for Growing Businesses",
      desc: "Designed specifically for professional service organizations scaling their teams, striking the perfect balance between simplicity and enterprise power."
    },
    {
      icon: <Workflow className="w-6 h-6 text-rose-600" />,
      bgClass: "bg-rose-50/70",
      borderClass: "border-rose-200 hover:border-rose-400",
      iconBgClass: "bg-rose-100 group-hover:bg-rose-200",
      title: "Software + Recruitment Expertise",
      desc: "The only platform that doesn't just give you the tools to manage talent, but actively helps you find and hire them through our Agency service."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      bgClass: "bg-amber-50/70",
      borderClass: "border-amber-200 hover:border-amber-400",
      iconBgClass: "bg-amber-100 group-hover:bg-amber-200",
      title: "Employee-Lifecycle Approach",
      desc: "We don't treat HR as separate administrative tasks. We treat it as one continuous journey from candidate to high-performing employee."
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Why growing businesses choose TalentOps.
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            We built TalentOps to solve the specific operational challenges of modern, people-driven organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className={cn(
                "flex flex-col sm:flex-row gap-6 p-8 rounded-3xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group",
                reason.bgClass, reason.borderClass
              )}
            >
              <div 
                className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-colors",
                  reason.iconBgClass
                )}
              >
                {reason.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors">{reason.title}</h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
