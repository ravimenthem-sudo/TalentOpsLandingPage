import React from "react";
import { Shield, Lock, UserCog, Database } from "lucide-react";
import { cn } from "@/lib/utils";

export function SecurityTrustSection() {
  const securityFeatures = [
    {
      icon: <Lock className="w-6 h-6 text-blue-600" />,
      bgClass: "bg-blue-50/80",
      borderClass: "border-blue-100 hover:border-blue-300",
      title: "Secure Authentication",
      desc: "Industry-standard secure login ensures that only authorized personnel can access your organization's sensitive data."
    },
    {
      icon: <UserCog className="w-6 h-6 text-indigo-600" />,
      bgClass: "bg-indigo-50/80",
      borderClass: "border-indigo-100 hover:border-indigo-300",
      title: "Role-Based Access Control",
      desc: "Granular permissions mean employees only see what they need to, while HR and admins have the required oversight."
    },
    {
      icon: <Database className="w-6 h-6 text-violet-600" />,
      bgClass: "bg-violet-50/80",
      borderClass: "border-violet-100 hover:border-violet-300",
      title: "Data Privacy",
      desc: "Your workforce data is siloed and protected. We implement strict data protection measures to keep employee records confidential."
    },
    {
      icon: <Shield className="w-6 h-6 text-cyan-600" />,
      bgClass: "bg-cyan-50/80",
      borderClass: "border-cyan-100 hover:border-cyan-300",
      title: "Auditability",
      desc: "Track critical changes across the system. Know who updated a salary record, approved a leave, or changed a performance score."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/3">
            <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-slate-800" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Enterprise-grade security for your workforce data.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We know that HR data is some of the most sensitive information your business holds. TalentOps is built from the ground up to protect your privacy and maintain strict access controls.
            </p>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {securityFeatures.map((feature, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "p-8 rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
                  feature.bgClass, 
                  feature.borderClass
                )}
              >
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
