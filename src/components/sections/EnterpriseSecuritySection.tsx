"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Server, Fingerprint } from "lucide-react";

export function EnterpriseSecuritySection() {
  const features = [
    { icon: Lock, title: "End-to-End Encryption", desc: "Your data is encrypted at rest and in transit using AES-256." },
    { icon: ShieldCheck, title: "SOC 2 Type II Certified", desc: "Independently audited for security, availability, and confidentiality." },
    { icon: Fingerprint, title: "Role-Based Access", desc: "Granular permissions ensure employees only see what they need." },
    { icon: Server, title: "99.99% Uptime SLA", desc: "Enterprise-grade reliability deployed across global regions." },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <div key={i} className={`p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all ${i === 1 || i === 3 ? 'translate-y-6' : ''}`}>
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                    <feature.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">{feature.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Background Blob */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="text-emerald-600 font-semibold tracking-wide text-sm uppercase mb-3">Enterprise Grade</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Bank-level security for your most sensitive data.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We know HR data is highly sensitive. That's why TalentOps is built from the ground up with enterprise-grade security architecture to protect your people and your business.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 font-medium text-sm shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> GDPR Compliant
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 font-medium text-sm shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> ISO 27001
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-white text-slate-700 font-medium text-sm shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-500" /> HIPAA Ready
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
