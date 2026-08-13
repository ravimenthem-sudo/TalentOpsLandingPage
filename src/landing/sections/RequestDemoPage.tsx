import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  ChevronRight, Building2, ArrowLeft,
  Layout, Building, Grid, PlusCircle, Shield, CheckCircle,
  Clock, Rocket, Users, Monitor, Zap, Bell, Check, Mail, ChevronDown,
  Users2, Network, FileText, Activity, Calendar, CreditCard, Briefcase,
  Megaphone, MessageSquare, Kanban, CheckSquare, LifeBuoy, UserPlus,
  Receipt, BarChart3, TrendingUp, Trophy, GitBranch, UserCheck
} from 'lucide-react';

function ModuleCard({ id, title, desc, Icon, isSelected, onClick }: any) {
  return (
    <div 
      onClick={onClick}
      style={{ 
        border: isSelected ? '1px solid #3b82f6' : '1px solid #e2e8f0', 
        backgroundColor: isSelected ? '#f8faff' : '#ffffff', 
        borderRadius: '16px', 
        padding: '16px 20px', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '16px', 
        cursor: 'pointer', 
        transition: 'all 0.2s',
        position: 'relative',
        boxShadow: isSelected ? '0 10px 30px rgba(59, 130, 246, 0.15)' : 'none'
      }}
    >
      <div style={{ 
        width: '40px', height: '40px', 
        backgroundColor: isSelected ? '#3b82f6' : '#f8fafc', 
        borderRadius: '10px', 
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        boxShadow: isSelected ? '0 4px 15px rgba(59, 130, 246, 0.4)' : 'none'
      }}>
        <Icon size={20} strokeWidth={isSelected ? 2.5 : 2} color={isSelected ? '#ffffff' : '#64748b'} />
      </div>
      <div>
        <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1a2b3c', marginBottom: '2px' }}>{title}</div>
        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{desc}</div>
      </div>
      {isSelected && (
        <div style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#3b82f6' }}>
          <CheckCircle size={20} />
        </div>
      )}
    </div>
  );
}

function FeatureToggle({ title, desc, isOn, onClick }: any) {
  return (
    <div 
      onClick={onClick}
      style={{
        border: isOn ? '1px solid #3b82f6' : '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '20px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        backgroundColor: '#ffffff',
        transition: 'all 0.2s',
      }}
    >
      <div>
        <div style={{ fontSize: '1.05rem', fontWeight: 600, color: '#1a2b3c', marginBottom: '4px' }}>{title}</div>
        <div style={{ fontSize: '0.85rem', color: '#64748b' }}>{desc}</div>
      </div>
      <div style={{ 
        width: '44px', 
        height: '24px', 
        backgroundColor: isOn ? '#3b82f6' : '#e2e8f0', 
        borderRadius: '12px',
        position: 'relative',
        transition: 'background-color 0.2s'
      }}>
        <div style={{
          width: '20px',
          height: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          position: 'absolute',
          top: '2px',
          left: isOn ? '22px' : '2px',
          transition: 'left 0.2s',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }} />
      </div>
    </div>
  );
}

function MatrixToggle({ isOn, onClick }: any) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div 
        onClick={onClick}
        style={{ 
          width: '44px', 
          height: '24px', 
          backgroundColor: isOn ? '#3b82f6' : '#f8fafc', 
          borderRadius: '12px',
          position: 'relative',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
          border: '1px solid #e2e8f0'
        }}>
        <div style={{
          width: '20px',
          height: '20px',
          backgroundColor: '#ffffff',
          borderRadius: '50%',
          position: 'absolute',
          top: '1px',
          left: isOn ? '21px' : '1px',
          transition: 'left 0.2s',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }} />
      </div>
    </div>
  );
}

