"use client";
import React from "react";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "TalentOps transformed how we manage our people operations. Payroll processing time reduced by 50% and our HR team is now more strategic and less administrative.",
      author: "Sarah Mitchell",
      role: "CHRO, TechNova Inc.",
      logo: "TechNova",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "The platform is intuitive, powerful, and the support team is outstanding. I highly recommend to any growing organizations.",
      author: "Arjun Patel",
      role: "HR Director, NexGen Solutions",
      logo: "NexGen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "Real-time insights and automation have completely changed the way we operate. Our productivity has improved significantly.",
      author: "Emily Rogers",
      role: "Talent Operations Head, CloudSync",
      logo: "CloudSync",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <div className="text-blue-600 font-semibold tracking-wider text-sm uppercase">WHAT OUR CUSTOMERS SAY</div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm flex flex-col hover:shadow-md transition-shadow"
            >
              <Quote className="w-8 h-8 text-blue-500 mb-6" />
              <p className="text-slate-700 text-[15px] leading-relaxed mb-8 flex-1">
                "{t.quote}"
              </p>
              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-bold text-slate-900 text-xs">{t.author}</div>
                    <div className="text-[10px] text-slate-500">{t.role}</div>
                  </div>
                </div>
                <div className="font-bold text-blue-600 text-[10px] tracking-widest uppercase opacity-70">
                  {t.logo}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
