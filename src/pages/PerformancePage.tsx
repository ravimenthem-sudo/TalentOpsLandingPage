import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Target, TrendingUp, MessageSquare, Award, BarChart, Settings, ArrowRight, Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function PerformancePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-50 border-b border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-rose-100 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-orange-100 blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200 text-rose-700 font-semibold text-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-rose-600"></span>
            TalentOps Performance
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight max-w-4xl mx-auto leading-tight">
            Build a High-Performing <span className="text-rose-600">Company Culture</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Ditch the once-a-year review. Enable continuous feedback, align goals with company objectives, and recognize achievements in real-time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="rounded-md bg-rose-600 hover:bg-rose-700 text-white font-medium text-lg px-8 h-14 shadow-premium w-full sm:w-auto transition-all">
              Discover Features
            </Button>
            <Button variant="outline" className="rounded-md text-slate-700 font-medium text-lg px-8 h-14 w-full sm:w-auto border-slate-300 hover:bg-slate-50">
              Book a Tour
            </Button>
          </div>
        </div>
      </main>

      {/* Comprehensive Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Tools to Develop Your Top Talent
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything managers and employees need to align on expectations, track progress, and grow their careers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-6 border border-rose-100 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Goal Setting & OKRs</h3>
              <p className="text-slate-600 leading-relaxed">
                Set individual, team, and company-wide goals. Visually track progress and see exactly how day-to-day work impacts the big picture.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-6 border border-rose-100 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Continuous Feedback</h3>
              <p className="text-slate-600 leading-relaxed">
                Request and provide real-time feedback anytime. Break down silos by encouraging cross-departmental praise and constructive input.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-6 border border-rose-100 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <TrendingUp className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Performance Reviews</h3>
              <p className="text-slate-600 leading-relaxed">
                Run automated review cycles (annual, quarterly, or project-based). Fully customizable questionnaires and workflows.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-6 border border-rose-100 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <Settings className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1-on-1 Check-ins</h3>
              <p className="text-slate-600 leading-relaxed">
                Collaborative agendas for manager-employee meetings. Document discussion points, blockers, and action items in one place.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-6 border border-rose-100 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">360-Degree Reviews</h3>
              <p className="text-slate-600 leading-relaxed">
                Gather anonymous feedback from peers, direct reports, and managers to get a holistic view of employee performance.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-xl flex items-center justify-center mb-6 border border-rose-100 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <BarChart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Skills Matrix</h3>
              <p className="text-slate-600 leading-relaxed">
                Map out the competencies needed for every role. Identify skill gaps across teams and tailor training programs effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Connected to Compensation */}
      <section className="py-24 mb-2 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="w-full text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                Tie Performance Directly to Compensation
              </h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                When performance review cycles end, compensation planning begins. TalentOps automatically links review scores and goal completions directly to payroll bonuses and salary band recommendations.
              </p>

              <ul className="space-y-4 mb-8 text-left max-w-2xl mx-auto">
                {[
                  "Data-driven salary adjustment suggestions.",
                  "Automated bonus calculations based on goal attainment.",
                  "Transparent career progression tracking.",
                  "Historical performance data securely stored in employee files."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-rose-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-rose-400" />
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
