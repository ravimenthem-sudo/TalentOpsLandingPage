import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export function ResourcesSection() {
  const featured = [
    {
      badge: "Masterclass Guide",
      badgeColor: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      title: "The Ultimate Global Payroll & Compliance Playbook",
      desc: "Navigating international labor laws shouldn't require a law degree. This exhaustive 50-page guide breaks down multi-country tax regulations, automated statutory deductions, and cross-border payment structures. Learn how hyper-growth startups use TalentOps to confidently hire and pay teams in 150+ countries without fearing compliance audits.",
      linkText: "Read the playbook",
      linkUrl: "/resources/playbook"
    },
    {
      badge: "Industry Whitepaper",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      title: "AI-Driven Talent Acquisition: Eliminating Bias & Scaling Speed",
      desc: "Traditional ATS systems are dead. Discover how modern organizations are leveraging machine learning to parse thousands of resumes instantly, predict candidate success rates, and automate interview scheduling. This whitepaper reveals the exact AI workflows that reduce time-to-hire by 65% while actively improving diversity and inclusion metrics.",
      linkText: "Download whitepaper",
      linkUrl: "/resources/blueprint"
    },
    {
      badge: "Toolkit",
      badgeColor: "bg-amber-500/10 text-amber-500 border border-amber-500/20",
      title: "The 90-Day Retention Framework (with Templates)",
      desc: "30% of new hires leave within the first 90 days due to poor onboarding. Stop losing your best talent. This comprehensive toolkit includes attorney-reviewed 30-60-90 day goal-setting templates, automated check-in survey questions, and psychological frameworks designed to integrate new employees deeply into your company culture from day one.",
      linkText: "Get the toolkit",
      linkUrl: "/resources/tour"
    }
  ];

  const categories = [
    {
      title: "Executive Insights & Whitepapers",
      desc: "Deeply researched, data-backed industry reports on the future of work. Understand macroeconomic shifts in remote hiring, compensation benchmarking across top-tier cities, and the financial impact of modern HR automation on your bottom line."
    },
    {
      title: "Attorney-Approved Legal Templates",
      desc: "Stop paying expensive retainer fees for basic HR paperwork. Access our constantly updated library of plug-and-play offer letters, compliant termination agreements, remote-work tax policies, and GDPR-compliant data processing agreements."
    },
    {
      title: "Technical Integration Documentation",
      desc: "Your HR platform shouldn't be a data silo. Explore our comprehensive REST API references, Webhook payload structures, and step-by-step guides for securely syncing TalentOps data with Slack, Google Workspace, Azure AD, and your proprietary internal tools."
    },
    {
      title: "On-Demand Webinars & Masterclasses",
      desc: "Watch exclusive video sessions with industry-leading Chief People Officers and Talent Acquisition Directors. Learn tactical strategies for structuring performance reviews, conducting compensation cycles, and navigating complex employee relations issues."
    }
  ];

  return (
    <section id="resources" className="py-24 bg-[#0B1121] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="mb-12 max-w-3xl">
          <div className="inline-block px-3 py-1 mb-6 text-[10px] font-bold tracking-wider uppercase bg-[#172554] text-blue-400 rounded-full border border-blue-900/50">
            Resources Hub
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Insights to elevate your workforce strategy
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Practical guides, HR templates, implementation playbooks, compliance checklists, and product documentation for founders, HR teams, and growing organizations.
          </p>
        </div>

        {/* Featured Resources (Top 3 Cards) */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {featured.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0B1121] border border-slate-700/80 rounded-2xl p-6 flex flex-col hover:border-slate-500 transition-colors"
            >
              <div className="mb-4">
                <span className={cn("text-[11px] font-bold px-2 py-1 rounded-md", item.badgeColor)}>
                  {item.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-slate-300 flex-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-800/80 mb-12"></div>

        {/* Browse by category */}
        <div>
          <h2 className="text-xl font-bold text-white mb-6">Browse by category</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="bg-[#0B1121] border border-slate-700/80 rounded-2xl p-6 hover:border-slate-500 transition-colors cursor-pointer group"
              >
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-slate-300">
                  {category.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
