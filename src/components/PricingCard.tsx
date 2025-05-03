import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
  ctaLink?: string;
  delay?: number;
}

const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  isPopular = false,
  ctaText = 'Get Started',
  ctaLink = '#',
  delay = 0,
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
        isPopular ? 'border-2 border-primary-500 relative' : 'border border-gray-200'
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary-500 text-white px-4 py-1 text-sm font-medium">
          Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-600">/{period}</span>
        </div>
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check size={20} className="text-primary-500 mr-3 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
        <motion.a
          href={ctaLink}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className={`block text-center py-3 px-6 rounded-lg transition-colors ${
            isPopular
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : 'bg-white text-primary-600 border border-primary-600 hover:bg-primary-50'
          }`}
        >
          {ctaText}
        </motion.a>
      </div>
    </motion.div>
  );
};

export default PricingCard;