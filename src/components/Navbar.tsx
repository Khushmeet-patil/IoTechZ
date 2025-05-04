import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact' }
];

const Navbar = () => {
  const navigate = useNavigate();
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-display font-bold"
          >
            <span className={`${scrolled ? 'text-primary-700' : 'text-white'}`}>
              IoTechZ
            </span>
            <span className="text-accent-600">.</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative font-medium text-sm ${
                scrolled ? 'text-gray-700' : 'text-white'
              } hover:text-accent-500 transition-colors`}
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            onClick={() => navigate('/contact')}
          >
            Get Started
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-primary-700"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`absolute top-full left-0 right-0 bg-white shadow-lg md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom mx-auto py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-gray-700 font-medium py-2 ${
                location.pathname === link.path
                  ? 'text-accent-600'
                  : 'text-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="btn-primary w-full"
            onClick={() => navigate('/contact')}
          >
            Get Started
          </motion.button>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;