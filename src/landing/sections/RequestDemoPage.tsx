import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LOOKING_FOR_OPTIONS = [
  'HR Management',
  'Payroll',
  'Recruitment',
  'Workforce Management',
  'TalentOps Hiring Agency',
  'Other',
];

const COMPANY_SIZE_OPTIONS = [
  '1 – 10',
  '11 – 50',
  '51 – 200',
  '201 – 500',
  '500+',
];

export function RequestDemoPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const fromSection = (location.state as any)?.from || null;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    companySize: '',
    lookingFor: [] as string[],
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleReturnHome = () => {
    navigate('/', { state: { scrollTo: fromSection } });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid work email';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.companySize) newErrors.companySize = 'Please select your company size';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => { const n = { ...prev }; delete n[name]; return n; });
    }
  };

  const toggleLookingFor = (option: string) => {
    setFormData(prev => ({
      ...prev,
      lookingFor: prev.lookingFor.includes(option)
        ? prev.lookingFor.filter(o => o !== option)
        : [...prev.lookingFor, option],
    }));
  };

  if (isSubmitted) {
    return (
      <div className="demo-page">
        <div className="demo-success">
          <div className="demo-success-icon">✓</div>
          <h1>Request Received</h1>
          <p>Thank you for your interest in TalentOps. One of our team members will reach out within 24 hours to schedule your personalized demo.</p>
          <button onClick={handleReturnHome} className="demo-btn-primary">Return to Home</button>
        </div>
      </div>
    );
  }

  return (
    <div className="demo-page">
      <div className="demo-back">
        <button onClick={handleReturnHome} className="demo-back-btn">← Back to Home</button>
      </div>

      <div className="demo-layout">
        {/* Left: Context */}
        <div className="demo-left">
          <div className="demo-logo">Talent<span>Ops</span></div>
          <div className="demo-brand-tag">Operate Your Talent.</div>
          <h1 className="demo-heading">Book a Demo</h1>
          <p className="demo-subtext">
            See how TalentOps manages your complete workforce lifecycle — from recruiting to payroll to performance — in one connected platform.
          </p>
          <div className="demo-benefits">
            {[
              'Personalized walkthrough of all six product modules',
              'See how TalentOps fits your organization type',
              'Learn how TalentOps Hiring Agency works alongside the platform',
              'Get answers to your specific questions',
              '30 minutes · No commitment required',
            ].map((item, i) => (
              <div key={i} className="demo-benefit-item">
                <span className="demo-benefit-check">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div className="demo-right">
          <div className="demo-form-card">
            <h2 className="demo-form-title">Tell us about yourself</h2>
            <form onSubmit={handleSubmit} className="demo-form" noValidate>

              <div className="demo-form-row">
                <div className="demo-field">
                  <label className="demo-label" htmlFor="demo-name">Full Name *</label>
                  <input
                    id="demo-name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`demo-input ${errors.name ? 'error' : ''}`}
                  />
                  {errors.name && <span className="demo-error">{errors.name}</span>}
                </div>
                <div className="demo-field">
                  <label className="demo-label" htmlFor="demo-email">Work Email *</label>
                  <input
                    id="demo-email"
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`demo-input ${errors.email ? 'error' : ''}`}
                  />
                  {errors.email && <span className="demo-error">{errors.email}</span>}
                </div>
              </div>

              <div className="demo-form-row">
                <div className="demo-field">
                  <label className="demo-label" htmlFor="demo-company">Company Name *</label>
                  <input
                    id="demo-company"
                    type="text"
                    name="company"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleChange}
                    className={`demo-input ${errors.company ? 'error' : ''}`}
                  />
                  {errors.company && <span className="demo-error">{errors.company}</span>}
                </div>
                <div className="demo-field">
                  <label className="demo-label" htmlFor="demo-phone">Phone</label>
                  <input
                    id="demo-phone"
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="demo-input"
                  />
                </div>
              </div>

              <div className="demo-field">
                <label className="demo-label" htmlFor="demo-size">Company Size *</label>
                <select
                  id="demo-size"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className={`demo-input demo-select ${errors.companySize ? 'error' : ''}`}
                >
                  <option value="">Select team size</option>
                  {COMPANY_SIZE_OPTIONS.map(o => <option key={o} value={o}>{o} employees</option>)}
                </select>
                {errors.companySize && <span className="demo-error">{errors.companySize}</span>}
              </div>

              <div className="demo-field">
                <label className="demo-label">What are you looking for?</label>
                <div className="demo-checkboxes">
                  {LOOKING_FOR_OPTIONS.map(option => (
                    <label key={option} className={`demo-checkbox-chip ${formData.lookingFor.includes(option) ? 'selected' : ''}`}>
                      <input
                        type="checkbox"
                        checked={formData.lookingFor.includes(option)}
                        onChange={() => toggleLookingFor(option)}
                        style={{ display: 'none' }}
                      />
                      {formData.lookingFor.includes(option) ? '✓ ' : ''}{option}
                    </label>
                  ))}
                </div>
              </div>

              <div className="demo-field">
                <label className="demo-label" htmlFor="demo-message">Message / Requirements</label>
                <textarea
                  id="demo-message"
                  name="message"
                  placeholder="Tell us about your team, current challenges, or anything specific you'd like to see in the demo..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="demo-input demo-textarea"
                />
              </div>

              <button
                type="submit"
                className="demo-btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                    <span className="demo-spinner"></span>
                    Submitting...
                  </span>
                ) : 'Book a Demo →'}
              </button>

              <p className="demo-disclaimer">We'll reach out within 24 hours. No commitment required.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
