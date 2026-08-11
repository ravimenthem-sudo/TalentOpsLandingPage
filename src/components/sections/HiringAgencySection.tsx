import React from "react";
import { UserSearch, FileText, Users, CheckCircle, Handshake, Briefcase, ArrowRight } from "lucide-react";

export function HiringAgencySection() {
  const steps = [
    { 
      name: "1. Tell us who you need", 
      icon: <FileText className="w-5 h-5 text-indigo-600" />,
      desc: "We start with a deep dive into your company culture, role requirements, and long-term goals to build a precise candidate profile."
    },
    { 
      name: "2. Source relevant candidates", 
      icon: <UserSearch className="w-5 h-5 text-indigo-600" />,
      desc: "Our expert recruiters tap into exclusive talent pools and passive networks to find top-tier professionals who match your exact criteria."
    },
    { 
      name: "3. Screen and shortlist", 
      icon: <Users className="w-5 h-5 text-indigo-600" />,
      desc: "We conduct rigorous technical assessments and behavioral interviews, presenting you with only the top 5% of fully vetted candidates."
    },
    { 
      name: "4. Interview & Hire", 
      icon: <Handshake className="w-5 h-5 text-indigo-600" />,
      desc: "We coordinate all interview logistics, handle offer negotiations, and ensure a seamless closing process for your new hire."
    },
    { 
      name: "5. Operate via TalentOps", 
      icon: <CheckCircle className="w-5 h-5 text-emerald-600" />,
      desc: "Your new hire is instantly synced into your TalentOps dashboard for automated onboarding, payroll, and performance tracking."
    },
  ];

  return (
    <section className="py-24 bg-indigo-950 text-white overflow-hidden relative" id="talentops-hiring">
      
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-300 via-transparent to-transparent"></div>
         <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-300 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-semibold tracking-wide text-indigo-200 bg-indigo-900/50 rounded-full border border-indigo-800">
              <Briefcase className="w-4 h-4" />
              TALENTOPS HIRING AGENCY
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Need the People?<br />
              <span className="text-indigo-400">We’ll Help You Find Them.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-indigo-100 mb-10 leading-relaxed">
              <p>
                Software alone can't fix a talent shortage. Building a high-performing organization requires 
                getting the right people in the door first. That is why the TalentOps Hiring Agency exists.
              </p>
              <p>
                We act as your dedicated internal recruitment team. Our industry-expert recruiters actively hunt, 
                source, and rigorously vet top-tier passive talent that you won't find on standard job boards. 
                We handle the entire end-to-end recruitment lifecycle so you don't have to waste hours reviewing unqualified resumes.
              </p>
              <p className="p-4 bg-indigo-900/50 border border-indigo-800 rounded-xl">
                Once the offer is signed, the magic happens: Your new hire is instantly pushed into your TalentOps platform. 
                <strong className="text-white block mt-2">Source with our Agency. Manage with our Platform.</strong>
              </p>
            </div>
            
            <button className="bg-white text-indigo-950 hover:bg-indigo-50 font-bold px-8 py-4 rounded-xl transition-all shadow-lg flex items-center gap-2">
              Learn about our Hiring Service <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Workflow visualization */}
          <div className="relative">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 relative shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-8 border-b border-slate-800 pb-4">Our End-to-End Workflow</h3>
              
              <div className="flex flex-col gap-8">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 relative">
                    {/* Connecting line */}
                    {idx < steps.length - 1 && (
                      <div className="absolute top-10 left-5 w-[2px] h-full bg-slate-800 -z-10"></div>
                    )}
                    
                    <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0 z-10 mt-1">
                      {step.icon}
                    </div>
                    
                    <div>
                      <div className={`font-bold text-lg mb-1 ${idx === steps.length - 1 ? 'text-white' : 'text-slate-200'}`}>
                        {step.name}
                      </div>
                      <div className="text-sm text-slate-400 leading-relaxed pr-4">
                        {step.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
