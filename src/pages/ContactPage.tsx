import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Contact from '../components/Contact';

const ContactPage = () => {
  useEffect(() => {
    document.title = 'Contact Us - Agency';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero 
        title="Get In Touch"
        subtitle="Have a project in mind or want to learn more about our services? We'd love to hear from you!"
        backgroundImage="/images/contact-us.jpeg"
      />
      <Contact />
    </motion.div>
  );
};

export default ContactPage;
