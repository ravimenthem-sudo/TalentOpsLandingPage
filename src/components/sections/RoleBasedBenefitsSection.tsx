"use client";
import React from "react";
import { UserCircle, Briefcase, Users, CheckCircle2 } from "lucide-react";

export function RoleBasedBenefitsSection() {
  const roles = [
    {
      id: "employees",
      icon: UserCircle,
      title: "For Employees",
      iconColor: "text-blue-600 bg-white border border-blue-100",
      titleColor: "text-blue-950",
      checkColor: "text-blue-500",
      cardBg: "bg-[#F0F4FF]",
      gradientOverlay: "from-[#F0F4FF] to-transparent",
      features: [
        "Self-service portal",
        "Attendance tracking",
        "Leave requests",
        "Payslips",
        "Company policies",
        "Communication"
      ],
      image: "/images/employee_phone.png"
    },
    {
      id: "hr",
      icon: Briefcase,
      title: "For HR",
      iconColor: "text-purple-600 bg-white border border-purple-100",
      titleColor: "text-purple-950",
      checkColor: "text-purple-500",
      cardBg: "bg-[#F7F4FF]",
      gradientOverlay: "from-[#F7F4FF] to-transparent",
      features: [
        "Employee administration",
        "Attendance monitoring",
        "Leave approvals",
        "Payroll management",
        "Workforce reporting"
      ],
      image: "/images/hr_laptop.png"
    },
    {
      id: "managers",
      icon: Users,
      title: "For Managers",
      iconColor: "text-emerald-600 bg-white border border-emerald-100",
      titleColor: "text-emerald-950",
      checkColor: "text-emerald-500",
      cardBg: "bg-[#F2FAF5]",
      gradientOverlay: "from-[#F2FAF5] to-transparent",
      features: [
        "Team visibility",
        "Performance reviews",
        "Attendance insights",
        "Organizational collaboration"
      ],
      image: "/images/manager_tablet.png"
    }
  ];

  return (
    <section id="company" className="py-24 bg-white relative border-b border-slate-100">
      <div className="max-w-[1500px] mx-auto px-6">
        <div className="mb-12 text-center">
          <div className="text-blue-600 font-semibold tracking-wider text-lg uppercase mb-3">HOW TALENTOPS HELPS</div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {roles.map((role) => (
            <div
              key={role.id}
              className={`rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-row hover:shadow-md transition-shadow relative ${role.cardBg}`}
            >
              <div className="p-6 lg:p-8 relative z-10 w-[55%] lg:w-[60%]">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-lg shadow-sm ${role.iconColor}`}>
                    <role.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <h3 className={`text-[18px] lg:text-[20px] font-bold ${role.titleColor}`}>{role.title}</h3>
                </div>
                
                <ul className="space-y-3.5">
                  {role.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-slate-700 text-[14px] lg:text-[15px] font-medium leading-tight">
                      <CheckCircle2 className={`w-4 h-4 lg:w-5 lg:h-5 shrink-0 ${role.checkColor}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="absolute right-0 top-0 bottom-0 w-[60%] lg:w-[50%] z-0 pointer-events-none">
                <div className={`absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r ${role.gradientOverlay} z-10`} />
                <img 
                  src={role.image} 
                  alt={role.title} 
                  className="w-full h-full object-cover object-center relative z-0 mix-blend-multiply"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
