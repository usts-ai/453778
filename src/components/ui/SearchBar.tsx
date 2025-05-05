import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SearchBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValues, setSearchValues] = useState({
    keyword: '',
    location: '',
    jobType: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const jobTypes = ['Tous types', 'CDI', 'CDD', 'Stage', 'Alternance', 'Freelance'];

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-full max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              name="keyword"
              value={searchValues.keyword}
              onChange={handleChange}
              placeholder="Métier, compétence, mot-clé..."
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
            />
          </div>
        </div>

        <motion.div
          className={`flex-1 ${
            isExpanded ? 'flex flex-col md:flex-row gap-4' : 'hidden md:flex md:flex-row md:gap-4'
          }`}
        >
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              name="location"
              value={searchValues.location}
              onChange={handleChange}
              placeholder="Ville, département, région..."
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent"
            />
          </div>

          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <select
              name="jobType"
              value={searchValues.jobType}
              onChange={handleChange}
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent appearance-none bg-white"
            >
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        <motion.button
          className="bg-gradient-to-r from-[#007BFF] to-[#7B1FA2] text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center whitespace-nowrap"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Rechercher
        </motion.button>
      </div>

      <div className="md:hidden mt-2 flex justify-center">
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-[#007BFF] font-medium flex items-center"
          whileTap={{ scale: 0.95 }}
        >
          {isExpanded ? 'Moins de filtres' : 'Plus de filtres'}
          <svg
            className={`w-5 h-5 ml-1 transform transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SearchBar;
