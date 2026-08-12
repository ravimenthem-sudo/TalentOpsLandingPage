import React from 'react';
import { SharedNavigation } from '../components/SharedNavigation';
import { CheckCircle2, Box, Shield, Users, Clock, Target, FileText, Briefcase, Zap, Settings, BarChart, FileJson, Rocket, TrendingUp, PieChart, Network, Lock, ShieldCheck, Database, Building2, LineChart, Calendar, Laptop, DollarSign, CreditCard, Globe, Filter, Search, Mail, MessageSquare, RefreshCw } from 'lucide-react';
import '../LandingPage.css';
import './SolutionPage.css';
import { ProductData } from '../products/productsData';
import { SolutionData, Feature } from './solutionsData';

interface SolutionPageProps {
  data: SolutionData | ProductData;
}

export function SolutionPage({ data }: SolutionPageProps) {
  
  const getIcon = (feature: Feature, index: number) => {
    if (feature.iconType === 'Rocket') return <Rocket size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'Shield') return <Shield size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'Users') return <Users size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'Zap') return <Zap size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'Clock') return <Clock size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'TrendingUp') return <TrendingUp size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'FileText') return <FileText size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'Briefcase') return <Briefcase size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'CheckCircle2') return <CheckCircle2 size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'PieChart') return <PieChart size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'Network') return <Network size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'Lock') return <Lock size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'ShieldCheck') return <ShieldCheck size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'Database') return <Database size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'Building2') return <Building2 size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'LineChart') return <LineChart size={24} strokeWidth={1.5} />;
    
    if (feature.iconType === 'Calendar') return <Calendar size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'Laptop') return <Laptop size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'DollarSign') return <DollarSign size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'CreditCard') return <CreditCard size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'Globe') return <Globe size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'Filter') return <Filter size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'Search') return <Search size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'Mail') return <Mail size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'MessageSquare') return <MessageSquare size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'RefreshCw') return <RefreshCw size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'Target') return <Target size={24} strokeWidth={1.5} />;
    if (feature.iconType === 'BarChart') return <BarChart size={24} strokeWidth={1.5} />;
    
    // Just mapping some standard icons to index to keep it simple and visually appealing
    const icons = [
      <Box size={24} strokeWidth={1.5} />,
      <Shield size={24} strokeWidth={1.5} />,
      <Users size={24} strokeWidth={1.5} />,
      <Zap size={24} strokeWidth={1.5} />,
      <Clock size={24} strokeWidth={1.5} />,
      <Target size={24} strokeWidth={1.5} />,
      <FileText size={24} strokeWidth={1.5} />,
      <Briefcase size={24} strokeWidth={1.5} />,
      <Settings size={24} strokeWidth={1.5} />,
      <BarChart size={24} strokeWidth={1.5} />,
      <FileJson size={24} strokeWidth={1.5} />
    ];
    return icons[index % icons.length];
  };

  return (
    <div className="solution-page-wrapper landing-page-wrapper">
      <SharedNavigation />

      {/* HERO SECTION */}
      <section className="solution-hero">
        <div className="container">
          <div className="solution-hero-tag" style={{ color: data.brandColor, borderColor: data.brandColor }}>
            <span className="dot" style={{ backgroundColor: data.brandColor }}></span> {data.tag}
          </div>
          <h1 className="solution-hero-title">
            {data.titlePart1} <span style={{ color: data.brandColor }}>{data.titleHighlight}</span> {data.titlePart2}
          </h1>
          <p className="solution-hero-subtitle">{data.subtitle}</p>
          <div className="solution-hero-cta">
            <button className="btn btn-solid" style={{ backgroundColor: data.brandColor }}>{data.primaryCtaText}</button>
            <button className="btn btn-outline" style={{ borderColor: '#d1d5db', color: '#4b5563' }}>{data.secondaryCtaText}</button>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="solution-features">
        <div className={`container ${data.features.length === 8 ? 'container-wide' : ''}`}>
          <div className="solution-features-header">
            <h2>{data.featuresTitle}</h2>
            <p>{data.featuresSubtitle}</p>
          </div>
          
          <div className={`solution-features-grid ${data.features.length === 8 ? 'grid-4' : ''}`}>
            {data.features.map((feature, index) => (
              <div className="solution-feature-card" key={index}>
                <div className="solution-feature-icon" style={{ backgroundColor: `${data.brandColor}15`, color: data.brandColor }}>
                  {getIcon(feature, index)}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM VALUE SECTION */}
      <section className={`solution-bottom ${'bottomBgType' in data && data.bottomBgType === 'light' ? 'light' : ''}`}>
        <div className="container">
          <div className="solution-bottom-centered">
            <div className="solution-bottom-content">
              <h2>{data.bottomTitle}</h2>
              <p>{data.bottomDesc}</p>
              <ul className="solution-checklist">
                {data.bottomChecklist.map((item, index) => (
                  <li key={index}>
                    <CheckCircle2 size={24} strokeWidth={2.5} style={{ color: data.brandColor, marginTop: '2px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
