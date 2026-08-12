import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Rocket, Zap, TrendingUp, Shield, Users, Clock, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function StartupsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-1 pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-50 border-b border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amber-100 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-yellow-100 blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-semibold text-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-amber-500"></span>
            TalentOps for Startups
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight max-w-4xl mx-auto leading-tight">
            Scale Your Team, <span className="text-amber-500">Not Your HR Overhead</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            When you're growing fast, you don't have time for manual HR tasks. TalentOps automates onboarding, payroll, and compliance so you can focus on building your product.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="rounded-md bg-amber-500 hover:bg-amber-600 text-white font-medium text-lg px-8 h-14 shadow-premium w-full sm:w-auto transition-all">
              Start Free Trial
            </Button>
            <Button variant="outline" className="rounded-md text-slate-700 font-medium text-lg px-8 h-14 w-full sm:w-auto border-slate-300 hover:bg-slate-50">
              View Startup Pricing
            </Button>
          </div>
        </div>
      </main>

      {/* Comprehensive Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Built for Speed and Agility
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Replace a messy combination of spreadsheets and disconnected tools with one platform that grows as fast as you do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 border border-amber-100 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Rocket className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning-Fast Onboarding</h3>
              <p className="text-slate-600 leading-relaxed">
                Send automated welcome emails, collect tax documents digitally, and provision IT equipment before Day 1.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 border border-amber-100 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Compliance on Autopilot</h3>
              <p className="text-slate-600 leading-relaxed">
                Stay compliant across all 50 states automatically. We handle the changing regulations so you don't have to hire a legal team yet.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 border border-amber-100 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Contractor Management</h3>
              <p className="text-slate-600 leading-relaxed">
                Manage full-time employees and freelancers side-by-side. Generate 1099s instantly at the end of the year.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 border border-amber-100 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Instant Payroll</h3>
              <p className="text-slate-600 leading-relaxed">
                Run payroll in 3 clicks. Taxes are calculated and filed automatically, and employees get paid accurately on time.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 border border-amber-100 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Time Off & Tracking</h3>
              <p className="text-slate-600 leading-relaxed">
                Give employees a self-service portal to request PTO. Managers can approve requests directly from Slack or email.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 border border-amber-100 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Goal Alignment (OKRs)</h3>
              <p className="text-slate-600 leading-relaxed">
                Keep your growing team aligned on the same north star. Track company OKRs and individual contributions transparently.
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
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl transform -rotate-3 scale-105 opacity-30 blur-xl"></div>
              <div className="relative bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl p-8">
                
                <h4 className="text-lg font-medium text-slate-300 mb-6">Automated Onboarding Flow</h4>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-700/50">
                    <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center shrink-0 text-white">1</div>
                    <div>
                      <p className="font-semibold text-white">Offer Accepted</p>
                      <p className="text-sm text-slate-400">Candidate signs via e-signature</p>
                    </div>
                  </div>
                  
                  <div className="w-1 h-6 bg-slate-700 mx-auto"></div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-700/50">
                    <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center shrink-0 text-white">2</div>
                    <div>
                      <p className="font-semibold text-white">Profile Created</p>
                      <p className="text-sm text-slate-400">Synced to Core HR instantly</p>
                    </div>
                  </div>
                  
                  <div className="w-1 h-6 bg-slate-700 mx-auto"></div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-700/50">
                    <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center shrink-0 text-white">3</div>
                    <div>
                      <p className="font-semibold text-white">Accounts Provisioned</p>
                      <p className="text-sm text-slate-400">Google Workspace, Slack, Jira</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                From 10 to 100 employees without breaking a sweat.
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Scaling a startup means your processes will break constantly. TalentOps provides the resilient infrastructure you need to handle rapid hiring spurts without hiring a massive HR team.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Self-service portals save founders hours every week.",
                  "Integrates seamlessly with your existing tech stack.",
                  "Affordable pricing designed for early-stage companies.",
                  "Enterprise-grade security to pass vendor assessments."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-amber-400" />
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
