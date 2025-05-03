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
              Founded in 2024, IoTechZ is on a mission to bridge the gap between software and hardware innovation. We're just getting started, but our vision is clear.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-4 border-primary-500 pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-2 top-0"></div>
              <h3 className="text-xl font-bold mb-2">2024: Foundation</h3>
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

      <section className="py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Founding Team</h2>
            <p className="text-gray-600 text-lg">
              Meet the passionate founders who are bringing IoTechZ's vision to life. We're a small but growing team of experts committed to innovation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Khushmeet Patil',
                role: 'App Developer',
                image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'Keya Sheth',
                role: 'Ui/UX Web Designer',
                image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
              {
                name: 'Ved Patil',
                role: 'Full Stack Developer',
                image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                    <div className="flex space-x-4">
                      <motion.a 
                        href="#" 
                        whileHover={{ scale: 1.2 }}
                        className="text-white"
                      >
                        <Facebook size={18} />
                      </motion.a>
                      <motion.a 
                        href="#" 
                        whileHover={{ scale: 1.2 }}
                        className="text-white"
                      >
                        <Twitter size={18} />
                      </motion.a>
                      <motion.a 
                        href="#" 
                        whileHover={{ scale: 1.2 }}
                        className="text-white"
                      >
                        <Linkedin size={18} />
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </motion.div>
  );
};

export default AboutPage;

// Icons for the team section
const Facebook = ({ size, className }: { size: number; className?: string }) => (
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
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = ({ size, className }: { size: number; className?: string }) => (
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
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Linkedin = ({ size, className }: { size: number; className?: string }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

