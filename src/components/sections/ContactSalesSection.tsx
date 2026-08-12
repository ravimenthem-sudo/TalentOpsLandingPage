import React from 'react';
import { ArrowRight } from 'lucide-react';

export function ContactSalesSection() {
  return (
    <section id="contact" className="relative py-24 bg-blue-950 overflow-hidden text-slate-100 border-b-[16px] border-white">
      {/* Subtle dotted background pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#60a5fa 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-10 text-blue-500 tracking-tight">
          Contact Details
        </h2>
        
        <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-2xl shadow-blue-900/50">
          <form className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-5">
              <div className="w-full">
                <label className="block text-sm font-bold text-slate-900 mb-1.5 ml-1">First Name</label>
                <input 
                  type="text" 
                  placeholder="Jane"
                  className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-900 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-bold text-slate-900 mb-1.5 ml-1">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Doe"
                  className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-900 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-1.5 ml-1">Work Email</label>
              <input 
                type="email" 
                placeholder="jane@company.com"
                className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-900 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-1.5 ml-1">Company Size</label>
              <select 
                className="w-full h-12 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 font-bold focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer"
              >
                <option value="" disabled selected className="text-slate-600">Select company size</option>
                <option value="1-50">1 - 50 employees</option>
                <option value="51-200">51 - 200 employees</option>
                <option value="201-1000">201 - 1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-900 mb-1.5 ml-1">How can we help?</label>
              <textarea 
                placeholder="Tell us about your needs..."
                rows={4}
                className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 font-bold text-slate-900 placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
              />
            </div>

            <button 
              type="submit"
              className="mt-2 w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-black font-bold text-[15px] shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Send Request
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <p className="text-center text-[13px] text-slate-500 pt-3">
              By submitting, you agree to our Terms of Service and Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
