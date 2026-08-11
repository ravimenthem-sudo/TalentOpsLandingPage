import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight, PlayCircle, Quote, TrendingUp, Users, Clock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-1 pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-emerald-500 blur-[120px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-emerald-400 font-semibold text-sm mb-8">
            Customer Success Stories
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight max-w-4xl mx-auto leading-tight">
            See How the Best Teams Work with <span className="text-emerald-400">TalentOps</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            From hyper-growth startups to established mid-market enterprises, see how companies use TalentOps to transform their HR operations.
          </p>
        </div>
      </main>

      {/* Featured Video Case Study */}
      <section className="py-24 bg-white relative -mt-20 z-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 relative bg-slate-900 min-h-[300px] lg:min-h-full flex items-center justify-center group cursor-pointer">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="TechCorp Office" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

              </div>
              <div className="w-full lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center">

                <h3 className="text-3xl font-bold text-slate-900 mb-4">How TechCorp scaled from 50 to 500 employees seamlessly.</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  "Before TalentOps, our onboarding was a mess of Google Docs and endless email threads. Now, a new hire is completely set up in exactly 3 minutes. It's completely changed how our HR team operates."
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <p className="text-3xl font-extrabold text-emerald-600 mb-1">98%</p>
                    <p className="text-sm font-medium text-slate-500">Faster Onboarding</p>
                  </div>
                  <div>
                    <p className="text-3xl font-extrabold text-emerald-600 mb-1">20hrs</p>
                    <p className="text-sm font-medium text-slate-500">Saved on Payroll/week</p>
                  </div>
                </div>
                <Link to="#" className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 transition-colors">
                  Read Full Case Study <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Written Case Studies */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">More Success Stories</h2>
            <div className="hidden md:flex gap-2">
              <Button variant="outline" className="rounded-full">Technology</Button>
              <Button variant="outline" className="rounded-full">Agencies</Button>
              <Button variant="outline" className="rounded-full">Retail</Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow group">
              <div className="h-10 mb-8">
                <h3 className="text-xl font-bold font-display tracking-tight text-slate-800">Acme Design Co.</h3>
              </div>
              <p className="text-lg font-semibold text-slate-900 mb-4 line-clamp-3">
                Tracking billable hours seamlessly to increase agency margins by 15%.
              </p>
              <div className="flex gap-4 mb-8">
                <div className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 flex-1">
                  <Clock className="w-5 h-5 text-emerald-500 mb-2" />
                  <p className="text-sm font-bold text-slate-900">0 missed hours</p>
                </div>
                <div className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 flex-1">
                  <TrendingUp className="w-5 h-5 text-emerald-500 mb-2" />
                  <p className="text-sm font-bold text-slate-900">+15% Margin</p>
                </div>
              </div>

            </div>

            {/* Case Study 2 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow group">
              <div className="h-10 mb-8">
                <h3 className="text-xl font-bold font-display tracking-tight text-slate-800">Globex Retail</h3>
              </div>
              <p className="text-lg font-semibold text-slate-900 mb-4 line-clamp-3">
                Managing a distributed retail workforce of 1,200 employees across 40 locations.
              </p>
              <div className="flex gap-4 mb-8">
                <div className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 flex-1">
                  <Users className="w-5 h-5 text-emerald-500 mb-2" />
                  <p className="text-sm font-bold text-slate-900">1,200 Staff</p>
                </div>
                <div className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 flex-1">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 mb-2" />
                  <p className="text-sm font-bold text-slate-900">100% Compliant</p>
                </div>
              </div>

            </div>

            {/* Case Study 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow group">
              <div className="h-10 mb-8">
                <h3 className="text-xl font-bold font-display tracking-tight text-slate-800">FinTech Solutions</h3>
              </div>
              <p className="text-lg font-semibold text-slate-900 mb-4 line-clamp-4">
                "We evaluated Workday, Gusto, and Rippling. TalentOps was the only platform that offered the depth of an enterprise tool with the user experience of a modern app."
              </p>
              <div className="flex gap-4 mb-8">
                <div className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 flex-1">
                  <TrendingUp className="w-5 h-5 text-emerald-500 mb-2" />
                  <p className="text-sm font-bold text-slate-900">100% Adoption</p>
                </div>
                <div className="bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 flex-1">
                  <ShieldCheck className="w-5 h-5 text-emerald-500 mb-2" />
                  <p className="text-sm font-bold text-slate-900">Enterprise Ready</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Ready to write your own success story?
          </h2>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed">
            Join the hundreds of modern companies building better cultures with TalentOps.
          </p>
          <Button className="rounded-md bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg px-8 h-14 shadow-lg w-full sm:w-auto transition-transform hover:scale-105">
            Book your free demo
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
