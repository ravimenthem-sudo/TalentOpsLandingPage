import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DollarSign, PieChart, ShieldCheck, Globe, FileSpreadsheet, CreditCard, ArrowRight, Check, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function PayrollPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-1 pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-50 border-b border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-100 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-teal-100 blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold text-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-emerald-600"></span>
            TalentOps Payroll
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight max-w-4xl mx-auto leading-tight">
            Flawless Payroll Processing, <span className="text-emerald-600">Every Single Time</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Run payroll in minutes with absolute accuracy. We handle the taxes, compliance, and deductions so you can ensure your team gets paid on time, without the headache.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-lg px-8 h-14 shadow-premium w-full sm:w-auto transition-all">
              See a Demo
            </Button>
            <Button variant="outline" className="rounded-md text-slate-700 font-medium text-lg px-8 h-14 w-full sm:w-auto border-slate-300 hover:bg-slate-50">
              Pricing Details
            </Button>
          </div>
        </div>
      </main>

      {/* Comprehensive Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Powerful Payroll for Modern Teams
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Built for speed and compliance, TalentOps Payroll integrates directly with your HR data to eliminate manual data entry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <DollarSign className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">One-Click Payroll Runs</h3>
              <p className="text-slate-600 leading-relaxed">
                Sync automatically with timesheets, time off, and salary adjustments. Run payroll for your entire organization with a single click.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tax & Compliance</h3>
              <p className="text-slate-600 leading-relaxed">
                Automatic calculation of federal, state, and local taxes. We stay up-to-date with changing tax laws so you stay compliant automatically.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <CreditCard className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expenses & Reimbursements</h3>
              <p className="text-slate-600 leading-relaxed">
                Employees can submit expenses via the mobile app. Managers approve them, and they are automatically added to the next payroll run.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Multi-Currency</h3>
              <p className="text-slate-600 leading-relaxed">
                Paying international contractors? Process payments in over 50 currencies with automated exchange rate calculations.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <FileCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Automated Payslips</h3>
              <p className="text-slate-600 leading-relaxed">
                Generate and distribute secure digital payslips automatically. Employees are notified via email as soon as payday hits.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <PieChart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Financial Reporting</h3>
              <p className="text-slate-600 leading-relaxed">
                Export general ledgers to Xero, QuickBooks, or NetSuite. Dive deep into payroll costs by department, location, or project.
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
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-900 rounded-3xl transform -rotate-3 scale-105 opacity-30 blur-xl"></div>
              <div className="relative bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl p-8">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-700">
                  <div>
                    <h4 className="text-lg font-medium text-slate-300">September Payroll Run</h4>
                    <p className="text-3xl font-bold text-white mt-1">$142,500.00</p>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm font-semibold border border-emerald-500/30">
                    Ready for Approval
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 rounded-xl bg-slate-700/50">
                    <span className="text-slate-300">Gross Pay (42 Employees)</span>
                    <span className="font-semibold">$180,000.00</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-slate-700/50">
                    <span className="text-slate-300">Tax Deductions</span>
                    <span className="font-semibold text-rose-400">-$35,000.00</span>
                  </div>
                  <div className="flex justify-between items-center p-4 rounded-xl bg-slate-700/50">
                    <span className="text-slate-300">Benefits & Contributions</span>
                    <span className="font-semibold text-rose-400">-$2,500.00</span>
                  </div>
                </div>
                
                <Button className="w-full mt-8 bg-emerald-500 hover:bg-emerald-600 text-white border-0">
                  Approve & Process
                </Button>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                No more double data entry.
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Because TalentOps handles Core HR and Time Tracking in the same system, your payroll is always perfectly synced. When someone takes unpaid leave, gets a bonus, or clocks overtime, payroll knows instantly.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Prorated calculations for new joiners and departures.",
                  "Automatic sync with approved timesheets and overtime.",
                  "Built-in compliance checks before every run.",
                  "Direct deposits to employee bank accounts within 48 hours."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-emerald-400" />
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
