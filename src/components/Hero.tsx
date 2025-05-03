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
  ctaText = 'Get Started',
  ctaLink = '#',
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage = 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
}: HeroProps) => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <img
          src={backgroundImage}
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 text-white">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-display mb-6"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
          >
            {subtitle}
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-4">
            <motion.a
              href={ctaLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              {ctaText}
            </motion.a>
            {secondaryCtaText && (
              <motion.a
                href={secondaryCtaLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary"
              >
                {secondaryCtaText}
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;