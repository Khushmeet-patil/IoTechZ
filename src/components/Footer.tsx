import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const getItemPath = (item: string) => {
    if (item === 'Home') return '/';
    if (item === 'About Us') return '/about';
    return `/${item.toLowerCase().replace(' ', '-')}`;
  };

  const socialLinks = [
    { href: 'https://www.instagram.com/iotechz?igsh=cWJsNHk3N3N5bWc0', icon: <Instagram size={18} /> },
    { href: 'https://www.linkedin.com/company/iotechz/', icon: <Linkedin size={18} /> },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16 lg:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <img src="/images/logo.svg" alt="IoTechZ" className="h-8 md:h-10" />
            <p className="text-sm md:text-base text-gray-400">
              Transforming ideas into innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={getItemPath(item)} className="text-sm md:text-base text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight size={16} className="mr-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {[
                'UI/UX Design',
                'Web Development',
                'IoT Solutions',
                'Automation'
              ].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm md:text-base text-gray-400 hover:text-white transition-colors flex items-center">
                    <ChevronRight size={16} className="mr-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm md:text-base text-gray-400">
                <Mail size={16} className="inline mr-2" />
                iotechz.services@gmail.com
              </li>
              <li className="text-sm md:text-base text-gray-400">
                <Phone size={16} className="inline mr-2" />
                +91 7990358824
              </li>
              <li className="text-sm md:text-base text-gray-400">
                <MapPin size={16} className="inline mr-2" />
                Plot No. 1801/1, G.I.D.C. , Vithal UdhyogNagar-388121, Anand(Guj)
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-8 md:mt-12 pt-8 md:pt-12 text-center">
          <p className="text-sm md:text-base text-gray-400">
            © {new Date().getFullYear()} IoTechZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
