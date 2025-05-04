import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';

const FAQPage = () => {
  useEffect(() => {
    document.title = 'FAQ - Agency';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero 
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services and solutions."
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'What services do you offer?',
                answer: 'We offer a comprehensive range of services including web development, UI/UX design, IoT solutions, and AI integration. Our team specializes in creating custom digital solutions tailored to your business needs.'
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Project timelines vary depending on scope and complexity. A basic website might take 4-6 weeks, while more complex projects can take 2-3 months. We will provide a detailed timeline during our initial consultation.'
              },
              {
                question: 'Do you offer ongoing support?',
                answer: 'Yes, we provide ongoing maintenance and support packages to ensure your digital solutions remain secure, up-to-date, and performing optimally.'
              },
              {
                question: 'What is your development process?',
                answer: 'Our process includes discovery and planning, design and prototyping, development and testing, and deployment with ongoing support. We maintain clear communication throughout each phase.'
              },
              {
                question: 'How do you handle project communication?',
                answer: 'We maintain regular communication through scheduled updates, progress reports, and dedicated project management tools. You will have a direct line to your project team throughout the development process.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default FAQPage;