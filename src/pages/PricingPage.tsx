import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const PricingPage = () => {
  useEffect(() => {
    document.title = 'Pricing - Agency';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero 
        title="Simple, Transparent Pricing"
        subtitle="Choose the perfect plan for your business needs with no hidden fees."
        backgroundImage="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Pricing />
      
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">
              Get answers to common questions about our services and pricing.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'What is included in the website design service?',
                answer: 'Our website design service includes discovery and planning, wireframing, visual design, responsive design for all devices, and basic SEO optimization. We also provide integration with content management systems to make updating your site easy.'
              },
              {
                question: 'How long does it take to complete a project?',
                answer: 'Project timelines vary depending on the scope and complexity. A basic website typically takes 4-6 weeks, while more complex projects can take 2-3 months. We\'ll provide a detailed timeline during our initial consultation.'
              },
              {
                question: 'Do you offer ongoing maintenance and support?',
                answer: 'Yes, we offer various maintenance and support packages to keep your website secure, up-to-date, and running smoothly. These can be added to any of our service plans.'
              },
              {
                question: 'Can I upgrade my plan later?',
                answer: 'Absolutely! You can upgrade your plan at any time as your business grows and needs evolve. We make the transition seamless so you can focus on your business.'
              },
              {
                question: 'Do you offer custom solutions outside of these packages?',
                answer: 'Yes, we understand that every business has unique needs. We offer custom solutions tailored to your specific requirements. Contact us to discuss your project needs.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept credit cards, bank transfers, and PayPal. For larger projects, we typically require a 50% deposit upfront with the remaining balance due upon completion.'
              },
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
      
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Plans</h2>
            <p className="text-gray-600 text-lg">
              See which plan is right for your business needs.
            </p>
          </motion.div>
          
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] bg-white rounded-lg shadow-lg">
              <thead>
                <tr>
                  <th className="py-6 px-8 text-left text-gray-500 font-medium">Features</th>
                  <th className="py-6 px-8 text-center text-gray-900 font-semibold">Basic</th>
                  <th className="py-6 px-8 text-center text-primary-600 font-semibold">Professional</th>
                  <th className="py-6 px-8 text-center text-gray-900 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="py-4 px-8 text-gray-900 font-medium">Price</td>
                  <td className="py-4 px-8 text-center text-gray-700">₹29,999/month</td>
                  <td className="py-4 px-8 text-center text-primary-600 font-semibold">₹59,999/month</td>
                  <td className="py-4 px-8 text-center text-gray-700">₹1,19,999/month</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4 px-8 text-gray-900 font-medium">Number of Pages</td>
                  <td className="py-4 px-8 text-center text-gray-700">5</td>
                  <td className="py-4 px-8 text-center text-primary-600 font-semibold">10</td>
                  <td className="py-4 px-8 text-center text-gray-700">Unlimited</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4 px-8 text-gray-900 font-medium">Mobile Responsive</td>
                  <td className="py-4 px-8 text-center text-gray-700">✓</td>
                  <td className="py-4 px-8 text-center text-primary-600 font-semibold">✓</td>
                  <td className="py-4 px-8 text-center text-gray-700">✓</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4 px-8 text-gray-900 font-medium">SEO Setup</td>
                  <td className="py-4 px-8 text-center text-gray-700">Basic</td>
                  <td className="py-4 px-8 text-center text-primary-600 font-semibold">Advanced</td>
                  <td className="py-4 px-8 text-center text-gray-700">Comprehensive</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4 px-8 text-gray-900 font-medium">Support Period</td>
                  <td className="py-4 px-8 text-center text-gray-700">1 month</td>
                  <td className="py-4 px-8 text-center text-primary-600 font-semibold">3 months</td>
                  <td className="py-4 px-8 text-center text-gray-700">12 months</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4 px-8 text-gray-900 font-medium">Content Updates</td>
                  <td className="py-4 px-8 text-center text-gray-700">2 per month</td>
                  <td className="py-4 px-8 text-center text-primary-600 font-semibold">5 per month</td>
                  <td className="py-4 px-8 text-center text-gray-700">Unlimited</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4 px-8 text-gray-900 font-medium">E-commerce</td>
                  <td className="py-4 px-8 text-center text-gray-700">✗</td>
                  <td className="py-4 px-8 text-center text-primary-600 font-semibold">✓</td>
                  <td className="py-4 px-8 text-center text-gray-700">✓ (Advanced)</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4 px-8 text-gray-900 font-medium">Analytics</td>
                  <td className="py-4 px-8 text-center text-gray-700">Basic</td>
                  <td className="py-4 px-8 text-center text-primary-600 font-semibold">Advanced</td>
                  <td className="py-4 px-8 text-center text-gray-700">Custom</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4 px-8 text-gray-900 font-medium">Custom Integrations</td>
                  <td className="py-4 px-8 text-center text-gray-700">✗</td>
                  <td className="py-4 px-8 text-center text-primary-600 font-semibold">✓ (Limited)</td>
                  <td className="py-4 px-8 text-center text-gray-700">✓ (Unlimited)</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-4 px-8 text-gray-900 font-medium">Dedicated Account Manager</td>
                  <td className="py-4 px-8 text-center text-gray-700">✗</td>
                  <td className="py-4 px-8 text-center text-primary-600 font-semibold">✗</td>
                  <td className="py-4 px-8 text-center text-gray-700">✓</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="py-6 px-8"></td>
                  <td className="py-6 px-8 text-center">
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block px-6 py-2 rounded-lg bg-white text-primary-600 border border-primary-600 hover:bg-primary-50 transition-colors"
                    >
                      Choose Plan
                    </motion.a>
                  </td>
                  <td className="py-6 px-8 text-center">
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block px-6 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
                    >
                      Choose Plan
                    </motion.a>
                  </td>
                  <td className="py-6 px-8 text-center">
                    <motion.a
                      href="/contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block px-6 py-2 rounded-lg bg-white text-primary-600 border border-primary-600 hover:bg-primary-50 transition-colors"
                    >
                      Choose Plan
                    </motion.a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <CTA />
    </motion.div>
  );
};

export default PricingPage;
