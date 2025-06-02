import { Layout, PenTool, Code, TrendingUp, Cpu, Brain, Cog } from 'lucide-react';
import { motion } from 'framer-motion';
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      icon: <Code size={28} />,
      title: 'Web & App Development',
      description: 'Custom websites and mobile applications built with cutting-edge technologies to meet your business needs.',
    },
    {
      icon: <PenTool size={28} />,
      title: 'UI/UX Design',
      description: 'Intuitive and engaging user experiences that enhance customer satisfaction and drive conversions.',
    },
    {
      icon: <Cpu size={28} />,
      title: 'IoT Solutions',
      description: 'Custom IoT product development and hardware components to bring your connected device ideas to life.',
    },
    {
      icon: <Brain size={28} />,
      title: 'AI & ML Integration',
      description: 'Leverage the power of artificial intelligence and machine learning to create smarter products and services.',
    },
    {
      icon: <Cog size={28} />,
      title: 'Automation of Physical Workings',
      description: 'Streamline and automate physical processes and workflows to increase efficiency and reduce manual intervention.',
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 text-base md:text-lg">
            We offer a comprehensive suite of services to help your business succeed in the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              image={feature.image}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
