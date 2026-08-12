import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, LayoutTemplate } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

export function FeatureDetailsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { id } = useParams();
  
  const { title = '', description = '', iconBg = '', iconColor = '' } = state || {};
  
  // Detailed definitions for each feature
  const featureDetails: Record<string, { extendedDesc: string; bulletPoints: string[] }> = {
    "employee-management": {
      extendedDesc: "A complete, unified system to manage your entire workforce seamlessly from onboarding to offboarding. Build a strong foundation for your HR operations.",
      bulletPoints: [
        "Secure, unified database for all employee personal and professional information.",
        "Customizable organization charts and clear reporting structures.",
        "Automated document management, e-signatures, and compliance tracking.",
        "Granular role-based access controls to ensure strict data privacy."
      ]
    },
    "attendance-tracking": {
      extendedDesc: "Gain complete visibility into your workforce's time and attendance, whether they are working in the office, remotely, or out in the field.",
      bulletPoints: [
        "Real-time clock-in and clock-out tracking with IP and geofencing restrictions.",
        "Automated timesheet generation and approval workflows.",
        "Identify absenteeism patterns and tardiness with advanced reporting.",
        "Seamlessly integrate with biometric devices and existing hardware."
      ]
    },
    "leave-management": {
      extendedDesc: "Take the hassle out of time-off requests. Automate policies, accruals, and approvals to keep your team happy and your operations running smoothly.",
      bulletPoints: [
        "Self-service portal for employees to request time off and view balances.",
        "Customizable leave policies tailored to different regions and roles.",
        "Automated multi-level approval workflows for managers.",
        "Integrated team calendars to prevent staffing shortages."
      ]
    },
    "payroll-coordination": {
      extendedDesc: "Bridge the gap between HR and finance. Ensure your employees get paid accurately and on time, every time, without the manual data entry.",
      bulletPoints: [
        "Automated syncing of attendance, leaves, and salary structures.",
        "One-click generation of payroll-ready reports and data exports.",
        "Eliminate manual reconciliation and reduce human error.",
        "Secure digital payslip distribution directly to employee portals."
      ]
    },
    "performance-management": {
      extendedDesc: "Empower your employees to reach their full potential. Foster a culture of continuous feedback, clear goal-setting, and transparent evaluations.",
      bulletPoints: [
        "Set and track OKRs and KPIs aligned with company objectives.",
        "Conduct structured 360-degree reviews and self-assessments.",
        "Capture continuous feedback and recognize employee achievements.",
        "Identify top performers and build effective succession plans."
      ]
    },
    "communication": {
      extendedDesc: "Build a connected and engaged company culture. Ensure everyone is aligned, informed, and heard, regardless of where they work.",
      bulletPoints: [
        "Company-wide announcement boards and interactive notice feeds.",
        "Targeted messaging based on department, location, or role.",
        "Employee pulse surveys and anonymous feedback channels.",
        "Centralized hub for company policies, handbooks, and resources."
      ]
    }
  };

  const details = id ? featureDetails[id] : null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-semibold text-sm mb-12 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
            {/* Decorative background blob */}
            <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${iconBg ? iconBg.replace('bg-', 'from-').replace('-50', '-100') : 'from-blue-100'} to-transparent rounded-full opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none`} />

            <div className="relative z-10">
              <div className={`w-16 h-16 rounded-2xl ${iconBg || 'bg-blue-50'} ${iconColor || 'text-blue-600'} flex items-center justify-center mb-8 shadow-sm`}>
                <LayoutTemplate className="w-8 h-8" />
              </div>
              
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 whitespace-pre-line leading-tight">
                {title}
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl font-medium mb-4">
                {description}
              </p>

              {details && (
                <div className="mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
                    {details.extendedDesc}
                  </p>
                  
                  <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                    <h3 className="font-bold text-slate-900 mb-6 text-lg">Key Capabilities</h3>
                    <ul className="space-y-4">
                      {details.bulletPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${iconColor ? iconColor.replace('text-', 'bg-') : 'bg-blue-600'}`} />
                          <span className="text-slate-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className="mt-12 pt-12 border-t border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Ready to see it in action?</h3>
                <button 
                  onClick={() => navigate('/')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-blue-600/20 transition-all hover:scale-105"
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
