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
      title: "Our mission",
      desc: "Empower organizations with intelligent workforce technology that reduces manual work, improves visibility, and creates better employee experiences."
    },
    {
      icon: <Building2 className="w-6 h-6 text-emerald-600" />,
      bgClass: "bg-emerald-50/70",
      borderClass: "border-emerald-200 hover:border-emerald-400",
      iconBgClass: "bg-emerald-100 group-hover:bg-emerald-200",
      title: "Our vision",
      desc: "Build the workforce operating system that connects hiring, people operations, payroll, performance, and growth in one unified platform."
    },
    {
      icon: <Workflow className="w-6 h-6 text-rose-600" />,
      bgClass: "bg-rose-50/70",
      borderClass: "border-rose-200 hover:border-rose-400",
      iconBgClass: "bg-rose-100 group-hover:bg-rose-200",
      title: "Built for growing businesses",
      desc: "Purpose-built for startups, SMEs, and professional service organizations that need enterprise capability without enterprise complexity."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      bgClass: "bg-amber-50/70",
      borderClass: "border-amber-200 hover:border-amber-400",
      iconBgClass: "bg-amber-100 group-hover:bg-amber-200",
      title: "Our values",
      desc: "Customer-first thinking, operational simplicity, secure by design, and continuous innovation across every stage of the employee lifecycle."
    }
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Built to simplify workforce operations for growing organizations.
          </h2>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            TalentOps is a modern workforce operations platform that helps businesses hire, manage, pay, and grow their teams through one connected system. We combine recruitment, employee management, payroll, attendance, performance, and workforce operations into a single cloud platform designed for clarity, automation, and scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className={cn(
                "flex flex-col p-8 rounded-[24px] border shadow-sm hover:shadow-lg transition-all duration-300 group",
                reason.bgClass,
                reason.borderClass
              )}
            >
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors",
                    reason.iconBgClass
                  )}
                >
                  {reason.icon}
                </div>
                <h3 className="text-[17px] font-bold text-slate-900 group-hover:text-primary-700 transition-colors">
                  {reason.title}
                </h3>
              </div>
              <p className="text-slate-600 text-[15px] leading-relaxed group-hover:text-slate-800 transition-colors">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
