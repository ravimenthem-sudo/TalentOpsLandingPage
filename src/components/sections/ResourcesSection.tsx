import React from "react";
import { ArrowRight, BookOpen, FileText, LifeBuoy } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function ResourcesSection() {
  const resources = [
    {
      title: "Blog & Articles",
      desc: "Read the latest insights on HR trends, payroll compliance, and talent management.",
      linkText: "Explore Blog & Articles",
      icon: <BookOpen className="w-6 h-6 text-blue-600" />,
      iconBg: "bg-blue-50",
      borderClass: "hover:border-blue-200",
      linkUrl: "/blog"
    },
    {
      title: "Case Studies",
      desc: "See how fast-growing companies use TalentOps to scale their workforce.",
      linkText: "Explore Case Studies",
      icon: <FileText className="w-6 h-6 text-indigo-600" />,
      iconBg: "bg-indigo-50",
      borderClass: "hover:border-indigo-200",
      linkUrl: "/case-studies"
    },
    {
      title: "Help Center",
      desc: "Explore guides, tutorials, and documentation to get the most out of TalentOps.",
      linkText: "Explore Help Center",
      icon: <LifeBuoy className="w-6 h-6 text-emerald-600" />,
      iconBg: "bg-emerald-50",
      borderClass: "hover:border-emerald-200",
      linkUrl: "/help-center"
    }
  ];

  return (
    <section id="resources" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Learn and Grow with TalentOps
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Everything you need to master your workforce operations, from strategic insights to step-by-step guides.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, idx) => (
            <Link 
              key={idx}
              to={resource.linkUrl}
              className={cn(
                "flex flex-col p-8 rounded-[24px] border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer no-underline",
                resource.borderClass
              )}
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors", resource.iconBg)}>
                {resource.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary-700 transition-colors">
                {resource.title}
              </h3>
              
              <p className="text-[15px] text-slate-600 leading-relaxed flex-1 mb-8">
                {resource.desc}
              </p>
              
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {resource.linkText} <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
