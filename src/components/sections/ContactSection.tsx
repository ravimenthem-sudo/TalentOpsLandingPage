import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Contact Details
            </h2>
            <p className="text-lg text-slate-300">
              Fill out the form below and we'll get back to you soon.
            </p>
          </div>
          
          {/* Form */}
          <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-xl border border-slate-100 relative overflow-hidden">
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900">First Name</label>
                  <input type="text" placeholder="Jane" className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-slate-900 placeholder:text-slate-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900">Last Name</label>
                  <input type="text" placeholder="Doe" className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-slate-900 placeholder:text-slate-400" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900">Work Email</label>
                <input type="email" placeholder="jane@company.com" className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-slate-900 placeholder:text-slate-400" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900">Company Size</label>
                <select className="w-full h-12 px-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-slate-600 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231e293b%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[length:12px_12px] bg-[right_16px_center] defaultValue={''}">
                  <option value="" disabled>Select company size</option>
                  <option value="1-50">1 - 50 employees</option>
                  <option value="51-200">51 - 200 employees</option>
                  <option value="201-500">201 - 500 employees</option>
                  <option value="501+">501+ employees</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900">How can we help?</label>
                <textarea placeholder="Tell us about your needs..." rows={4} className="w-full p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all text-slate-900 resize-none placeholder:text-slate-400"></textarea>
              </div>
              
              <button type="submit" className="w-full h-12 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-colors">
                Send Request <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
