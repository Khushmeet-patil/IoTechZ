import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, ChevronRight } from 'lucide-react';

const Footer = () => {
  const getItemPath = (item: string) => {
    if (item === 'Home') return '/';
    if (item === 'About Us') return '/about';
    return `/${item.toLowerCase().replace(' ', '-')}`;
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-bold font-display">
                IoTechZ<span className="text-accent-500">.</span>
              </h2>
            </Link>
            <p className="text-gray-400 text-sm">
              Bridging the gap between software and hardware with innovative IoT solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="bg-gray-800 p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Linkedin size={18} />
              </motion.a>
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
                  <Link to={getItemPath(item)} className="text-gray-400 hover:text-white transition-colors flex items-center">
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
              {['Digital Marketing', 'UI/UX Design', 'Web Development', 'Branding', 'IoT Solutions', 'Automation'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-gray-400 hover:text-white transition-colors flex items-center">
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
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <p>Plot No. 1801/1, G.I.D.C.</p>
                <p>Vithal UdhyogNagar-388121, Anand(Guj)</p>
              </li>
              <li>khushmeetpatil@gmail.com</li>
              <li>+91 7990358824</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} IoTechZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;