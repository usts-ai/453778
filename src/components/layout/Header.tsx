import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      } transition-all duration-300 ease-in-out`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <span className="text-[#007BFF] font-bold text-2xl mr-2">Job</span>
          <span className="text-[#7B1FA2] font-bold text-2xl">Finder</span>
        </motion.div>

        {/* Menu pour desktop */}
        <div className="hidden md:flex space-x-6">
          {['Accueil', 'Offres', 'Entreprises', 'Conseils', 'Contact'].map((item) => (
            <motion.a
              key={item}
              href="#"
              className={`font-medium ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:text-[#40E0D0] relative`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {item}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-[#40E0D0]"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Bouton pour mobile */}
        <div className="md:hidden">
          <motion.button
            className="text-[#007BFF] focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg absolute w-full py-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4">
            {['Accueil', 'Offres', 'Entreprises', 'Conseils', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href="#"
                className="block py-2 text-gray-800 hover:text-[#007BFF] font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
