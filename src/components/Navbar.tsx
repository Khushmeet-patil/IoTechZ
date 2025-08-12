import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
  // { path: '/pricing', label: 'Pricing' }, // Temporarily removed
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 py-2 ${scrolled ? 'bg-white shadow-md' : 'bg-black/0 backdrop-blur-sm'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <img 
              src="/images/logo.svg" 
              alt="IoTechZ Logo" 
              className="h-8 md:h-10"
            />
            <span className={`text-2xl font-display font-bold ${scrolled ? 'text-primary-700' : 'text-white'}`}>
              IoTechZ
            </span>
            <span className={`${scrolled ? 'text-accent-600' : 'text-pink-500'}`}>.</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-medium text-sm ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-accent-500 transition-colors`}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-500"
                  layoutId="navbar-underline"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className={`md:hidden ${scrolled ? 'text-primary-700' : 'text-white'}`}
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          <Menu size={24} />
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`fixed inset-0 md:hidden bg-white/95 backdrop-blur-lg ${
          isOpen ? 'block' : 'hidden'
        }`}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? '100vh' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute top-4 right-4">
          <motion.button
            className="text-gray-800"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            <X size={28} />
          </motion.button>
        </div>
        <div className="container-custom mx-auto pt-16 pb-8 px-4 flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-2xl font-semibold py-3 w-full text-center transition-colors ${
                location.pathname === link.path
                  ? 'text-accent-600'
                  : 'text-gray-800 hover:text-accent-500'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
