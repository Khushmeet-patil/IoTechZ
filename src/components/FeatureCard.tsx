import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
  image?: string;
}

const FeatureCard = ({ icon, title, description, delay = 0, image }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      {image ? (
        <div className="mb-5 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      ) : null}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-primary-100 text-primary-600 mb-5"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;