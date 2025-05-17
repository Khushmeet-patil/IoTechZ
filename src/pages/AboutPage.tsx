import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import CTA from '../components/CTA';

const AboutPage = () => {

  useEffect(() => {
    document.title = 'About Us - Agency';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero
        title="About Our Agency"
        subtitle="We're passionate about creating exceptional digital experiences that help businesses thrive in today's competitive landscape."
        backgroundImage="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <About />

      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg">
              Founded in 2025, IoTechZ is on a mission to bridge the gap between software and hardware innovation. We're just getting started, but our vision is clear.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-primary-500 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-2 top-0"></div>
              <h3 className="text-xl font-bold mb-2">2025: Foundation</h3>
              <p className="text-gray-600">IoTechZ was founded with a vision to create innovative technology solutions that combine software expertise with hardware capabilities.</p>
            </div>

            <div className="relative border-l-4 border-primary-500 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-2 top-0"></div>
              <h3 className="text-xl font-bold mb-2">Today: Building & Planning</h3>
              <p className="text-gray-600">We're assembling our team, developing our service offerings, and preparing to take on our first clients with enthusiasm and dedication.</p>
            </div>

            <div className="relative pl-8">
              <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-2 top-0"></div>
              <h3 className="text-xl font-bold mb-2">Tomorrow: Growing & Innovating</h3>
              <p className="text-gray-600">Our roadmap includes expanding our services, developing proprietary products, and building lasting partnerships with clients and technology providers.</p>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </motion.div>
  );
};

export default AboutPage;

