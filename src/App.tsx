import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import AllProjectsPage from './pages/AllProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import FAQPage from './pages/FAQPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Set IoTechZ as title and prevent other components from changing it
  useEffect(() => {
    document.title = 'IoTechZ';
    // Override the title setter to prevent changes
    const originalTitle = Object.getOwnPropertyDescriptor(Document.prototype, 'title');
    Object.defineProperty(document, 'title', {
      get: () => 'IoTechZ',
      set: () => {},
      configurable: true
    });
    return () => {
      // Restore original title setter when component unmounts
      if (originalTitle) {
        Object.defineProperty(document, 'title', originalTitle);
      }
    };
  }, []);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="projects" element={<AllProjectsPage />} />
        <Route path="projects/:projectId" element={<ProjectDetailPage />} />
        <Route path="all-projects" element={<AllProjectsPage />} />
        {/* Pricing route temporarily disabled */}
        {/* <Route path="pricing" element={<PricingPage />} /> */}
        <Route path="contact" element={<ContactPage />} />
        <Route path="faq" element={<FAQPage />} />
      </Route>
    </Routes>
  );
}

export default App;