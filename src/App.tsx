import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './landing/LandingPage';
import { RequestDemoPage } from './landing/sections/RequestDemoPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/request-demo" element={<RequestDemoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
