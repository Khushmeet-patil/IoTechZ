import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-500 rounded-lg z-0"></div>
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Team collaboration"
              className="w-full h-auto rounded-lg shadow-xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-500 rounded-lg z-0"></div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">About IoTechZ</h2>
            <p className="text-gray-600 text-lg">
              We're dedicated to creating innovative digital and IoT solutions that transform businesses through cutting-edge technology.
            </p>
            <p className="text-gray-600">
              Founded with a vision to bridge the gap between software and hardware, IoTechZ offers comprehensive services from web and app development to custom IoT product creation and hardware distribution.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div>
                <h3 className="text-5xl font-bold text-primary-600">3+</h3>
                <p className="text-gray-600 mt-2">Planned Projects</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-primary-600">200+</h3>
                <p className="text-gray-600 mt-2">IoT Components</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-primary-600">5+</h3>
                <p className="text-gray-600 mt-2">Technologies</p>
              </div>
            </div>

            <p className="text-gray-600 mt-4">
              As a brand new startup, we're passionate about innovation and ready to take on our first clients. We bring fresh perspectives and cutting-edge expertise to every project we undertake.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary mt-6"
              onClick={() => navigate('/about')}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


