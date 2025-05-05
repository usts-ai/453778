import React from 'react';
import Hero from '../components/ui/Hero';
import FeatureStats from '../components/ui/FeatureStats';
import PopularJobs from '../components/ui/PopularJobs';
import Testimonials from '../components/ui/Testimonials';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeatureStats />
        <PopularJobs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
