import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Search, Book, PlayCircle, LifeBuoy, FileText, ArrowRight, MessageSquare, Phone, Users, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      <Navbar />
      
      {/* Hero / Search Section */}
      <main className="flex-1 pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-900 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500 blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-500 blur-[120px] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            How can we help you today?
          </h1>
          <p className="text-lg text-slate-400 mb-10">
            Search our knowledge base for guides, tutorials, and troubleshooting.
          </p>
          
          <div className="relative max-w-2xl mx-auto mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-slate-400" />
            </div>
            <input 
              type="text" 
              className="block w-full pl-12 pr-4 py-4 rounded-xl border-0 bg-slate-800 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 text-lg shadow-xl" 
              placeholder="Search for 'add employee', 'run payroll', etc." 
            />
            <div className="absolute inset-y-0 right-2 flex items-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 h-10">
                Search
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-400">
            <span>Popular:</span>
            <Link to="#" className="hover:text-blue-400 transition-colors">Setup payroll taxes</Link>
            <span>•</span>
            <Link to="#" className="hover:text-blue-400 transition-colors">Invite team members</Link>
            <span>•</span>
            <Link to="#" className="hover:text-blue-400 transition-colors">API documentation</Link>
          </div>
        </div>
      </main>

      {/* Browse by Category */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 text-center tracking-tight">
            Browse by Category
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all group cursor-pointer">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Book className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Getting Started</h3>
              <p className="text-slate-600 mb-4 text-sm">Account setup, company branding, and initial configuration guides.</p>
              <span className="text-blue-600 font-medium text-sm flex items-center gap-1">24 Articles <ArrowRight className="w-3 h-3" /></span>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all group cursor-pointer">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Core HR & Employees</h3>
              <p className="text-slate-600 mb-4 text-sm">Managing profiles, setting up time-off policies, and org charts.</p>
              <span className="text-blue-600 font-medium text-sm flex items-center gap-1">42 Articles <ArrowRight className="w-3 h-3" /></span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all group cursor-pointer">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Payroll & Taxes</h3>
              <p className="text-slate-600 mb-4 text-sm">Running payroll cycles, tax compliance, and managing contractors.</p>
              <span className="text-blue-600 font-medium text-sm flex items-center gap-1">38 Articles <ArrowRight className="w-3 h-3" /></span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all group cursor-pointer">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <PlayCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Video Tutorials</h3>
              <p className="text-slate-600 mb-4 text-sm">Step-by-step video walkthroughs of common TalentOps features.</p>
              <span className="text-blue-600 font-medium text-sm flex items-center gap-1">15 Videos <ArrowRight className="w-3 h-3" /></span>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all group cursor-pointer">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Security & Permissions</h3>
              <p className="text-slate-600 mb-4 text-sm">RBAC setup, SSO integration, and data privacy compliance.</p>
              <span className="text-blue-600 font-medium text-sm flex items-center gap-1">12 Articles <ArrowRight className="w-3 h-3" /></span>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg hover:border-blue-200 transition-all group cursor-pointer">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <LifeBuoy className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">API & Integrations</h3>
              <p className="text-slate-600 mb-4 text-sm">Webhooks, OpenAPI specs, and connecting to third-party tools.</p>
              <span className="text-blue-600 font-medium text-sm flex items-center gap-1">Developer Docs <ArrowRight className="w-3 h-3" /></span>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
            Still need help?
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Our support team is available 24/7 to help you get the most out of TalentOps.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 w-full sm:w-64">
              <MessageSquare className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Live Chat</h4>
              <p className="text-sm text-slate-600 mb-4">Average response time: 2 min</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Start Chat</Button>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 w-full sm:w-64">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-slate-900 mb-2">Call Us</h4>
              <p className="text-sm text-slate-600 mb-4">Available for Enterprise plans</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">View Numbers</Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
