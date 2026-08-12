"use client";
import React from "react";

export function TrustedCompaniesSection() {
  const companies = [
    { name: "Microsoft", domain: "microsoft.com" },
    { name: "Amazon", domain: "amazon.com" },
    { name: "Deloitte", domain: "deloitte.com" },
    { name: "Airtel", domain: "airtel.in" },
    { name: "Flipkart", domain: "flipkart.com" },
    { name: "Nvidia", domain: "nvidia.com" },
    { name: "HP", domain: "hp.com" },
    { name: "Cognizant", domain: "cognizant.com" },
  ];

  return (
    <section className="pb-12 pt-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-semibold text-blue-600 mb-8 uppercase tracking-widest">
          TRUSTED BY MODERN ORGANIZATIONS
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={`https://logo.clearbit.com/${company.domain}`} 
                alt={`${company.name} logo`} 
                className="h-6 md:h-8 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                }}
              />
              <span className="hidden font-display font-bold text-xl text-slate-800">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
