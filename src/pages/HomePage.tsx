import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Features from '../components/Features';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const HomePage = () => {
  useEffect(() => {
    document.title = 'Agency - Creative Digital Solutions';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero 
        title="Innovative Tech Solutions for the Connected World"
        subtitle="From custom web applications to IoT hardware and AI integration, we're launching to provide end-to-end technology solutions that bring your ideas to reality."
        ctaText="Get in Touch"
        ctaLink="/contact"
        secondaryCtaText="Our Services"
        secondaryCtaLink="/services"
        backgroundImage="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Features />
      <About />
      <Testimonials />
      <CTA />
    </motion.div>
  );
};

export default HomePage;

