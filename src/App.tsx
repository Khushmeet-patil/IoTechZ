import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import FAQPage from './pages/FAQPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        {/* Pricing route temporarily disabled */}
        {/* <Route path="pricing" element={<PricingPage />} /> */}
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<FAQPage />} />
      </Route>
    </Routes>
  );
}

export default App;