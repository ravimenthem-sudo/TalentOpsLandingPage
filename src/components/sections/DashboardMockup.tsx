"use client";
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { LayoutDashboard, Users, Calendar, Clock, BarChart3, Settings, MoreHorizontal, CheckCircle2, ChevronDown, Bell } from "lucide-react";

export function DashboardMockup() {
  const chartData = [
    { name: "Mon", value: 65 },
    { name: "Tue", value: 75 },
    { name: "Wed", value: 68 },
    { name: "Thu", value: 85 },
    { name: "Fri", value: 82 },
    { name: "Sat", value: 40 },
    { name: "Sun", value: 35 },
  ];

  return (
    <div className="relative w-full z-10 pb-10">
      {/* Main Dashboard Window */}
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex font-sans h-[550px]">
        
        {/* Sidebar */}
        <div className="w-16 md:w-20 bg-[#1e293b] flex flex-col items-center py-6 gap-6 shrink-0 z-10">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mb-4">
            T
          </div>
          {[LayoutDashboard, Users, Calendar, Clock, BarChart3].map((Icon, i) => (
            <div key={i} className={`w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-colors ${i === 0 ? 'bg-blue-600/20 text-blue-400' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
              <Icon className="w-5 h-5" />
            </div>
          ))}
          <div className="mt-auto">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer text-slate-400 hover:bg-white/5 hover:text-white">
              <Settings className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-slate-50 flex flex-col overflow-hidden min-h-[500px]">
          {/* Header */}
          <div className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
            <h2 className="text-lg font-bold text-slate-800">Dashboard</h2>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-3">
                <span className="text-sm text-slate-500">Welcome back,</span>
                <span className="text-sm font-semibold text-slate-800">Mikhail H.</span>
              </div>
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Avatar" className="w-8 h-8 rounded-full border border-slate-200" />
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 flex-1 overflow-y-auto scrollbar-hide">
            
            {/* Top Stat Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[
                { title: "Total Employees", value: "1,245", trend: "+12.5%", trendUp: true, vs: "vs last month" },
                { title: "Present Today", value: "856", trend: "+8.5%", trendUp: true, vs: "vs yesterday" },
                { title: "On Leave", value: "96", trend: "+1.1%", trendUp: false, vs: "vs last week" },
                { title: "Open Tasks", value: "23", trend: "+3.4%", trendUp: true, vs: "vs last week" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm">
                  <h3 className="text-xs text-slate-500 font-medium mb-1">{stat.title}</h3>
                  <div className="text-2xl font-bold text-slate-800 mb-2">{stat.value}</div>
                  <div className="flex items-center gap-1 text-[10px]">
                    <span className={stat.trendUp ? "text-emerald-500 font-medium" : "text-rose-500 font-medium"}>{stat.trend}</span>
                    <span className="text-slate-400">{stat.vs}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              
              {/* Attendance Chart */}
              <div className="lg:col-span-2 bg-white rounded-lg p-5 border border-slate-200 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-slate-800 text-sm">Attendance Overview</h3>
                  <div className="bg-blue-600 text-white text-[11px] font-bold px-3 py-1.5 rounded-md shadow-sm">
                    88.6%
                  </div>
                </div>
                <div className="h-36">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2563eb" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} />
                      <Area 
                        type="linear" 
                        dataKey="value" 
                        stroke="#2563eb" 
                        strokeWidth={2} 
                        fillOpacity={1} 
                        fill="url(#colorValue)" 
                        dot={{ r: 3, fill: '#2563eb', stroke: '#ffffff', strokeWidth: 1.5 }}
                        activeDot={{ r: 5 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Payroll & Notifications */}
              <div className="space-y-6">
                
                {/* Payroll Summary */}
                <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-semibold text-slate-800 text-sm">Payroll Summary</h3>
                    <div className="text-xs text-slate-500">This Month</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-xs text-slate-500 mb-1">Total Payroll</div>
                    <div className="text-xl font-bold text-slate-800">$2,45,000</div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-500">Paid Employees</span>
                      <span className="font-semibold text-slate-700">1,152 / 1,245</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5">
                      <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '92.5%' }}></div>
                    </div>
                    <div className="text-right text-[10px] text-slate-400 mt-1">92.5%</div>
                  </div>
                </div>

                {/* Notifications */}
                <div className="bg-white rounded-lg p-5 border border-slate-200 shadow-sm">
                  <h3 className="font-semibold text-slate-800 text-sm mb-4">Recent Notifications</h3>
                  <div className="space-y-4">
                    {[
                      { icon: Clock, color: "text-blue-500", bg: "bg-blue-50", text: "Leave request from James Anderson", time: "10 min ago" },
                      { icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-50", text: "Payroll for April has been processed", time: "2 hr ago" },
                      { icon: Bell, color: "text-amber-500", bg: "bg-amber-50", text: "Performance reviews are due", time: "5 hrs ago" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className={`p-1.5 rounded-md ${item.bg} shrink-0 mt-0.5`}>
                          <item.icon className={`w-3.5 h-3.5 ${item.color}`} />
                        </div>
                        <div>
                          <p className="text-xs text-slate-700 leading-tight mb-0.5">{item.text}</p>
                          <p className="text-[10px] text-slate-400">{item.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Calendar, title: "Leave Requests", value: "12", desc: "Pending Approval", link: "View all" },
                { icon: BarChart3, title: "Performance", value: "4.6/5", desc: "Team Avg. Rating", link: "View report" },
                { icon: Bell, title: "Alerts", value: "3", desc: "Require Attention", link: "View all" },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-lg p-4 border border-slate-200 shadow-sm flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                      <card.icon className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium">{card.title}</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-xl font-bold text-slate-800">{card.value}</span>
                      <span className="text-[10px] text-slate-500">{card.desc}</span>
                    </div>
                    <a href="#" className="text-[10px] font-semibold text-blue-600 hover:underline">{card.link}</a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
