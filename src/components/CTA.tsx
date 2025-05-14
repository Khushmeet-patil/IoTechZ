import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Ready to transform your tech vision into reality?</h2>
            <p className="text-lg text-primary-100">
              From custom software to IoT hardware solutions, IoTechZ is your partner in technological innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-700 hover:bg-gray-100 px-6 py-3 rounded-full font-medium"
              >
                Get Started Today
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-full font-medium"
              >
                View Our Work
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/10 p-8 rounded-xl backdrop-blur-sm"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center space-y-2">
                <h3 className="text-4xl font-bold">100%</h3>
                <p className="text-primary-100">Commitment to Quality</p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-4xl font-bold">3+</h3>
                <p className="text-primary-100">Planned Prototypes</p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-4xl font-bold">100%</h3>
                <p className="text-primary-100">Innovation Focus</p>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-4xl font-bold">2025</h3>
                <p className="text-primary-100">Founded</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;


