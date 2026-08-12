import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LandingPage } from './landing/LandingPage';
import { RequestDemoPage } from './landing/sections/RequestDemoPage';
import { SolutionPage } from './landing/solutions/SolutionPage';
import { solutionsData } from './landing/solutions/solutionsData';
import { productsData } from './landing/products/productsData';
import './index.css';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/request-demo" element={<RequestDemoPage />} />
        <Route path="/startups" element={<SolutionPage data={solutionsData['startups']} />} />
        <Route path="/agencies" element={<SolutionPage data={solutionsData['agencies']} />} />
        <Route path="/mid-market" element={<SolutionPage data={solutionsData['mid-market']} />} />
        
        <Route path="/core-hr" element={<SolutionPage data={productsData['core-hr']} />} />
        <Route path="/payroll" element={<SolutionPage data={productsData['payroll']} />} />
        <Route path="/recruitment" element={<SolutionPage data={productsData['recruitment']} />} />
        <Route path="/performance" element={<SolutionPage data={productsData['performance']} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
