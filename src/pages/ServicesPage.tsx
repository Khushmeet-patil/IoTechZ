import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Services - Agency';
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero 
        title="Our Services"
        subtitle="Comprehensive technology solutions spanning software development, IoT hardware, and advanced AI integration."
        backgroundImage="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Features />
      
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">IoT Hardware Solutions</h2>
            <p className="text-gray-600 text-lg">
              We provide high-quality IoT components and expert guidance for your connected device projects.
            </p>
          </motion.div>
          
          {/* Content for IoT Hardware section */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">R&D Innovation Lab</h2>
            <p className="text-gray-600 text-lg">
              Discover our latest innovations and proprietary products developed by our research team.
            </p>
          </motion.div>
          
          {/* Content for R&D section */}
        </div>
      </section>
      
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/3184337/pexels-photo-3184337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="UI/UX Design"
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">UI/UX Design</h2>
              <p className="text-gray-600 text-lg">
                We create beautiful, intuitive interfaces that engage users and drive conversions.
              </p>
              <p className="text-gray-600">
                Our design process is centered around understanding your users' needs and business goals. We create interfaces that are not only visually stunning but also highly functional and easy to use.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <Check size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">User Research</h3>
                    <p className="text-gray-600">Understanding your users' behavior, needs, and motivations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <Check size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Wireframing & Prototyping</h3>
                    <p className="text-gray-600">Creating the blueprint of your digital product.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <Check size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visual Design</h3>
                    <p className="text-gray-600">Crafting beautiful interfaces that align with your brand.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <Check size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Usability Testing</h3>
                    <p className="text-gray-600">Ensuring your product meets user needs and expectations.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6 order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Web Development</h2>
              <p className="text-gray-600 text-lg">
                We build robust, scalable websites and applications that drive business growth.
              </p>
              <p className="text-gray-600">
                Our development team combines technical expertise with creativity to build digital products that not only look great but also perform exceptionally well.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <Check size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Front-end Development</h3>
                    <p className="text-gray-600">Creating responsive, interactive user interfaces.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <Check size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Back-end Development</h3>
                    <p className="text-gray-600">Building robust server-side applications and APIs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <Check size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">E-commerce Solutions</h3>
                    <p className="text-gray-600">Creating secure, user-friendly online stores.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <Check size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">CMS Integration</h3>
                    <p className="text-gray-600">Implementing easy-to-use content management systems.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img 
                src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Web Development"
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Digital Marketing"
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Digital Marketing</h2>
              <p className="text-gray-600 text-lg">
                We help you reach your target audience and grow your business online.
              </p>
              <p className="text-gray-600">
                Our digital marketing strategies are data-driven and results-focused, helping you connect with your audience and achieve your business goals.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <Check size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Search Engine Optimization (SEO)</h3>
                    <p className="text-gray-600">Improving your visibility in search engine results.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <Check size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Social Media Marketing</h3>
                    <p className="text-gray-600">Building brand awareness and engagement on social platforms.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <Check size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Content Marketing</h3>
                    <p className="text-gray-600">Creating valuable content that attracts and retains customers.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary-100 p-2 rounded-full mr-4">
                    <Check size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Pay-Per-Click Advertising</h3>
                    <p className="text-gray-600">Driving immediate traffic and leads through targeted ads.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Testimonials />
      <CTA />
    </motion.div>
  );
};

export default ServicesPage;

// Icon component
const Check = ({ size, className }: { size: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
