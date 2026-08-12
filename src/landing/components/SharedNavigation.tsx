import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export function SharedNavigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav id="nav">
      <Link to="/" className="nav-logo">
        <div className="logo-icon">T</div>
        TalentOps
      </Link>
      <div className="nav-links" ref={navRef}>
        <div className="nav-dropdown">
          <div className="nav-dropdown-trigger">
            <a href="/#hero">
              <span style={{ color: openDropdown === 'solutions' ? 'var(--white)' : 'inherit' }}>Solutions</span> 
            </a>
            <svg 
              className={`nav-chevron ${openDropdown === 'solutions' ? 'open' : ''}`} 
              width="14" height="14" viewBox="0 0 24 24" fill="none" 
              stroke={openDropdown === 'solutions' ? 'var(--white)' : 'rgba(255, 255, 255, 0.85)'} 
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === 'solutions' ? null : 'solutions'); }}
              style={{ cursor: 'pointer' }}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div className={`nav-dropdown-menu ${openDropdown === 'solutions' ? 'active' : ''}`}>
            <Link to="/startups" onClick={() => setOpenDropdown(null)}>For Startups</Link>
            <Link to="/agencies" onClick={() => setOpenDropdown(null)}>For Agencies</Link>
            <Link to="/mid-market" onClick={() => setOpenDropdown(null)}>For Mid-market</Link>
          </div>
        </div>
        <div className="nav-dropdown">
          <div className="nav-dropdown-trigger">
            <a href="/#pillars">
              <span style={{ color: openDropdown === 'products' ? 'var(--white)' : 'inherit' }}>Products</span>
            </a>
            <svg 
              className={`nav-chevron ${openDropdown === 'products' ? 'open' : ''}`} 
              width="14" height="14" viewBox="0 0 24 24" fill="none" 
              stroke={openDropdown === 'products' ? 'var(--white)' : 'rgba(255, 255, 255, 0.85)'} 
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              onClick={(e) => { e.stopPropagation(); setOpenDropdown(openDropdown === 'products' ? null : 'products'); }}
              style={{ cursor: 'pointer' }}
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div className={`nav-dropdown-menu ${openDropdown === 'products' ? 'active' : ''}`}>
            <Link to="/core-hr" onClick={() => setOpenDropdown(null)}>Core HR</Link>
            <Link to="/payroll" onClick={() => setOpenDropdown(null)}>Payroll</Link>
            <Link to="/recruitment" onClick={() => setOpenDropdown(null)}>Recruitment</Link>
            <Link to="/performance" onClick={() => setOpenDropdown(null)}>Performance Management</Link>
          </div>
        </div>
        <a href="/#hiring-agency">TalentOps Hiring</a>
        <a href="/#about">About</a>
        <a href="/#faq">Resources</a>
      </div>
      <div className="nav-cta">
        <Link to="/login" className="btn btn-primary">Login</Link>
        <Link to="/request-demo" className="btn btn-primary">Book a Demo</Link>
      </div>
    </nav>
  );
}
