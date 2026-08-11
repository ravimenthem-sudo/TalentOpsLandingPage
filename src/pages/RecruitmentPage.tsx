import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Search, Briefcase, Filter, CalendarCheck, Users, Mail, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-50 border-b border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-indigo-100 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-violet-100 blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 font-semibold text-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
            TalentOps Recruitment
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight max-w-4xl mx-auto leading-tight">
            Find, Track, and Hire <span className="text-indigo-600">Top Talent Faster</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-10">
            A complete Applicant Tracking System (ATS) built right into your HR platform. From publishing jobs to signing offer letters, manage your entire hiring pipeline in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-lg px-8 h-14 shadow-premium w-full sm:w-auto transition-all">
              Start Hiring Today
            </Button>
            <Button variant="outline" className="rounded-md text-slate-700 font-medium text-lg px-8 h-14 w-full sm:w-auto border-slate-300 hover:bg-slate-50">
              Watch Walkthrough
            </Button>
          </div>
        </div>
      </main>

      {/* Comprehensive Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              An ATS that Hiring Managers Actually Love
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              TalentOps provides the tools you need to streamline candidate sourcing, accelerate interviews, and close offers quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Custom Career Pages</h3>
              <p className="text-slate-600 leading-relaxed">
                Build a branded, mobile-responsive careers page in minutes without coding. Attract candidates right from your own website.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Filter className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Visual Hiring Pipeline</h3>
              <p className="text-slate-600 leading-relaxed">
                Drag-and-drop Kanban boards for every job opening. Instantly see where candidates are in the hiring process.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Resume Parsing</h3>
              <p className="text-slate-600 leading-relaxed">
                Automatically extract skills, experience, and contact info from uploaded PDFs. Say goodbye to manual data entry.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <CalendarCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Interview Scheduling</h3>
              <p className="text-slate-600 leading-relaxed">
                Sync with Google Workspace and Office 365. Send candidates a booking link that only shows available times across the interview panel.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Collaborative Hiring</h3>
              <p className="text-slate-600 leading-relaxed">
                Leave private notes, mention team members, and use standardized scorecards to ensure unbiased hiring decisions.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow shadow-sm group">
              <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Offer Letters & E-Signatures</h3>
              <p className="text-slate-600 leading-relaxed">
                Generate offer letters from templates automatically. Send them directly for binding digital signatures via the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: Seamless Onboarding */}
      <section className="py-24 mb-2 bg-indigo-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                From 'Candidate' to 'Employee' in One Click
              </h2>
              <p className="text-lg text-indigo-200 mb-8 leading-relaxed">
                When a candidate accepts an offer, the real magic happens. TalentOps instantly converts their profile into a new employee record.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "No duplicate data entry across ATS and HRIS.",
                  "Automatically trigger Day 1 onboarding task lists.",
                  "Pre-fill tax and payroll forms with candidate data.",
                  "Notify IT to provision laptops and software licenses."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-indigo-400" />
                    </div>
                    <span className="text-indigo-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="absolute inset-0 bg-gradient-to-tl from-indigo-500 to-violet-900 rounded-3xl transform rotate-3 scale-105 opacity-40 blur-xl"></div>
              <div className="relative bg-slate-800 border border-slate-700 rounded-3xl shadow-2xl p-8">

                {/* Mock UI for Pipeline */}
                <div className="flex gap-4">
                  {/* Column 1 */}
                  <div className="w-1/2 bg-slate-700/50 rounded-xl p-4 flex flex-col gap-3 border border-slate-600/50">
                    <h5 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2">Interviewing</h5>

                    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 shadow-sm">
                      <p className="font-semibold text-white">David Chen</p>
                      <p className="text-xs text-indigo-300 mb-3">Product Manager</p>
                      <div className="flex justify-between items-center text-xs text-slate-400">
                        <span>3rd Round</span>
                        <div className="flex gap-1">
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                          <Star className="w-3 h-3 text-amber-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Column 2 */}
                  <div className="w-1/2 bg-slate-700/50 rounded-xl p-4 flex flex-col gap-3 border border-slate-600/50">
                    <h5 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-2 flex items-center justify-between">
                      Offer Sent
                      <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded text-[10px]">1 accepted</span>
                    </h5>

                    <div className="bg-emerald-900/40 p-4 rounded-lg border border-emerald-500/30 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/20 blur-xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                      <p className="font-semibold text-white">Elena Rodriguez</p>
                      <p className="text-xs text-emerald-300 mb-3">Lead Engineer</p>
                      <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white h-8 text-xs border-0 mt-2 shadow-lg shadow-emerald-500/20">
                        Convert to Employee
                      </Button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