function SetupWizard({ onBack }: { onBack: () => void }) {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [selectedPermission, setSelectedPermission] = useState<string | null>(null);
  const [isBackHovered, setIsBackHovered] = useState(false);
  
  const toggleFeature = (id: string) => {
    setSelectedFeatures([id]);
  };

  const toggleModule = (id: string) => {
    setSelectedModules([id]);
  };

  return (
    <div style={{ display: 'flex', width: '100%', minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Left Sidebar */}
      <div style={{ width: '320px', backgroundColor: '#f8fafc', borderRight: '1px solid #e2e8f0', padding: '40px', position: 'sticky', top: 0, height: '100vh', overflowY: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '60px' }}>
          <div style={{ width: '32px', height: '32px', backgroundColor: '#3b82f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>T</span>
          </div>
          <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1a2b3c' }}>TalentOps</span>
        </div>

        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', letterSpacing: '1px', marginBottom: '16px' }}>
          PHASE {currentStep}
        </div>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1a2b3c', marginBottom: '40px', fontFamily: 'var(--font-serif, "Playfair Display", serif)' }}>
          {currentStep === 1 ? 'Dashboard' : currentStep === 2 ? 'Organization' : currentStep === 3 ? 'Modules' : currentStep === 4 ? 'Features' : currentStep === 5 ? 'Permissions' : 'Review'}
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Step 1 */}
          <div style={{ display: 'flex', gap: '16px', position: 'relative' }}>
            {currentStep === 1 && (
              <div style={{ width: '3px', height: '20px', backgroundColor: '#3b82f6', position: 'absolute', left: '-30px', top: '2px', borderRadius: '2px' }}></div>
            )}
            <div style={{ color: '#3b82f6', flexShrink: 0 }}>
              {currentStep > 1 ? <Check size={20} strokeWidth={3} /> : <Layout size={24} />}
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#3b82f6', letterSpacing: '1px', textTransform: 'uppercase' }}>Setup Progress</div>
              <div style={{ fontSize: '1.1rem', fontWeight: currentStep === 1 ? 600 : 500, color: '#3b82f6' }}>Dashboard</div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div style={{ display: 'flex', gap: '16px', position: 'relative' }}>
            {currentStep === 2 && (
              <div style={{ width: '3px', height: '20px', backgroundColor: '#3b82f6', position: 'absolute', left: '-30px', top: '2px', borderRadius: '2px' }}></div>
            )}
            <div style={{ color: currentStep >= 2 ? '#3b82f6' : '#111827', flexShrink: 0 }}>
              {currentStep > 2 ? <Check size={20} strokeWidth={3} /> : <Building2 size={24} />}
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: currentStep >= 2 ? '#3b82f6' : '#111827', letterSpacing: '1px', textTransform: 'uppercase' }}>Workspace Name</div>
              <div style={{ fontSize: '1.1rem', fontWeight: currentStep === 2 ? 600 : 500, color: currentStep >= 2 ? '#3b82f6' : '#111827' }}>Organization</div>
            </div>
          </div>

          {/* Step 3 */}
          <div style={{ display: 'flex', gap: '16px', position: 'relative' }}>
            {currentStep === 3 && (
              <div style={{ width: '3px', height: '20px', backgroundColor: '#3b82f6', position: 'absolute', left: '-30px', top: '2px', borderRadius: '2px' }}></div>
            )}
            <div style={{ color: currentStep >= 3 ? '#3b82f6' : '#111827', flexShrink: 0 }}>
              {currentStep > 3 ? <Check size={20} strokeWidth={3} /> : <Zap size={24} />}
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: currentStep >= 3 ? '#3b82f6' : '#111827', letterSpacing: '1px', textTransform: 'uppercase' }}>Platform Capabilities</div>
              <div style={{ fontSize: '1.1rem', fontWeight: currentStep === 3 ? 600 : 500, color: currentStep >= 3 ? '#3b82f6' : '#111827' }}>Modules</div>
            </div>
          </div>

          {/* Step 4 */}
          <div style={{ display: 'flex', gap: '16px', position: 'relative' }}>
            {currentStep === 4 && (
              <div style={{ width: '3px', height: '20px', backgroundColor: '#3b82f6', position: 'absolute', left: '-30px', top: '2px', borderRadius: '2px' }}></div>
            )}
            <div style={{ color: currentStep >= 4 ? '#3b82f6' : '#111827', flexShrink: 0 }}>
              {currentStep > 4 ? <Check size={20} strokeWidth={3} /> : <Bell size={24} />}
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: currentStep >= 4 ? '#3b82f6' : '#111827', letterSpacing: '1px', textTransform: 'uppercase' }}>Extra Add-ons</div>
              <div style={{ fontSize: '1.1rem', fontWeight: currentStep === 4 ? 600 : 500, color: currentStep >= 4 ? '#3b82f6' : '#111827' }}>Features</div>
            </div>
          </div>

          {/* Step 5 */}
          <div style={{ display: 'flex', gap: '16px', position: 'relative' }}>
            {currentStep === 5 && (
              <div style={{ width: '3px', height: '20px', backgroundColor: '#3b82f6', position: 'absolute', left: '-30px', top: '2px', borderRadius: '2px' }}></div>
            )}
            <div style={{ color: currentStep >= 5 ? '#3b82f6' : '#111827', flexShrink: 0 }}>
              {currentStep > 5 ? <Check size={20} strokeWidth={3} /> : <Shield size={24} />}
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: currentStep >= 5 ? '#3b82f6' : '#111827', letterSpacing: '1px', textTransform: 'uppercase' }}>Role Controls</div>
              <div style={{ fontSize: '1.1rem', fontWeight: currentStep === 5 ? 600 : 500, color: currentStep >= 5 ? '#3b82f6' : '#111827' }}>Permissions</div>
            </div>
          </div>

          {/* Step 6 */}
          <div style={{ display: 'flex', gap: '16px', position: 'relative' }}>
            <div style={{ color: currentStep >= 6 ? '#3b82f6' : '#111827', flexShrink: 0 }}>
              <CheckCircle size={24} />
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: currentStep >= 6 ? '#3b82f6' : '#111827', letterSpacing: '1px', textTransform: 'uppercase' }}>Final Launch</div>
              <div style={{ fontSize: '1.1rem', fontWeight: currentStep === 6 ? 600 : 500, color: currentStep >= 6 ? '#3b82f6' : '#111827' }}>Review</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto', height: '100vh' }}>
        {/* Top bar */}
        <div style={{ padding: '24px 40px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', position: 'sticky', top: 0, backgroundColor: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', zIndex: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '120px', height: '4px', backgroundColor: '#e2e8f0', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: `${(currentStep / 6) * 100}%`, height: '100%', backgroundColor: '#3b82f6', transition: 'width 0.3s ease' }}></div>
            </div>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#64748b', letterSpacing: '1px' }}>PROGRESS</span>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: currentStep === 1 ? '60px 80px' : '40px 80px', maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
          
          {currentStep === 1 && (
            <>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', border: '1px solid #e2e8f0', borderRadius: '20px', width: 'fit-content', marginBottom: '40px' }}>
                <Clock size={16} color="#64748b" />
                <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#4a5568' }}>Estimated setup time: 2 minutes</span>
              </div>

              <h1 style={{ fontSize: '3.5rem', fontWeight: 700, color: '#1a2b3c', marginBottom: '24px', fontFamily: 'var(--font-serif, "Playfair Display", serif)' }}>
                Welcome to TalentOps
              </h1>
              <p style={{ fontSize: '1.15rem', color: '#4a5568', lineHeight: 1.6, maxWidth: '600px', marginBottom: '60px', fontFamily: 'var(--font-serif, "Playfair Display", serif)' }}>
                Let's configure your workforce intelligence platform. Your workspace will be optimized for standard operations in seconds.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                {/* Card 1 */}
                <div 
                  onClick={() => setActiveCard(0)}
                  style={{ border: activeCard === 0 ? '1px solid #3b82f6' : '1px solid #e2e8f0', backgroundColor: activeCard === 0 ? '#f8faff' : '#ffffff', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer', transition: 'all 0.2s', boxShadow: activeCard === 0 ? '0 10px 30px rgba(59, 130, 246, 0.15)' : 'none' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: '#4a8df6', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 15px rgba(74, 141, 246, 0.4)' }}>
                    <Rocket size={24} color="#1e293b" />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1a2b3c', marginBottom: '4px' }}>Startup Setup</div>
                    <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Fast scaling & hiring focus</div>
                  </div>
                </div>

                {/* Card 2 */}
                <div 
                  onClick={() => setActiveCard(1)}
                  style={{ border: activeCard === 1 ? '1px solid #3b82f6' : '1px solid #e2e8f0', backgroundColor: activeCard === 1 ? '#f8faff' : '#ffffff', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer', transition: 'all 0.2s', boxShadow: activeCard === 1 ? '0 10px 30px rgba(59, 130, 246, 0.15)' : 'none' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: '#4a8df6', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 15px rgba(74, 141, 246, 0.4)' }}>
                    <Building2 size={24} color="#1e293b" />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1a2b3c', marginBottom: '4px' }}>Enterprise Setup</div>
                    <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Governance & complex levels</div>
                  </div>
                </div>

                {/* Card 3 */}
                <div 
                  onClick={() => setActiveCard(2)}
                  style={{ border: activeCard === 2 ? '1px solid #3b82f6' : '1px solid #e2e8f0', backgroundColor: activeCard === 2 ? '#f8faff' : '#ffffff', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer', transition: 'all 0.2s', boxShadow: activeCard === 2 ? '0 10px 30px rgba(59, 130, 246, 0.15)' : 'none' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: '#4a8df6', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 15px rgba(74, 141, 246, 0.4)' }}>
                    <Users size={24} color="#1e293b" />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1a2b3c', marginBottom: '4px' }}>HR Only Setup</div>
                    <div style={{ fontSize: '0.9rem', color: '#64748b' }}>Core personnel management</div>
                  </div>
                </div>

                {/* Card 4 */}
                <div 
                  onClick={() => setActiveCard(3)}
                  style={{ border: activeCard === 3 ? '1px solid #3b82f6' : '1px solid #e2e8f0', backgroundColor: activeCard === 3 ? '#f8faff' : '#ffffff', borderRadius: '16px', padding: '24px', display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer', transition: 'all 0.2s', boxShadow: activeCard === 3 ? '0 10px 30px rgba(59, 130, 246, 0.15)' : 'none' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: '#4a8df6', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 15px rgba(74, 141, 246, 0.4)' }}>
                    <Monitor size={24} color="#1e293b" />
                  </div>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1a2b3c', marginBottom: '4px' }}>Full Platform</div>
                    <div style={{ fontSize: '0.9rem', color: '#64748b' }}>All modules integrated</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '800px', margin: '0 auto', paddingTop: '20px' }}>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1a2b3c', marginBottom: '16px', fontFamily: 'var(--font-serif, "Playfair Display", serif)', textAlign: 'center' }}>
                Set Up Your Organization
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '60px', textAlign: 'center', fontFamily: 'var(--font-serif, "Playfair Display", serif)' }}>
                These details define your unique workspace identifier.
              </p>

              <div style={{ width: '100%', maxWidth: '640px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                {/* ORGANIZATION NAME */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Organization Name
                  </label>
                  <input 
                    className="setup-input"
                    type="text" 
                    placeholder="e.g. Ottobon Labs"
                    style={{ padding: '14px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', fontSize: '1rem', color: '#1a2b3c', outline: 'none', transition: 'all 0.2s' }}
                  />
                </div>

                {/* INDUSTRY */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Industry
                  </label>
                  <div style={{ position: 'relative' }}>
                    <select className="setup-input" style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', fontSize: '1rem', color: '#1a2b3c', appearance: 'none', outline: 'none', cursor: 'pointer', transition: 'all 0.2s' }}>
                      <option>Technology</option>
                      <option>Finance</option>
                      <option>Healthcare</option>
                    </select>
                    <ChevronDown size={18} color="#64748b" style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                  </div>
                </div>

                {/* ORGANIZATION ID */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Organization ID
                  </label>
                  <input 
                    className="setup-input"
                    type="text" 
                    placeholder="ottobon-labs"
                    style={{ padding: '14px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', fontSize: '1rem', color: '#1a2b3c', outline: 'none', transition: 'all 0.2s' }}
                  />
                </div>

                {/* COMPANY SIZE */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Company Size
                  </label>
                  <div style={{ position: 'relative' }}>
                    <select className="setup-input" style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', fontSize: '1rem', color: '#1a2b3c', appearance: 'none', outline: 'none', cursor: 'pointer', transition: 'all 0.2s' }}>
                      <option>1-50</option>
                      <option>51-200</option>
                      <option>201-500</option>
                    </select>
                    <ChevronDown size={18} color="#64748b" style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                  </div>
                </div>

                {/* ADMIN EMAIL */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Admin Email
                  </label>
                  <div style={{ position: 'relative' }}>
                    <input 
                      className="setup-input"
                      type="text" 
                      placeholder="name@company.com"
                      style={{ width: '100%', padding: '14px 16px', paddingRight: '48px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#f8fafc', fontSize: '1rem', color: '#1a2b3c', outline: 'none', boxSizing: 'border-box', transition: 'all 0.2s' }}
                    />
                    <Mail size={18} color="#94a3b8" style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#000000', fontStyle: 'italic', marginTop: '4px' }}>
                    We'll send your workspace credentials here
                  </span>
                </div>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '800px', margin: '0 auto', paddingTop: '20px' }}>
              <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#1a2b3c', marginBottom: '16px', fontFamily: 'var(--font-serif, "Playfair Display", serif)', textAlign: 'center' }}>
                Select Capabilities
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#64748b', marginBottom: '60px', textAlign: 'center', fontFamily: 'var(--font-serif, "Playfair Display", serif)' }}>
                Modules group related features and workflows.
              </p>

              <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '48px' }}>
                {/* Group: HR & ORGANIZATION */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1a2b3c', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', paddingLeft: '4px' }}>
                    HR & ORGANIZATION
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <ModuleCard 
                      id="employees" title="Employees" desc="Centralized personnel database" 
                      Icon={Users2} isSelected={selectedModules.includes('employees')} onClick={() => toggleModule('employees')} />
                    <ModuleCard 
                      id="org" title="Org Hierarchy" desc="Visual reporting structure" 
                      Icon={GitBranch} isSelected={selectedModules.includes('org')} onClick={() => toggleModule('org')} />
                    <ModuleCard 
                      id="policies" title="Policies" desc="Internal documents & compliance" 
                      Icon={FileText} isSelected={selectedModules.includes('policies')} onClick={() => toggleModule('policies')} />
                    <ModuleCard 
                      id="status" title="Employee Status" desc="Real-time availability tracking" 
                      Icon={Activity} isSelected={selectedModules.includes('status')} onClick={() => toggleModule('status')} />
                  </div>
                </div>

                {/* Group: WORKFORCE */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1a2b3c', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', paddingLeft: '4px' }}>
                    WORKFORCE
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <ModuleCard 
                      id="attendance" title="Attendance" desc="Time logs & clock-in logic" 
                      Icon={Calendar} isSelected={selectedModules.includes('attendance')} onClick={() => toggleModule('attendance')} />
                    <ModuleCard 
                      id="payroll" title="Payroll" desc="Salary & tax processing" 
                      Icon={CreditCard} isSelected={selectedModules.includes('payroll')} onClick={() => toggleModule('payroll')} />
                    <ModuleCard 
                      id="leave" title="Leave Management" desc="Absence & vacation flow" 
                      Icon={Briefcase} isSelected={selectedModules.includes('leave')} onClick={() => toggleModule('leave')} />
                  </div>
                </div>

                {/* Group: COMMUNICATIONS */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1a2b3c', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', paddingLeft: '4px' }}>
                    COMMUNICATIONS
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <ModuleCard 
                      id="announcements" title="Announcements" desc="Company-wide broadcasts" 
                      Icon={Megaphone} isSelected={selectedModules.includes('announcements')} onClick={() => toggleModule('announcements')} />
                    <ModuleCard 
                      id="dm" title="Direct Messages" desc="Secure internal chat" 
                      Icon={MessageSquare} isSelected={selectedModules.includes('dm')} onClick={() => toggleModule('dm')} />
                  </div>
                </div>

                {/* Group: OPERATIONS */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1a2b3c', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', paddingLeft: '4px' }}>
                    OPERATIONS
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <ModuleCard 
                      id="projects" title="Projects" desc="High-level project tracking" 
                      Icon={Building} isSelected={selectedModules.includes('projects')} onClick={() => toggleModule('projects')} />
                    <ModuleCard 
                      id="tasks" title="Tasks" desc="Granular task management" 
                      Icon={CheckSquare} isSelected={selectedModules.includes('tasks')} onClick={() => toggleModule('tasks')} />
                    <ModuleCard 
                      id="helpdesk" title="Helpdesk" desc="Raise & manage support tickets" 
                      Icon={LifeBuoy} isSelected={selectedModules.includes('helpdesk')} onClick={() => toggleModule('helpdesk')} />
                  </div>
                </div>

                {/* Group: TALENT & FINANCE */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1a2b3c', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', paddingLeft: '4px' }}>
                    TALENT & FINANCE
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <ModuleCard 
                      id="hiring" title="Hiring Portal" desc="Recruitment & pipeline funnel" 
                      Icon={UserPlus} isSelected={selectedModules.includes('hiring')} onClick={() => toggleModule('hiring')} />
                    <ModuleCard 
                      id="invoicing" title="Invoicing" desc="Client billing & payments" 
                      Icon={Receipt} isSelected={selectedModules.includes('invoicing')} onClick={() => toggleModule('invoicing')} />
                  </div>
                </div>

                {/* Group: INTELLIGENCE */}
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#1a2b3c', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px', paddingLeft: '4px' }}>
                    INTELLIGENCE
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <ModuleCard 
                      id="analytics" title="Analytics" desc="Advanced workforce insights" 
                      Icon={BarChart3} isSelected={selectedModules.includes('analytics')} onClick={() => toggleModule('analytics')} />
                    <ModuleCard 
                      id="performance" title="Performance" desc="Employee review cycles" 
                      Icon={UserCheck} isSelected={selectedModules.includes('performance')} onClick={() => toggleModule('performance')} />
                    <ModuleCard 
                      id="ranking" title="Ranking" desc="Gamified performance boards" 
                      Icon={Trophy} isSelected={selectedModules.includes('ranking')} onClick={() => toggleModule('ranking')} />
                  </div>
                </div>

              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '600px', margin: '0 auto', gap: '16px', paddingTop: '20px' }}>
              <FeatureToggle 
                title="Payslip Generator" desc="Auto-generate PDF slips" 
                isOn={selectedFeatures.includes('payslip')} onClick={() => toggleFeature('payslip')} />
              <FeatureToggle 
                title="Employee Self Service" desc="Profile management portal" 
                isOn={selectedFeatures.includes('ess')} onClick={() => toggleFeature('ess')} />
              <FeatureToggle 
                title="Expense Claims" desc="Digital reimbursement flow" 
                isOn={selectedFeatures.includes('expense')} onClick={() => toggleFeature('expense')} />
              <FeatureToggle 
                title="360° Feedback" desc="Comprehensive review system" 
                isOn={selectedFeatures.includes('feedback')} onClick={() => toggleFeature('feedback')} />
              <FeatureToggle 
                title="Project Documents" desc="Shared document storage" 
                isOn={selectedFeatures.includes('documents')} onClick={() => toggleFeature('documents')} />
              <FeatureToggle 
                title="Reports & Analytics" desc="Advanced dataset visualization" 
                isOn={selectedFeatures.includes('reports')} onClick={() => toggleFeature('reports')} />
            </div>
          )}

          {currentStep === 5 && (
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: '750px', margin: '0 auto', paddingTop: '20px' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, color: '#1a2b3c', marginBottom: '32px', fontFamily: 'var(--font-serif, "Playfair Display", serif)' }}>
                Permissions Matrix
              </h3>
              
              <div style={{ border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#ffffff', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                {/* Header */}
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', padding: '20px 24px', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', letterSpacing: '1.5px', textTransform: 'uppercase' }}>ROLES</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'center' }}>VIEW</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'center' }}>CREATE</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'center' }}>APPROVE</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#64748b', letterSpacing: '1.5px', textTransform: 'uppercase', textAlign: 'center' }}>MANAGE</div>
                </div>

                {/* Rows */}
                {['Executive', 'Manager', 'Team Lead', 'Employee'].map((role, idx) => (
                  <div key={role} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr', padding: '24px', borderBottom: idx < 3 ? '1px solid #e2e8f0' : 'none', alignItems: 'center' }}>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1a2b3c' }}>{role}</div>
                    {['View', 'Create', 'Approve', 'Manage'].map(action => {
                      const id = `${role}-${action}`;
                      return (
                        <MatrixToggle 
                          key={id} 
                          isOn={selectedPermission === id} 
                          onClick={() => setSelectedPermission(id)} 
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div style={{ padding: '24px 40px', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff', position: 'sticky', bottom: 0, zIndex: 10 }}>
          {currentStep === 1 ? (
            <button 
              onClick={onBack} 
              onMouseOver={(e) => { e.currentTarget.style.color = '#3b82f6'; e.currentTarget.style.borderColor = '#3b82f6'; }}
              onMouseOut={(e) => { e.currentTarget.style.color = '#1a2b3c'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
              style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '24px', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', fontSize: '1rem', fontWeight: 600, color: '#1a2b3c', transition: 'all 0.2s' }}>
              <ArrowLeft size={18} color="#64748b" />
              Back to Home
            </button>
          ) : (
            <button 
              onClick={() => setCurrentStep(prev => prev - 1)}
              onMouseEnter={() => setIsBackHovered(true)}
              onMouseLeave={() => setIsBackHovered(false)}
              style={{ background: isBackHovered ? '#f8faff' : 'white', border: isBackHovered ? '1px solid #3b82f6' : '1px solid #e2e8f0', borderRadius: '24px', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '1rem', fontWeight: 600, color: isBackHovered ? '#3b82f6' : '#1a2b3c', transition: 'all 0.2s' }}>
              <ChevronRight size={18} color={isBackHovered ? '#3b82f6' : '#64748b'} style={{ transform: 'rotate(180deg)' }} />
              Back
            </button>
          )}
          
          {currentStep === 1 ? (
            <button 
              onClick={() => setCurrentStep(2)}
              style={{ background: '#3b82f6', color: 'white', border: 'none', borderRadius: '12px', padding: '16px 32px', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', transition: 'background 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.background = '#2563eb'}
              onMouseOut={(e) => e.currentTarget.style.background = '#3b82f6'}
            >
              Start Setup Now <ChevronRight size={18} />
            </button>
          ) : (
            <button 
              onClick={() => setCurrentStep(prev => prev < 6 ? prev + 1 : prev)}
              style={{ background: '#3b82f6', color: 'white', border: 'none', borderRadius: '12px', padding: '16px 32px', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', transition: 'background 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.background = '#2563eb'}
              onMouseOut={(e) => e.currentTarget.style.background = '#3b82f6'}
            >
              Continue to Next Step <ChevronRight size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export function RequestDemoPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromSection = (location.state as any)?.from || null;
  const [showSetup, setShowSetup] = useState(false);

  const handleReturnHome = () => {
    navigate('/', { state: { scrollTo: fromSection } });
  };

  if (showSetup) {
    return <SetupWizard onBack={() => setShowSetup(false)} />;
  }

  return (
    <div className="demo-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', padding: '40px 60px', backgroundColor: '#fafafa', justifyContent: 'center' }}>
      <div className="demo-layout" style={{ display: 'flex', gap: '100px', maxWidth: '1200px', margin: '0 auto', alignItems: 'center', width: '100%' }}>
        {/* Left: Context */}
        <div className="demo-left" style={{ flex: 1, paddingRight: '40px' }}>
          <div style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.85rem', fontWeight: 700, color: '#3b82f6', marginBottom: '20px' }}>
            REQUEST A DEMO
          </div>
          <h1 className="demo-heading" style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#1a2b3c', marginBottom: '24px', lineHeight: 1.1, fontFamily: 'var(--font-serif, "Playfair Display", serif)', whiteSpace: 'nowrap' }}>
            See TalentOps in Action
          </h1>
          <p className="demo-subtext" style={{ fontSize: '1.25rem', color: '#4a5568', lineHeight: 1.7, marginBottom: '40px', maxWidth: '540px', fontFamily: 'var(--font-serif, "Playfair Display", serif)' }}>
            Discover how our workforce intelligence platform can help you structure growth, optimize performance, and build a high-ROI workforce.
          </p>
          <div className="demo-benefits" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              'Personalized walkthrough of key features',
              'Custom ROI analysis for your team',
              'Deep dive into data integrations',
              'Answers to your specific technical questions',
            ].map((item, i) => (
              <div key={i} className="demo-benefit-item" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#eff6ff', flexShrink: 0 }}>
                  <ChevronRight style={{ color: '#3b82f6', width: '16px', height: '16px', marginLeft: '2px' }} />
                </div>
                <span style={{ color: '#2d3748', fontSize: '1.1rem', fontFamily: 'var(--font-serif, "Playfair Display", serif)' }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '60px' }}>
            <button onClick={handleReturnHome} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', padding: 0 }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid #e2e8f0', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.02)' }}>
                <ArrowLeft style={{ width: '18px', height: '18px', color: '#4a5568' }} />
              </div>
              <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#1a2b3c' }}>Back to Home</span>
            </button>
          </div>
        </div>

        {/* Right: Card */}
        <div className="demo-right" style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div className="demo-form-card" style={{ background: 'white', borderRadius: '24px', padding: '56px 48px', boxShadow: '0 20px 40px rgba(0,0,0,0.06)', width: '100%', maxWidth: '480px', textAlign: 'center' }}>
            <div style={{ width: '56px', height: '56px', background: '#eff6ff', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 32px auto' }}>
              <Building2 style={{ width: '28px', height: '28px', color: '#3b82f6' }} />
            </div>
            <h2 style={{ fontSize: '3rem', fontWeight: '700', color: '#1a2b3c', marginBottom: '24px', lineHeight: 1.1, fontFamily: 'var(--font-serif, "Playfair Display", serif)' }}>
              Ready to build<br/>your<br/>workspace?
            </h2>
            <p style={{ color: '#4a5568', marginBottom: '40px', lineHeight: 1.7, fontSize: '1.15rem', padding: '0 10px', fontFamily: 'var(--font-serif, "Playfair Display", serif)' }}>
              Skip the wait and start configuring your workforce intelligence environment immediately through our automated onboarding wizard.
            </p>
            <button 
              style={{ width: '100%', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '12px', padding: '18px', fontSize: '1.2rem', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '24px', transition: 'background 0.2s' }}
              onMouseOver={(e) => e.currentTarget.style.background = '#2563eb'}
              onMouseOut={(e) => e.currentTarget.style.background = '#3b82f6'}
              onClick={() => setShowSetup(true)}
            >
              Start Setup Now <ChevronRight size={20} />
            </button>
            <p style={{ fontSize: '0.75rem', color: '#a0aec0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
              NO CREDIT CARD REQUIRED &bull; INSTANT ACCESS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
