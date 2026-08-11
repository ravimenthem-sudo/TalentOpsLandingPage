import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Users, FileText, CheckCircle, Clock, Calendar, Laptop, Network, Shield, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function CoreHRPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-50 border-b border-slate-200 overflow-hidden relative">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-100 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-100 blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 text-primary-600 font-semibold text-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary-600"></span>
            TalentOps Core HR
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight max-w-4xl mx-auto leading-tight">
            The Single Source of Truth for Your <span className="text-primary-600">People Data</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Ditch the spreadsheets and scattered files. Centralize employee records, automate time-off requests, and streamline every HR operation in one secure, compliant platform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="rounded-md bg-primary-600 hover:bg-primary-700 text-white font-medium text-lg px-8 h-14 shadow-premium w-full sm:w-auto transition-all">
              Book a Demo
            </Button>
            <Button variant="outline" className="rounded-md text-slate-700 font-medium text-lg px-8 h-14 w-full sm:w-auto border-slate-300 hover:bg-slate-50">
              Explore Pricing
            </Button>
          </div>
        </div>
      </main>

      {/* Comprehensive Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Everything You Need to Manage Your Workforce
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A comprehensive suite of tools designed to handle every aspect of core HR operations, from day one to departure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Employee Directory</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                A rich, searchable database of all employee profiles, personal details, contact info, and job history.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Document Vault</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Securely store contracts, NDAs, identification, and tax forms with role-based access control.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Leave & PTO</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Automated accruals, customizable policies, and a self-service portal for easy time-off requests.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Time & Attendance</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Clock in/out functionality, timesheet approvals, and seamless integration directly into payroll.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Org Charts</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Auto-generated organizational charts that update in real-time as your company grows and shifts.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Asset Management</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Track laptops, monitors, software licenses, and access keys assigned to every employee.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Compliance & Audits</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Ensure regional compliance with automated alerts for expiring visas, certifications, or mandatory training.
              </p>
            </div>

            {/* Feature 8 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 bg-white text-primary-600 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">On/Offboarding</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Customizable task checklists to ensure new hires are set up instantly and departures are handled securely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Self-Service */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Empower Teams with Employee Self-Service
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Stop acting as the middleman for basic data updates. TalentOps gives every employee a secure portal to manage their own information, freeing up HR to focus on strategy.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Update personal details, address, and emergency contacts.",
                  "View and download payslips and tax documents directly.",
                  "Request time off and view real-time leave balances.",
                  "Submit expense reports and track approval status."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary-600" />
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>


            </div>


          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 mb-2 bg-primary-600 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to organize your HR data?
          </h2>
          <p className="text-xl text-primary-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Join hundreds of modern companies that use TalentOps to streamline their core HR operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="rounded-md bg-white text-primary-700 hover:bg-slate-50 font-bold text-lg px-8 h-14 shadow-lg w-full sm:w-auto transition-transform hover:scale-105">
              Book a Free Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
