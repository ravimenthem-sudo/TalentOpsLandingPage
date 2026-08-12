import React from 'react';

// Premium Glass Wrapper with glowing background
const InfographicWrapper = ({ children, color, glowId }: { children: React.ReactNode, color: string, glowId: string }) => (
  <div className="w-full h-full relative flex items-center justify-center p-6 overflow-hidden rounded-2xl" style={{ background: '#080C16' }}>
    {/* Animated Background Orbs */}
    <div className={`absolute w-64 h-64 rounded-full blur-[80px] opacity-30 mix-blend-screen animate-pulse`} 
         style={{ background: color, top: '-20%', left: '-20%' }}></div>
    <div className={`absolute w-64 h-64 rounded-full blur-[80px] opacity-20 mix-blend-screen animate-pulse`} 
         style={{ background: color, bottom: '-20%', right: '-20%', animationDelay: '1s' }}></div>
    
    {/* Clean Grid */}
    <div className="absolute inset-0 pointer-events-none opacity-20" style={{
      backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
      backgroundSize: '24px 24px'
    }}></div>
    
    {children}
  </div>
);

// Glass Card Component
const GlassCard = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`relative z-10 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] ${className}`}>
    {/* Inner highlight */}
    <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none"></div>
    {children}
  </div>
);

export const BurnoutInfographic = () => (
  <div className="w-full h-full relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#080C16]">
    <img 
      src="/burnout-dashboard.png" 
      alt="Burnout Detection Dashboard" 
      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
    />
    {/* Inner shadow to blend the image seamlessly */}
    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(8,12,22,1)] pointer-events-none border border-white/5 rounded-2xl"></div>
  </div>
);

export const AccountabilityInfographic = () => (
  <div className="w-full h-full relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#080C16]">
    <img 
      src="/accountability-dashboard.png" 
      alt="Project Velocity and Accountability" 
      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
    />
    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(8,12,22,1)] pointer-events-none border border-white/5 rounded-2xl"></div>
  </div>
);

export const CapacityInfographic = () => (
  <div className="w-full h-full relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#080C16]">
    <img 
      src="/capacity-dashboard.png" 
      alt="Capacity vs Demand" 
      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
    />
    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(8,12,22,1)] pointer-events-none border border-white/5 rounded-2xl"></div>
  </div>
);

export const SystemsInfographic = () => (
  <div className="w-full h-full relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#080C16]">
    <img 
      src="/systems-dashboard.png" 
      alt="Systems Integration Failure" 
      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
    />
    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(8,12,22,1)] pointer-events-none border border-white/5 rounded-2xl"></div>
  </div>
);

export const OverheadInfographic = () => (
  <div className="w-full h-full relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#080C16]">
    <img 
      src="/overhead-dashboard.png" 
      alt="Hidden Cost Leakage" 
      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
    />
    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(8,12,22,1)] pointer-events-none border border-white/5 rounded-2xl"></div>
  </div>
);

export const PerformanceInfographic = () => (
  <div className="w-full h-full relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#080C16]">
    <img 
      src="/performance-dashboard.png" 
      alt="Predictive Performance Tracking" 
      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
    />
    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(8,12,22,1)] pointer-events-none border border-white/5 rounded-2xl"></div>
  </div>
);
