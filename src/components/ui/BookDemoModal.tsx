import React from "react";
import { X } from "lucide-react";

export function BookDemoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-premium overflow-hidden flex flex-col max-h-full animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Book a Demo</h2>
            <p className="text-slate-500 text-sm mt-1">See how TalentOps can transform your workforce operations.</p>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Form Body */}
        <div className="p-6 overflow-y-auto flex-1">
          <form className="space-y-6">
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Name</label>
                <input 
                  type="text" 
                  className="w-full h-12 px-4 rounded-md border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Work Email</label>
                <input 
                  type="email" 
                  className="w-full h-12 px-4 rounded-md border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  placeholder="john@company.com"
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Company</label>
                <input 
                  type="text" 
                  className="w-full h-12 px-4 rounded-md border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  placeholder="Acme Inc."
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Phone</label>
                <input 
                  type="tel" 
                  className="w-full h-12 px-4 rounded-md border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                  placeholder="+1 (555) 000-0000"
                  required
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Company Size</label>
                <select className="w-full h-12 px-4 rounded-md border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white">
                  <option value="">Select size</option>
                  <option value="1-50">1-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501+">501+ employees</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">What are you looking for?</label>
                <select className="w-full h-12 px-4 rounded-md border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white" required>
                  <option value="">Select an option</option>
                  <option value="HR Management">HR Management</option>
                  <option value="Payroll">Payroll</option>
                  <option value="Recruitment">Recruitment</option>
                  <option value="Workforce Management">Workforce Management</option>
                  <option value="TalentOps Hiring Agency">TalentOps Hiring Agency</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Message / Requirements</label>
              <textarea 
                className="w-full p-4 rounded-md border border-slate-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none h-32"
                placeholder="Tell us about your current challenges or requirements..."
              ></textarea>
            </div>

          </form>
        </div>
        
        {/* Footer */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            By submitting, you agree to our Terms and Privacy Policy.
          </p>
          <button 
            type="button"
            onClick={(e) => {
               e.preventDefault();
               alert("Form submitted! (Demo)");
               onClose();
            }}
            className="h-12 px-8 rounded-md bg-primary-600 hover:bg-primary-700 text-white font-bold shadow-md transition-colors"
          >
            Book My Demo
          </button>
        </div>

      </div>
    </div>
  );
}
