import React, { useState } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, TrendingUp, Users, Lightbulb, ArrowRight, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const categories = ["All Articles", "Culture & Engagement", "Payroll & Compliance", "Recruiting", "Product Updates"];

const articlesData = [
  {
    id: 1,
    category: "Recruiting",
    badge: "Recruiting",
    title: "5 Ways to Speed Up Your Time-to-Hire Without Sacrificing Quality",
    excerpt: "A prolonged hiring process costs you top candidates. Learn how to optimize your interview loops and leverage ATS automation to close offers faster.",
    date: "Oct 12, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    category: "Culture & Engagement",
    badge: "Culture",
    title: "How to Run a 360-Degree Performance Review That Actually Works",
    excerpt: "Done poorly, 360 reviews can cause anxiety and office politics. Done right, they are the ultimate tool for career development. Here is our blueprint.",
    date: "Oct 8, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    category: "Payroll & Compliance",
    badge: "Payroll",
    title: "The Hidden Costs of Manual Payroll Processing",
    excerpt: "Still running payroll in Excel? The math might be free, but the compliance risks and time spent are costing your business thousands every month.",
    date: "Oct 2, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    category: "Product Updates",
    badge: "Product",
    title: "Announcing TalentOps Advanced Org Charts",
    excerpt: "We've just released our brand new dynamic org charts featuring dotted-line reporting and cross-functional team visualization.",
    date: "Sep 28, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  
  const filteredArticles = articlesData.filter(a => activeCategory === "All Articles" || a.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      <Navbar />
      
      {/* Hero / Featured Article Section */}
      <main className="flex-1 pt-32 pb-16 lg:pt-40 lg:pb-20 bg-white border-b border-slate-200 overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-orange-100 blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-6 tracking-tight">
              Insights for Modern HR Teams
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Expert advice, industry trends, and practical guides on scaling culture, mastering payroll, and hiring top talent.
            </p>
          </div>

          {/* Featured Post */}
          <div className="group relative rounded-3xl overflow-hidden bg-slate-900 shadow-2xl cursor-pointer">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
            
            <div className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-end min-h-[500px]">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500 text-white font-semibold text-xs uppercase tracking-wider mb-6 w-max">
                Featured
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl group-hover:text-orange-400 transition-colors">
                The State of Remote Work 2026: How Top Companies are Adapting
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mb-8 line-clamp-2">
                We surveyed over 5,000 HR professionals to understand the shifting dynamics of remote, hybrid, and in-office work models. Discover the strategies that are actually working for retention.
              </p>

            </div>
          </div>
        </div>
      </main>



      {/* Latest Articles Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-10">Latest Articles</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all group cursor-pointer flex flex-col">
                <div className="h-48 overflow-hidden bg-slate-200 relative">
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-slate-900 uppercase">{article.badge}</div>
                  <img src={article.image} alt="Thumb" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-slate-600 mb-6 line-clamp-3 text-sm flex-1">
                    {article.excerpt}
                  </p>

                </div>
              </div>
            ))}

            {/* Newsletter CTA Card */}
            <div className="bg-orange-600 rounded-2xl overflow-hidden shadow-lg p-8 flex flex-col justify-center text-center relative col-span-1 md:col-span-2 lg:col-span-2">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
              <div className="relative z-10">
                <Mail className="w-12 h-12 text-white/90 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-white mb-3">Get HR insights delivered weekly.</h4>
                <p className="text-orange-100 mb-6 max-w-md mx-auto">Join 40,000+ HR professionals receiving our best content every Tuesday.</p>
                <div className="flex gap-2 max-w-md mx-auto">
                  <input type="email" placeholder="Your work email" className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white text-slate-900" />
                  <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-6 h-auto">Subscribe</Button>
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
