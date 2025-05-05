import React from 'react';
import { motion } from 'framer-motion';
import JobCard from './JobCard';

const jobs = [
  {
    id: 1,
    title: 'Développeur Frontend React',
    company: 'TechInnov',
    location: 'Paris',
    type: 'CDI',
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    postedDate: 'Il y a 2 jours',
    isNew: true,
    isFeatured: true,
  },
  {
    id: 2,
    title: 'UX/UI Designer',
    company: 'DigitalStudio',
    location: 'Lyon',
    type: 'CDI',
    logo: 'https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    postedDate: 'Il y a 3 jours',
    isNew: true,
  },
  {
    id: 3,
    title: 'Stage Marketing Digital',
    company: 'MediaGroup',
    location: 'Bordeaux',
    type: 'Stage',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    postedDate: 'Il y a 5 jours',
  },
  {
    id: 4,
    title: 'Data Scientist en alternance',
    company: 'DataInsight',
    location: 'Toulouse',
    type: 'Alternance',
    logo: 'https://images.unsplash.com/photo-1550505095-40e9a29f5d82?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    postedDate: 'Il y a 1 semaine',
    isFeatured: true,
  },
  {
    id: 5,
    title: 'Business Developer',
    company: 'SalesForce',
    location: 'Nantes',
    type: 'CDI',
    logo: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    postedDate: 'Il y a 2 semaines',
  },
  {
    id: 6,
    title: 'Développeur Mobile Flutter',
    company: 'AppFactory',
    location: 'Lille',
    type: 'Freelance',
    logo: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
    postedDate: 'Il y a 4 jours',
    isNew: true,
  },
];

const PopularJobs: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Offres populaires</h2>
            <p className="text-gray-600">
              Découvre les opportunités les plus recherchées du moment
            </p>
          </motion.div>

          <motion.button
            className="mt-4 md:mt-0 px-5 py-2 rounded-lg border-2 border-[#007BFF] text-[#007BFF] font-medium flex items-center"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(0, 123, 255, 0.05)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Voir toutes les offres
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.button>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              type={job.type}
              logo={job.logo}
              postedDate={job.postedDate}
              isNew={job.isNew}
              isFeatured={job.isFeatured}
            />
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300 flex items-center">
            Charger plus d'offres
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularJobs;
