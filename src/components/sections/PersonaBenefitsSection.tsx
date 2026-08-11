import React, { useState } from "react";
import { User, Users, Briefcase, Settings, Star } from "lucide-react";

export function PersonaBenefitsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const personas = [
    {
      id: "founders",
      role: "Founders & Owners",
      icon: <Star className="w-5 h-5" />,
      benefit: "Get total visibility into your workforce.",
      desc: "Stop flying blind. See your true headcount, payroll costs, and organizational performance in one dashboard without asking five different people."
    },
    {
      id: "hr",
      role: "HR Teams",
      icon: <Users className="w-5 h-5" />,
      benefit: "Automate the busywork, focus on culture.",
      desc: "Eliminate manual data entry, scattered spreadsheets, and email chains. Centralize all employee records and automate routine HR operations."
    },
    {
      id: "recruitment",
      role: "Recruitment Managers",
      icon: <Briefcase className="w-5 h-5" />,
      benefit: "Hire faster with structured pipelines.",
      desc: "Manage candidate pipelines, schedule interviews easily, and transition successful hires directly into onboarding with zero data loss."
    },
    {
      id: "ops",
      role: "Operations Managers",
      icon: <Settings className="w-5 h-5" />,
      benefit: "Control attendance and daily tasks.",
      desc: "Track real-time attendance, manage complex shift schedules, approve leaves, and align daily tasks with broader business goals."
    },
    {
      id: "employees",
      role: "Employees",
      icon: <User className="w-5 h-5" />,
      benefit: "A modern, self-service experience.",
      desc: "Give your team a single app to check payslips, request leave, track their own performance goals, and update personal information securely."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Built for everyone in your organization.
          </h2>
          <p className="text-lg text-slate-400 font-medium">
            TalentOps provides specific value to different roles, ensuring adoption across the entire company.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {personas.map((persona, idx) => (
              <button
                key={persona.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-200 ${
                  activeTab === idx 
                    ? "bg-primary-600 text-white shadow-premium" 
                    : "hover:bg-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                  activeTab === idx ? "bg-white/20" : "bg-slate-800"
                }`}>
                  {persona.icon}
                </div>
                <span className="font-bold text-lg">{persona.role}</span>
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="lg:w-2/3 bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700 flex flex-col justify-center min-h-[300px]">
            <div className="inline-flex items-center gap-2 mb-6 text-primary-400 font-semibold tracking-wide">
              {personas[activeTab].icon}
              <span className="uppercase text-sm">{personas[activeTab].role}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {personas[activeTab].benefit}
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
              {personas[activeTab].desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
