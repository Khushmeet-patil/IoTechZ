import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

const Hero = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage
}: HeroProps) => {
  return (
    <section
      className="relative min-h-[60vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center pt-16 md:pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center text-white px-4 sm:px-6 lg:px-8"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          {(ctaText || secondaryCtaText) && (
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              {ctaText && ctaLink && (
                <Link to={ctaLink} className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-accent-500 hover:bg-accent-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-colors text-sm sm:text-base"
                  >
                    {ctaText}
                  </motion.button>
                </Link>
              )}
              
              {secondaryCtaText && secondaryCtaLink && (
                <Link to={secondaryCtaLink} className="w-full sm:w-auto">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-transparent border-2 border-white hover:bg-white/10 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-colors text-sm sm:text-base"
                  >
                    {secondaryCtaText}
                  </motion.button>
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;