import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  avatar: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Marie Laurent',
    position: 'Étudiante en Master Marketing',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    quote: "Grâce à JobFinder, j'ai trouvé mon stage de fin d'études en seulement une semaine. L'interface est intuitive et les offres sont toujours à jour !",
  },
  {
    id: 2,
    name: 'Thomas Dupont',
    position: 'Développeur Junior',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    quote: "L'application m'a permis de décrocher mon premier emploi en CDI. Les notifications personnalisées m'ont fait gagner beaucoup de temps dans ma recherche.",
  },
  {
    id: 3,
    name: 'Sophie Martin',
    position: 'Alternante en Ressources Humaines',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    quote: "JobFinder a été mon allié pour trouver mon alternance idéale. Le processus de candidature est simple et rapide, je recommande vivement !",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    if (newDirection > 0) {
      next();
    } else {
      prev();
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ce que disent nos <span className="text-[#007BFF]">utilisateurs</span>
        </motion.h2>

        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="p-6 md:p-10 bg-gradient-to-r from-[#E6F3FF] to-[#F5F0FF] rounded-xl shadow-md"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="md:w-1/4 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div
                      className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#007BFF] to-[#7B1FA2] rounded-full w-8 h-8 flex items-center justify-center text-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ delay: 0.5, duration: 0.5 }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-bold text-gray-800">{testimonials[currentIndex].name}</h3>
                    <p className="text-sm text-gray-600">{testimonials[currentIndex].position}</p>
                  </div>
                </div>

                <div className="md:w-3/4">
                  <svg
                    className="w-10 h-10 text-[#007BFF] opacity-30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <motion.p
                    className="text-lg md:text-xl text-gray-700 italic mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {testimonials[currentIndex].quote}
                  </motion.p>
                  <div className="flex justify-center md:justify-end space-x-1">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                          index === currentIndex
                            ? 'bg-gradient-to-r from-[#007BFF] to-[#7B1FA2]'
                            : 'bg-gray-300'
                        }`}
                        aria-label={`Aller au témoignage ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10">
            <motion.button
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 hover:bg-gray-50 focus:outline-none"
              onClick={() => paginate(-1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10">
            <motion.button
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-800 hover:bg-gray-50 focus:outline-none"
              onClick={() => paginate(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
