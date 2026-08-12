import React, { useState } from "react";
import { Magnet, UserCheck, Handshake, Users, DollarSign, Target, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function TalentLifecycleSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      name: "Attract", 
      icon: <Magnet className="w-5 h-5" />, 
      color: "indigo",
      bgClass: "bg-indigo-100 text-indigo-700",
      activeBg: "bg-indigo-600 text-white",
      title: "Attract & Recruit Top Talent",
      desc: "Bring potential talent into the organization with powerful sourcing tools.",
      features: ["Custom branded career pages", "Multi-board job postings", "Candidate pipeline tracking"]
    },
    { 
      name: "Hire", 
      icon: <UserCheck className="w-5 h-5" />, 
      color: "blue",
      bgClass: "bg-blue-100 text-blue-700",
      activeBg: "bg-blue-600 text-white",
      title: "Hire the Right Candidates",
      desc: "Manage the entire hiring process seamlessly and select the best candidates.",
      features: ["Structured interview scorecards", "Automated offer letters", "Collaborative hiring workflows"]
    },
    { 
      name: "Onboard", 
      icon: <Handshake className="w-5 h-5" />, 
      color: "cyan",
      bgClass: "bg-cyan-100 text-cyan-700",
      activeBg: "bg-cyan-600 text-white",
      title: "Smooth Onboarding Experience",
      desc: "Bring new employees into the organization with automated, paperless onboarding.",
      features: ["Digital document signing", "Automated welcome emails", "Role-based task assignments"]
    },
    { 
      name: "Manage", 
      icon: <Users className="w-5 h-5" />, 
      color: "emerald",
      bgClass: "bg-emerald-100 text-emerald-700",
      activeBg: "bg-emerald-600 text-white",
      title: "Centralized People Operations",
      desc: "Manage employee information, attendance, and day-to-day workforce operations.",
      features: ["Centralized employee directory", "Real-time attendance tracking", "Automated leave management"]
    },
    { 
      name: "Pay", 
      icon: <DollarSign className="w-5 h-5" />, 
      color: "amber",
      bgClass: "bg-amber-100 text-amber-700",
      activeBg: "bg-amber-500 text-white",
      title: "Accurate & Compliant Payroll",
      desc: "Manage salary processing, tax compliance, and automated payslip generation.",
      features: ["One-click payroll runs", "Automated tax calculations", "Self-service payslip portals"]
    },
    { 
      name: "Perform", 
      icon: <Target className="w-5 h-5" />, 
      color: "orange",
      bgClass: "bg-orange-100 text-orange-700",
      activeBg: "bg-orange-500 text-white",
      title: "Drive High Performance",
      desc: "Manage employee performance, align goals, and conduct continuous reviews.",
      features: ["360-degree performance reviews", "OKR and goal tracking", "Continuous feedback loops"]
    },
    { 
      name: "Grow", 
      icon: <TrendingUp className="w-5 h-5" />, 
      color: "rose",
      bgClass: "bg-rose-100 text-rose-700",
      activeBg: "bg-rose-600 text-white",
      title: "Build a Stronger Organization",
      desc: "Use workforce insights and analytics to retain top talent and grow your business.",
      features: ["Flight risk analysis dashboards", "Employee satisfaction surveys", "Career progression tracking"]
    },
  ];

  const activeData = steps[activeStep];

  return (
    <section className="py-24 bg-[#0f172a] overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold tracking-wide text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20">
            THE EMPLOYEE JOURNEY
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            One Connected Talent Lifecycle.
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            TalentOps brings every stage of the employee journey into a single, unified system. Data flows seamlessly from the moment a candidate applies to their highest-performing day.
          </p>
        </div>

        {/* Interactive Tabs */}
        <div className="w-full max-w-5xl mx-auto mb-10">
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <button 
                  key={idx} 
                  onClick={() => setActiveStep(idx)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-3 rounded-xl font-bold transition-all duration-300 border-2",
                    isActive 
                      ? `${step.activeBg} border-transparent shadow-lg scale-105` 
                      : `bg-[#1e293b] text-slate-400 border-slate-700 hover:border-slate-500 hover:text-white hover:bg-slate-800`
                  )}
                >
                  <div className={cn("flex items-center justify-center", isActive ? "text-white" : "")}>
                    {step.icon}
                  </div>
                  <span>{step.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Card Display */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1e293b] rounded-3xl border border-slate-700 shadow-2xl p-8 md:p-12 transition-all duration-500 relative overflow-hidden">
            {/* Background decorative gradient */}
            <div className={cn(
              "absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[100px] opacity-20 pointer-events-none transition-colors duration-500",
              `bg-${activeData.color}-500`
            )}></div>

            <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
              <div>

                <h3 className="text-3xl font-extrabold text-white mb-4">
                  {activeData.title}
                </h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  {activeData.desc}
                </p>
                <div className="space-y-4">
                  {activeData.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={cn("w-6 h-6 shrink-0", `text-${activeData.color}-400`)} />
                      <span className="font-semibold text-slate-200">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#0f172a] rounded-2xl border border-slate-700 p-8 flex flex-col items-center justify-center text-center shadow-inner h-full min-h-[300px]">
                <div className={cn(
                  "w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-lg",
                  activeData.bgClass
                )}>
                  {React.cloneElement(activeData.icon, { className: "w-12 h-12" })}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{activeData.name} Phase</h4>
                <p className="text-slate-400 font-medium">Fully integrated into the TalentOps platform.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
