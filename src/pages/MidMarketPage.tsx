import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Building2, ShieldCheck, Database, Network, LineChart, Lock, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function MidMarketPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-1 pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-50 border-b border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-cyan-100 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 font-semibold text-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-cyan-600"></span>
            TalentOps for Mid-Market
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight max-w-4xl mx-auto leading-tight">
            Enterprise Power, <span className="text-cyan-600">Without the Enterprise Bulk</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            For organizations scaling past 100 employees. Get advanced permissions, robust compliance reporting, and custom integrations—without a 6-month implementation process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="rounded-md bg-cyan-600 hover:bg-cyan-700 text-white font-medium text-lg px-8 h-14 shadow-premium w-full sm:w-auto transition-all">
              Request a Custom Demo
            </Button>
            <Button variant="outline" className="rounded-md text-slate-700 font-medium text-lg px-8 h-14 w-full sm:w-auto border-slate-300 hover:bg-slate-50">
              View Security Specs
            </Button>
          </div>
        </div>
      </main>

      {/* Comprehensive Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Built for Complexity
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Multiple locations, intricate reporting lines, and strict compliance requirements? TalentOps handles it with ease.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-6 border border-cyan-100 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <Network className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-Entity Management</h3>
              <p className="text-slate-600 leading-relaxed">
                Manage different subsidiaries, office locations, and tax jurisdictions all from a single centralized dashboard.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-6 border border-cyan-100 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <Lock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Granular Permissions</h3>
              <p className="text-slate-600 leading-relaxed">
                Custom Role-Based Access Control (RBAC). Ensure managers only see compensation data for their direct reports.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-6 border border-cyan-100 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Audit Trails & Logs</h3>
              <p className="text-slate-600 leading-relaxed">
                Every action taken in the platform is logged. Easily generate compliance reports for SOC2 or GDPR audits.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-6 border border-cyan-100 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <Database className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Integrations</h3>
              <p className="text-slate-600 leading-relaxed">
                Connect TalentOps to your proprietary systems using our robust OpenAPI-spec REST API and webhooks.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-6 border border-cyan-100 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Advanced Org Charts</h3>
              <p className="text-slate-600 leading-relaxed">
                Visualize complex matrix organizations, dotted-line reporting, and cross-functional teams dynamically.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-6 border border-cyan-100 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <LineChart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Workforce Analytics</h3>
              <p className="text-slate-600 leading-relaxed">
                Generate custom reports on employee churn, diversity metrics, and compensation parity across the entire company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Seamless Data Flow */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500 to-blue-600 rounded-3xl transform rotate-3 scale-105 opacity-30 blur-xl"></div>
              <div className="relative bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl p-8">
                
                <h4 className="text-lg font-medium text-slate-300 mb-6">Custom Reporting Engine</h4>
                
                <div className="space-y-4">
                  <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600/50">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-white font-medium">Headcount Growth (YTD)</span>
                      <span className="text-cyan-400 font-bold">+24%</span>
                    </div>
                    {/* Mock Chart lines */}
                    <div className="flex items-end gap-2 h-24">
                      <div className="w-full bg-cyan-500/20 h-[30%] rounded-t"></div>
                      <div className="w-full bg-cyan-500/40 h-[45%] rounded-t"></div>
                      <div className="w-full bg-cyan-500/60 h-[60%] rounded-t"></div>
                      <div className="w-full bg-cyan-500/80 h-[85%] rounded-t"></div>
                      <div className="w-full bg-cyan-500 h-[100%] rounded-t"></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400 mt-2">
                      <span>Q1</span>
                      <span>Q2</span>
                      <span>Q3</span>
                      <span>Q4</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600/50">
                      <p className="text-sm text-slate-400 mb-1">Voluntary Turnover</p>
                      <p className="text-2xl font-bold text-white">4.2%</p>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600/50">
                      <p className="text-sm text-slate-400 mb-1">Time to Hire</p>
                      <p className="text-2xl font-bold text-white">18 Days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                Insights to drive strategic decisions.
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                As your company scales, intuition is no longer enough. TalentOps aggregates data across recruitment, performance, and payroll to give executive teams actionable insights into organizational health.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Export directly to BI tools via automated webhooks.",
                  "Schedule reports to be emailed to stakeholders weekly.",
                  "Identify flight risks before they hand in notice.",
                  "Track budget vs. actuals for payroll and compensation."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
