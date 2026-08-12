import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center shadow-sm">
                <span className="text-white font-display font-bold text-2xl leading-none">T</span>
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-tight">TalentOps</span>
            </div>
            <p className="max-w-sm text-sm leading-relaxed mb-6 text-slate-400">
              TalentOps operates the talents of your organization — from hiring to everyday employee operations and growth.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 hover:text-white transition-all text-slate-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 hover:text-white transition-all text-slate-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-slate-700 hover:text-white transition-all text-slate-400">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="hover:text-primary-400 transition-all text-sm">Employee Management</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-all text-sm">Payroll & Compensation</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-all text-sm">Workforce Operations</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-all text-sm">Performance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Solutions & Hiring</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="hover:text-primary-400 transition-all text-sm">For Startups</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-all text-sm">For Mid-Sized Businesses</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-all text-sm">For Professional Services</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-all text-sm">TalentOps Hiring Agency</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company & Support</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="hover:text-primary-400 transition-all text-sm">About Us</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-all text-sm">Help Center & FAQs</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-all text-sm">System Status</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="flex flex-col gap-3">
              <li className="text-slate-400 text-sm leading-relaxed">
                Ottobon Academy<br />
                A square business center,<br />
                Waltair Main Rd, next to lifestyle stores,<br />
                Suite: 102, Ram Nagar, Visakhapatnam
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} TalentOps. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-all">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-all">Terms of Service</a>
            <a href="#" className="hover:text-white transition-all">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
