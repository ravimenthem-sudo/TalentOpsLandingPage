"use client";
import React, { useState } from "react";
import { CheckCircle2, Rocket, Briefcase, Building2, ShieldCheck, Cloud, Lock, Headset, RefreshCw, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ActionableInsightsSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      desc: "Perfect for small teams getting started.",
      icon: Rocket,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50",
      price: isAnnual ? "₹799" : "₹999",
      period: "/ month",
      features: [
        "Up to 25 employees",
        "Employee Management",
        "Attendance Tracking",
        "Leave Management",
        "Basic Reports",
        "Email Support"
      ],
      buttonText: "Get Started",
      buttonVariant: "solid",
      popular: false
    },
    {
      name: "Professional",
      desc: "Advanced features for growing businesses.",
      icon: Briefcase,
      iconColor: "text-indigo-600",
      iconBg: "bg-indigo-50",
      price: isAnnual ? "₹2,399" : "₹2,999",
      period: "/ month",
      features: [
        "Up to 200 employees",
        "Everything in Starter",
        "Payroll Integration",
        "Performance Management",
        "Analytics Dashboard",
        "Priority Support"
      ],
      buttonText: "Get Started",
      buttonVariant: "solid",
      popular: true
    },
    {
      name: "Enterprise",
      desc: "For large organizations with complex needs.",
      icon: Building2,
      iconColor: "text-teal-600",
      iconBg: "bg-teal-50",
      price: "Custom",
      period: "Talk to sales",
      features: [
        "Unlimited employees",
        "Everything in Professional",
        "Custom Workflows",
        "SSO & Advanced Security",
        "Advanced Analytics",
        "Dedicated Account Manager",
        "24/7 Priority Support"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "solid",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-950 relative border-b-[16px] border-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold">
            Simple, Transparent Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-6 tracking-tight">
            Plans that scale with your workforce
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            Choose the perfect plan for your organization. Upgrade, downgrade or cancel anytime. No hidden fees, ever.
          </p>
          
          {/* Toggle */}
          <div className="flex items-center justify-center mt-10">
            <div className="bg-slate-900 p-2 rounded-full border border-slate-800 flex items-center shadow-sm">
              <button 
                onClick={() => setIsAnnual(false)}
                className={`px-8 py-3.5 rounded-full text-base font-bold transition-all duration-200 ${!isAnnual ? 'bg-slate-800 text-white shadow-sm border border-slate-700' : 'text-slate-400 hover:text-white'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsAnnual(true)}
                className={`px-8 py-3.5 rounded-full text-base font-bold transition-all duration-200 flex items-center gap-2.5 ${isAnnual ? 'bg-slate-800 text-white shadow-sm border border-slate-700' : 'text-slate-400 hover:text-white'}`}
              >
                Yearly
                <span className="bg-indigo-500/20 text-indigo-300 text-xs uppercase tracking-wider px-2.5 py-1 rounded-full font-bold">Save 20%</span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 w-full items-stretch mb-16">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className="relative flex flex-col bg-slate-900/80 backdrop-blur-sm rounded-3xl transition-all duration-300 border-2 border-indigo-500 shadow-sm hover:shadow-md hover:border-indigo-400 z-10"
            >
              <div className="p-8 pb-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${plan.iconBg === 'bg-indigo-50' ? 'bg-indigo-500/20 text-indigo-400' : plan.iconBg === 'bg-blue-50' ? 'bg-blue-500/20 text-blue-400' : 'bg-teal-500/20 text-teal-400'}`}>
                    <plan.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-400 h-10 mb-6">{plan.desc}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white tracking-tight">{plan.price}</span>
                  </div>
                  <div className="text-sm text-slate-300 mt-1 font-extrabold">{plan.period}</div>
                </div>
                
                <div className="border-t border-slate-800 pt-6"></div>
              </div>
              
              <div className="p-8 pt-0 flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-indigo-400' : 'text-blue-400'}`} />
                      <span className="text-sm text-slate-300 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3.5 rounded-xl font-bold transition-all duration-200 ${
                    plan.buttonVariant === 'solid' 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-md hover:shadow-lg' 
                      : 'bg-slate-800 text-white border border-slate-700 hover:border-slate-600 hover:bg-slate-700'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Banner */}
        <div className="w-full mx-auto bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-800 p-8 flex flex-col lg:flex-row items-center gap-8 mb-6">
          <div className="flex items-center gap-4 lg:w-1/3">
            <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">All plans include</h4>
              <p className="text-sm text-slate-400 leading-snug mt-1">Enterprise-grade security, 99.9% uptime and regular feature updates.</p>
            </div>
          </div>
          
          <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Cloud className="w-5 h-5 text-slate-500" />
              <div>
                <div className="text-[13px] font-bold text-white">Cloud Based</div>
                <div className="text-[11px] text-slate-400">Secure & Reliable</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-slate-500" />
              <div>
                <div className="text-[13px] font-bold text-white">Data Security</div>
                <div className="text-[11px] text-slate-400">Enterprise Grade</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Headset className="w-5 h-5 text-slate-500" />
              <div>
                <div className="text-[13px] font-bold text-white">24/7 Support</div>
                <div className="text-[11px] text-slate-400">We're here for you</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RefreshCw className="w-5 h-5 text-slate-500" />
              <div>
                <div className="text-[13px] font-bold text-white">Regular Updates</div>
                <div className="text-[11px] text-slate-400">Always improving</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="w-full mx-auto bg-indigo-950/40 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-indigo-500/20">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-indigo-900/50">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Need a custom HR solution for your organization?</h3>
              <p className="text-sm text-indigo-200">Let's build the perfect solution for your business needs.</p>
            </div>
          </div>
          <button className="whitespace-nowrap px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all duration-300 shadow-md shadow-indigo-900/50 flex items-center gap-2">
            Contact Sales Team <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
