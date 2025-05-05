import React from 'react';
import { motion } from 'framer-motion';

interface JobCardProps {
  title: string;
  company: string;
  location: string;
  type: string;
  logo: string;
  postedDate: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  company,
  location,
  type,
  logo,
  postedDate,
  isNew = false,
  isFeatured = false,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-4">
            <img
              src={logo}
              alt={`${company} logo`}
              className="w-12 h-12 object-contain rounded"
            />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
              <div className="flex space-x-2">
                {isNew && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Nouveau
                  </span>
                )}
                {isFeatured && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Mis en avant
                  </span>
                )}
              </div>
            </div>
            <p className="text-gray-600 mb-2">{company}</p>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {location}
              </div>
              <div className="flex items-center ml-4">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                {postedDate}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                {type}
              </span>
              <motion.button
                className="px-4 py-1.5 bg-gradient-to-r from-[#007BFF] to-[#7B1FA2] text-white text-sm rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Postuler
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
