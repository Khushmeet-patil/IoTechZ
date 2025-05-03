import { motion } from 'framer-motion';
import PricingCard from './PricingCard';

const Pricing = () => {
  const plans = [
    {
      title: 'Basic',
      price: '₹29,999',
      period: 'month',
      description: 'Perfect for small businesses just getting started',
      features: [
        'Website design (5 pages)',
        'Mobile responsive',
        'Basic SEO setup',
        '1 month of support',
        'Content updates (2 per month)',
      ],
      isPopular: false,
    },
    {
      title: 'Professional',
      price: '₹59,999',
      period: 'month',
      description: 'Ideal for growing businesses with specific needs',
      features: [
        'Website design (10 pages)',
        'Mobile responsive',
        'Advanced SEO setup',
        '3 months of support',
        'Content updates (5 per month)',
        'E-commerce functionality',
        'Google Analytics integration',
      ],
      isPopular: true,
    },
    {
      title: 'Enterprise',
      price: '₹1,19,999',
      period: 'month',
      description: 'Advanced solutions for large organizations',
      features: [
        'Website design (unlimited pages)',
        'Mobile responsive',
        'Comprehensive SEO strategy',
        '12 months of support',
        'Unlimited content updates',
        'Advanced e-commerce',
        'Custom integrations',
        'Dedicated account manager',
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-gray-600 text-lg">
            Choose the perfect plan for your business needs. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-gray-600"
        >
          Need a custom solution? <a href="/contact" className="text-primary-600 font-medium hover:underline">Contact us</a> for personalized pricing.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
