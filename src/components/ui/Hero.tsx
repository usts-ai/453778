import React from 'react';
import { motion } from 'framer-motion';
import SearchBar from './SearchBar';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec effet parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E] to-[#16213E] opacity-90"></div>
        <img
          src="https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Arrière-plan"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Cercles décoratifs animés */}
      <motion.div
        className="absolute right-0 top-20 w-64 h-64 rounded-full bg-gradient-to-r from-[#007BFF] to-[#7B1FA2] opacity-20 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      ></motion.div>

      <motion.div
        className="absolute left-10 bottom-20 w-72 h-72 rounded-full bg-gradient-to-r from-[#40E0D0] to-[#007BFF] opacity-10 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      ></motion.div>

      {/* Contenu */}
      <div className="container mx-auto px-4 z-10 pt-20 pb-16">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Trouve ton <span className="text-[#40E0D0]">futur</span> avec facilité <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#007BFF] to-[#7B1FA2]">
                Emplois, Stages, Alternances
              </span>
            </h1>

            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              L'application qui simplifie ta recherche d'emploi et te connecte avec les meilleures opportunités adaptées à ton profil.
            </motion.p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.button
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#007BFF] to-[#7B1FA2] text-white font-medium text-lg shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 123, 255, 0.4)" }}
                whileTap={{ scale: 0.95 }}
              >
                Créer un compte
              </motion.button>
              <motion.button
                className="px-8 py-3 rounded-lg bg-transparent border-2 border-white text-white font-medium text-lg"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                En savoir plus
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <SearchBar />
          </motion.div>

          {/* Statistiques rapides */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {[
              { value: '10K+', label: 'Offres' },
              { value: '5K+', label: 'Entreprises' },
              { value: '50K+', label: 'Utilisateurs' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-lg py-4 px-2"
                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              >
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* App mobile illustration */}
          <motion.div
            className="mt-12 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="relative w-64 h-auto">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
                alt="Application JobFinder"
                className="rounded-2xl shadow-2xl border-4 border-white border-opacity-10"
              />
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-[#007BFF] to-[#7B1FA2] text-white text-sm py-1 px-3 rounded-full shadow-lg"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              >
                Nouveau
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
