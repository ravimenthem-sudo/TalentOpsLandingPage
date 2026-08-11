import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NewLandingPage } from './landing/NewLandingPage';
import { CoreHRPage } from './pages/CoreHRPage'; // imported
import { PayrollPage } from './pages/PayrollPage'; // imported
import { RecruitmentPage } from './pages/RecruitmentPage';
import { PerformancePage } from './pages/PerformancePage';
import { StartupsPage } from './pages/StartupsPage';
import { AgenciesPage } from './pages/AgenciesPage';
import { MidMarketPage } from './pages/MidMarketPage';
import { BlogPage } from './pages/BlogPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { HelpCenterPage } from './pages/HelpCenterPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ProductsPage } from './pages/ProductsPage';
import { HiringPage } from './pages/HiringPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { AboutPage } from './pages/AboutPage';
import { LoginPage } from './pages/LoginPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewLandingPage />} />
        <Route path="/core-hr" element={<CoreHRPage />} />
        <Route path="/payroll" element={<PayrollPage />} />
        <Route path="/recruitment" element={<RecruitmentPage />} />
        <Route path="/performance" element={<PerformancePage />} />
        <Route path="/startups" element={<StartupsPage />} />
        <Route path="/agencies" element={<AgenciesPage />} />
        <Route path="/mid-market" element={<MidMarketPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/help-center" element={<HelpCenterPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/talentops-hiring" element={<HiringPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
