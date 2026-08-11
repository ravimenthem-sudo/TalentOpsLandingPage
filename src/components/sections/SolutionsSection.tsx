import React from "react";
import { Clock, ShieldCheck, TrendingUp, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function SolutionsSection() {
  const challenges = [
    {
      icon: <Clock className="w-8 h-8 text-rose-500" />,
      title: "Eliminate 80% of Manual HR Administration",
      subtitle: "Stop wasting hours on data entry and email chains.",
      details: "Automate repetitive tasks like leave approvals and data entry. Employee updates instantly sync across payroll, benefits, and core HR.",
      color: "rose",
      metrics: ["Save 15+ hours per week on admin tasks", "Zero manual data entry errors"]
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: "Unify the Entire Employee Journey",
      subtitle: "Connect fragmented systems into one seamless experience.",
      details: "Candidate data flows directly into automated onboarding, provisioning software and payroll. Eliminate manual CSV exports between disconnected tools.",
      color: "indigo",
      metrics: ["Reduce onboarding time by 60%", "100% data consistency across tools"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-500" />,
      title: "Drive High Performance & Accountability",
      subtitle: "Align daily work with top-level business objectives.",
      details: "Go beyond annual reviews with continuous 360-degree feedback and OKR tracking. Proactively lead with real-time dashboards on top performers.",
      color: "emerald",
      metrics: ["Increase employee engagement by 40%", "Real-time visibility into workforce ROI"]
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-sky-500" />,
      title: "Ensure Bulletproof Compliance & Security",
      subtitle: "Stay ahead of labor laws and secure your data.",
      details: "Meet strict labor regulations with built-in compliance checks and audit trails. Your sensitive data stays secure on SOC2-certified infrastructure.",
      color: "sky",
      metrics: ["100% audit-ready compliance records", "Bank-grade data encryption"]
    }
  ];

  const bgColors: Record<string, string> = {
    rose: 'bg-rose-50/60 border-rose-100 hover:bg-rose-50',
    indigo: 'bg-indigo-50/60 border-indigo-100 hover:bg-indigo-50',
    emerald: 'bg-emerald-50/60 border-emerald-100 hover:bg-emerald-50',
    sky: 'bg-sky-50/60 border-sky-100 hover:bg-sky-50'
  };

  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-slate-50 to-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 text-base font-bold tracking-wide text-indigo-700 bg-indigo-50 rounded-full border border-indigo-100">
            PLATFORM SOLUTIONS
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight text-slate-900 leading-tight">
            How we solve your biggest workforce challenges.
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            TalentOps replaces chaotic spreadsheets and disconnected apps with intelligent, automated solutions designed to scale with your operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {challenges.map((item, idx) => (
            <div key={idx} className={cn("border p-10 rounded-3xl hover:shadow-xl transition-all duration-300 group", bgColors[item.color])}>
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-8",
                `bg-${item.color}-100 border border-${item.color}-200`
              )}>
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <h4 className={cn("text-lg font-semibold mb-6", `text-${item.color}-600`)}>
                {item.subtitle}
              </h4>

              <p className="text-slate-600 leading-relaxed mb-8">
                {item.details}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
