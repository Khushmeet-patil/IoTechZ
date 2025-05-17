import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Vision Statement',
    role: 'Our Mission',
    image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'Our vision is to create innovative solutions that bridge the gap between software and hardware, making technology more accessible and useful for businesses of all sizes.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Technology Focus',
    role: 'Our Approach',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'We\'re building IoTechZ to help businesses leverage cutting-edge technology without the complexity. Our approach combines technical expertise with practical solutions.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Design Philosophy',
    role: 'Our Commitment',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'Great technology deserves great design. At IoTechZ, we\'re committed to creating products and services that are not just powerful, but also intuitive and enjoyable to use.',
    rating: 5,
  },
];


const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [current, autoplay]);

  const handleIndicatorClick = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600 text-lg">
            As we prepare to launch, here's what drives our company and shapes our approach to technology.
          </p>
        </motion.div>

        <div
          className="relative max-w-4xl mx-auto px-8"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="md:w-1/3">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto border-4 border-primary-100"
                  />
                </div>
                <div className="md:w-2/3 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill={i < testimonials[current].rating ? "#FFB800" : "none"}
                        stroke="#FFB800"
                        className="mr-1"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4 text-lg">"{testimonials[current].quote}"</p>
                  <h4 className="font-semibold text-lg">{testimonials[current].name}</h4>
                  <p className="text-gray-600">{testimonials[current].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`w-3 h-3 rounded-full ${
                  current === index ? "bg-primary-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;





