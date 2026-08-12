import React, { useState } from "react";
import { 
  Users, Briefcase, CalendarClock, DollarSign, Target, PieChart, 
  CheckCircle2, ArrowRight, Kanban, UserCircle, Calendar, Rocket, 
  FileText, Network, Clock, Shield, Calculator, FileSpreadsheet,
  LineChart, Sparkles, LayoutDashboard, BrainCircuit, BarChart3
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function ProductOverviewSection() {
  const [activeTab, setActiveTab] = useState("talent-acquisition");

  const modules = [
    {
      id: "talent-acquisition",
      title: "Talent Acquisition",
      shortDesc: "Source, attract, and hire top talent.",
      icon: <Briefcase className="w-5 h-5" />,
      colorClass: "text-indigo-600 bg-indigo-50 border-indigo-200",
      activeBg: "bg-indigo-600 text-white",
      details: {
        heading: "Build your dream team effortlessly",
        description: "Transform your hiring process with automated pipelines, seamless candidate communication, and integrated onboarding. Reduce time-to-hire by up to 40%.",
        link: "/recruitment",
        features: [
          { name: "Automated Pipelines", icon: <Kanban className="w-5 h-5 text-indigo-500" /> },
          { name: "Candidate Portal", icon: <UserCircle className="w-5 h-5 text-indigo-500" /> },
          { name: "Smart Scheduling", icon: <Calendar className="w-5 h-5 text-indigo-500" /> },
          { name: "Digital Onboarding", icon: <Rocket className="w-5 h-5 text-indigo-500" /> }
        ]
      }
    },
    {
      id: "employee-management",
      title: "Employee Management",
      shortDesc: "Centralize your workforce records.",
      icon: <Users className="w-5 h-5" />,
      colorClass: "text-blue-600 bg-blue-50 border-blue-200",
      activeBg: "bg-blue-600 text-white",
      details: {
        heading: "A single source of truth for your people",
        description: "Maintain secure, digital employee records. From visual org charts to document management, keep all your HR data perfectly organized and accessible.",
        link: "/core-hr",
        features: [
          { name: "Digital Profiles", icon: <UserCircle className="w-5 h-5 text-blue-500" /> },
          { name: "Document Vault", icon: <FileText className="w-5 h-5 text-blue-500" /> },
          { name: "Visual Org Charts", icon: <Network className="w-5 h-5 text-blue-500" /> },
          { name: "Access Controls", icon: <Shield className="w-5 h-5 text-blue-500" /> }
        ]
      }
    },
    {
      id: "workforce-operations",
      title: "Workforce Operations",
      shortDesc: "Streamline day-to-day HR tasks.",
      icon: <CalendarClock className="w-5 h-5" />,
      colorClass: "text-emerald-600 bg-emerald-50 border-emerald-200",
      activeBg: "bg-emerald-600 text-white",
      details: {
        heading: "Put daily operations on autopilot",
        description: "Manage attendance, track complex leave policies, and oversee tasks with zero friction. Empower employees with a self-service portal.",
        link: "/core-hr",
        features: [
          { name: "Time & Attendance", icon: <Clock className="w-5 h-5 text-emerald-500" /> },
          { name: "Leave Management", icon: <CalendarClock className="w-5 h-5 text-emerald-500" /> },
          { name: "Task Workflows", icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" /> },
          { name: "Self-Service App", icon: <LayoutDashboard className="w-5 h-5 text-emerald-500" /> }
        ]
      }
    },
    {
      id: "payroll",
      title: "Payroll & Compensation",
      shortDesc: "Accurate, automated global payroll.",
      icon: <DollarSign className="w-5 h-5" />,
      colorClass: "text-amber-600 bg-amber-50 border-amber-200",
      activeBg: "bg-amber-600 text-white",
      details: {
        heading: "Flawless payroll, every single time",
        description: "Automatically sync attendance data to process payroll in clicks. Generate compliance reports, handle multi-currency, and distribute digital payslips instantly.",
        link: "/payroll",
        features: [
          { name: "Automated Processing", icon: <Calculator className="w-5 h-5 text-amber-500" /> },
          { name: "Digital Payslips", icon: <FileSpreadsheet className="w-5 h-5 text-amber-500" /> },
          { name: "Tax Compliance", icon: <Shield className="w-5 h-5 text-amber-500" /> },
          { name: "Expense Tracking", icon: <DollarSign className="w-5 h-5 text-amber-500" /> }
        ]
      }
    },
    {
      id: "performance",
      title: "Performance Management",
      shortDesc: "Align goals and drive growth.",
      icon: <Target className="w-5 h-5" />,
      colorClass: "text-orange-600 bg-orange-50 border-orange-200",
      activeBg: "bg-orange-600 text-white",
      details: {
        heading: "Build a high-performance culture",
        description: "Set company-wide OKRs, conduct 360-degree reviews, and provide continuous feedback. Identify top talent and bridge skill gaps effectively.",
        link: "/performance",
        features: [
          { name: "OKR Tracking", icon: <Target className="w-5 h-5 text-orange-500" /> },
          { name: "360° Reviews", icon: <Users className="w-5 h-5 text-orange-500" /> },
          { name: "1-on-1 Feedback", icon: <Sparkles className="w-5 h-5 text-orange-500" /> },
          { name: "Career Pathing", icon: <LineChart className="w-5 h-5 text-orange-500" /> }
        ]
      }
    }
  ];

  const activeModule = modules.find(m => m.id === activeTab) || modules[0];
  const activeColor = activeModule.colorClass.split('-')[1]; // Extracts 'indigo', 'blue', etc.

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200" id="products">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold tracking-wide text-primary-700 bg-primary-50 rounded-full border border-primary-100 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary-500 animate-pulse"></span>
            PLATFORM MODULES
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Everything you need to operate your talent.
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            TalentOps is built on interconnected modules. Use what you need today, and seamlessly turn on more as your organization scales.
          </p>
        </div>

        {/* Interactive Interactive Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[600px]">
          
          {/* Left Side: Tabs */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3">
            {modules.map((module) => (
              <button
                key={module.id}
                onClick={() => setActiveTab(module.id)}
                className={cn(
                  "flex items-start gap-4 p-5 rounded-2xl text-left transition-all duration-300 border-2 outline-none",
                  activeTab === module.id 
                    ? `border-${module.colorClass.split('-')[1]}-400 bg-${module.colorClass.split('-')[1]}-50 shadow-md transform lg:translate-x-2`
                    : "border-transparent hover:bg-slate-50 hover:border-slate-200"
                )}
              >
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300",
                  activeTab === module.id ? module.activeBg : module.colorClass
                )}>
                  {module.icon}
                </div>
                <div>
                  <h3 className={cn(
                    "text-lg font-bold mb-1",
                    activeTab === module.id ? `text-${module.colorClass.split('-')[1]}-900` : "text-slate-800"
                  )}>{module.title}</h3>
                  <p className="text-sm text-slate-500 font-medium">{module.shortDesc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side: Details Panel */}
          <div className="w-full lg:w-2/3">
            <div className={cn(
              "border rounded-[2rem] p-8 lg:p-12 h-full shadow-inner relative overflow-hidden transition-colors duration-500",
              `bg-${activeColor}-50/50 border-${activeColor}-200`
            )}>
              
              {/* Dynamic Content */}
              <div key={activeModule.id} className="animate-in fade-in slide-in-from-right-8 duration-500 relative z-10 h-full flex flex-col">
                
                <div className="mb-10">
                  <div className={cn(
                    "inline-flex items-center gap-2 px-3 py-1.5 rounded-lg font-bold text-sm mb-6",
                    activeModule.colorClass
                  )}>
                    {activeModule.icon}
                    {activeModule.title}
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                    {activeModule.details.heading}
                  </h3>
                  
                  <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
                    {activeModule.details.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                  {activeModule.details.features.map((feature, idx) => (
                    <div key={idx} className={cn(
                      "flex items-center gap-4 p-4 rounded-xl border shadow-sm transition-colors duration-500",
                      `bg-${activeColor}-50 border-${activeColor}-200/60`
                    )}>
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm">
                        {feature.icon}
                      </div>
                      <span className="font-semibold text-slate-800">{feature.name}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8 border-t border-slate-200">
                  <Link 
                    to={activeModule.details.link}
                    className="inline-flex items-center gap-2 font-bold text-primary-600 hover:text-primary-700 transition-colors text-lg"
                  >
                    Explore {activeModule.title} features
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

              </div>
              
              {/* Decorative Background Elements based on active tab */}
              <div className="absolute -bottom-24 -right-24 w-96 h-96 opacity-10 pointer-events-none">
                <div className={cn("w-full h-full rounded-full blur-3xl", activeModule.activeBg.split(' ')[0])}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
