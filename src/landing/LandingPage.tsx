import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import GridScan from './components/GridScan';
import { SharedNavigation } from './components/SharedNavigation';
import { ProblemDiagnostic } from './components/ProblemDiagnostic';
import { Magnet, UserPlus, Handshake, Users, DollarSign, Target, TrendingUp, CheckCircle2, ChevronDown } from 'lucide-react';
import './LandingPage.css';

export function LandingPage() {
  const [activePillar, setActivePillar] = useState('talent-acquisition');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeLifecycleTab, setActiveLifecycleTab] = useState('attract');
  const [openHiringStep, setOpenHiringStep] = useState<number | null>(0);
  const [openAboutAccordion, setOpenAboutAccordion] = useState<number | null>(null);

  const lifecycleTabsData = [
    { id: 'attract', label: 'Attract', icon: <Magnet size={18} strokeWidth={2} /> },
    { id: 'hire', label: 'Hire', icon: <UserPlus size={18} strokeWidth={2} /> },
    { id: 'onboard', label: 'Onboard', icon: <Handshake size={18} strokeWidth={2} /> },
    { id: 'manage', label: 'Manage', icon: <Users size={18} strokeWidth={2} /> },
    { id: 'pay', label: 'Pay', icon: <DollarSign size={18} strokeWidth={2} /> },
    { id: 'perform', label: 'Perform', icon: <Target size={18} strokeWidth={2} /> },
    { id: 'grow', label: 'Grow', icon: <TrendingUp size={18} strokeWidth={2} /> }
  ];

  const lifecycleContentData: Record<string, any> = {
    attract: {
      title: 'Attract & Recruit Top Talent',
      desc: 'Bring potential talent into the organization with powerful sourcing tools.',
      features: [
        'Custom branded career pages',
        'Multi-board job postings',
        'Candidate pipeline tracking'
      ],
      cardIcon: <Magnet size={40} strokeWidth={1.5} color="var(--blue-brand)" />,
      cardTitle: 'Attract Phase',
      cardDesc: 'Fully integrated into the TalentOps platform.'
    },
    hire: {
      title: 'Hire the Right Candidates',
      desc: 'Manage the entire hiring process from screening to offer letters seamlessly.',
      features: [
        'Interview scheduling & feedback',
        'Automated candidate communication',
        'Offer letter generation'
      ],
      cardIcon: <UserPlus size={40} strokeWidth={1.5} color="var(--blue-brand)" />,
      cardTitle: 'Hire Phase',
      cardDesc: 'Built to help you make faster, smarter hiring decisions.'
    },
    onboard: {
      title: 'Smooth Employee Onboarding',
      desc: 'Bring new employees into the organization with structured onboarding flows.',
      features: [
        'Digital document collection',
        'Task assignments for new hires',
        'Welcome kits and team introductions'
      ],
      cardIcon: <Handshake size={40} strokeWidth={1.5} color="var(--blue-brand)" />,
      cardTitle: 'Onboard Phase',
      cardDesc: 'Create a great first impression from day one.'
    },
    manage: {
      title: 'Comprehensive Employee Management',
      desc: 'Keep employee records, attendance, and daily operations in one secure place.',
      features: [
        'Centralized employee database',
        'Leave and attendance tracking',
        'Org charts and reporting lines'
      ],
      cardIcon: <Users size={40} strokeWidth={1.5} color="var(--blue-brand)" />,
      cardTitle: 'Manage Phase',
      cardDesc: 'The single source of truth for your workforce.'
    },
    pay: {
      title: 'Integrated Payroll & Compensation',
      desc: 'Process payroll accurately and automatically connected to attendance data.',
      features: [
        'Automated salary calculations',
        'Tax compliance and deductions',
        'Instant payslip generation'
      ],
      cardIcon: <DollarSign size={40} strokeWidth={1.5} color="var(--blue-brand)" />,
      cardTitle: 'Pay Phase',
      cardDesc: 'Payroll that runs on time, every time.'
    },
    perform: {
      title: 'Track and Measure Performance',
      desc: 'Set goals, run reviews, and ensure your team is aligned and productive.',
      features: [
        'Goal and OKR tracking',
        '360-degree performance reviews',
        'Continuous feedback loops'
      ],
      cardIcon: <Target size={40} strokeWidth={1.5} color="var(--blue-brand)" />,
      cardTitle: 'Perform Phase',
      cardDesc: 'Build a culture of high performance and accountability.'
    },
    grow: {
      title: 'Grow and Develop Your Talent',
      desc: 'Build a stronger organization by investing in employee growth and learning.',
      features: [
        'Learning and development paths',
        'Skill matrix and gap analysis',
        'Internal mobility and promotions'
      ],
      cardIcon: <TrendingUp size={40} strokeWidth={1.5} color="var(--blue-brand)" />,
      cardTitle: 'Grow Phase',
      cardDesc: 'Retain top talent by helping them advance their careers.'
    }
  };

  const pillars = [
    'talent-acquisition',
    'employee-management',
    'workforce-operations',
    'payroll',
    'performance',
    'analytics',
  ];



  const faqs = [
    {
      q: 'What is TalentOps?',
      a: 'TalentOps is a workforce lifecycle and talent operations platform. It brings recruitment, employee management, payroll, performance and workforce operations together in one connected system — so growing organizations can operate their people without relying on disconnected tools and manual processes.',
    },
    {
      q: 'Who is TalentOps for?',
      a: 'TalentOps is built for professional-service organizations and growing businesses — startups, SMEs, consulting firms, IT companies, agencies, healthcare organizations, and any team that needs structured people operations without complexity.',
    },
    {
      q: 'What modules are currently live?',
      a: 'All six product pillars are live: Talent Acquisition, Employee Management, Workforce Operations, Payroll & Compensation, Performance Management, and Reports & Analytics.',
    },
    {
      q: 'What is TalentOps Hiring Agency?',
      a: 'TalentOps Hiring Agency is a recruitment service that helps organizations source, screen and hire the right talent. It works alongside the TalentOps platform — we help you build your workforce, and then you operate and manage that workforce through TalentOps.',
    },
    {
      q: 'How is TalentOps different from a generic HRMS?',
      a: 'TalentOps is not just a records system. It connects the entire talent lifecycle — from the moment you attract a candidate to the moment they perform and grow inside your organization. The central idea is operating talent, not just storing data about it.',
    },
    {
      q: 'How do I get a demo?',
      a: 'Click "Book a Demo" anywhere on this page. Fill in a short form and one of our team members will reach out within 24 hours to schedule a personalized walkthrough.',
    },
    {
      q: 'Is my organization\'s data secure?',
      a: 'TalentOps handles workforce information with role-based access control and secure authentication. We are committed to responsible data handling. Reach out during the demo to discuss specific compliance or data requirements for your organization.',
    },
  ];

  return (
    <div className="landing-page-wrapper">

      {/* ── NAVIGATION ── */}
      <SharedNavigation />

      {/* ── HERO ── */}
      <section className="hero" id="hero" style={{ position: 'relative', overflow: 'hidden' }}>
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#1e293b"
          gridScale={0.1}
          scanColor="#1B6BF5"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1>From Hiring to High Performance —<br /><em>Manage Your Entire Workforce</em> in One Place.</h1>
          <p>TalentOps brings recruitment, employee management, payroll, performance and workforce operations together in one connected platform built for growing businesses.</p>
          <div className="hero-btns">
            <Link to="/request-demo" className="btn btn-primary btn-lg">Book a Demo →</Link>
            <a href="#lifecycle" className="btn btn-outline-white btn-lg">See How It Works</a>
          </div>
          <div className="hero-trust">
            <span>✓ Complete talent lifecycle</span>
            <span className="hero-trust-dot"></span>
            <span>✓ Built for growing businesses</span>
            <span className="hero-trust-dot"></span>
            <span>✓ Recruitment to payroll in one place</span>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-section">
        <div className="marquee-track">
          <div className="marquee-item"><span className="marquee-dot"></span>Talent Acquisition</div>
          <div className="marquee-item"><span className="marquee-dot"></span>Employee Management</div>
          <div className="marquee-item"><span className="marquee-dot"></span>Workforce Operations</div>
          <div className="marquee-item"><span className="marquee-dot"></span>Payroll &amp; Compensation</div>
          <div className="marquee-item"><span className="marquee-dot"></span>Performance Management</div>
          <div className="marquee-item"><span className="marquee-dot"></span>Reports &amp; Analytics</div>
          <div className="marquee-item"><span className="marquee-dot"></span>TalentOps Hiring Agency</div>
          <div className="marquee-item"><span className="marquee-dot"></span>Talent Acquisition</div>
          <div className="marquee-item"><span className="marquee-dot"></span>Employee Management</div>
          <div className="marquee-item"><span className="marquee-dot"></span>Workforce Operations</div>
          <div className="marquee-item"><span className="marquee-dot"></span>Payroll &amp; Compensation</div>
          <div className="marquee-item"><span className="marquee-dot"></span>Performance Management</div>
          <div className="marquee-item"><span className="marquee-dot"></span>Reports &amp; Analytics</div>
          <div className="marquee-item"><span className="marquee-dot"></span>TalentOps Hiring Agency</div>
        </div>
      </div>

      {/* ── TALENT LIFECYCLE ── */}
      <section className="lifecycle-section" id="lifecycle">
        <div className="container">
          <div className="section-head-center">
            <div className="section-tag">The TalentOps Lifecycle</div>
            <h2 className="section-title">One Continuous Platform. Seven Stages.</h2>
            <p className="section-sub">TalentOps operates your people from the moment you attract talent to the day they grow your organization — without switching between systems.</p>
          </div>

          <div className="lifecycle-dashboard">
            <div className="lifecycle-tabs">
              {lifecycleTabsData.map(tab => (
                <div
                  key={tab.id}
                  className={`lifecycle-tab ${activeLifecycleTab === tab.id ? 'active' : ''}`}
                  onMouseEnter={() => setActiveLifecycleTab(tab.id)}
                >
                  {tab.icon} {tab.label}
                </div>
              ))}
            </div>

            <div className="lifecycle-content">
              <div className="lifecycle-info">
                <h3>{lifecycleContentData[activeLifecycleTab].title}</h3>
                <p>{lifecycleContentData[activeLifecycleTab].desc}</p>
                <ul className="lifecycle-features">
                  {lifecycleContentData[activeLifecycleTab].features.map((feature: string, i: number) => (
                    <li key={i}><CheckCircle2 size={18} color="#6366f1" /> {feature}</li>
                  ))}
                </ul>
              </div>
              <div className="lifecycle-card">
                <div className="lifecycle-card-icon-wrapper">
                  {lifecycleContentData[activeLifecycleTab].cardIcon}
                </div>
                <h4>{lifecycleContentData[activeLifecycleTab].cardTitle}</h4>
                <p>{lifecycleContentData[activeLifecycleTab].cardDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM DIAGNOSTIC ── */}
      <ProblemDiagnostic />

      {/* ── PRODUCT PILLARS ── */}
      <section className="modules-section" id="pillars">
        <div className="container">
          <div className="section-tag">Product Pillars</div>
          <h2 className="section-title">Everything Your Workforce Needs. One Platform.</h2>
          <p className="section-sub">Six live product areas covering the complete talent lifecycle — from attracting candidates to measuring performance.</p>

          <div className="module-tabs">
            <div className={`module-tab ${activePillar === 'talent-acquisition' ? 'active' : ''}`} onMouseEnter={() => setActivePillar('talent-acquisition')}>Talent Acquisition</div>
            <div className={`module-tab ${activePillar === 'employee-management' ? 'active' : ''}`} onMouseEnter={() => setActivePillar('employee-management')}>Employee Management</div>
            <div className={`module-tab ${activePillar === 'workforce-operations' ? 'active' : ''}`} onMouseEnter={() => setActivePillar('workforce-operations')}>Workforce Operations</div>
            <div className={`module-tab ${activePillar === 'payroll' ? 'active' : ''}`} onMouseEnter={() => setActivePillar('payroll')}>Payroll &amp; Compensation</div>
            <div className={`module-tab ${activePillar === 'performance' ? 'active' : ''}`} onMouseEnter={() => setActivePillar('performance')}>Performance Management</div>
            <div className={`module-tab ${activePillar === 'analytics' ? 'active' : ''}`} onMouseEnter={() => setActivePillar('analytics')}>Reports &amp; Analytics</div>
          </div>

          {/* Pillar 1: Talent Acquisition */}
          <div className={`module-showcase ${activePillar === 'talent-acquisition' ? 'active' : ''}`}>
            <div className="module-info">
              <h3>Talent Acquisition</h3>
              <p>Manage your entire recruitment pipeline — from job posting to onboarding handoff — in one place. Never lose track of a candidate or a role again.</p>
              <ul className="module-features">
                <li>Candidate management across every hiring stage</li>
                <li>Hiring pipeline with interview scheduling</li>
                <li>Job requisition and role management</li>
                <li>Onboarding handoff once a candidate is hired</li>
                <li>Recruitment activity tracking and visibility</li>
              </ul>
            </div>
            <div className="module-screen">
              <div className="screen-topbar">
                <div className="screen-dots"><div className="screen-dot" style={{ background: '#FF5F57' }}></div><div className="screen-dot" style={{ background: '#FEBC2E' }}></div><div className="screen-dot" style={{ background: '#28C840' }}></div></div>
                <span className="screen-title">TalentOps — Talent Acquisition</span>
              </div>
              <div className="screen-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy)' }}>Hiring Pipeline <span style={{ background: 'var(--blue-light)', color: 'var(--blue-brand)', borderRadius: '100px', padding: '2px 8px', fontSize: '0.72rem', marginLeft: '6px' }}>6 Open Roles</span></div>
                  <span className="mini-badge badge-red">2 Urgent</span>
                </div>
                <table className="mini-table">
                  <tbody>
                    <tr><th>Role</th><th>Stage</th><th>Candidates</th><th>Priority</th></tr>
                    <tr><td><strong style={{ color: 'var(--navy)' }}>Senior Developer</strong><br /><span style={{ color: 'var(--gray-400)', fontSize: '0.7rem' }}>Engineering</span></td><td><span className="mini-badge badge-amber">Interview</span></td><td>4</td><td><span className="mini-badge badge-red">High</span></td></tr>
                    <tr><td><strong style={{ color: 'var(--navy)' }}>UX Designer</strong><br /><span style={{ color: 'var(--gray-400)', fontSize: '0.7rem' }}>Product</span></td><td><span className="mini-badge badge-blue">Screening</span></td><td>11</td><td><span className="mini-badge badge-amber">Medium</span></td></tr>
                    <tr><td><strong style={{ color: 'var(--navy)' }}>HR Executive</strong><br /><span style={{ color: 'var(--gray-400)', fontSize: '0.7rem' }}>People Ops</span></td><td><span className="mini-badge badge-green">Offer Sent</span></td><td>1</td><td><span className="mini-badge badge-green">Filled</span></td></tr>
                    <tr><td><strong style={{ color: 'var(--navy)' }}>Data Analyst</strong><br /><span style={{ color: 'var(--gray-400)', fontSize: '0.7rem' }}>Analytics</span></td><td><span className="mini-badge" style={{ background: 'var(--gray-100)', color: 'var(--gray-600)' }}>Sourcing</span></td><td>2</td><td><span className="mini-badge badge-red">Urgent</span></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Pillar 2: Employee Management */}
          <div className={`module-showcase ${activePillar === 'employee-management' ? 'active' : ''}`}>
            <div className="module-info">
              <h3>Employee Management</h3>
              <p>Maintain complete, accurate employee profiles and records — from offer letter to exit — in one organized system your team can actually use.</p>
              <ul className="module-features">
                <li>Employee profiles with personal and role information</li>
                <li>Document management and records storage</li>
                <li>Organizational structure and reporting lines</li>
                <li>Employee lifecycle from onboarding to exit</li>
                <li>Role and department management</li>
              </ul>
            </div>
            <div className="module-screen">
              <div className="screen-topbar">
                <div className="screen-dots"><div className="screen-dot" style={{ background: '#FF5F57' }}></div><div className="screen-dot" style={{ background: '#FEBC2E' }}></div><div className="screen-dot" style={{ background: '#28C840' }}></div></div>
                <span className="screen-title">TalentOps — Employee Management</span>
              </div>
              <div className="screen-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy)' }}>Employee Directory</div>
                  <span className="mini-badge badge-green">42 Active</span>
                </div>
                <table className="mini-table">
                  <tr><th>Employee</th><th>Role</th><th>Department</th><th>Status</th></tr>
                  <tr><td><strong style={{ color: 'var(--navy)' }}>Ananya R.</strong></td><td style={{ color: 'var(--gray-400)' }}>Senior Developer</td><td>Engineering</td><td><span className="mini-badge badge-green">Active</span></td></tr>
                  <tr><td><strong style={{ color: 'var(--navy)' }}>Siddharth P.</strong></td><td style={{ color: 'var(--gray-400)' }}>UX Designer</td><td>Product</td><td><span className="mini-badge badge-amber">On Leave</span></td></tr>
                  <tr><td><strong style={{ color: 'var(--navy)' }}>Kavitha M.</strong></td><td style={{ color: 'var(--gray-400)' }}>HR Executive</td><td>People Ops</td><td><span className="mini-badge badge-green">Active</span></td></tr>
                  <tr><td><strong style={{ color: 'var(--navy)' }}>Priya S.</strong></td><td style={{ color: 'var(--gray-400)' }}>Data Analyst</td><td>Analytics</td><td><span className="mini-badge badge-blue">Onboarding</span></td></tr>
                </table>
              </div>
            </div>
          </div>

          {/* Pillar 3: Workforce Operations */}
          <div className={`module-showcase ${activePillar === 'workforce-operations' ? 'active' : ''}`}>
            <div className="module-info">
              <h3>Workforce Operations</h3>
              <p>Manage attendance, leave and day-to-day people operations without chasing spreadsheets or approval emails.</p>
              <ul className="module-features">
                <li>Attendance tracking and timesheets</li>
                <li>Leave request and approval workflows</li>
                <li>Task assignment and progress tracking</li>
                <li>Team visibility and workload management</li>
                <li>Day-to-day people operations in one place</li>
              </ul>
            </div>
            <div className="module-screen">
              <div className="screen-topbar">
                <div className="screen-dots"><div className="screen-dot" style={{ background: '#FF5F57' }}></div><div className="screen-dot" style={{ background: '#FEBC2E' }}></div><div className="screen-dot" style={{ background: '#28C840' }}></div></div>
                <span className="screen-title">TalentOps — Workforce Operations</span>
              </div>
              <div className="screen-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy)' }}>Team Attendance — Today</div>
                  <span className="mini-badge badge-green">36 / 42 Present</span>
                </div>
                <table className="mini-table">
                  <tr><th>Employee</th><th>Status</th><th>Hours Today</th><th>Leave Balance</th></tr>
                  <tr><td><strong style={{ color: 'var(--navy)' }}>Ananya R.</strong></td><td><span className="mini-badge badge-green">Present</span></td><td>6h 42m</td><td>12 days</td></tr>
                  <tr><td><strong style={{ color: 'var(--navy)' }}>Siddharth P.</strong></td><td><span className="mini-badge badge-amber">Leave</span></td><td>—</td><td>8 days</td></tr>
                  <tr><td><strong style={{ color: 'var(--navy)' }}>Vikram S.</strong></td><td><span className="mini-badge badge-red">⚠ Overtime</span></td><td>9h 55m</td><td>15 days</td></tr>
                  <tr><td><strong style={{ color: 'var(--navy)' }}>Kavitha M.</strong></td><td><span className="mini-badge badge-green">Present</span></td><td>7h 10m</td><td>10 days</td></tr>
                </table>
              </div>
            </div>
          </div>

          {/* Pillar 4: Payroll & Compensation */}
          <div className={`module-showcase ${activePillar === 'payroll' ? 'active' : ''}`}>
            <div className="module-info">
              <h3>Payroll &amp; Compensation</h3>
              <p>Manage salary, run payroll and generate payslips — all connected to your employee and attendance records so there are no data gaps.</p>
              <ul className="module-features">
                <li>Payroll processing and salary management</li>
                <li>Payslip generation for every employee</li>
                <li>Salary structure and compensation records</li>
                <li>Payroll connected to attendance and leave data</li>
                <li>Payroll history and audit trail</li>
              </ul>
            </div>
            <div className="module-screen">
              <div className="screen-topbar">
                <div className="screen-dots"><div className="screen-dot" style={{ background: '#FF5F57' }}></div><div className="screen-dot" style={{ background: '#FEBC2E' }}></div><div className="screen-dot" style={{ background: '#28C840' }}></div></div>
                <span className="screen-title">TalentOps — Payroll &amp; Compensation</span>
              </div>
              <div className="screen-body">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius-md)', padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--navy)' }}>₹18.4L</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--gray-400)' }}>Payroll This Month</div>
                  </div>
                  <div style={{ background: 'var(--blue-light)', borderRadius: 'var(--radius-md)', padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--blue-brand)' }}>42</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--blue-brand)' }}>Payslips Generated</div>
                  </div>
                  <div style={{ background: '#E0F7F5', borderRadius: 'var(--radius-md)', padding: '12px', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#0D7A5F' }}>Processed</div>
                    <div style={{ fontSize: '0.7rem', color: '#0D7A5F' }}>Status</div>
                  </div>
                </div>
                <table className="mini-table">
                  <tr><th>Employee</th><th>Basic</th><th>Net Pay</th><th>Payslip</th></tr>
                  <tr><td><strong style={{ color: 'var(--navy)' }}>Ananya R.</strong></td><td>₹85,000</td><td>₹72,400</td><td><span className="mini-badge badge-green">Sent</span></td></tr>
                  <tr><td><strong style={{ color: 'var(--navy)' }}>Siddharth P.</strong></td><td>₹65,000</td><td>₹55,200</td><td><span className="mini-badge badge-green">Sent</span></td></tr>
                  <tr><td><strong style={{ color: 'var(--navy)' }}>Kavitha M.</strong></td><td>₹55,000</td><td>₹47,100</td><td><span className="mini-badge badge-amber">Pending</span></td></tr>
                </table>
              </div>
            </div>
          </div>

          {/* Pillar 5: Performance Management */}
          <div className={`module-showcase ${activePillar === 'performance' ? 'active' : ''}`}>
            <div className="module-info">
              <h3>Performance Management</h3>
              <p>Set goals, run reviews and track performance across your team — so people grow and your organization gets stronger over time.</p>
              <ul className="module-features">
                <li>Goal setting and OKR tracking</li>
                <li>Performance review cycles</li>
                <li>Employee performance records</li>
                <li>Manager and peer review workflows</li>
                <li>Performance visibility across the organization</li>
              </ul>
            </div>
            <div className="module-screen">
              <div className="screen-topbar">
                <div className="screen-dots"><div className="screen-dot" style={{ background: '#FF5F57' }}></div><div className="screen-dot" style={{ background: '#FEBC2E' }}></div><div className="screen-dot" style={{ background: '#28C840' }}></div></div>
                <span className="screen-title">TalentOps — Performance Management</span>
              </div>
              <div className="screen-body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--navy)' }}>Q3 Review Cycle <span className="mini-badge badge-blue" style={{ marginLeft: '6px' }}>In Progress</span></div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gray-400)' }}>28 / 42 Completed</span>
                </div>
                <table className="mini-table">
                  <tr><th>Employee</th><th>Goal Progress</th><th>Review Status</th><th>Rating</th></tr>
                  <tr><td><strong style={{ color: 'var(--navy)' }}>Ananya R.</strong></td><td><div style={{ width: '80px' }}><div className="mini-prog-bar"><div className="mini-prog-fill" style={{ width: '90%', background: 'var(--teal)' }}></div></div></div></td><td><span className="mini-badge badge-green">Complete</span></td><td>Exceeds</td></tr>
                  <tr><td><strong style={{ color: 'var(--navy)' }}>Siddharth P.</strong></td><td><div style={{ width: '80px' }}><div className="mini-prog-bar"><div className="mini-prog-fill" style={{ width: '60%' }}></div></div></div></td><td><span className="mini-badge badge-amber">In Review</span></td><td>Meets</td></tr>
                  <tr><td><strong style={{ color: 'var(--navy)' }}>Vikram S.</strong></td><td><div style={{ width: '80px' }}><div className="mini-prog-bar"><div className="mini-prog-fill" style={{ width: '45%' }}></div></div></div></td><td><span className="mini-badge badge-amber">Pending</span></td><td>—</td></tr>
                </table>
              </div>
            </div>
          </div>

          {/* Pillar 6: Reports & Analytics */}
          <div className={`module-showcase ${activePillar === 'analytics' ? 'active' : ''}`}>
            <div className="module-info">
              <h3>Reports &amp; Analytics</h3>
              <p>Get clear visibility into your workforce — headcount, payroll, performance and operational data in one place, without building reports from scratch.</p>
              <ul className="module-features">
                <li>Workforce reports: headcount, attrition, tenure</li>
                <li>Payroll reports and compensation summaries</li>
                <li>Performance visibility across teams and individuals</li>
                <li>Attendance and leave reports</li>
                <li>Operational insights for decision-making</li>
              </ul>
            </div>
            <div className="module-screen">
              <div className="screen-topbar">
                <div className="screen-dots"><div className="screen-dot" style={{ background: '#FF5F57' }}></div><div className="screen-dot" style={{ background: '#FEBC2E' }}></div><div className="screen-dot" style={{ background: '#28C840' }}></div></div>
                <span className="screen-title">TalentOps — Reports &amp; Analytics</span>
              </div>
              <div className="screen-body">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius-md)', padding: '12px' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--gray-400)', marginBottom: '4px' }}>Total Headcount</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--navy)' }}>42</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--teal)' }}>↑ +3 this quarter</div>
                  </div>
                  <div style={{ background: 'var(--blue-light)', borderRadius: 'var(--radius-md)', padding: '12px' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--blue-brand)', marginBottom: '4px' }}>Monthly Payroll</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--blue-brand)' }}>₹18.4L</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--blue-brand)' }}>↑ +5% vs last month</div>
                  </div>
                </div>
                <table className="mini-table">
                  <tr><th>Report</th><th>Period</th><th>Status</th></tr>
                  <tr><td><strong style={{ color: 'var(--navy)' }}>Headcount Report</strong></td><td>Q3 2026</td><td><span className="mini-badge badge-green">Ready</span></td></tr>
                  <tr><td><strong style={{ color: 'var(--navy)' }}>Payroll Summary</strong></td><td>July 2026</td><td><span className="mini-badge badge-green">Ready</span></td></tr>
                  <tr><td><strong style={{ color: 'var(--navy)' }}>Attrition Report</strong></td><td>H1 2026</td><td><span className="mini-badge badge-amber">Generating</span></td></tr>
                </table>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── TALENTOPS HIRING AGENCY ── */}
      <section className="hiring-agency-section" id="hiring-agency">
        <div className="container">
          <div className="hiring-agency-inner">
            <div className="hiring-agency-left">
              <div className="section-tag" style={{ background: 'rgba(27,107,245,0.15)', color: 'var(--blue-mid)' }}>TalentOps Hiring Agency</div>
              <h2 className="section-title" style={{ color: 'var(--white)' }}>We Don't Just Give You the Platform — We Help You Build the Workforce.</h2>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '32px', maxWidth: '480px' }}>
                TalentOps Hiring Agency helps organizations source and hire the right talent. It complements the TalentOps platform — we help you build your workforce, then you operate and manage it through TalentOps.
              </p>
              <div className="hiring-distinction">
                <div className="distinction-pill">
                  <span className="distinction-label">Platform</span>
                  <span className="distinction-desc">Operate &amp; manage your workforce</span>
                </div>
                <div className="distinction-connector">+</div>
                <div className="distinction-pill distinction-pill-gold">
                  <span className="distinction-label">Hiring Agency</span>
                  <span className="distinction-desc">Build your workforce</span>
                </div>
              </div>
              <a href="https://hiring.ottobon.in" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '32px', display: 'inline-flex' }}>Talk to Our Hiring Team →</a>
            </div>
            <div className="hiring-agency-right">
              <div className="hiring-flow">
                {[
                  { num: '01', title: 'Tell us who you need', desc: 'Share the role, requirements and timeline' },
                  { num: '02', title: 'Understand', desc: 'We map the role against your organization context' },
                  { num: '03', title: 'Source', desc: 'We identify and approach relevant candidates' },
                  { num: '04', title: 'Screen & Shortlist', desc: 'We evaluate and present the best-fit candidates' },
                  { num: '05', title: 'Interview', desc: 'You interview the shortlisted candidates' },
                  { num: '06', title: 'Hire', desc: 'Select, offer and bring the candidate on board' },
                  { num: '07', title: 'Operate through TalentOps', desc: 'Manage the new hire within the TalentOps platform' },
                ].map((step, i) => (
                  <div
                    key={i}
                    className={`hiring-step ${openHiringStep === i ? 'active' : ''}`}
                    onClick={() => setOpenHiringStep(openHiringStep === i ? null : i)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="hiring-step-num">{step.num}</div>
                    <div className="hiring-step-content" style={{ width: '100%' }}>
                      <div className="hiring-step-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {step.title}
                        <ChevronDown size={18} style={{ color: 'var(--blue-brand)', transform: openHiringStep === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }} />
                      </div>
                      {openHiringStep === i && (
                        <div className="hiring-step-desc" style={{ marginTop: '8px' }}>{step.desc}</div>
                      )}
                    </div>
                    {i < 6 && <div className="hiring-step-line"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT TALENTOPS ── */}
      <section className="about-section" id="about" style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div className="about-image-wrapper" style={{ height: '100%', minHeight: '650px' }}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="Team working" style={{ width: '100%', height: '100%', minHeight: '650px', objectFit: 'cover', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} />
          </div>
          <div className="about-content">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{ height: '2px', width: '30px', background: 'var(--blue-brand)' }}></div>
              <span style={{ color: 'var(--blue-brand)', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>About TalentOps</span>
            </div>
            <h2 style={{ fontSize: '3.2rem', fontWeight: '800', color: 'var(--navy)', lineHeight: '1.1', marginBottom: '24px', fontFamily: 'var(--serif)' }}>
              Transform your workforce with <br /><span style={{ color: 'var(--blue-brand)' }}>intelligent operations.</span>
            </h2>
            <p style={{ color: 'var(--gray-600)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '40px' }}>
              Stop wrestling with fragmented HR tools. TalentOps unifies your entire employee lifecycle—from seamless onboarding to performance management—into one intuitive platform. Empower your team with automation and insights that let you focus on what truly matters: your people.
            </p>

            <div className="about-accordion">
              {[
                { title: 'Eliminate manual data entry', desc: 'Automate repetitive tasks and let your team focus on strategic initiatives rather than paperwork.' },
                { title: 'Boost employee engagement', desc: 'Create a seamless experience that keeps your team connected, motivated, and aligned with company goals.' },
                { title: 'Make data-driven decisions', desc: 'Access real-time analytics and insights to optimize your workforce operations.' }
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    border: '1.5px solid',
                    borderRadius: '12px',
                    padding: '20px 24px',
                    marginBottom: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    boxShadow: openAboutAccordion === i ? '0 12px 30px rgba(0,0,0,0.06)' : 'none',
                    borderColor: openAboutAccordion === i ? 'var(--blue-brand)' : 'var(--gray-200)',
                    background: openAboutAccordion === i ? '#f8fafc' : 'var(--white)'
                  }}
                  onClick={() => setOpenAboutAccordion(openAboutAccordion === i ? null : i)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{
                        width: '36px', height: '36px',
                        borderRadius: '50%',
                        background: 'var(--blue-light)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--blue-brand)'
                      }}>
                        <CheckCircle2 size={18} strokeWidth={3} />
                      </div>
                      <span style={{ fontWeight: '700', color: 'var(--navy)', fontSize: '1.05rem' }}>{item.title}</span>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--gray-400)', fontWeight: '700', letterSpacing: '0.05em' }}>
                      {openAboutAccordion === i ? 'CLICK TO CLOSE' : 'CLICK TO OPEN'}
                    </span>
                  </div>
                  {openAboutAccordion === i && (
                    <div style={{ marginTop: '16px', paddingLeft: '52px', color: 'var(--gray-600)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {item.desc}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IS IT FOR ── */}
      <section className="industries-section" id="who">
        <div className="container">
          <div className="section-head-center">
            <div className="section-tag">Who It's For</div>
            <h2 className="section-title">Built for Growing Professional-Service Organizations</h2>
            <p className="section-sub">TalentOps is designed for businesses where people are the product — organizations that need structured people operations as they scale.</p>
          </div>
          <div className="industry-grid">
            {[
              { icon: '💻', title: 'IT & Software Companies', desc: 'Manage engineers, contractors and product teams across projects and sprint cycles.' },
              { icon: '📊', title: 'Consulting Firms', desc: 'Track people utilization, client assignments and billable engagement.' },
              { icon: '🎯', title: 'Digital & Marketing Agencies', desc: 'Manage creative teams, freelancers and project-based workforce.' },
              { icon: '💼', title: 'Financial & Business Services', desc: 'Operate compliance-aware, structured people management.' },
              { icon: '🎓', title: 'Education & Training', desc: 'Manage faculty, instructors and administrative staff seamlessly.' },
              { icon: '🏥', title: 'Healthcare Organizations', desc: 'Shift management, compliance and multi-location staff operations.' },
              { icon: '⚖️', title: 'Legal & Professional Services', desc: 'Billable hour tracking, matter assignment and team management.' },
              { icon: '📈', title: 'Scaling Startups & SMEs', desc: 'Build operational discipline from day one so your processes scale as fast as your team.' },
            ].map((item, i) => (
              <div key={i} className="industry-card">
                <div className="industry-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="personas-row">
            <div className="personas-label">TalentOps is used by</div>
            <div className="personas-list">
              {['Founders & Business Owners', 'HR Managers & Teams', 'Recruitment Managers', 'Operations Managers', 'Employees'].map((p, i) => (
                <div key={i} className="persona-chip">{p}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="results-section" id="results">
        <div className="container">
          <div className="section-head-center">
            <div className="section-tag" style={{ background: 'rgba(27,107,245,0.15)', color: 'var(--blue-mid)' }}>Results</div>
            <h2 className="section-title">What Happens When You Bring Structure to Talent Operations</h2>
            <p className="section-sub">Outcomes from organizations that moved from disconnected tools to one connected platform.</p>
          </div>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-num">40%</div>
              <div className="metric-label">Faster time to hire</div>
            </div>
            <div className="metric-card">
              <div className="metric-num">3×</div>
              <div className="metric-label">Better talent retention</div>
            </div>
            <div className="metric-card">
              <div className="metric-num">65%</div>
              <div className="metric-label">Reduction in HR admin time</div>
            </div>
            <div className="metric-card">
              <div className="metric-num">100%</div>
              <div className="metric-label">Payroll on time, every month</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY TALENTOPS ── */}
      <section className="why-section" id="about">
        <div className="container">
          <div className="why-grid">
            <div>
              <div className="section-tag">Why TalentOps</div>
              <h2 className="section-title">Not Just Another HRMS. A Platform That Operates Your Talent.</h2>
              <div className="why-list">
                <div className="why-item color-1">
                  <div className="why-icon"><svg fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div>
                  <div>
                    <h4>The complete employee lifecycle in one platform</h4>
                    <p>From attracting talent to measuring performance — no switching between systems.</p>
                  </div>
                </div>
                <div className="why-item color-2">
                  <div className="why-icon"><svg fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>
                  <div>
                    <h4>All six modules are live and connected</h4>
                    <p>Talent Acquisition, Employee Management, Workforce Ops, Payroll, Performance, Analytics — all active.</p>
                  </div>
                </div>
                <div className="why-item color-3">
                  <div className="why-icon"><svg fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                  <div>
                    <h4>Hiring Agency + Platform in one ecosystem</h4>
                    <p>We help you build your workforce through the agency and operate it through the platform.</p>
                  </div>
                </div>
                <div className="why-item color-4">
                  <div className="why-icon"><svg fill="none" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg></div>
                  <div>
                    <h4>Built for growing organizations</h4>
                    <p>Designed for startups, SMEs and professional-service firms that need real structure without enterprise complexity.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="why-card">
                <div className="why-brand-story">
                  <div className="why-brand-name">TALENTOPS</div>
                </div>
                <hr className="why-stat-divider" />
                <div className="why-stat">
                  <div className="why-stat-num">6</div>
                  <div className="why-stat-label">Live Product Modules</div>
                </div>
                <hr className="why-stat-divider" />
                <div className="why-stat">
                  <div className="why-stat-num">1</div>
                  <div className="why-stat-label">Connected Platform</div>
                </div>
                <hr className="why-stat-divider" />
                <div style={{ textAlign: 'center', paddingTop: '8px' }}>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '20px' }}>From 5-person startups to growing enterprises — TalentOps gives your people operations the structure they deserve.</p>
                  <Link to="/request-demo" className="btn btn-white" style={{ display: 'inline-flex' }}>Book a Demo →</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section" id="faq">
        <div className="container">
          <div className="section-head-center">
            <div className="section-tag">FAQ</div>
            <h2 className="section-title">Common Questions</h2>
            <p className="section-sub">Everything you need to know about TalentOps before booking a demo.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item ${openFaq === i ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <span className="faq-chevron">{openFaq === i ? '−' : '+'}</span>
                </div>
                {openFaq === i && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="cta-section" id="cta">
        <div className="container">
          <h2>Ready to Manage Your Entire Workforce in One Place?</h2>
          <p>See how TalentOps brings your complete talent lifecycle together — from recruitment to payroll to performance.</p>
          <div className="cta-btns">
            <Link to="/request-demo" className="btn btn-white btn-lg">Book a Demo →</Link>
            <a href="#pillars" className="btn btn-outline-white btn-lg">Explore the Platform</a>
          </div>
          <p className="cta-note">30-minute walkthrough · No commitment required · All modules live</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-logo">Talent<span>Ops</span></div>
              <p className="footer-desc">One connected platform for the complete workforce lifecycle — recruitment, employee management, payroll, performance and workforce operations.</p>
            </div>
            <div>
              <h4>Product</h4>
              <ul>
                <li><a href="#pillars">Talent Acquisition</a></li>
                <li><a href="#pillars">Employee Management</a></li>
                <li><a href="#pillars">Workforce Operations</a></li>
                <li><a href="#pillars">Payroll &amp; Compensation</a></li>
                <li><a href="#pillars">Performance Management</a></li>
                <li><a href="#pillars">Reports &amp; Analytics</a></li>
              </ul>
            </div>
            <div>
              <h4>Solutions</h4>
              <ul>
                <li><a href="#who">Startups</a></li>
                <li><a href="#who">SMEs</a></li>
                <li><a href="#who">Professional Services</a></li>
                <li><a href="#who">Growing Teams</a></li>
                <li><a href="#who">IT &amp; Software</a></li>
              </ul>
            </div>
            <div>
              <h4>Hiring</h4>
              <ul>
                <li><a href="#hiring-agency">TalentOps Hiring Agency</a></li>
                <li><a href="#hiring-agency">How It Works</a></li>
                <li><Link to="/request-demo">Talk to Hiring Team</Link></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#results">Results</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-cta-bar">
            <span>Ready to operate your talent?</span>
            <Link to="/request-demo" className="btn btn-primary">Book a Demo →</Link>
          </div>
          <div className="footer-bottom">
            <span>© 2026 TalentOps. All rights reserved.</span>
            <span>Privacy Policy · Terms of Service</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
