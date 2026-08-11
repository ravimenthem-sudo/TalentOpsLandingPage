import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "What exactly does TalentOps do?",
      answer: "TalentOps is a comprehensive workforce platform that manages your entire employee lifecycle. It connects recruitment, onboarding, core HR data, attendance, payroll, and performance into one single system."
    },
    {
      question: "Who is TalentOps for?",
      answer: "TalentOps is built for growing professional-service organizations, including startups, agencies, consulting firms, and mid-sized businesses that need structured people operations without the enterprise complexity."
    },
    {
      question: "How does the Hiring Agency service work?",
      answer: "Unlike traditional HR software, we don't just give you an ATS. If you need talent, our in-house Hiring Agency will source, screen, and help you interview candidates. Once hired, they immediately flow into your TalentOps platform."
    },
    {
      question: "Can employees access their own information?",
      answer: "Yes. Employees get a self-service portal where they can manage their profiles, request leaves, view payslips, and track their performance goals autonomously."
    },
    {
      question: "Is TalentOps secure and compliant?",
      answer: "Absolutely. We employ role-based access control, secure authentication, and strict data privacy measures to ensure your organization's sensitive workforce data is protected at all times."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Everything you need to know about the product and our agency services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === i ? "bg-white shadow-md border-primary-200" : "bg-white border-slate-200 hover:border-primary-300"
              }`}
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-lg pr-8 text-slate-900 transition-colors">
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                  openIndex === i 
                    ? 'bg-primary-100 text-primary-600' 
                    : 'bg-slate-100 text-slate-500 group-hover:bg-primary-50 group-hover:text-primary-500'
                }`}>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed pt-0 border-t border-slate-50 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
