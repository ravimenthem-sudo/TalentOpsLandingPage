import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Briefcase, Clock, Users, FileText, CheckCircle, PieChart, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function AgenciesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-1 pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-50 border-b border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-purple-100 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-fuchsia-100 blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-700 font-semibold text-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-purple-600"></span>
            TalentOps for Agencies
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight max-w-4xl mx-auto leading-tight">
            Manage Your Talent Pool <span className="text-purple-600">With Precision</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Designed specifically for staffing, creative, and consulting agencies. Track billable hours, manage contractor contracts, and dispatch talent efficiently.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="rounded-md bg-purple-600 hover:bg-purple-700 text-white font-medium text-lg px-8 h-14 shadow-premium w-full sm:w-auto transition-all">
              Book Agency Demo
            </Button>
            <Button variant="outline" className="rounded-md text-slate-700 font-medium text-lg px-8 h-14 w-full sm:w-auto border-slate-300 hover:bg-slate-50">
              Explore Features
            </Button>
          </div>
        </div>
      </main>

      {/* Comprehensive Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Purpose-Built for Client Work
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Handling a mix of full-time employees, freelancers, and clients requires specialized tools. We've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Unified Talent Roster</h3>
              <p className="text-slate-600 leading-relaxed">
                Keep an organized database of all your contractors and employees. Tag them by skills, availability, and hourly rates.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Billable Time Tracking</h3>
              <p className="text-slate-600 leading-relaxed">
                Talent can log hours directly against specific client projects. Approvals are routed instantly to project managers.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <FileText className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Contract Management</h3>
              <p className="text-slate-600 leading-relaxed">
                Generate SOWs and NDAs automatically. Collect e-signatures and store them securely in the talent's profile.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Project Profitability</h3>
              <p className="text-slate-600 leading-relaxed">
                Track contractor costs against client bill rates in real-time to ensure every project remains profitable.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Client Approvals</h3>
              <p className="text-slate-600 leading-relaxed">
                Give clients limited access to approve contractor timesheets before invoices are generated.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 border border-purple-100 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <PieChart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Resource Allocation</h3>
              <p className="text-slate-600 leading-relaxed">
                Visual timelines show who is booked, who is available, and who is taking time off next week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Seamless Data Flow */}
      <section className="py-24 mb-2 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-fuchsia-600 rounded-3xl transform rotate-3 scale-105 opacity-30 blur-xl"></div>
              <div className="relative bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl p-8">
                
                <h4 className="text-lg font-medium text-slate-300 mb-6">Contractor Invoice Flow</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-slate-700/50">
                    <div>
                      <p className="font-semibold text-white">Alex Morgan (Freelance Designer)</p>
                      <p className="text-sm text-slate-400">Acme Corp Rebranding</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-purple-400">40 hrs</p>
                      <p className="text-xs text-slate-500">Logged this week</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center text-slate-500">
                    <ArrowRight className="w-5 h-5 rotate-90 my-1" />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-xl bg-slate-700/50 border border-emerald-500/30">
                    <div>
                      <p className="font-semibold text-white">Client Approval</p>
                      <p className="text-sm text-emerald-400">Approved by Jane Doe</p>
                    </div>
                    <div className="text-right text-emerald-400">
                      <CheckCircle className="w-6 h-6 inline" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center text-slate-500">
                    <ArrowRight className="w-5 h-5 rotate-90 my-1" />
                  </div>
                  
                  <div className="p-4 rounded-xl bg-purple-900/40 border border-purple-500/30">
                    <p className="font-semibold text-white mb-2">Automated Actions</p>
                    <ul className="text-sm text-purple-200 space-y-1">
                      <li>• Contractor Payroll Run Scheduled</li>
                      <li>• Client Invoice Generated (QuickBooks)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                Connect time tracking directly to billing.
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Agencies lose thousands of dollars a month to untracked billable hours. TalentOps ensures every hour worked is an hour billed.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Eliminate manual invoice creation for contractors.",
                  "Real-time margins on every active project.",
                  "Integrations with QuickBooks, Xero, and Freshbooks.",
                  "Automated reminders for missing timesheets."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-purple-400" />
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
